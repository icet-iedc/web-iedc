import type { Metadata } from 'next';
import { getAllExecomMembers } from '@/lib/execom';
import ExecomCard from '@/components/execom/ExecomCard';

export const metadata: Metadata = {
  title: 'Executive Committee | IEDC ICET',
  description:
    'Meet the passionate student leaders driving innovation, entrepreneurship, and technology at IEDC ICET.',
};

export default async function ExecomPage() {
  const members = await getAllExecomMembers();

  return (
    <main className="relative min-h-screen bg-black px-6 py-32 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37] opacity-[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Executive Committee
          </h1>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Meet the passionate student leaders driving innovation,
            entrepreneurship, and technology at IEDC ICET.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <ExecomCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}