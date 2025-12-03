/**
 * Fallback Service
 * Rule-based chatbot khi không có AI API hoặc AI API lỗi
 */

// Knowledge base về Mặt trận Văn hóa
const knowledgeBase = {
  greeting: [
    'Xin chào! Tôi là trợ lý ảo của Mặt trận Văn hóa Sinh viên. Tôi có thể giúp gì cho bạn?',
    'Chào bạn! Mình có thể hỗ trợ bạn về các hoạt động văn hóa sinh viên. Bạn muốn biết thông tin gì?',
    'Hello! Rất vui được hỗ trợ bạn. Bạn cần tìm hiểu về hoạt động nào của Mặt trận?'
  ],

  introduction: {
    keywords: ['giới thiệu', 'là gì', 'mặt trận', 'scf', 'student cultural front'],
    responses: [
      'Mặt trận Văn hóa Sinh viên (Student Cultural Front - SCF) là nơi kết nối các hoạt động văn hóa, nghệ thuật của sinh viên. Chúng tôi tổ chức các sự kiện, workshop, và tạo sân chơi cho các bạn yêu thích văn hóa.',
      'SCF là tổ chức văn hóa sinh viên với sứ mệnh phát triển và lan tỏa các giá trị văn hóa trong cộng đồng sinh viên thông qua các hoạt động sáng tạo và ý nghĩa.'
    ]
  },

  activities: {
    keywords: ['hoạt động', 'sự kiện', 'chương trình', 'event'],
    responses: [
      'Chúng tôi tổ chức nhiều hoạt động như: Workshop nghệ thuật, Biểu diễn văn nghệ, Triển lãm văn hóa, Talkshow với nghệ sĩ, và các câu lạc bộ chuyên môn. Bạn quan tâm đến hoạt động nào?',
      'Các sự kiện của SCF bao gồm: Festival văn hóa mỗi học kỳ, các buổi workshop hàng tháng, và hoạt động của 15+ câu lạc bộ văn hóa - nghệ thuật.'
    ]
  },

  register: {
    keywords: ['đăng ký', 'tham gia', 'register', 'join', 'thành viên'],
    responses: [
      'Để tham gia SCF, bạn có thể đăng ký trực tuyến qua website hoặc đến gặp trực tiếp chúng tôi tại Phòng D101. Mọi sinh viên đều được chào đón!',
      'Bạn có thể đăng ký tham gia các hoạt động của SCF ngay trên website. Với thành viên chính thức, bạn sẽ được ưu tiên tham gia các workshop và sự kiện đặc biệt.'
    ]
  },

  contact: {
    keywords: ['liên hệ', 'contact', 'email', 'phone', 'địa chỉ', 'fanpage'],
    responses: [
      'Liên hệ với chúng tôi:\n📧 Email: scf@university.edu.vn\n📱 Hotline: 0123-456-789\n📍 Văn phòng: Phòng D101, Nhà Văn hóa Sinh viên\n📘 Facebook: fb.com/scf.official',
      'Bạn có thể liên hệ SCF qua:\n- Email: scf@university.edu.vn\n- Facebook Fanpage: Student Cultural Front\n- Hoặc ghé thăm chúng tôi tại Phòng D101 (8h-17h các ngày trong tuần)'
    ]
  },

  clubs: {
    keywords: ['câu lạc bộ', 'clb', 'club', 'nhóm'],
    responses: [
      'SCF có 15+ câu lạc bộ như: CLB Nhiếp ảnh, CLB Guitar, CLB Nhảy hiện đại, CLB Vẽ, CLB Âm nhạc truyền thống, v.v. Bạn muốn tìm hiểu về CLB nào?',
      'Các câu lạc bộ của chúng tôi hoạt động trong nhiều lĩnh vực: Âm nhạc, Hội họa, Nhiếp ảnh, Múa, Sân khấu, Văn học, và nhiều hơn nữa. Mỗi CLB đều có lịch hoạt động riêng.'
    ]
  },

  schedule: {
    keywords: ['lịch', 'thời gian', 'khi nào', 'schedule', 'time'],
    responses: [
      'Lịch hoạt động được cập nhật hàng tuần trên website và fanpage của SCF. Các sự kiện lớn thường được thông báo trước 2-3 tuần.',
      'Bạn có thể xem lịch chi tiết các hoạt động sắp tới trên website hoặc theo dõi fanpage để nhận thông báo ngay khi có sự kiện mới.'
    ]
  },

  thanks: {
    keywords: ['cảm ơn', 'thanks', 'thank you', 'cám ơn'],
    responses: [
      'Không có gì! Rất vui được giúp đỡ bạn. Chúc bạn có những trải nghiệm tuyệt vời với SCF! 😊',
      'Không có chi! Nếu có thắc mắc gì thêm, đừng ngại hỏi nhé!'
    ]
  },

  goodbye: {
    keywords: ['bye', 'tạm biệt', 'goodbye', 'see you'],
    responses: [
      'Tạm biệt! Hẹn gặp lại bạn. Chúc bạn một ngày tốt lành! 👋',
      'Bye bye! Hy vọng sớm gặp bạn tại các sự kiện của SCF!'
    ]
  }
};

