import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, List } from 'lucide-react';
import { slides } from '../data/slides';
import Slide from './Slide';
import TableOfContents from './TableOfContents';
import SearchBar from './SearchBar';

export default function SlideViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showToc, setShowToc] = useState(true);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape' && isFullscreen) toggleFullscreen();
  };

  return (
    <div
      className="min-h-screen bg-gray-50 pt-24 pb-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <SearchBar slides={slides} onSelectSlide={goToSlide} />
        </div>

        <div className="flex gap-6">
          {showToc && (
            <div className="hidden lg:block w-80 flex-shrink-0">
              <TableOfContents
                slides={slides}
                currentSlide={currentSlide}
                onSelectSlide={goToSlide}
              />
            </div>
          )}

          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Slide slide={slides[currentSlide]} />

              <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all text-white font-medium"
                  >
                    <ChevronLeft size={20} />
                    <span className="hidden sm:inline">Trước</span>
                  </button>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowToc(!showToc)}
                      className="lg:hidden p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-white"
                      title="Mục lục"
                    >
                      <List size={20} />
                    </button>

                    <div className="text-white font-medium">
                      <span className="text-yellow-300 text-xl font-bold">{currentSlide + 1}</span>
                      <span className="mx-2">/</span>
                      <span>{slides.length}</span>
                    </div>

                    <button
                      onClick={toggleFullscreen}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-white"
                      title={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                  </div>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg transition-all text-white font-medium"
                  >
                    <span className="hidden sm:inline">Sau</span>
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="mt-4 bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-red-700 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  title={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
