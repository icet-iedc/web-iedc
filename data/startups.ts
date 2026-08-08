export interface Startup {
  name: string;
  description: string;
  category: string;
  logo: string;
  website: string;
  linkedin: string;
}

export const startups: Startup[] = [
  {
    name: 'NexusAI',
    description: 'Building next-generation generative AI tools for creative professionals to automate their workflows.',
    category: 'Artificial Intelligence',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop',
    website: 'https://example.com/nexusai',
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'EcoSphere',
    description: 'A platform connecting sustainable brands with environmentally conscious consumers using blockchain.',
    category: 'GreenTech',
    logo: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=200&h=200&fit=crop',
    website: 'https://example.com/ecosphere',
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'CyberShield',
    description: 'Enterprise-grade cybersecurity solutions utilizing machine learning for predictive threat detection.',
    category: 'Cybersecurity',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop',
    website: 'https://example.com/cybershield',
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'MediSync',
    description: 'Seamless EHR integration tool designed to bridge the gap between rural clinics and specialized hospitals.',
    category: 'HealthTech',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop',
    website: 'https://example.com/medisync',
    linkedin: 'https://linkedin.com/'
  },
];
