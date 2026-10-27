import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const PersonalProfileSection: React.FC = () => {
  const { t } = useLanguage();

  const details = [
    { label: t.name, value: 'Krishna Kumar Saw' },
    { label: t.caste, value: t.casteValue },
    { label: t.dateOfBirth, value: t.dateOfBirthValue },
    { label: t.birthplace, value: t.birthplaceValue },
    { label: t.rashi, value: t.rashiValue, highlight: true },
    { label: t.gotra, value: t.gotraValue, highlight: true },
    { label: t.height, value: t.heightValue },
    { label: t.complexion, value: t.complexionValue },
    { label: t.occupation, value: t.occupationValue, highlight: true },
    { label: t.organization, value: t.organizationValue },
    { label: t.annualIncome, value: t.annualIncomeValue },
    { label: t.religion, value: t.religionValue },
    { label: t.maritalStatus, value: t.maritalStatusValue },
  ];

  return (
    <section className="py-4 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-[#B08D57]/30 shadow-2xs overflow-hidden">
        {/* Section Title Header */}
        <div className="bg-[#641C2B] text-white px-5 py-2.5 flex items-center justify-between">
          <h2 className="font-serif text-base sm:text-lg font-bold tracking-wide">
            {t.personalDetails}
          </h2>
          <span className="text-xs text-[#E8D8B9] font-medium tracking-wider">
            {t.invocation}
          </span>
        </div>

        {/* 2-Column Responsive Detail Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {details.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2 border-b border-[#FAF7F0] sm:border-[#E8D8B9]/30 text-sm"
            >
              <span className="text-[#827B73] font-medium shrink-0 pr-3">
                {item.label}
              </span>
              <span
                className={`font-semibold text-right ${
                  item.highlight ? 'text-[#641C2B] font-bold' : 'text-[#252321]'
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
