/**
 * SCF Chatbot Backend - Main Entry Point
 * Express server cung cấp REST API cho chatbot mặt trận văn hóa
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    aiEnabled: !!process.env.AI_API_KEY
  });
});

// API routes
app.use('/api', chatRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'Endpoint không tồn tại'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    message: 'Đã xảy ra lỗi khi xử lý yêu cầu'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🤖 SCF Chatbot Backend đang chạy tại http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔑 AI API ${process.env.AI_API_KEY ? 'được kích hoạt' : 'không được cấu hình (dùng fallback)'}`);
  console.log(`\nNhấn Ctrl+C để dừng server.\n`);
});

module.exports = app;
