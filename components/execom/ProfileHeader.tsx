'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExecomMember } from '@/data/execom';

export default function ProfileHeader({ member }: { member: ExecomMember }) {
  return (
    <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:mx-0 md:h-80 md:w-80"
      >
        <Image
          src={member.photo}
          alt={member.fullName}
          fill
          className="object-cover"
          sizes="320px"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-center md:text-left"
      >
        <Badge className="border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/10">
          {member.role}
        </Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {member.fullName}
        </h1>
        <p className="mt-3 text-white/50">
          {member.department} · {member.academicYear}
        </p>
      </motion.div>
    </div>
  );
}