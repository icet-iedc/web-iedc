export interface ExecomMember {
  id: string;
  slug: string;
  fullName: string;
  role: string;
  department: string;
  academicYear: string;
  gender: string;
  email: string;
  phone?: string;
  photo: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
  x?: string;
}

export const execomMembers: ExecomMember[] = [
  {
    id: '1',
    slug: 'muhammed-haleel',
    fullName: 'MUHAMMED HALEEL A',
    role: 'TECHNICAL LEAD',
    department: 'COMPUTER SCIENCE AND ENGINEERING',
    academicYear: '2022-2026',
    gender: 'Male',
    email: 'haleel@iedcicet.in',
    phone: '+91 90000 00000',
    photo: '/images/execom/haleel1.png',
    bio: 'Leads IEDC ICET\u2019s strategy and outreach, focused on turning student ideas into real ventures.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
  },
  {
    id: '2',
    slug: 'jane-doe',
    fullName: 'Jane Doe',
    role: 'Vice Chairperson',
    department: 'Electronics & Communication',
    academicYear: '2022-2026',
    gender: 'Female',
    email: 'jane@iedcicet.in',
    photo: '/images/execom/jane.jpg',
    bio: 'Coordinates cross-department initiatives and represents IEDC at inter-college events.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: '3',
    slug: 'arjun-menon',
    fullName: 'Arjun Menon',
    role: 'Technical Lead',
    department: 'Computer Science',
    academicYear: '2023-2027',
    gender: 'Male',
    email: 'arjun@iedcicet.in',
    photo: '/images/execom/arjun.jpg',
    bio: 'Owns the technical roadmap for IEDC\u2019s in-house tools and workshop content.',
    github: 'https://github.com/example',
    website: 'https://example.dev',
  },
  {
    id: '4',
    slug: 'fathima-noor',
    fullName: 'Fathima Noor',
    role: 'Design Lead',
    department: 'Mechanical Engineering',
    academicYear: '2022-2026',
    gender: 'Female',
    email: 'fathima@iedcicet.in',
    photo: '/images/execom/fathima.jpg',
    bio: 'Shapes the visual identity of IEDC ICET across events, merchandise, and digital platforms.',
    instagram: 'https://instagram.com/example',
    x: 'https://x.com/example',
  },
  {
    id: '5',
    slug: 'aravind-krishnan',
    fullName: 'Aravind Krishnan',
    role: 'Events Lead',
    department: 'Civil Engineering',
    academicYear: '2023-2027',
    gender: 'Male',
    email: 'aravind@iedcicet.in',
    photo: '/images/execom/aravind.jpg',
    bio: 'Plans and executes IEDC\u2019s flagship events, from ideation bootcamps to demo days.',
    linkedin: 'https://linkedin.com/in/example',
  },
  {
    id: '6',
    slug: 'meera-pillai',
    fullName: 'Meera Pillai',
    role: 'Finance Lead',
    department: 'Computer Science',
    academicYear: '2022-2026',
    gender: 'Female',
    email: 'meera@iedcicet.in',
    photo: '/images/execom/meera.jpg',
    bio: 'Manages budgeting, sponsorships, and funding for IEDC-backed student ventures.',
    linkedin: 'https://linkedin.com/in/example',
    github: 'https://github.com/example',
  },
];