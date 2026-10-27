import React from 'react';
import { biodataData } from '../data/biodata';
import { OrnamentalDivider, CornerMotif } from './IndianMotifs';
import { GraduationCap, HeartHandshake, Home } from 'lucide-react';

export const PartnerPreferencesSection: React.FC = () => {
  const { partnerPreferences } = biodataData;

  if (!partnerPreferences) return null;

  const iconMap = [GraduationCap, Home, HeartHandshake];

  return (
    <section id="preferences" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0] border-t border-[#E8D8B9]/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
            Section 06 • Looking Ahead
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252321] font-normal mb-3">
            Partner Expectations & Shared Values
          </h2>
          <p className="font-serif italic text-base text-[#827B73] max-w-lg mx-auto">
            Seeking an understanding and like-minded partner to share a purposeful, fulfilling life together.
          </p>
          <OrnamentalDivider className="my-6" />
        </div>

        {/* Thoughtful Statement Card */}
        <div className="bg-white rounded-2xl border border-[#B08D57]/30 p-8 sm:p-10 shadow-xs relative mb-10">
          <CornerMotif position="tl" className="top-2 left-2 text-[#B08D57]" />
          <CornerMotif position="br" className="bottom-2 right-2 text-[#B08D57]" />

          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-lg sm:text-xl text-[#252321] leading-relaxed italic mb-6">
              “{partnerPreferences.overview}”
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              <span>Mutual Respect</span>
              <span>•</span>
              <span>Cultural Harmony</span>
              <span>•</span>
              <span>Lifelong Partnership</span>
            </div>
          </div>
        </div>

        {/* Structured Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerPreferences.points.map((pt, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#B08D57]/25 p-6 shadow-2xs hover:border-[#B08D57]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#B08D57]/40 flex items-center justify-center mb-4 text-[#641C2B]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#252321] mb-2">
                  {pt.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4B4643] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
