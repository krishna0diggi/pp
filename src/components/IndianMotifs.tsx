import React from 'react';

// Auspicious Kalash with Mango Leaves & Coconut
export const KalashIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-[#B08D57]' }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Coconut on Top */}
    <path d="M32 6 C35 12, 36 15, 34 18 C33 19, 31 19, 30 18 C28 15, 29 12, 32 6 Z" fill="currentColor" opacity="0.9" />
    <circle cx="32" cy="11" r="1.5" fill="#641C2B" />
    
    {/* Mango Leaves */}
    <path d="M32 18 C26 13, 20 15, 17 21 C22 21, 28 19, 32 18 Z" fill="currentColor" opacity="0.8" />
    <path d="M32 18 C38 13, 44 15, 47 21 C42 21, 36 19, 32 18 Z" fill="currentColor" opacity="0.8" />
    <path d="M32 18 C23 18, 18 24, 19 28 C24 26, 28 22, 32 18 Z" fill="currentColor" opacity="0.7" />
    <path d="M32 18 C41 18, 46 24, 45 28 C40 26, 36 22, 32 18 Z" fill="currentColor" opacity="0.7" />

    {/* Kalash Neck & Rim */}
    <ellipse cx="32" cy="24" rx="10" ry="3" fill="currentColor" />
    <path d="M22 24 L25 30 L39 30 L42 24 Z" fill="currentColor" opacity="0.9" />

    {/* Kalash Body (Pot) */}
    <path d="M25 30 C20 35, 16 43, 20 52 C23 57, 41 57, 44 52 C48 43, 44 35, 39 30 Z" fill="currentColor" />

    {/* Sacred Swastik / Symbol on Pot */}
    <path d="M32 37 L32 45 M28 41 L36 41 M32 37 L35 37 M32 45 L29 45 M28 41 L28 38 M36 41 L36 44" 
      stroke="#641C2B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Base */}
    <path d="M25 53 C25 56, 39 56, 39 53 Z" fill="currentColor" opacity="0.85" />
  </svg>
);

// Auspicious Om Symbol
export const OmSymbol: React.FC<{ className?: string }> = ({ className = 'w-10 h-10 text-[#641C2B]' }) => (
  <span className={`inline-block font-devanagari select-none ${className}`}>
    ॐ
  </span>
);

// Traditional Wedding Garland / Ornamental Hairline Divider
export const OrnamentalDivider: React.FC<{ className?: string }> = ({ className = 'my-8' }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#B08D57]/60 to-[#B08D57]"></div>
    <div className="flex items-center gap-1.5 text-[#B08D57]">
      <span className="text-[10px]">✦</span>
      <span className="w-1.5 h-1.5 rotate-45 border border-[#B08D57] bg-[#FAF7F0]"></span>
      <span className="text-[12px] text-[#641C2B]">❖</span>
      <span className="w-1.5 h-1.5 rotate-45 border border-[#B08D57] bg-[#FAF7F0]"></span>
      <span className="text-[10px]">✦</span>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#B08D57]/60 to-[#B08D57]"></div>
  </div>
);

// Traditional Corner Ornaments for Framed Cards
export const CornerMotif: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({
  position,
  className = '',
}) => {
  const rotationMap = {
    tl: '',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      style={{ width: '20px', height: '20px', maxWidth: '20px', maxHeight: '20px' }}
      className={`pointer-events-none absolute w-5 h-5 shrink-0 z-10 ${rotationMap[position]} ${className}`}
    >
      <path d="M2 2 L14 2 M2 2 L2 14" strokeWidth="1.5" />
      <path d="M5 5 L10 5 M5 5 L5 10" opacity="0.6" />
      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
    </svg>
  );
};