/**
 * Tạo phản hồi dựa trên rules
 * @param {string} message - Tin nhắn từ người dùng
 * @returns {string} Phản hồi
 */
function generateReply(message) {
  const lowerMessage = message.toLowerCase().trim();

  // Kiểm tra lời chào
  if (isGreeting(lowerMessage)) {
    return getRandomResponse(knowledgeBase.greeting);
  }

  // Kiểm tra từng category
  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'greeting') continue;

    if (data.keywords && containsKeyword(lowerMessage, data.keywords)) {
      return getRandomResponse(data.responses);
    }
  }

  // Default response khi không match
  return getDefaultResponse();
}

/**
 * Kiểm tra xem có phải lời chào không
 */
function isGreeting(message) {
  const greetings = ['hi', 'hello', 'chào', 'xin chào', 'hey', 'alo'];
  return greetings.some(g => message.includes(g));
}

/**
 * Kiểm tra message có chứa keyword không
 */
function containsKeyword(message, keywords) {
  return keywords.some(keyword => message.includes(keyword.toLowerCase()));
}

/**
 * Lấy ngẫu nhiên một response từ mảng
 */
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

/**
 * Response mặc định khi không tìm thấy match
 */
function getDefaultResponse() {
  const defaults = [
    'Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về: giới thiệu SCF, hoạt động, đăng ký tham gia, câu lạc bộ, lịch sự kiện, hoặc thông tin liên hệ.',
    'Mình chưa nắm rõ câu hỏi này lắm. Bạn có thể hỏi về các chủ đề như: hoạt động của Mặt trận, cách đăng ký, thông tin câu lạc bộ, hoặc liên hệ với chúng tôi nhé!',
    'Hmm, tôi cần thêm thông tin để trả lời chính xác. Bạn muốn biết về hoạt động gì của SCF? (Ví dụ: sự kiện, câu lạc bộ, đăng ký thành viên...)'
  ];
  return getRandomResponse(defaults);
}

/**
 * Lấy danh sách các chủ đề có thể hỏi
 */
function getAvailableTopics() {
  return [
    { id: 'introduction', title: 'Giới thiệu về SCF', example: 'Mặt trận văn hóa là gì?' },
    { id: 'activities', title: 'Các hoạt động và sự kiện', example: 'Có những hoạt động gì?' },
    { id: 'register', title: 'Đăng ký tham gia', example: 'Làm sao để tham gia?' },
    { id: 'clubs', title: 'Các câu lạc bộ', example: 'Có những CLB nào?' },
    { id: 'schedule', title: 'Lịch hoạt động', example: 'Lịch sự kiện tháng này?' },
    { id: 'contact', title: 'Thông tin liên hệ', example: 'Liên hệ như thế nào?' }
  ];
}

module.exports = {
  generateReply,
  getAvailableTopics
};
