import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ProgramsSection from '@/components/ProgramsSection';
import StartupsSection from '@/components/StartupsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <StatsSection />
      <ProgramsSection />
      <StartupsSection />
      <Footer />
    </div>
  );
}
