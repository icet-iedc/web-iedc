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
    <main className="relative min-h-screen bg-[#111111] px-4 py-24 sm:px-6 md:px-10 md:py-32 overflow-x-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] sm:h-[400px] sm:w-[700px] md:h-[500px] md:w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37] opacity-[0.07] blur-[120px] md:blur-[160px]" />

      <div className="relative mx-auto max-w-7xl mt-5">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Executive Committee
          </h1>
          <p className="mt-3 text-sm text-white/60 sm:mt-4 sm:text-base md:text-lg">
            Meet the passionate student leaders driving innovation,
            entrepreneurship, and technology at IEDC ICET.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {members.map((member, index) => (
            <ExecomCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}