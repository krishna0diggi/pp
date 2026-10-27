import React from 'react';
import { X, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biodataImages, biodataData } from '../data/biodata';
import { KalashIcon } from './IndianMotifs';

interface PrintableBiodataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableBiodataModal: React.FC<PrintableBiodataModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { t } = useLanguage();
  const { contact } = biodataData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      {/* Top action bar (hidden during print) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 no-print">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#641C2B] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-[#45111B] transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4 text-[#E8D8B9]" />
          <span>{t.printBiodata}</span>
        </button>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/90 text-[#252321] hover:bg-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* A4 Royal Print Card Container */}
      <div
        className="w-full max-w-[760px] bg-[#FFFDF9] text-[#252321] my-8 p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-[#B08D57] relative print:m-0 print:p-6 print:shadow-none print:border print:border-[#B08D57]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sacred Header */}
        <div className="text-center mb-5 border-b border-[#B08D57]/30 pb-3">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="font-serif text-lg text-[#641C2B] font-bold">ॐ</span>
            <span className="font-serif text-base sm:text-lg text-[#641C2B] font-bold tracking-widest">
              {t.invocation}
            </span>
            <span className="font-serif text-lg text-[#641C2B] font-bold">ॐ</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#641C2B] tracking-wide mt-1">
            Krishna Kumar Saw
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold mt-0.5">
            {t.profileSubtitle}
          </p>
        </div>

        {/* Top Split: Candidate Photo & Vital Overview */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-5 pb-4 border-b border-[#E8D8B9]">
          <div className="w-32 h-44 rounded-lg overflow-hidden border-2 border-[#B08D57] p-1 bg-white shrink-0 shadow-2xs">
            <img
              src={biodataImages.portraitMain}
              alt="Krishna Kumar Saw"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          <div className="flex-1 w-full text-left space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between border-b border-dashed border-[#E8D8B9] pb-1">
              <span className="font-semibold text-[#641C2B]">{t.occupation}:</span>
              <span className="font-medium text-[#252321]">{t.occupationValue}</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-[#E8D8B9] pb-1">
              <span className="font-semibold text-[#641C2B]">{t.organization}:</span>
              <span className="font-medium text-[#252321]">{t.organizationValue}</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-[#E8D8B9] pb-1">
              <span className="font-semibold text-[#641C2B]">{t.annualIncome}:</span>
              <span className="font-bold text-[#252321]">{t.annualIncomeValue}</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-[#E8D8B9] pb-1">
              <span className="font-semibold text-[#641C2B]">{t.nativePlace}:</span>
              <span className="font-medium text-[#252321]">{t.nativePlaceValue}</span>
            </div>
          </div>
        </div>

        {/* Section 1: Personal Details */}
        <div className="mb-5">
          <div className="bg-[#641C2B] text-white px-4 py-1.5 rounded-t-md font-serif font-bold text-xs sm:text-sm tracking-wider uppercase">
            {t.personalDetails}
          </div>

          <div className="border border-[#B08D57]/40 rounded-b-md p-3.5 bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.name}:</span>
              <span className="font-bold text-[#252321]">Krishna Kumar Saw</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.caste}:</span>
              <span className="font-bold text-[#641C2B]">{t.casteValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.dateOfBirth}:</span>
              <span className="font-semibold text-[#252321]">{t.dateOfBirthValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.birthplace}:</span>
              <span className="font-semibold text-[#252321]">{t.birthplaceValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.rashi}:</span>
              <span className="font-bold text-[#641C2B]">{t.rashiValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.gotra}:</span>
              <span className="font-bold text-[#641C2B]">{t.gotraValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.height}:</span>
              <span className="font-semibold text-[#252321]">{t.heightValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.complexion}:</span>
              <span className="font-semibold text-[#252321]">{t.complexionValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.religion}:</span>
              <span className="font-semibold text-[#252321]">{t.religionValue}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Family Details */}
        <div className="mb-5">
          <div className="bg-[#641C2B] text-white px-4 py-1.5 rounded-t-md font-serif font-bold text-xs sm:text-sm tracking-wider uppercase">
            {t.familyDetails}
          </div>

          <div className="border border-[#B08D57]/40 rounded-b-md p-3.5 bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.fatherName}:</span>
              <span className="font-bold text-[#252321]">{t.fatherNameValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.fatherOccupation}:</span>
              <span className="font-semibold text-[#252321]">{t.fatherOccupationValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.motherName}:</span>
              <span className="font-bold text-[#252321]">{t.motherNameValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.motherOccupation}:</span>
              <span className="font-semibold text-[#252321]">{t.motherOccupationValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.brothers}:</span>
              <span className="font-semibold text-[#252321]">{t.brothersValue}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#FAF7F0]">
              <span className="text-[#827B73] font-medium">{t.sisters}:</span>
              <span className="font-semibold text-[#252321]">{t.sistersValue}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Contact Details */}
        <div className="mb-4">
          <div className="bg-[#641C2B] text-white px-4 py-1.5 rounded-t-md font-serif font-bold text-xs sm:text-sm tracking-wider uppercase">
            {t.contactDetails}
          </div>

          <div className="border border-[#B08D57]/40 rounded-b-md p-3 bg-white flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
            <div>
              <span className="text-[#827B73] mr-2">{t.contactDetails}:</span>
              <span className="font-bold text-sm text-[#641C2B]">{contact.phone}</span>
            </div>
            <div className="text-[#827B73]">
              {t.nativePlaceValue}
            </div>
          </div>
        </div>

        {/* Sacred Kalash & Blessings Footer */}
        <div className="text-center pt-3 border-t border-[#B08D57]/30 flex flex-col items-center">
          <KalashIcon className="w-6 h-6 text-[#B08D57] mb-1" />
          <p className="font-serif italic text-xs text-[#641C2B] font-medium">
            {t.footerBlessing}
          </p>
        </div>
      </div>
    </div>
  );
};
