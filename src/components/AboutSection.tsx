import React from 'react';
import { OrnamentalDivider } from './IndianMotifs';
import { Heart, Compass, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
          Section 01 • Introduction
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252321] font-normal mb-3">
          A Little About Me
        </h2>
        <p className="font-serif italic text-base text-[#827B73] max-w-lg mx-auto">
          Rooted in tradition, driven by modern intellectual aspirations, and centered on family harmony.
        </p>
        <OrnamentalDivider className="my-6" />
      </div>

      {/* Narrative Editorial Card */}
      <div className="bg-white rounded-2xl border border-[#B08D57]/30 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute top-2 right-4 text-7xl font-devanagari text-[#B08D57]/5 select-none pointer-events-none">
          ॐ
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-[#4B4643] text-base sm:text-lg leading-relaxed font-normal">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#641C2B] first-letter:mr-3 first-letter:float-left">
            I am Krishna Kumar Saw, born and brought up in the culturally vibrant industrial town of Petarbar, Bokaro Steel City. Currently, I work as a Software Engineer at Diggibyte Technologies, where I channel my dedication into engineering reliable technology and modern software products.
          </p>

          <p>
            My upbringing has instilled in me a deep reverence for family bonds, cultural values, and humility. While I am forward-thinking and passionate about technological progress, I remain firmly grounded in the rich moral ethos taught by my parents. I believe in mutual respect, quiet diligence, and cultivating a warm, harmonious environment wherever I am.
          </p>

          <p>
            In my journey ahead, I look forward to beginning a new chapter with a companion who shares a similar balance of progressive ambition and traditional Indian warmth—someone with whom I can celebrate shared accomplishments, navigate life’s opportunities, and build an enduring home together.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#E8D8B9]/60">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF7F0] border border-[#B08D57]/20">
            <div className="w-10 h-10 rounded-full bg-[#641C2B]/10 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#641C2B]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#252321] mb-1">Modern & Grounded</h4>
              <p className="text-xs text-[#827B73] leading-relaxed">
                Balancing contemporary tech career excellence with deep-rooted respect for elders and Indian cultural traditions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF7F0] border border-[#B08D57]/20">
            <div className="w-10 h-10 rounded-full bg-[#641C2B]/10 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-[#641C2B]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#252321] mb-1">Family Centered</h4>
              <p className="text-xs text-[#827B73] leading-relaxed">
                Treasuring close familial relationships, warmth, and mutual support as the cornerstone of a peaceful life.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF7F0] border border-[#B08D57]/20">
            <div className="w-10 h-10 rounded-full bg-[#641C2B]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#641C2B]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#252321] mb-1">Authentic & Sincere</h4>
              <p className="text-xs text-[#827B73] leading-relaxed">
                Transparent communication, integrity in commitments, and quiet confidence in life's decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
