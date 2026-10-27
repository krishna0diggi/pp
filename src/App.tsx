import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalProfileSection } from './components/PersonalProfileSection';
import { FamilySection } from './components/FamilySection';
import { ContactSection } from './components/ContactSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { PrintableBiodataModal } from './components/PrintableBiodataModal';
import { OriginalDocModal } from './components/OriginalDocModal';
import { FloatingLanguageSwitcher } from './components/FloatingLanguageSwitcher';
import './App.css';

function BiodataApp() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#252321] selection:bg-[#E8D8B9] selection:text-[#641C2B] font-sans antialiased">
      {/* Sticky Header with Hindi / English segmented toggle & quick actions */}
      <Navbar
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenDocModal={() => setIsDocModalOpen(true)}
      />

      <main className="pb-4">
        {/* Section A: Hero with auspicious invocation, single photo & key stats */}
        <Hero onOpenGallery={() => setIsDocModalOpen(true)} />

        {/* Section B: Personal Biodata in 2-column scannable grid */}
        <PersonalProfileSection />

        {/* Section C: Family Details */}
        <FamilySection />

        {/* Section D: Photo & Document Strip */}
        <GallerySection />

        {/* Section E: Contact & WhatsApp Action */}
        <ContactSection />
      </main>

      {/* Section F: Minimal Footer */}
      <Footer />

      {/* Printable Biodata Modal */}
      <PrintableBiodataModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Original Scanned Document Modal */}
      <OriginalDocModal
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
      />

      {/* Floating Animated Language Switcher in bottom-right */}
      <FloatingLanguageSwitcher />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <BiodataApp />
    </LanguageProvider>
  );
}

export default App;
