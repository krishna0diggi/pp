import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FamilySection: React.FC = () => {
  const { t } = useLanguage();

  const familyDetails = [
    { label: t.fatherName, value: t.fatherNameValue },
    { label: t.fatherOccupation, value: t.fatherOccupationValue },
    { label: t.motherName, value: t.motherNameValue },
    { label: t.motherOccupation, value: t.motherOccupationValue },
    { label: t.brothers, value: t.brothersValue },
    { label: t.sisters, value: t.sistersValue },
    { label: t.nativePlace, value: t.nativePlaceValue, fullWidth: true },
  ];

  return (
    <section className="py-4 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-[#B08D57]/30 shadow-2xs overflow-hidden">
        {/* Section Title Header */}
        <div className="bg-[#641C2B] text-white px-5 py-2.5 flex items-center justify-between">
          <h2 className="font-serif text-base sm:text-lg font-bold tracking-wide">
            {t.familyDetails}
          </h2>
          <span className="text-xs text-[#E8D8B9] font-medium tracking-wider">
            {t.profileSubtitle}
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {familyDetails.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between py-2 border-b border-[#FAF7F0] sm:border-[#E8D8B9]/30 text-sm ${
                item.fullWidth ? 'sm:col-span-2' : ''
              }`}
            >
              <span className="text-[#827B73] font-medium shrink-0 pr-3">
                {item.label}
              </span>
              <span className="font-semibold text-[#252321] text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
