import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ slides, onSelectSlide }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = slides
      .map((slide, index) => ({
        slide,
        index,
        relevance: calculateRelevance(slide, term.toLowerCase())
      }))
      .filter(result => result.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 8);

    setSearchResults(results);
    setShowResults(true);
  };

  const calculateRelevance = (slide, term) => {
    let score = 0;

    if (slide.title.toLowerCase().includes(term)) score += 10;
    if (slide.subtitle && slide.subtitle.toLowerCase().includes(term)) score += 5;

    const contentStr = JSON.stringify(slide.content).toLowerCase();
    const matches = (contentStr.match(new RegExp(term, 'g')) || []).length;
    score += matches;

    return score;
  };

  const handleSelectResult = (index) => {
    onSelectSlide(index);
    setSearchTerm('');
    setShowResults(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Tìm kiếm nội dung slide..."
          className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600 font-medium">
              Tìm thấy {searchResults.length} kết quả
            </p>
          </div>
          {searchResults.map(({ slide, index }) => (
            <button
              key={index}
              onClick={() => handleSelectResult(index)}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">
                    {slide.title}
                  </p>
                  {slide.subtitle && (
                    <p className="text-sm text-gray-500 truncate mt-1">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && searchResults.length === 0 && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-8 text-center z-50">
          <p className="text-gray-500">Không tìm thấy kết quả phù hợp</p>
        </div>
      )}
    </div>
  );
}
