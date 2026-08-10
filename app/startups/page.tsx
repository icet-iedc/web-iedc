import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import StartupsComingSoon from '@/components/startups/StartupsComingSoon';

export const metadata: Metadata = {
  title: 'Startup Directory',
  description:
    'Discover the innovative startups incubated at IEDC ICET. From idea-stage ventures to growing companies, meet the student entrepreneurs building the future.',
  alternates: {
    canonical: '/startups',
  },
  openGraph: {
    title: 'Startup Directory | IEDC ICET',
    description:
      'Discover the innovative startups incubated at IEDC ICET. From idea-stage ventures to growing companies, meet the student entrepreneurs building the future.',
    url: '/startups',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'IEDC ICET Startup Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Directory | IEDC ICET',
    description:
      'Discover the innovative startups incubated at IEDC ICET. From idea-stage ventures to growing companies, meet the student entrepreneurs building the future.',
    images: [siteConfig.defaultOgImage],
  },
};

export default function StartupsPage() {
  return <StartupsComingSoon />;
}
