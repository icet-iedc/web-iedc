import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import AchievementsComingSoon from '@/components/achievements/AchievementsComingSoon';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Explore the milestones, awards, hackathon victories, and startup success stories achieved by IEDC ICET students and our innovation community.',
  alternates: {
    canonical: '/achievements',
  },
  openGraph: {
    title: 'Achievements | IEDC ICET',
    description:
      'Explore the milestones, awards, hackathon victories, and startup success stories achieved by IEDC ICET students and our innovation community.',
    url: '/achievements',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'IEDC ICET Achievements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements | IEDC ICET',
    description:
      'Explore the milestones, awards, hackathon victories, and startup success stories achieved by IEDC ICET students and our innovation community.',
    images: [siteConfig.defaultOgImage],
  },
};

export default function AchievementsPage() {
  return <AchievementsComingSoon />;
}
