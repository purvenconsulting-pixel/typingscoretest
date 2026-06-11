#!/usr/bin/env bash
# deploy.sh — Push static export to typingscoretest.com
# Usage: ./deploy.sh "optional commit message"
# Run from repo root. Only syncs static export files — source files excluded.

set -e

REMOTE_HOST="88.223.84.52"
REMOTE_PORT="65002"
REMOTE_USER="u355101981"
REMOTE_PATH="~/domains/typingscoretest.com/public_html/"
SSH_KEY="$HOME/.ssh/id_ed25519"

MSG="${1:-deploy: update $(date '+%Y-%m-%d %H:%M UTC')}"

echo "🚀 Deploying to typingscoretest.com..."

# Git commit + push if there are changes
if [ -n "$(git status --porcelain)" ]; then
  echo "📦 Committing: $MSG"
  git add -A
  git commit -m "$MSG"
  GIT_SSH_COMMAND="ssh -i $SSH_KEY -o StrictHostKeyChecking=no" git push origin main
  echo "✅ GitHub updated"
else
  echo "ℹ️  No local changes — only deploying to server"
fi

# rsync static files only — exclude all source/dev artifacts
echo "📡 Syncing static files to server..."
rsync -avz --delete \
  -e "ssh -i $SSH_KEY -p $REMOTE_PORT -o StrictHostKeyChecking=no" \
  ./ \
  ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='.eslintrc.json' \
  --exclude='.abacus.donotdelete' \
  --exclude='deploy.sh' \
  --exclude='DEPLOY.md' \
  --exclude='README.md' \
  --exclude='ASSESSMENT.*' \
  --exclude='package.json' \
  --exclude='package-lock.json' \
  --exclude='next.config.*' \
  --exclude='tailwind.config.*' \
  --exclude='tsconfig.json' \
  --exclude='postcss.config.*' \
  --exclude='src/' \
  --exclude='public/' \
  --exclude='dist/' \
  --exclude='node_modules/' \
  --exclude='*.log' \
  --exclude='rate_limits.json' \
  --exclude='public_html/'

echo ""
echo "✅ Deploy complete! → https://typingscoretest.com"
