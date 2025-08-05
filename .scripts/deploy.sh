#!/bin/bash
set -e

echo "🚀 Deployment started..."

cd /var/www/t-rack/t-rack-landing-v2

# Use your SSH key to pull from Git
echo "🔄 Pulling latest changes from Git..."
GIT_SSH_COMMAND="ssh -i ~/.ssh/t-rack-landing" git fetch origin production
GIT_SSH_COMMAND="ssh -i ~/.ssh/t-rack-landing" git reset --hard origin/production

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️  Building project..."
npm run build

# Restart the app using PM2
echo "♻️ Restarting app with PM2..."
pm2 restart t-rack-landing-v2 || pm2 start npm --name t-rack-landing-v2 -- start -- --port 8092

echo "✅ Deployment finished successfully!"
