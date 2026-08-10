import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import AboutSection from '@/components/AboutSection';
import StartupsSection from '@/components/StartupsSection';
import ExecomSection from '@/components/ExecomSection';
import LatestGallery from '@/components/gallery/LatestGallery';
import Footer from '@/components/Footer';
import RecentEvent from '@/components/events/RecentEvent';

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: '/',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'IEDC ICET – Innovation and Entrepreneurship Development Centre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      {/* <StatsSection /> */}
      <RecentEvent />
      {/* <ProgramsSection /> */}
      <StartupsSection />
      <LatestGallery />
      <ExecomSection />
      {/*<LatestAchievements />*/}
      <Footer />
    </div>
  );
}
