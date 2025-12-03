import { ArrowRight, Target, Users, Shield } from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #0ea5e9 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://imgs.search.brave.com/7w0L_q68O7Osg9NNmerDfqhCIp0JsZe7uaNStKEZV7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHbXZU/Qk9CUWMvMi8wLzE2/MDB3L2NhbnZhLWIl/QzMlQTBpLSVDNCU5/MSVDNCU4M25nLWlu/c3RhZ3JhbS1rJUUx/JUJCJUI3LW5pJUUx/JUJCJTg3bS1uZyVD/MyVBMHktc2luaC1j/aCVFMSVCQiVBNy10/JUUxJUJCJThCY2gt/biVDNiVCMCVFMSVC/QiU5QmMtaCVFMSVC/QiU5My1jaCVDMyVB/RC1taW5oLWMlRTEl/QkIlOTUtJUM0JTkx/aSVFMSVCQiU4M24t/biVDMyVBMnUtJUM0/JTkxJUUxJUJCJThG/LXk3N3dxU3lLbG1v/LmpwZw"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-block bg-yellow-400/20 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-300/30">
            <span className="text-yellow-300 font-medium">Chương 6 - Tư Tưởng Hồ Chí Minh Về Văn Hóa, Đạo Đức, Con Người</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sinh Viên Trên<br />
            <span className="text-yellow-300">"Mặt Trận Văn Hóa"</span>
          </h1>

          <p className="text-2xl md:text-3xl mb-4 text-blue-100 font-light">
            Cuộc Chiến Chống "Giặc Nội Xâm"
          </p>

          <p className="text-lg md:text-xl mb-12 text-blue-200 italic">
            Theo Tư Tưởng Hồ Chí Minh
          </p>

          <button
            onClick={() => onNavigate('slides')}
            className="group bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
          >
            Bắt đầu trình chiếu
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            Nội dung chính
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Giặc nội xâm</h3>
              <p className="text-gray-600 leading-relaxed">
                Nhận diện 4 nhóm "giặc nội xâm" nguy hiểm: Tham ô - lãng phí, Lười biếng - quan liêu,
                Phù hoa - xa xỉ, Tâm lý nô lệ.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Kẻ thù vô hình</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phò chính trừ tà</h3>
              <p className="text-gray-600 leading-relaxed">
                Vũ khí chiến đấu: Chống lại cái xấu, xây dựng cái tốt.
                Rèn luyện phẩm chất Cần - Kiệm - Liêm - Chính.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Đạo đức làm nền</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sinh viên thời đại số</h3>
              <p className="text-gray-600 leading-relaxed">
                Vận dụng thực tiễn: Professionalism, Bản lĩnh mạng xã hội,
                Giữ bản sắc trong hội nhập.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Hành động cụ thể</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://imgs.search.brave.com/WGgkKyyL6BC5cj2j3Tfu7UEK8tCb6897xD8G148A5uY/rs:fit:860:0:0:0/g:ce/aHR0cDovL2hvYW5n/aGFtb2JpbGUuY29t/L3Rpbi10dWMvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDcv/YW5oLWJhYy1oby0x/OS5qcGc"
              alt="Hồ Chí Minh"
              className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-300 shadow-2xl object-cover"
            />
          </div>

          <blockquote className="text-3xl md:text-4xl font-bold mb-6 italic leading-relaxed">
            "Văn hóa nghệ thuật cũng là một mặt trận.<br />
            Anh chị em là chiến sĩ trên mặt trận ấy."
          </blockquote>

          <p className="text-xl text-blue-200">
            Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Khám phá toàn bộ nội dung bài trình chiếu về tư tưởng Hồ Chí Minh
            trong cuộc chiến chống giặc nội xâm
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('slides')}
              className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Xem Trình Chiếu
            </button>

            <button
              onClick={() => onNavigate('quiz')}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
            >
              Làm Bài Kiểm Tra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
