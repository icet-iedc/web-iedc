'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExecomMember } from '@/data/execom';

export default function ExecomCard({
  member,
  index = 0,
}: {
  member: ExecomMember;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/execom/${member.slug}`}
        className="group flex flex-col items-center text-center"
      >
        {/* Circular Photo */}
        <div className="relative h-24 w-24 sm:h-36 sm:w-36 md:h-36 md:w-36 overflow-hidden rounded-full ring-2 ring-[#D4AF37] sm:ring-white/10 transition-all duration-300 group-hover:scale-110 sm:group-hover:ring-[#D4AF37]">
          <Image
            src={member.photo}
            alt={member.fullName}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Name */}
        <h3 className="mt-3 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-white/75 sm:mt-4 sm:text-base">
          {member.fullName}
        </h3>

        {/* Role */}
        <p className="mt-1 text-xs font-medium text-[#D4AF37] sm:text-sm">{member.role}</p>
      </Link>
    </motion.div>
  );
}