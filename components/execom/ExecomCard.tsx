'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ExecomMember } from '@/data/execom';

export default function ExecomCard({
  member,
  index = 0,
}: {
  member: ExecomMember;
  index?: number;
}) {
  const initials = member.fullName
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/execom/${member.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
      >
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(120deg,transparent,rgba(212,175,55,0.12),transparent)]" />

        <div className="relative flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
            <Avatar className="h-24 w-24 border-2 border-white/10 transition-colors duration-300 group-hover:border-[#D4AF37]/60">
              <AvatarImage src={member.photo} alt={member.fullName} className="object-cover" />
              <AvatarFallback className="bg-white/10 text-white">{initials}</AvatarFallback>
            </Avatar>
          </div>

          <h3 className="mt-4 text-base font-semibold text-white">{member.fullName}</h3>
          <p className="mt-1 text-sm font-medium text-[#D4AF37]">{member.role}</p>
          <p className="mt-1 text-xs text-white/50">{member.department}</p>
          <p className="text-xs text-white/40">{member.academicYear}</p>

          <ArrowUpRight className="absolute -top-1 -right-1 h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D4AF37]" />
        </div>
      </Link>
    </motion.div>
  );
}