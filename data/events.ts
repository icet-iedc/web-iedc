export interface Event {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  poster: string;
  date: string;
  time: string;
  venue: string;
  registrationFee: string;
  maxParticipants: number;
  registrationStatus: 'Open' | 'Closed' | 'Coming Soon';
  tags: string[];
}

// Hardcoded events data - can be replaced with database later
export const events: Event[] = [
  {
    id: '1',
    slug: 'startup-bootcamp-2024',
    title: 'Startup Bootcamp 2024',
    subtitle: 'Transform Your Idea Into Reality',
    description: 'Join us for an intensive 3-day bootcamp where aspiring entrepreneurs learn the fundamentals of building a successful startup. From ideation to pitch preparation, get hands-on mentorship from industry experts and successful founders.',
    poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&fit=crop',
    date: '2024-03-15',
    time: '9:00 AM - 6:00 PM',
    venue: 'ICET Main Auditorium',
    registrationFee: 'Free',
    maxParticipants: 100,
    registrationStatus: 'Open',
    tags: ['Bootcamp', 'Entrepreneurship', 'Startup', 'Mentorship'],
  },
  {
    id: '2',
    slug: 'innovation-hackathon-2024',
    title: 'Innovation Hackathon 2024',
    subtitle: 'Code. Create. Innovate.',
    description: 'A 48-hour coding marathon where teams build innovative solutions to real-world problems. Compete for exciting prizes, network with industry professionals, and showcase your technical skills.',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop',
    date: '2024-04-20',
    time: '6:00 PM (Day 1) - 6:00 PM (Day 3)',
    venue: 'ICET Innovation Lab',
    registrationFee: '₹200 per team',
    maxParticipants: 150,
    registrationStatus: 'Coming Soon',
    tags: ['Hackathon', 'Coding', 'Innovation', 'Competition'],
  },
];

// Get the latest upcoming event
export function getLatestEvent(): Event | null {
  const now = new Date();
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return upcomingEvents.length > 0 ? upcomingEvents[0] : events[0];
}
