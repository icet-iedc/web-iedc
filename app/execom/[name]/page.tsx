import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteUrl } from '@/lib/seo';
import { getAllExecomMembers, getExecomMemberBySlug } from '@/lib/execom';
import ProfileHeader from '@/components/execom/ProfileHeader';
import ProfileInfo from '@/components/execom/ProfileInfo';
import SocialLinks from '@/components/execom/SocialLinks';

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const members = await getAllExecomMembers();
  return members.map((member) => ({ name: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const member = await getExecomMemberBySlug(name);

  if (!member) {
    return {
      title: 'Member Not Found',
      robots: { index: false, follow: false },
    };
  }

  const title = `${member.fullName} – ${member.role}`;
  const description = `${member.fullName} serves as ${member.role} in the ${member.department} department at IEDC ICET, Ilahia College of Engineering and Technology.`;

  // Use member photo if it's an absolute URL or a known local asset
  const memberPhoto = member.photo.startsWith('http')
    ? member.photo
    : `${siteUrl}${member.photo}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/execom/${member.slug}`,
    },
    openGraph: {
      title: `${member.fullName} | IEDC ICET`,
      description,
      url: `/execom/${member.slug}`,
      images: [
        {
          url: memberPhoto,
          alt: `${member.fullName} – ${member.role} at IEDC ICET`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${member.fullName} | IEDC ICET`,
      description,
      images: [memberPhoto],
    },
  };
}

export default async function ExecomProfilePage({ params }: Props) {
  const { name } = await params;
  const member = await getExecomMemberBySlug(name);

  if (!member) notFound();

  return (
    <main className="relative h-screen overflow-hidden bg-black px-6 py-32 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white opacity-[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-5xl h-full flex flex-col justify-center mt-15">
        <div>
          <ProfileHeader member={member} />
        </div>
      </div>
    </main>
  );
}