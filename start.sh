#!/bin/bash
cd "$(dirname "$0")"

echo "Installing dependencies..."
npm install || { echo "Installation failed"; exit 1; }

echo "Building..."
npm run build || { echo "Build failed"; exit 1; }

if pm2 describe shhitsashow > /dev/null 2>&1; then
  echo "Restarting..."
  pm2 restart shhitsashow
else
  echo "Starting..."
  PORT=4500 pm2 start npm --name shhitsashow -- start
fi

pm2 save
echo "Running on http://localhost:4500"
