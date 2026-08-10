/**
 * Centralized SEO configuration for IEDC ICET website.
 *
 * Set NEXT_PUBLIC_SITE_URL in your environment to the production domain.
 * Falls back to http://localhost:3000 for local development.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteConfig = {
  name: 'IEDC ICET',
  fullName:
    'Innovation and Entrepreneurship Development Centre – Ilahia College of Engineering and Technology',
  description:
    'IEDC ICET is the Innovation and Entrepreneurship Development Centre at Ilahia College of Engineering and Technology, Muvattupuzha. We empower students to transform innovative ideas into impactful startups through workshops, hackathons, ideathons, startup programs, and hands-on mentorship.',
  url: siteUrl,
  locale: 'en_IN',
  language: 'en',

  // Title configuration
  defaultTitle: 'IEDC ICET | Innovation, Entrepreneurship & Startup Community',
  titleTemplate: '%s | IEDC ICET',

  // Default OG / Twitter image (path relative to /public, resolved via metadataBase)
  defaultOgImage: '/og-image.jpg',

  // Keywords reflecting the organization's actual activities
  defaultKeywords: [
    'IEDC ICET',
    'Innovation Entrepreneurship Development Centre',
    'Ilahia College of Engineering and Technology',
    'IEDC Kerala',
    'student entrepreneurship',
    'student innovation',
    'startup incubation',
    'hackathon',
    'ideathon',
    'workshops',
    'Kerala Startup Mission',
    'KTU entrepreneurship',
    'ICET Muvattupuzha',
    'startup ecosystem',
    'entrepreneurship programs',
  ],

  // Authors / publishers
  authors: [{ name: 'IEDC ICET', url: siteUrl }],
  creator: 'IEDC ICET',
  publisher: 'IEDC ICET',

  // Organization info (used for JSON-LD)
  organization: {
    name: 'IEDC ICET',
    legalName:
      'Innovation and Entrepreneurship Development Centre, Ilahia College of Engineering and Technology',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    email: 'iedc@icet.ac.in',
    address: {
      streetAddress: 'Muvattupuzha',
      addressLocality: 'Muvattupuzha',
      addressRegion: 'Kerala',
      postalCode: '686661',
      addressCountry: 'IN',
    },
    // Social links — add official handles here when confirmed
    sameAs: [] as string[],
  },
};

