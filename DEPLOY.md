# DEPLOY.md — Typing Score Test Deployment Guide

## Overview

**Live site:** https://typingscoretest.com
**GitHub repo:** https://github.com/purvenconsulting-pixel/Typing-Score-Test
**Stack:** Next.js static export (HTML/JS/CSS) — no server-side PHP
**Deploy pattern:** Push to GitHub → rsync to Hostinger Horizon

---

## Server Details

| Field | Value |
|---|---|
| Host | `88.223.84.52` |
| SSH Port | `65002` (not default 22) |
| Username | `u355101981` |
| Webroot | `~/domains/typingscoretest.com/public_html/` |

### SSH into the server

```bash
ssh -p 65002 u355101981@88.223.84.52
```

---

## Deploy: Push Changes Live

After committing and pushing to GitHub, run this rsync command to deploy to the server:

```bash
rsync -avz --delete \
  -e "ssh -p 65002 -o StrictHostKeyChecking=no" \
  ./ \
  u355101981@88.223.84.52:~/domains/typingscoretest.com/public_html/ \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='DEPLOY.md' \
  --exclude='*.log' \
  --exclude='public_html/'
```

> ⚠️ The `--delete` flag removes files on the server that no longer exist locally. This keeps the server in sync with the repo. Be intentional before running.

### One-liner deploy (from repo root)

```bash
git push origin main && rsync -avz --delete -e "ssh -p 65002 -o StrictHostKeyChecking=no" ./ u355101981@88.223.84.52:~/domains/typingscoretest.com/public_html/ --exclude='.git' --exclude='.gitignore' --exclude='DEPLOY.md' --exclude='*.log' --exclude='public_html/'
```

---

## Standard Workflow

```
Edit files locally
    ↓
git add . && git commit -m "your message"
    ↓
git push origin main          ← GitHub stays as source of truth
    ↓
rsync (command above)         ← push to live server
    ↓
Verify at https://typingscoretest.com
```

---

## Site Structure

This is a **Next.js static export** — all pages are pre-rendered HTML files served directly by Hostinger. There is no Node.js runtime on the server.

```
/                          → index.html (homepage + typing test)
/about/                    → about/index.html
/typing-speed-test/        → typing-speed-test/index.html
/typing-accuracy-test/     → typing-accuracy-test/index.html
/wpm-test/                 → wpm-test/index.html
/touch-typing-guide/       → touch-typing-guide/index.html
/improve-typing-speed/     → improve-typing-speed/index.html
/typing-practice-tips/     → typing-practice-tips/index.html
/privacy-policy/           → privacy-policy/index.html
/terms-of-service/         → terms-of-service/index.html
/_next/static/             → JS/CSS bundles (do not edit manually)
```

> The `_next/` directory contains compiled Next.js chunks. These are re-generated each build. If you rebuild the Next.js source, replace the entire `_next/` folder.

---

## Gitignored Files

The following are excluded from the repo:

```
api/config.php     ← secrets (if an API is ever added)
*.log              ← server-side debug logs
rate_limits.json   ← runtime rate limit state
public_html/       ← empty nested folder artifact on server, not needed
```

---

## Quick Diagnostic

If the site goes down or looks wrong after a deploy:

1. **Check the live files exist:**
   ```bash
   ssh -p 65002 u355101981@88.223.84.52 "ls ~/domains/typingscoretest.com/public_html/"
   ```

2. **Curl the homepage:**
   ```bash
   curl -sI https://typingscoretest.com | head -5
   ```

3. **Check for accidental --delete wipe:**
   If you ran rsync from the wrong directory, files may have been deleted. Restore from GitHub:
   ```bash
   git clone git@github.com:purvenconsulting-pixel/Typing-Score-Test.git /tmp/tst-restore
   rsync -avz -e "ssh -p 65002" /tmp/tst-restore/ u355101981@88.223.84.52:~/domains/typingscoretest.com/public_html/ --exclude='.git'
   ```

---

*Last updated: 2026-06-11 — Clyde (AI PM)*
