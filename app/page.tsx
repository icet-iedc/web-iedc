import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ProgramsSection from '@/components/ProgramsSection';
import StartupsSection from '@/components/StartupsSection';
import LatestGallery from '@/components/gallery/LatestGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <StartupsSection />
      <LatestGallery />
      <Footer />
    </div>
  );
}
