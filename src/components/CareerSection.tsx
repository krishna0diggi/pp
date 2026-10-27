import React from 'react';
import { biodataData } from '../data/biodata';
import { OrnamentalDivider } from './IndianMotifs';
import { Briefcase, Building2, TrendingUp, Award, Code, CheckCircle2 } from 'lucide-react';

export const CareerSection: React.FC = () => {
  const { professional } = biodataData;

  const highlights = [
    'Specializes in modern engineering practices, scalable software architecture, and high-performance applications.',
    'Consistently demonstrates dedication to engineering quality, problem solving, and technological innovation.',
    'Maintains high professional discipline and collaboration within cross-functional teams.',
  ];

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
          Section 03 • Profession & Growth
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252321] font-normal mb-3">
          Career & Professional Journey
        </h2>
        <p className="font-serif italic text-base text-[#827B73] max-w-lg mx-auto">
          Committed to technical craftsmanship, professional integrity, and steady career growth.
        </p>
        <OrnamentalDivider className="my-6" />
      </div>

      {/* Main Career Feature Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Organization & Role Spotlight */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#641C2B] to-[#45111B] text-[#FAF7F0] rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden">
          {/* Subtle gold floral watermark */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-[#B08D57]/20 pointer-events-none" />
          <div className="absolute top-0 right-0 p-6 text-[#B08D57]/30 text-5xl font-serif">✦</div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-[#B08D57]/30 text-xs text-[#E8D8B9] font-medium mb-6">
              <Building2 className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Current Organization</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2">
              {professional.organization}
            </h3>

            <div className="flex items-center gap-2 text-lg text-[#E8D8B9] font-medium mb-6">
              <Code className="w-5 h-5 text-[#B08D57]" />
              <span>{professional.occupation}</span>
            </div>

            <p className="text-sm text-[#FAF7F0]/80 leading-relaxed font-light mb-8">
              {professional.summary}
            </p>
          </div>

          {/* Compensation & Status */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#E8D8B9] block">
                Annual Compensation
              </span>
              <span className="font-serif text-2xl font-bold text-white">
                {professional.annualIncome}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-[#B08D57]/40">
              <TrendingUp className="w-5 h-5 text-[#B08D57]" />
            </div>
          </div>
        </div>

        {/* Right Column: Key Professional Pillars */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#B08D57]/30 p-8 sm:p-10 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#B08D57]/40 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#641C2B]" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-[#252321] font-bold">
                  Professional Focus & Ethos
                </h4>
                <p className="text-xs text-[#827B73]">
                  Modern Software Architecture & Enterprise Cloud Systems
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-[#4B4643] leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Values Note */}
          <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#B08D57]/20 flex items-center gap-3">
            <Award className="w-5 h-5 text-[#B08D57] shrink-0" />
            <p className="text-xs text-[#827B73] leading-relaxed">
              Maintains a healthy work-life harmony, prioritizing family occasions and personal wellness alongside engineering excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
