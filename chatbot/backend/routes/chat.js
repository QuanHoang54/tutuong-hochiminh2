/**
 * Chat Routes - Xử lý các request liên quan đến chat
 */

const express = require('express');
const router = express.Router();
const aiService = require('../services/ai');
const fallbackService = require('../services/fallback');

/**
 * POST /api/chat
 * Xử lý tin nhắn từ người dùng và trả về phản hồi
 *
 * Body:
 *   - message: string (bắt buộc) - Tin nhắn từ người dùng
 *   - sessionId: string (optional) - ID phiên chat
 *
 * Response:
 *   - reply: string - Phản hồi từ chatbot
 *   - source: string - Nguồn phản hồi ('ai' hoặc 'fallback')
 *   - sessionId: string - ID phiên chat
 */
router.post('/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    // Validate input
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Tin nhắn không được để trống'
      });
    }

    const trimmedMessage = message.trim();
    const session = sessionId || `session-${Date.now()}`;

    console.log(`[CHAT] Session: ${session}, Message: ${trimmedMessage.substring(0, 50)}...`);

    let reply;
    let source;

    // Thử dùng AI service nếu có API key
    if (process.env.AI_API_KEY) {
      try {
        reply = await aiService.generateReply(trimmedMessage, session);
        source = 'ai';
        console.log(`[AI] Đã tạo phản hồi từ AI`);
      } catch (error) {
        console.warn(`[AI] Lỗi khi gọi AI API, fallback về rule-based:`, error.message);
        reply = fallbackService.generateReply(trimmedMessage);
        source = 'fallback';
      }
    } else {
      // Dùng fallback nếu không có AI API key
      reply = fallbackService.generateReply(trimmedMessage);
      source = 'fallback';
      console.log(`[FALLBACK] Đã tạo phản hồi từ rule-based`);
    }

    // Trả về response
    res.json({
      reply,
      source,
      sessionId: session,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('[ERROR] Chat route:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Đã xảy ra lỗi khi xử lý tin nhắn',
      reply: 'Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau.'
    });
  }
});

/**
 * GET /api/chat/topics
 * Trả về danh sách các chủ đề có thể hỏi
 */
router.get('/chat/topics', (req, res) => {
  const topics = fallbackService.getAvailableTopics();
  res.json({
    topics,
    message: 'Danh sách các chủ đề bạn có thể hỏi'
  });
});

module.exports = router;
