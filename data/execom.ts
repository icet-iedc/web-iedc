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
    slug: 'dulquer-salmaan',
    fullName: 'Dulquer Salmaan',
    role: 'Chairperson',
    department: 'COMPUTER SCIENCE AND ENGINEERING',
    academicYear: '2022-2026',
    gender: 'Male',
    email: 'haleel@iedcicet.in',
    phone: '+91 90000 00000',
    photo: '/images/execom/dq.jpg',
    bio: 'Leads IEDC ICET\u2019s strategy and outreach, focused on turning student ideas into real ventures.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
  },
  {
    id: '2',
    slug: 'mammootty',
    fullName: 'Mammootty',
    role: 'Vice Chairperson',
    department: 'Electronics & Communication',
    academicYear: '2022-2026',
    gender: 'Female',
    email: 'jane@iedcicet.in',
    photo: '/images/execom/Mammootty.jpg',
    bio: 'Coordinates cross-department initiatives and represents IEDC at inter-college events.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
  },
  {
    id: '3',
    slug: 'virat-kohli',
    fullName: 'Virat Kohli',
    role: 'Technical Lead',
    department: 'Computer Science',
    academicYear: '2023-2027',
    gender: 'Male',
    email: 'arjun@iedcicet.in',
    photo: '/images/execom/virat.jpg',
    bio: 'Owns the technical roadmap for IEDC\u2019s in-house tools and workshop content.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
    //website: 'https://example.dev',
  },
  {
    id: '4',
    slug: 'nivin-pauly',
    fullName: 'Nivin Pauly',
    role: 'Design Lead',
    department: 'Mechanical Engineering',
    academicYear: '2022-2026',
    gender: 'Male',
    email: 'fathima@iedcicet.in',
    photo: '/images/execom/nivin.jpg',
    bio: 'Shapes the visual identity of IEDC ICET across events, merchandise, and digital platforms.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
    //x: 'https://x.com/example',
  },
  {
    id: '5',
    slug: 'messi',
    fullName: ' Lionel Messi',
    role: 'Events Lead',
    department: 'Civil Engineering',
    academicYear: '2023-2027',
    gender: 'Male',
    email: 'aravind@iedcicet.in',
    photo: '/images/execom/messi.jpg',
    bio: 'Plans and executes IEDC\u2019s flagship events, from ideation bootcamps to demo days.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
  },
  {
    id: '6',
    slug: 'ronaldo',
    fullName: 'Cristiano Ronaldo',
    role: 'Finance Lead',
    department: 'Computer Science',
    academicYear: '2022-2026',
    gender: 'Male',
    email: 'meera@iedcicet.in',
    photo: '/images/execom/ronaldo.jpg',
    bio: 'Manages budgeting, sponsorships, and funding for IEDC-backed student ventures.',
    linkedin: 'https://linkedin.com/in/example',
    instagram: 'https://instagram.com/example',
    github: 'https://github.com/example',
  },
];