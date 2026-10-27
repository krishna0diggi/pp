import React from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biodataImages } from '../data/biodata';

interface OriginalDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalDocModal: React.FC<OriginalDocModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF7F0] rounded-xl overflow-hidden border border-[#B08D57] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#641C2B] text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#E8D8B9]" />
            <h3 className="font-serif text-sm sm:text-base font-bold tracking-wide">
              {t.viewOriginalDoc}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Document Image Container */}
        <div className="p-3 sm:p-4 bg-[#252321]/5 flex items-center justify-center max-h-[75vh] overflow-auto">
          <img
            src={biodataImages.docOriginal}
            alt="Original Hindu Matrimonial Biodata of Krishna Kumar Saw"
            className="w-full max-h-[70vh] object-contain rounded-md shadow-md border border-[#B08D57]/30"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-white border-t border-[#B08D57]/20 flex items-center justify-between text-xs text-[#827B73]">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Family Verified Document</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#641C2B] text-white hover:bg-[#45111B] transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
