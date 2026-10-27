import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-8 pb-10 px-4 text-center border-t border-[#B08D57]/20 mt-8 no-print">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Subtle Indian Traditional Divider */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#B08D57]"></div>
          <span className="font-serif text-[#641C2B] font-bold text-xs tracking-widest">
            {t.invocation}
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#B08D57]"></div>
        </div>

        <p className="font-serif italic text-xs text-[#827B73] mb-3">
          {t.footerBlessing}
        </p>

        <p className="text-[11px] text-[#827B73] mb-4">
          {t.copyright}
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#641C2B] hover:underline cursor-pointer"
        >
          <ArrowUp className="w-3 h-3" />
          <span>{t.backToTop}</span>
        </button>
      </div>
    </footer>
  );
};
