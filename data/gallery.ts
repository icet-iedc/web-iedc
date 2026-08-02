export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface GalleryCollection {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  eventDate: string;
  imageCount: number;
  images: GalleryImage[];
}

// Hardcoded gallery data - easily replaceable with API calls later
export const galleryCollections: GalleryCollection[] = [
  {
    id: '1',
    slug: 'startup-bootcamp-2024',
    title: 'Startup Bootcamp 2024',
    description: 'Three-day intensive bootcamp focused on startup fundamentals and pitch preparation',
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    eventDate: '2024-01-15',
    imageCount: 12,
    images: [
      {
        id: '1-1',
        url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop',
        alt: 'Startup Bootcamp opening session'
      },
      {
        id: '1-2',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
        alt: 'Team collaboration workshop'
      },
      {
        id: '1-3',
        url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop',
        alt: 'Pitch preparation session'
      },
      {
        id: '1-4',
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop',
        alt: 'Group brainstorming activity'
      },
      {
        id: '1-5',
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop',
        alt: 'Mentor feedback session'
      },
      {
        id: '1-6',
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop',
        alt: 'Final presentations day'
      },
      {
        id: '1-7',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
        alt: 'Networking break'
      },
      {
        id: '1-8',
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop',
        alt: 'Workshop in progress'
      },
      {
        id: '1-9',
        url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
        alt: 'Team project work'
      },
      {
        id: '1-10',
        url: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=800&fit=crop',
        alt: 'Group discussion'
      },
      {
        id: '1-11',
        url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop',
        alt: 'Award ceremony'
      },
      {
        id: '1-12',
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop',
        alt: 'Closing celebration'
      }
    ]
  },
  {
    id: '2',
    slug: 'hackathon-2024',
    title: 'IEDC Hackathon 2024',
    description: '48-hour hackathon bringing together innovators to solve real-world problems',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    eventDate: '2024-02-20',
    imageCount: 15,
    images: [
      {
        id: '2-1',
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop',
        alt: 'Hackathon kickoff event'
      },
      {
        id: '2-2',
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
        alt: 'Developers coding'
      },
      {
        id: '2-3',
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop',
        alt: 'Team collaboration'
      },
      {
        id: '2-4',
        url: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&h=800&fit=crop',
        alt: 'Late night coding session'
      },
      {
        id: '2-5',
        url: 'https://images.unsplash.com/photo-1573167710701-35950a41e251?w=1200&h=800&fit=crop',
        alt: 'Focused developer'
      },
      {
        id: '2-6',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
        alt: 'Team huddle'
      },
      {
        id: '2-7',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        alt: 'Project presentation'
      },
      {
        id: '2-8',
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
        alt: 'Mentor consultation'
      },
      {
        id: '2-9',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop',
        alt: 'Team working together'
      },
      {
        id: '2-10',
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        alt: 'Brainstorming session'
      },
      {
        id: '2-11',
        url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop',
        alt: 'Demo preparation'
      },
      {
        id: '2-12',
        url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1200&h=800&fit=crop',
        alt: 'Final demo day'
      },
      {
        id: '2-13',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
        alt: 'Judging panel'
      },
      {
        id: '2-14',
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
        alt: 'Winners announcement'
      },
      {
        id: '2-15',
        url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop',
        alt: 'Team celebration'
      }
    ]
  },
  {
    id: '3',
    slug: 'founder-meetup-jan-2024',
    title: 'Founder Meetup Jan 2024',
    description: 'Monthly meetup connecting student entrepreneurs with successful founders',
    coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    eventDate: '2024-01-28',
    imageCount: 10,
    images: [
      {
        id: '3-1',
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop',
        alt: 'Founder meetup networking'
      },
      {
        id: '3-2',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
        alt: 'Panel discussion'
      },
      {
        id: '3-3',
        url: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?w=1200&h=800&fit=crop',
        alt: 'Speaker session'
      },
      {
        id: '3-4',
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop',
        alt: 'Attendees mingling'
      },
      {
        id: '3-5',
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop',
        alt: 'Keynote presentation'
      },
      {
        id: '3-6',
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop',
        alt: 'Q&A session'
      },
      {
        id: '3-7',
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop',
        alt: 'Coffee networking'
      },
      {
        id: '3-8',
        url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop',
        alt: 'Group conversation'
      },
      {
        id: '3-9',
        url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop',
        alt: 'Closing remarks'
      },
      {
        id: '3-10',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop',
        alt: 'Group photo'
      }
    ]
  }
];

// Get latest 3 collections for homepage
export function getLatestCollections(limit = 3): GalleryCollection[] {
  return galleryCollections
    .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime())
    .slice(0, limit);
}

// Get collection by slug (for future gallery page)
export function getCollectionBySlug(slug: string): GalleryCollection | undefined {
  return galleryCollections.find(collection => collection.slug === slug);
}
