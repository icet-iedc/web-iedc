export interface Startup {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  logo: string;
  website: string;
  linkedin: string;
  instagram?: string;
  teamMembers?: string[];
}

export const startups: Startup[] = [
  {
    id: '1',
    name: 'DaytX Private limited',
    shortDescription: 'DAYTX Private Limited develops intelligent engineering solutions through research and innovation in AI, robotics, sustainability, cybersecurity, and technology.',
    description: 'DAYTX Private Limited is a research-driven deep-tech company building scalable solutions for complex global challenges. Through AI, robotics, cybersecurity, energy, sustainability, and advanced engineering, we transform innovative ideas into high-impact technologies designed for real-world adoption, long-term growth, and global markets.',
    category: 'Robotics',
    logo: '/images/startup/DaytX.jpeg',
    website: 'https://website-creator--amarashique.replit.app/',
    linkedin: 'https://www.linkedin.com/company/daytx-private-limited/',
    //instagram: 'https://instagram.com/',
    teamMembers: ['Amar Ashique', 'Athwifamol A M', 'Muhammed Thaha', 'Aparna J Nair', 'Alshifa Rajeesh']
  },
  {
    id: '2',
    name: 'Zaasio Technology',
    shortDescription: 'Zaasio Technology is a software development company that focuses on delivering innovative digital solutions and technology services.',
    description: 'Zaasio Technology is an innovative SaaS company building intelligent, cloud-based solutions that help businesses streamline operations, boost productivity, and scale efficiently. With AI, ML, automation, and real-time data insights, Zaasio delivers practical, scalable software that solves real-world challenges and drives transformation.',
    category: 'IT Services and IT Consulting',
    logo: '/images/startup/zaasio_logo.jpg',
    website: 'https://zaasio.com/',
    linkedin: 'https://www.linkedin.com/company/zaasio',
    //instagram: 'https://instagram.com/',
    teamMembers: ['Mohammed Haris A P', 'B A Abdul Rahman', 'Muhammad Rizwan']
  },
];
