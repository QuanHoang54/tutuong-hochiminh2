@echo off
echo 🚀 Starting SCF Chatbot Backend...
echo.

REM Check if node_modules exists
if not exist "server\node_modules" (
    echo 📦 Installing dependencies...
    cd server
    call npm install
    cd ..
    echo ✅ Dependencies installed!
    echo.
)

REM Start the backend server
echo 🤖 Starting backend server on port 3000...
cd server
node chatbot.js
