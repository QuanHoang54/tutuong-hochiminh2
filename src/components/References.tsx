import { BookOpen, FileText, Quote } from 'lucide-react';

export default function References() {
  const references = [
    {
      title: 'Hồ Chí Minh toàn tập',
      description: 'Tập 5, 10, 12 - Nhà xuất bản Chính trị quốc gia, Hà Nội',
      type: 'book'
    },
    {
      title: 'Tư tưởng Hồ Chí Minh về văn hóa',
      description: 'Viện nghiên cứu tư tưởng Hồ Chí Minh - Học viện Chính trị quốc gia Hồ Chí Minh',
      type: 'research'
    },
    {
      title: 'Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII của Đảng',
      description: 'Văn kiện về xây dựng và phát triển văn hóa, con người Việt Nam',
      type: 'document'
    },
    {
      title: 'Giáo trình Tư tưởng Hồ Chí Minh',
      description: 'Dành cho sinh viên các trường đại học - Nhà xuất bản Chính trị quốc gia',
      type: 'book'
    }
  ];

  const quotes = [
    {
      text: 'Văn hoá soi đường cho quốc dân đi.',
      author: 'Hồ Chí Minh'
    },
    {
      text: 'Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến sĩ trên mặt trận ấy.',
      author: 'Hồ Chí Minh'
    },
    {
      text: 'Muốn diệt cái xấu phải xây cái tốt.',
      author: 'Hồ Chí Minh'
    },
    {
      text: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.',
      author: 'Hồ Chí Minh'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Tài liệu tham khảo
          </h1>
          <p className="text-xl text-gray-600">
            Nguồn tư liệu và trích dẫn sử dụng trong bài trình chiếu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="text-blue-900" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tài liệu chính</h2>
              </div>

              <div className="space-y-6">
                {references.map((ref, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded-r-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {ref.type === 'book' ? (
                          <BookOpen className="text-blue-700" size={20} />
                        ) : ref.type === 'research' ? (
                          <FileText className="text-blue-700" size={20} />
                        ) : (
                          <FileText className="text-blue-700" size={20} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {ref.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {ref.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kết luận</h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Bài thuyết trình đã làm rõ tầm quan trọng của "mặt trận văn hóa" trong tư tưởng
                  Hồ Chí Minh và vai trò của sinh viên trong cuộc chiến chống "giặc nội xâm" thời đại mới.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="font-semibold text-blue-900 mb-3">Những điểm chính:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Văn hóa là nền tảng tinh thần của dân tộc</li>
                    <li>• Giặc nội xâm là thách thức hiện thực với mỗi sinh viên</li>
                    <li>• "Phò chính trừ tà" là phương châm hành động</li>
                    <li>• Cần - Kiệm - Liêm - Chính là phẩm chất cần rèn luyện</li>
                    <li>• Mỗi sinh viên là chiến sĩ trên mặt trận văn hóa</li>
                  </ul>
                </div>

                <p className="font-semibold text-lg text-blue-900">
                  Chiến thắng bản thân chính là chiến thắng vĩ đại nhất!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-lg p-8 text-white sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Quote className="text-blue-900" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Trích dẫn</h2>
              </div>

              <div className="space-y-6">
                {quotes.map((quote, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg italic mb-3 leading-relaxed">
                      "{quote.text}"
                    </p>
                    <p className="text-sm text-yellow-300 font-medium">
                      - {quote.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <img
            src="https://imgs.search.brave.com/NBAWz3DkNOguqQ9Th3SJ3Mgzve-EvE3v-avFO0iFUg4/rs:fit:860:0:0:0/g:ce/aHR0cDovL2hvYW5n/aGFtb2JpbGUuY29t/L3Rpbi10dWMvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDcv/YW5oLWJhYy1oby0y/LmpwZw"
            alt="Hồ Chí Minh"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-400 shadow-xl object-cover"
          />
          <blockquote className="text-2xl md:text-3xl font-bold text-blue-900 italic mb-4 leading-relaxed">
            "Văn hoá soi đường cho quốc dân đi"
          </blockquote>
          <p className="text-xl text-gray-600">
            Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </div>
    </div>
  );
}
