import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { biodataData } from '../data/biodata';
import { Phone, MessageCircle, Copy, Check, Eye, EyeOff } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { contact } = biodataData;
  const [copied, setCopied] = useState(false);
  const [isMasked, setIsMasked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const displayPhone = isMasked
    ? `${contact.phone.slice(0, 7)} ••••••`
    : contact.phone;

  const whatsappUrl = `https://wa.me/${contact.rawPhone}?text=${encodeURIComponent(
    t.whatsappPrefillText
  )}`;

  return (
    <section className="py-6 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-[#B08D57]/30 shadow-2xs overflow-hidden">
        {/* Section Header */}
        <div className="bg-[#641C2B] text-white px-5 py-2.5 flex items-center justify-between">
          <h2 className="font-serif text-base sm:text-lg font-bold tracking-wide">
            {t.contactDetails}
          </h2>
          <span className="text-xs text-[#E8D8B9] font-medium tracking-wider">
            {t.contactAction}
          </span>
        </div>

        <div className="p-5 sm:p-6 text-center">
          <p className="text-xs sm:text-sm text-[#4B4643] max-w-lg mx-auto mb-5 leading-relaxed">
            {t.contactNote}
          </p>

          {/* Phone Number Display Box */}
          <div className="inline-flex flex-col items-center justify-center bg-[#FAF7F0] border border-[#B08D57]/30 rounded-xl px-6 py-4 mb-5">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#641C2B] tracking-wider">
                {displayPhone}
              </span>
              <button
                onClick={() => setIsMasked(!isMasked)}
                className="text-[#827B73] hover:text-[#641C2B] p-1 rounded-full cursor-pointer"
                title={isMasked ? t.showNumber : t.privacyMask}
                aria-label={isMasked ? t.showNumber : t.privacyMask}
              >
                {isMasked ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>
            <span className="text-[11px] text-[#827B73] mt-1">
              Sunil Kumar Saw (Father) • Petarbar, Bokaro Steel City
            </span>
          </div>

          {/* Direct Actions: Call, WhatsApp, Copy */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#641C2B] text-white text-xs sm:text-sm font-semibold hover:bg-[#45111B] shadow-2xs hover:shadow transition-all"
            >
              <Phone className="w-4 h-4 text-[#E8D8B9]" />
              <span>{t.callFamily}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#20ba5a] shadow-2xs hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>{t.whatsappChat}</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#B08D57] text-[#252321] text-xs sm:text-sm font-medium hover:bg-[#FAF7F0] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#B08D57]" />
                  <span>{t.copyPhone}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
