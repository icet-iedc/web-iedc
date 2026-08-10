import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import EventsComingSoon from '@/components/events/EventsComingSoon';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Discover upcoming workshops, hackathons, ideathons, and startup bootcamps organized by IEDC ICET. Stay tuned for our exciting events and entrepreneurship programs.',
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: 'Events | IEDC ICET',
    description:
      'Discover upcoming workshops, hackathons, ideathons, and startup bootcamps organized by IEDC ICET.',
    url: '/events',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'IEDC ICET Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | IEDC ICET',
    description:
      'Discover upcoming workshops, hackathons, ideathons, and startup bootcamps organized by IEDC ICET.',
    images: [siteConfig.defaultOgImage],
  },
};

export default function EventsPage() {
  return <EventsComingSoon />;
}
