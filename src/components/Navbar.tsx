import React from 'react';
import { Printer, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenPrintModal: () => void;
  onOpenDocModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrintModal, onOpenDocModal }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#B08D57]/20 py-2.5 px-4 sm:px-6 shadow-2xs no-print">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Sacred Monogram / Identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full border border-[#B08D57] flex items-center justify-center bg-white shadow-2xs">
            <span className="font-serif text-[#641C2B] font-bold text-sm tracking-wide">ॐ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold text-[#252321] leading-tight">
              Krishna Kumar Saw
            </span>
            <span className="text-[11px] text-[#641C2B] font-medium">
              {t.profileSubtitle}
            </span>
          </div>
        </div>

        {/* Right Actions: Print & Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Action buttons */}
          <button
            onClick={onOpenDocModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#641C2B] border border-[#B08D57]/40 bg-white hover:bg-[#FAF7F0] transition-colors cursor-pointer"
            title={t.viewOriginalDoc}
          >
            <FileText className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>{language === 'hi' ? 'मूल दस्तावेज' : 'Original Doc'}</span>
          </button>

          <button
            onClick={onOpenPrintModal}
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#641C2B] hover:bg-[#45111B] shadow-2xs transition-all cursor-pointer"
            title={t.printBiodata}
          >
            <Printer className="w-3.5 h-3.5 text-[#E8D8B9]" />
            <span>{language === 'hi' ? 'प्रिंट' : 'Print'}</span>
          </button>

          {/* Hindi | English Segmented Toggle */}
          <div
            className="flex items-center p-0.5 rounded-full bg-white border border-[#B08D57]/40 shadow-2xs"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => setLanguage('hi')}
              type="button"
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-[#641C2B] text-white shadow-xs'
                  : 'text-[#827B73] hover:text-[#252321]'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => setLanguage('en')}
              type="button"
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#641C2B] text-white shadow-xs'
                  : 'text-[#827B73] hover:text-[#252321]'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
