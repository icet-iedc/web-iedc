export interface Startup {
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
    name: 'NexusAI',
    shortDescription: 'Generative AI tools for creative professionals.',
    description: 'Building next-generation generative AI tools for creative professionals to automate their workflows. Our platform significantly reduces the time it takes to create high-quality assets while giving artists fine-grained control over the generated output.',
    category: 'Artificial Intelligence',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop',
    website: 'https://example.com/nexusai',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/'
  },
  {
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
    name: 'CyberShield',
    shortDescription: 'ML-powered enterprise cybersecurity solutions.',
    description: 'Enterprise-grade cybersecurity solutions utilizing machine learning for predictive threat detection. CyberShield proactively identifies and mitigates vulnerabilities before they can be exploited, providing 24/7 protection for critical infrastructure.',
    category: 'Cybersecurity',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop',
    website: 'https://example.com/cybershield',
    linkedin: 'https://linkedin.com/'
  },
  {
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
