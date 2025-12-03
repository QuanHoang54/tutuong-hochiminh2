import { BookOpen, Home, ListChecks, BookText } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Header({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'slides', label: 'Trình chiếu', icon: BookOpen },
    { id: 'quiz', label: 'Kiểm tra', icon: ListChecks },
    { id: 'references', label: 'Tài liệu', icon: BookText }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-lg font-bold text-red-800">Mặt trận Văn hóa</h1>
              <p className="text-xs text-gray-600">Tư tưởng Hồ Chí Minh</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-red-700 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
