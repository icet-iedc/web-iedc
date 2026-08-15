import type { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllExecomMembers } from '@/lib/execom';
import ExecomCard from '@/components/execom/ExecomCard';

export const metadata: Metadata = {
  title: 'Executive Committee',
  description:
    'Meet the passionate student leaders, nodal officers, and innovators who drive IEDC ICET. Our Executive Committee represents diverse engineering disciplines united by a shared mission of entrepreneurship and innovation.',
  alternates: {
    canonical: '/execom',
  },
  openGraph: {
    title: 'Executive Committee | IEDC ICET',
    description:
      'Meet the passionate student leaders and nodal officers who drive innovation and entrepreneurship at IEDC ICET.',
    url: '/execom',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'IEDC ICET Executive Committee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Committee | IEDC ICET',
    description:
      'Meet the passionate student leaders and nodal officers who drive innovation and entrepreneurship at IEDC ICET.',
    images: [siteConfig.defaultOgImage],
  },
};

export default async function ExecomPage() {
  const members = await getAllExecomMembers();

  return (
    <main className="relative min-h-screen bg-[#111111] px-4 py-24 sm:px-6 md:px-10 md:py-32 overflow-x-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] sm:h-[400px] sm:w-[700px] md:h-[500px] md:w-[900px] -translate-x-1/2 rounded-full bg-white opacity-[0.07] blur-[120px] md:blur-[160px]" />

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

        <div className="mt-12 flex flex-col gap-8 sm:mt-16 sm:gap-10 lg:gap-12 mb-12">
          {/* First Row: 2 Members Centered (Nodal Officers) */}
          <div className="flex justify-center gap-8 sm:gap-10 lg:gap-12">
            {members.slice(0, 2).map((member, index) => (
              <div key={member.id} className="w-1/2 sm:w-1/3 lg:w-1/4 max-w-[280px]">
                <ExecomCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Subsequent Rows: Main Execom Grid */}
          {members.length > 4 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {members.slice(2, -2).map((member, index, arr) => {
                const isSecondToLast = index === arr.length - 2;
                const hasTwoOnLastRowLg = arr.length % 4 === 2;

                return (
                  <div
                    key={member.id}
                    className={isSecondToLast && hasTwoOnLastRowLg ? 'lg:col-start-2' : ''}
                  >
                    <ExecomCard member={member} index={index + 2} />
                  </div>
                );
              })}
            </div>
          )}

          {/* Web Developers Section */}
          {members.length >= 4 && (
            <div className="mt-8 sm:mt-12 pt-12 sm:pt-16 border-t border-white/5">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                  Web <span className="gold-gradient">Developers</span>
                </h2>
              </div>

              <div className="flex justify-center gap-8 sm:gap-10 lg:gap-12">
                {members.slice(-2).map((member, index) => {
                  const devRole = index === 0 ? 'Full Stack Developer' : 'Backend Developer';
                  return (
                    <div key={member.id} className="w-1/2 sm:w-1/3 lg:w-1/4 max-w-[280px]">
                      <ExecomCard
                        member={{ ...member, role: devRole }}
                        index={members.length - 2 + index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}