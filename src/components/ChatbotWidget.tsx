import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  source?: string;
  isError?: boolean;
}

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
      'Chúng tôi tổ chức nhiều hoạt động như:\n\n🎨 Workshop nghệ thuật\n🎭 Biểu diễn văn nghệ\n🖼️ Triển lãm văn hóa\n💬 Talkshow với nghệ sĩ\n👥 Các câu lạc bộ chuyên môn\n\nBạn quan tâm đến hoạt động nào?',
    ]
  },
  register: {
    keywords: ['đăng ký', 'tham gia', 'register', 'join', 'vào'],
    responses: [
      'Để tham gia SCF, bạn có thể:\n\n1️⃣ Đăng ký trực tuyến qua website\n2️⃣ Đến gặp trực tiếp chúng tôi\n3️⃣ Liên hệ qua email hoặc hotline\n\nMọi sinh viên đều được chào đón! 🎉',
    ]
  },
  contact: {
    keywords: ['liên hệ', 'contact', 'email', 'phone', 'số điện thoại', 'facebook'],
    responses: [
      'Liên hệ với chúng tôi:\n\n📧 Email: scf@university.edu.vn\n📱 Hotline: 0123-456-789\n📘 Facebook: fb.com/scf.official\n🏢 Địa chỉ: Trường Đại học XYZ',
    ]
  },
};

function generateReply(message: string): string {
  const lowerMessage = message.toLowerCase().trim();

  if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('chào')) {
    return knowledgeBase.greeting[Math.floor(Math.random() * knowledgeBase.greeting.length)];
  }

  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'greeting') continue;
    const categoryData = data as { keywords: string[]; responses: string[] };
    if (categoryData.keywords && categoryData.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return categoryData.responses[Math.floor(Math.random() * categoryData.responses.length)];
    }
  }

  return 'Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về:\n\n• Giới thiệu SCF\n• Các hoạt động\n• Đăng ký tham gia\n• Thông tin liên hệ';
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Xin chào! Tôi là trợ lý ảo của Mặt trận Văn hóa Sinh viên. Tôi có thể giúp gì cho bạn?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: trimmedMessage,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const reply = generateReply(trimmedMessage);

      const botMessage: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: 'bot',
        timestamp: new Date(),
        source: 'local'
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      inputRef.current?.focus();
    }, 800);
  };

  const quickActions = [
    'Giới thiệu về SCF',
    'Các hoạt động',
    'Đăng ký tham gia',
    'Thông tin liên hệ'
  ];

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Mở chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">SCF Chatbot</h3>
                <p className="text-xs text-blue-100">Online • Sẵn sàng hỗ trợ</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-1 transition-colors"
              aria-label="Đóng chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : message.isError
                      ? 'bg-red-100 text-red-800 rounded-bl-sm'
                      : 'bg-white text-slate-800 rounded-bl-sm border border-slate-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <div className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-slate-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-500 mb-2">Gợi ý câu hỏi:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className="px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200 transition-all"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 rounded-b-2xl">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Nhập tin nhắn..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 text-sm"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
