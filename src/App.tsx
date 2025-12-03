import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SlideViewer from './components/SlideViewer';
import Quiz from './components/Quiz';
import References from './components/References';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'slides':
        return <SlideViewer />;
      case 'quiz':
        return <Quiz />;
      case 'references':
        return <References />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

export default App;
