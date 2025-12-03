#!/bin/bash

# Script tự động tạo folder chatbot
# Usage: bash create-chatbot.sh

echo "🤖 Tạo folder chatbot..."

# Create directory structure
mkdir -p chatbot/backend/{routes,services}
mkdir -p chatbot/frontend
mkdir -p chatbot/.github/workflows

echo "📁 Tạo cấu trúc thư mục... ✓"

# Backend files
cat > chatbot/backend/package.json << 'EOF'
{
  "name": "scf-chatbot-backend",
  "version": "1.0.0",
  "description": "Backend API cho Chatbot Mặt trận Văn hóa",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest --coverage",
    "lint": "eslint ."
  },
  "keywords": ["chatbot", "ai", "express", "student-cultural-front"],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "axios": "^1.6.2",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2",
    "jest": "^29.7.0",
    "supertest": "^6.3.3",
    "eslint": "^8.55.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOF

echo "📦 package.json... ✓"

cat > chatbot/backend/.env.example << 'EOF'
# Server Configuration
PORT=3000

# AI API Configuration
# Nếu không cấu hình, chatbot sẽ dùng rule-based fallback
AI_API_KEY=your-api-key-here
AI_API_URL=https://api.openai.com/v1/chat/completions
AI_MODEL=gpt-3.5-turbo
AI_MAX_TOKENS=300
AI_TEMPERATURE=0.7

# Logging
LOG_LEVEL=info
EOF

echo "🔐 .env.example... ✓"

cat > chatbot/backend/.dockerignore << 'EOF'
node_modules
npm-debug.log
.env
.git
.gitignore
README*.md
coverage
.vscode
.idea
*.log
EOF

echo "🐳 .dockerignore... ✓"

echo "✅ Đã tạo xong cấu trúc cơ bản!"
echo ""
echo "📋 Tiếp theo, hãy:"
echo "1. cd chatbot/backend"
echo "2. Tạo các file còn lại theo hướng dẫn"
echo "3. npm install"
echo "4. npm start"
echo ""
echo "📖 Xem đầy đủ trong SUMMARY_VI.md"
EOF

chmod +x create-chatbot.sh
