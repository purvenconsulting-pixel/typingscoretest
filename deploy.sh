#!/usr/bin/env bash
# deploy.sh — Push local changes to typingscoretest.com
# Usage: ./deploy.sh "commit message"
# Or just: ./deploy.sh  (skips git commit, just rsyncs)

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
  echo "ℹ️  No local changes — skipping git commit"
  GIT_SSH_COMMAND="ssh -i $SSH_KEY -o StrictHostKeyChecking=no" git push origin main 2>/dev/null || true
fi

# rsync to server
echo "📡 Syncing to server..."
rsync -avz --delete \
  -e "ssh -i $SSH_KEY -p $REMOTE_PORT -o StrictHostKeyChecking=no" \
  ./ \
  ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='deploy.sh' \
  --exclude='DEPLOY.md' \
  --exclude='*.log' \
  --exclude='node_modules' \
  --exclude='public_html/'

echo ""
echo "✅ Deploy complete! → https://typingscoretest.com"
