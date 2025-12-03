const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Knowledge base về Mặt trận Văn hóa
const knowledgeBase = {
  greeting: [
    'Xin chào! Tôi là trợ lý ảo của Mặt trận Văn hóa Sinh viên. Tôi có thể giúp gì cho bạn?',
    'Chào bạn! Mình có thể hỗ trợ bạn về các hoạt động văn hóa sinh viên. Bạn muốn biết thông tin gì?',
  ],
  introduction: {
    keywords: ['giới thiệu', 'là gì', 'mặt trận', 'scf'],
    responses: [
      'Mặt trận Văn hóa Sinh viên (Student Cultural Front - SCF) là nơi kết nối các hoạt động văn hóa, nghệ thuật của sinh viên. Chúng tôi tổ chức các sự kiện, workshop, và tạo sân chơi cho các bạn yêu thích văn hóa.',
    ]
  },
  activities: {
    keywords: ['hoạt động', 'sự kiện', 'chương trình', 'event'],
    responses: [
      'Chúng tôi tổ chức nhiều hoạt động như: Workshop nghệ thuật, Biểu diễn văn nghệ, Triển lãm văn hóa, Talkshow với nghệ sĩ, và các câu lạc bộ chuyên môn. Bạn quan tâm đến hoạt động nào?',
    ]
  },
  register: {
    keywords: ['đăng ký', 'tham gia', 'register', 'join'],
    responses: [
      'Để tham gia SCF, bạn có thể đăng ký trực tuyến qua website hoặc đến gặp trực tiếp chúng tôi. Mọi sinh viên đều được chào đón!',
    ]
  },
  contact: {
    keywords: ['liên hệ', 'contact', 'email', 'phone'],
    responses: [
      'Liên hệ với chúng tôi:\n📧 Email: scf@university.edu.vn\n📱 Hotline: 0123-456-789\n📘 Facebook: fb.com/scf.official',
    ]
  },
};

function generateReply(message) {
  const lowerMessage = message.toLowerCase().trim();

  if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('chào')) {
    return knowledgeBase.greeting[Math.floor(Math.random() * knowledgeBase.greeting.length)];
  }

  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'greeting') continue;
    if (data.keywords && data.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return data.responses[Math.floor(Math.random() * data.responses.length)];
    }
  }

  return 'Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về: giới thiệu SCF, hoạt động, đăng ký tham gia, hoặc thông tin liên hệ.';
}

app.post('/api/chat', (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const reply = generateReply(message);

  res.json({
    reply,
    source: 'fallback',
    sessionId: sessionId || `session-${Date.now()}`,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🤖 Chatbot Backend đang chạy tại http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
