#!/bin/bash

echo "╔════════════════════════════════════════╗"
echo "║   🤖 SCF CHATBOT INSTALLATION         ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Step 1: Install backend dependencies
echo "📦 [1/3] Installing backend dependencies..."
cd server
npm install --silent
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed!"
else
    echo "❌ Error installing backend dependencies"
    exit 1
fi
echo ""

# Step 2: Start backend server
echo "🚀 [2/3] Starting backend server..."
echo ""
echo "╔════════════════════════════════════════╗"
echo "║  Backend server is now running!        ║"
echo "║  📍 URL: http://localhost:3000         ║"
echo "║  🔧 Health: http://localhost:3000/health"
echo "║                                        ║"
echo "║  ⚠️  DO NOT CLOSE THIS TERMINAL!      ║"
echo "║  Press Ctrl+C to stop the server       ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "🌐 [3/3] Your website chatbot is ready!"
echo "👉 Open your website and look for the chat icon in the bottom-right corner"
echo ""

# Start the server
node chatbot.js
