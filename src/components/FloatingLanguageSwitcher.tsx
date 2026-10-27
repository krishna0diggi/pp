import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Check, ChevronUp } from 'lucide-react';

export const FloatingLanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (lang: 'hi' | 'en') => {
    setLanguage(lang);
    setIsOpen(false); // Automatically closes back to sticky button
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-50 no-print flex flex-col items-end select-none"
    >
      {/* Animated Popover Options */}
      <div
        className={`transition-all duration-300 ease-out origin-bottom-right mb-2 ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-3 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#B08D57]/40 p-2 min-w-[170px] flex flex-col gap-1.5">
          <div className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-[#827B73] border-b border-[#E8D8B9]/40 flex items-center justify-between">
            <span>Select Language</span>
            <span className="font-serif text-[#641C2B] font-bold">भाषा</span>
          </div>

          {/* Hindi Option */}
          <button
            onClick={() => handleSelectLanguage('hi')}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              language === 'hi'
                ? 'bg-[#641C2B] text-white shadow-xs'
                : 'text-[#252321] hover:bg-[#FAF7F0] hover:text-[#641C2B]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">🇮🇳</span>
              <span>हिन्दी (Hindi)</span>
            </div>
            {language === 'hi' && <Check className="w-3.5 h-3.5 text-[#E8D8B9]" />}
          </button>

          {/* English Option */}
          <button
            onClick={() => handleSelectLanguage('en')}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-[#641C2B] text-white shadow-xs'
                : 'text-[#252321] hover:bg-[#FAF7F0] hover:text-[#641C2B]'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">🌐</span>
              <span>English</span>
            </div>
            {language === 'en' && <Check className="w-3.5 h-3.5 text-[#E8D8B9]" />}
          </button>
        </div>
      </div>

      {/* Main Sticky Bottom-Right Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#641C2B] text-white shadow-lg border border-[#B08D57]/70 hover:bg-[#45111B] active:scale-95 transition-all cursor-pointer group"
        aria-label="Change Language"
        title="Change Language / भाषा बदलें"
      >
        <Globe className="w-4 h-4 text-[#E8D8B9] group-hover:rotate-45 transition-transform duration-300" />
        <span className="text-xs font-semibold tracking-wide">
          {language === 'hi' ? 'हिन्दी' : 'English'}
        </span>
        <ChevronUp
          className={`w-3.5 h-3.5 text-[#E8D8B9] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
};
