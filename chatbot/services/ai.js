/**
 * AI Service
 * Tích hợp với AI API (OpenAI, Anthropic, hoặc local models)
 */

const axios = require('axios');

// System prompt cho chatbot về Mặt trận Văn hóa
const SYSTEM_PROMPT = `Bạn là trợ lý ảo thông minh của Mặt trận Văn hóa Sinh viên (Student Cultural Front).

NHIỆM VỤ:
- Cung cấp thông tin về các hoạt động văn hóa, nghệ thuật sinh viên
- Hướng dẫn sinh viên tham gia các chương trình, sự kiện
- Giải đáp thắc mắc về đăng ký, lịch trình, điều kiện tham gia
- Hỗ trợ thông tin về các câu lạc bộ văn hóa

PHONG CÁCH:
- Thân thiện, nhiệt tình, gần gũi
- Dùng ngôn ngữ Tiếng Việt tự nhiên
- Trả lời ngắn gọn, dễ hiểu (2-4 câu)
- Luôn lịch sự và chuyên nghiệp

GIỚI HẠN:
- Chỉ trả lời về các chủ đề liên quan đến hoạt động sinh viên, văn hóa, nghệ thuật
- Không trả lời các câu hỏi về chính trị, tôn giáo nhạy cảm
- Nếu không biết câu trả lời, hãy thành thật và hướng dẫn liên hệ trực tiếp

Hãy trả lời câu hỏi sau:`;

// Session storage (trong production nên dùng Redis)
const sessions = new Map();

/**
 * Tạo phản hồi từ AI API
 * @param {string} message - Tin nhắn từ người dùng
 * @param {string} sessionId - ID phiên chat
 * @returns {Promise<string>} Phản hồi từ AI
 */
async function generateReply(message, sessionId) {
  // Kiểm tra API key
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    throw new Error('AI_API_KEY không được cấu hình');
  }

  // Lấy lịch sử chat của session
  let history = sessions.get(sessionId) || [];

  // Giới hạn lịch sử (chỉ giữ 5 tin nhắn gần nhất để tiết kiệm tokens)
  if (history.length > 10) {
    history = history.slice(-10);
  }

  // Chuẩn bị messages cho API
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history,
    { role: 'user', content: message }
  ];

  try {
    // Gọi AI API
    const response = await axios.post(
      process.env.AI_API_URL || 'https://api.openai.com/v1/chat/completions',
      {
        model: process.env.AI_MODEL || 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: parseInt(process.env.AI_MAX_TOKENS) || 300,
        temperature: parseFloat(process.env.AI_TEMPERATURE) || 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 seconds
      }
    );

    const reply = response.data.choices[0].message.content.trim();

    // Lưu lịch sử chat
    history.push(
      { role: 'user', content: message },
      { role: 'assistant', content: reply }
    );
    sessions.set(sessionId, history);

    return reply;

  } catch (error) {
    console.error('[AI Service Error]', error.response?.data || error.message);

    // Xử lý các lỗi cụ thể
    if (error.response?.status === 401) {
      throw new Error('AI API key không hợp lệ');
    } else if (error.response?.status === 429) {
      throw new Error('Đã vượt quá giới hạn API rate limit');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('AI API timeout');
    } else {
      throw new Error('Lỗi khi gọi AI API: ' + error.message);
    }
  }
}

/**
 * Xóa lịch sử chat của một session
 * @param {string} sessionId
 */
function clearSession(sessionId) {
  sessions.delete(sessionId);
}

/**
 * Lấy số lượng sessions đang active
 * @returns {number}
 */
function getActiveSessionsCount() {
  return sessions.size;
}

module.exports = {
  generateReply,
  clearSession,
  getActiveSessionsCount
};
