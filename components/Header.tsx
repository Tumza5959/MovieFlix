import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onGoHome: () => void;
  onAiSuggest: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, onAiSuggest, onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query);
  }

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-brand-black bg-opacity-95 backdrop-blur-sm' : 'bg-gradient-to-b from-black to-transparent'}`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-8">
          <h1 
            onClick={onGoHome}
            className="text-2xl md:text-3xl font-bold text-brand-red cursor-pointer tracking-wider uppercase"
          >
            MovieFlix
          </h1>
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" onClick={(e) => { e.preventDefault(); onGoHome(); }} className="text-gray-300 hover:text-white transition-colors">หน้าแรก</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">หนัง</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">ซีรี่ส์</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">หมวดหมู่</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">หนังปี</a>
          </nav>
        </div>
        
        <div className="flex-1 flex items-center justify-end gap-4">
            <div className="relative flex-1 max-w-xs">
                 <input 
                    type="text"
                    placeholder="ค้นหาหนัง..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full bg-brand-gray bg-opacity-80 text-white px-4 py-2 pl-10 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
          
            <button 
                onClick={onAiSuggest} 
                className="hidden md:flex bg-brand-red text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors items-center space-x-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span>AI แนะนำ</span>
            </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
