import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
    return { title: 'Member Not Found | IEDC ICET' };
  }

  return {
    title: `${member.fullName} | Executive Committee`,
    description: `Executive Committee profile of ${member.fullName}.`,
  };
}

export default async function ExecomProfilePage({ params }: Props) {
  const { name } = await params;
  const member = await getExecomMemberBySlug(name);

  if (!member) notFound();

  return (
    <main className="relative min-h-screen bg-black px-6 py-32 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37] opacity-[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-5xl">
        <Link 
          href="/execom"
          className="-ml-3 inline-flex h-8 items-center gap-2 rounded-lg px-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-[#D4AF37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Executive Committee
        </Link>

        <div className="mt-10">
          <ProfileHeader member={member} />
          <SocialLinks member={member} />
          <ProfileInfo member={member} />
        </div>
      </div>
    </main>
  );
}