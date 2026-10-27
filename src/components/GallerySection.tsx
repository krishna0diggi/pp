import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { biodataData } from '../data/biodata';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const { gallery } = biodataData;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % gallery.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section className="py-4 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-[#B08D57]/30 shadow-2xs overflow-hidden">
        {/* Section Header */}
        <div className="bg-[#641C2B] text-white px-5 py-2.5 flex items-center justify-between">
          <h2 className="font-serif text-base sm:text-lg font-bold tracking-wide">
            {t.galleryTitle}
          </h2>
          <span className="text-xs text-[#E8D8B9]">
            {gallery.length} {t.photoCount}
          </span>
        </div>

        {/* Compact Thumbnail Grid */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-[#E8D8B9] bg-[#FAF7F0] cursor-pointer hover:border-[#B08D57] transition-all shadow-2xs"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-white/90 text-[#641C2B] flex items-center justify-center shadow-xs">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="bg-[#641C2B] text-white px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-medium">
                {selectedPhotoIndex + 1} / {gallery.length} • {gallery[selectedPhotoIndex].title}
              </span>
              <button
                onClick={closeLightbox}
                className="text-white hover:text-[#E8D8B9] p-1 rounded-full cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo View */}
            <div className="relative bg-black flex items-center justify-center min-h-[350px] max-h-[75vh] p-2">
              <img
                src={gallery[selectedPhotoIndex].src}
                alt={gallery[selectedPhotoIndex].title}
                className="max-h-[70vh] max-w-full object-contain"
              />

              <button
                onClick={prevPhoto}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#641C2B] flex items-center justify-center shadow cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#641C2B] flex items-center justify-center shadow cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
