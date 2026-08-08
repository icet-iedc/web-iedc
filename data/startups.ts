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
}

export const startups: Startup[] = [
  {
    id: '1',
    name: 'DaytX Private limited',
    shortDescription: 'DAYTX Private Limited develops intelligent engineering solutions through research and innovation in AI, robotics, sustainability, cybersecurity, and technology.',
    description: 'DAYTX Private Limited is a research and technology-driven company dedicated to advancing innovation through the development of intelligent engineering solutions. The Company specializes in artificial intelligence, robotics, disaster management, energy management, sustainable development, waste management, cybersecurity, and technology consulting. By integrating cutting-edge research with practical applications, DAYTX Private Limited is committed to delivering scalable, reliable, and impactful solutions that address complex global challenges while fostering resilience, operational excellence, and sustainable progress.',
    category: 'Robotics',
    logo: '/images/startup/DaytX.jpeg',
    website: 'https://website-creator--amarashique.replit.app/',
    linkedin: 'https://www.linkedin.com/company/daytx-private-limited/',
    //instagram: 'https://instagram.com/'
  },
  {
    id: '2',
    name: 'EcoSphere',
    shortDescription: 'Connecting sustainable brands with consumers.',
    description: 'A platform connecting sustainable brands with environmentally conscious consumers using blockchain. We verify the supply chain of every product on our platform to ensure that what you buy is truly sustainable from start to finish.',
    category: 'GreenTech',
    logo: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=200&h=200&fit=crop',
    website: 'https://example.com/ecosphere',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/'
  },
  {
    id: '3',
    name: 'CyberShield',
    shortDescription: 'ML-powered enterprise cybersecurity solutions.',
    description: 'Enterprise-grade cybersecurity solutions utilizing machine learning for predictive threat detection. CyberShield proactively identifies and mitigates vulnerabilities before they can be exploited, providing 24/7 protection for critical infrastructure.',
    category: 'Cybersecurity',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop',
    website: 'https://example.com/cybershield',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: '4',
    name: 'MediSync',
    shortDescription: 'Seamless EHR integration for rural clinics.',
    description: 'Seamless EHR integration tool designed to bridge the gap between rural clinics and specialized hospitals. MediSync ensures patient data flows securely and accurately across different medical systems, improving the quality of remote care.',
    category: 'HealthTech',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop',
    website: 'https://example.com/medisync',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/'
  },
];
