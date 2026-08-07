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

export const galleryCollections: GalleryCollection[] = [
  {
    id: '1',
    slug: '1-day-drone-workshop',
    title: '1-Day Drone Workshop',
    description: 'The 1-Day Drone Workshop is organized by IEDC ICET in association with the Innovation and Entrepreneurship Development Centre (IEDC) at Ilahia College of Engineering and Technology. Conducted by Quadkart FPV School, this hands-on workshop introduces participants to the fundamentals of drone technology, FPV systems, flight operations, and practical applications. The session will be led by Nihal Sherin and is offered free of cost to all registered participants.',
    coverImage: 'images/gallery/Drone 1.1.jpeg',
    eventDate: '11 October 2025',
    imageCount: 5,
    images: [
      {
        id: '1-1',
        url: 'images/gallery/Drone 1.1.jpeg',
        alt: '1-Day Drone Workshop - Poster'
      },
      {
        id: '1-2',
        url: 'images/gallery/Drone 1.2.jpeg',
        alt: '1-Day Drone Workshop - Team Photo'
      },
      {
        id: '1-3',
        url: 'images/gallery/Drone 1.3.jpeg',
        alt: '1-Day Drone Workshop - Drone Assembly'
      },
      {
        id: '1-4',
        url: 'images/gallery/Drone 1.4.jpeg',
        alt: '1-Day Drone Workshop - Technology Learning'
      },
      {
        id: '1-5',
        url: 'images/gallery/Drone 1.5.jpeg',
        alt: '1-Day Drone Workshop - Hands-on Drone Testing'
      },
    ]
  },
  {
    id: '2',
    slug: 'manogath-2k25-ideathon',
    title: 'MANOGATH 2K25 - Ideathon',
    description: 'MANOGATH 2K25 is an Ideathon organized by IEDC ICET in association with the Innovation and Entrepreneurship Development Centre (IEDC), Institution\'s Innovation Council (IIC), and YIP. The event invites students to present unique and innovative ideas, compete for exciting prizes, and receive valuable feedback from experts. Participants will receive certificates, activity points as per KTU norms, and an opportunity to showcase their creativity and entrepreneurial thinking.',
    coverImage: 'images/gallery/Manogath 2.1.jpeg',
    eventDate: '08 August 2025',
    imageCount: 4,
    images: [
      {
        id: '2-1',
        url: 'images/gallery/Manogath 2.1.jpeg',
        alt: 'MANOGATH 2K25 - Ideathon - Poster'
      },
      {
        id: '2-2',
        url: 'images/gallery/Manogath 2.2.jpeg',
        alt: 'MANOGATH 2K25 - Ideathon - Winners'
      },
      {
        id: '2-3',
        url: 'images/gallery/Manogath 2.3.jpeg',
        alt: 'MANOGATH 2K25 - Ideathon - 1st Prize Winner'
      },
      {
        id: '2-4',
        url: 'images/gallery/Manogath 2.4.jpeg',
        alt: 'MANOGATH 2K25 - Ideathon - 2nd Prize Winner'
      },
    ]
  },
  {
    id: '3',
    slug: 'innospace-2k26-idea-pitching-competition',
    title: 'INNOSPACE 2K26 - Idea Pitching Competition',
    description: 'INNOSPACE 2K26 is an innovation and idea pitching competition organized by IEDC ICET in association with Kerala Startup Mission IEDC, Institution\'s Innovation Council (IIC), and YIP for first-year students. The event provides a platform to present unique and smart ideas, encouraging participants to explore innovation, brainstorming, validation, prototyping, and scalability. A prize pool of ₹3,000, certificates for all participants, and mementos for the winners make it an exciting opportunity to kick-start the entrepreneurial journey.',
    coverImage: 'images/gallery/Innospace 3.1.jpeg',
    eventDate: '24 March 2026',
    imageCount: 5,
    images: [
      {
        id: '3-1',
        url: 'images/gallery/Innospace 3.1.jpeg',
        alt: 'INNOSPACE 2K26 - Idea Pitching Competition - Poster'
      },
      {
        id: '3-2',
        url: 'images/gallery/Innospace 3.2.jpeg',
        alt: 'INNOSPACE 2K26 - Idea Pitching Competition - Presentation'
      },
      {
        id: '3-3',
        url: 'images/gallery/Innospace 3.3.jpeg',
        alt: 'INNOSPACE 2K26 - Idea Pitching Competition - Presentation'
      },
      {
        id: '3-4',
        url: 'images/gallery/Innospace 3.4.jpeg',
        alt: 'INNOSPACE 2K26 - Idea Pitching Competition - Volunteers'
      },
      {
        id: '3-5',
        url: 'images/gallery/Innospace 3.5.jpeg',
        alt: 'INNOSPACE 2K26 - Idea Pitching Competition - Judges'
      },
    ]
  },
  {
    id: '4',
    slug: 'startup-orientation-ideation-ai-workshop',
    title: 'Startup Orientation: Ideation & AI Workshop',
    description: 'Turn your ideas into impact at the Startup Orientation: Ideation & AI Workshop conducted by Druv360° Entrepreneurs Hub in association with Ilahia College of Engineering & Technology, Institution\'s Innovation Council (IIC), and Kerala Startup Mission Innovation & Entrepreneurship Development Centre (IEDC). Learn how to validate ideas, leverage AI tools, develop an entrepreneurial mindset, and collaborate to build innovative startups. The session will be led by Mr. Immanuel Varghese, Founder of Druv360° Entrepreneurs Hub.',
    coverImage: 'images/gallery/Startup 4.1.jpeg',
    eventDate: 'july 30 2026',
    imageCount: 7,
    images: [
      {
        id: '4-1',
        url: 'images/gallery/Startup 4.1.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Poster'
      },
      {
        id: '4-2',
        url: 'images/gallery/Startup 4.2.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Technology Learning'
      },
      {
        id: '4-3',
        url: 'images/gallery/Startup 4.3.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Teaching'
      },
      {
        id: '4-4',
        url: 'images/gallery/Startup 4.4.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Learning'
      },
      {
        id: '4-5',
        url: 'images/gallery/Startup 4.5.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Presentation'
      },
      {
        id: '4-6',
        url: 'images/gallery/Startup 4.6.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Presentation'
      },
      {
        id: '4-7',
        url: 'images/gallery/Startup 4.7.jpeg',
        alt: 'Startup Orientation: Ideation & AI Workshop - Presentation'
      },
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
