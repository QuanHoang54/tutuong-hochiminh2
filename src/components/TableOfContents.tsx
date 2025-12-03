import { BookOpen } from 'lucide-react';

export default function TableOfContents({ slides, currentSlide, onSelectSlide }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
        <BookOpen className="text-blue-900" size={20} />
        <h3 className="text-lg font-bold text-blue-900">Mục lục</h3>
      </div>

      <nav className="space-y-1">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => onSelectSlide(index)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
              index === currentSlide
                ? 'bg-blue-900 text-white shadow-md'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === currentSlide
                    ? 'bg-yellow-400 text-blue-900'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm truncate ${
                  index === currentSlide ? 'text-white' : 'text-gray-900'
                }`}>
                  {slide.title}
                </p>
                {slide.subtitle && (
                  <p className={`text-xs mt-1 truncate ${
                    index === currentSlide ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}
