#!/bin/bash

echo "🚀 Starting SCF Chatbot Backend..."
echo ""

# Check if node_modules exists
if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing dependencies..."
    cd server
    npm install
    cd ..
    echo "✅ Dependencies installed!"
    echo ""
fi

# Start the backend server
echo "🤖 Starting backend server on port 3000..."
cd server
node chatbot.js
