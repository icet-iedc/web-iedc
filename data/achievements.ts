export interface Achievement {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

// Hardcoded achievements data - can be replaced with database later
export const achievements: Achievement[] = [
  {
    id: '1',
    slug: 'national-innovation-award-2024',
    title: 'National Innovation Award 2024',
    subtitle: 'Excellence in Student Entrepreneurship',
    description: 'IEDC ICET received the prestigious National Innovation Award for outstanding contributions to fostering entrepreneurship and innovation among students.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    category: 'Award',
    year: '2024',
  },
  {
    id: '2',
    slug: 'startup-ecosystem-recognition',
    title: 'Best Startup Ecosystem',
    subtitle: 'Kerala State Excellence Award',
    description: 'Recognized as the leading college-level innovation and entrepreneurship development cell in Kerala for creating a thriving startup ecosystem.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    category: 'Recognition',
    year: '2024',
  },
  {
    id: '3',
    slug: 'student-startup-funding-success',
    title: '₹50 Lakh Funding Secured',
    subtitle: 'Student Startup Success Story',
    description: 'Our incubated startup successfully raised seed funding, marking a significant milestone in transforming student ideas into viable businesses.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    category: 'Milestone',
    year: '2024',
  },
  {
    id: '4',
    slug: 'innovation-challenge-winners',
    title: 'Smart India Hackathon Winners',
    subtitle: 'National Level Competition',
    description: 'IEDC ICET teams won multiple prizes at Smart India Hackathon, showcasing exceptional innovation and problem-solving capabilities.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    category: 'Competition',
    year: '2023',
  },
  {
    id: '5',
    slug: 'entrepreneurship-summit-2023',
    title: 'Successful E-Summit 2023',
    subtitle: '500+ Participants Nationwide',
    description: 'Organized the largest student entrepreneurship summit in the region, featuring industry leaders, investors, and aspiring entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
    category: 'Event',
    year: '2023',
  },
];

// Get the latest 3 achievements
export function getLatestAchievements(limit: number = 3): Achievement[] {
  return achievements
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, limit);
}
