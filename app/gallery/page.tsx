import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import GalleryPageClient from '@/components/gallery/GalleryPageClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos and highlights from IEDC ICET events including drone workshops, ideathons, startup orientations, and more. A visual journey through our innovation community.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Gallery | IEDC ICET',
    description:
      'Browse photos and highlights from IEDC ICET events including drone workshops, ideathons, startup orientations, and more.',
    url: '/gallery',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'IEDC ICET Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | IEDC ICET',
    description:
      'Browse photos and highlights from IEDC ICET events including drone workshops, ideathons, startup orientations, and more.',
    images: [siteConfig.defaultOgImage],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
