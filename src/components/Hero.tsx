import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { biodataImages } from '../data/biodata';
import { Briefcase, Building2, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenGallery?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGallery }) => {
  const { t } = useLanguage();

  return (
    <section className="pt-6 pb-8 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Traditional Auspicious Invocation */}
      <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/80 border border-[#B08D57]/30 shadow-2xs mb-4">
        <span className="font-serif text-[#641C2B] font-bold text-sm tracking-widest">
          {t.invocation}
        </span>
      </div>

      {/* Main Profile Portrait Card */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 my-4 text-left">
        {/* Photo with refined luxury gold border */}
        <div className="relative shrink-0 group cursor-pointer" onClick={onOpenGallery}>
          <div className="w-40 sm:w-48 aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#B08D57] bg-white shadow-md p-1">
            <img
              src={biodataImages.portraitMain}
              alt="Krishna Kumar Saw"
              className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
              loading="eager"
            />
          </div>
          <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 text-[10px] uppercase font-semibold tracking-wider text-[#641C2B] bg-[#FAF7F0] border border-[#B08D57]/40 px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
            {t.profileSubtitle}
          </span>
        </div>

        {/* Identity & Core Line */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B08D57] mb-1">
            {t.profileSubtitle}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252321] tracking-tight mb-2">
            Krishna Kumar Saw
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-sm sm:text-base text-[#4B4643] mb-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#641C2B]">
              <Briefcase className="w-4 h-4 text-[#B08D57]" />
              Software Engineer
            </span>
            <span className="text-[#B08D57] hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-[#252321]">
              <Building2 className="w-3.5 h-3.5 text-[#B08D57]" />
              Diggibyte Technologies
            </span>
          </div>

          <div className="inline-flex items-center gap-1 text-xs text-[#827B73] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>Petarbar, Bokaro Steel City (Jharkhand)</span>
          </div>

          {/* Quick Pill Highlights */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
            <span className="px-3 py-1 rounded-md bg-white border border-[#B08D57]/30 font-medium text-[#252321]">
              {t.dateOfBirthValue}
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-[#B08D57]/30 font-medium text-[#252321]">
              5' 6" (167 cm)
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-[#B08D57]/30 font-bold text-[#641C2B]">
              {t.rashiValue}
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-[#B08D57]/30 font-semibold text-[#641C2B]">
              {t.gotra}: {t.gotraValue}
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-[#B08D57]/30 font-semibold text-[#252321]">
              {t.casteValue}
            </span>
            <span className="px-3 py-1 rounded-md bg-white border border-[#B08D57]/30 font-semibold text-[#252321]">
              {t.annualIncomeValue}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
