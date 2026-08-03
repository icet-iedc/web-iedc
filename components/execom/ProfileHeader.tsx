'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExecomMember } from '@/data/execom';
import SocialLinks from './SocialLinks';

export default function ProfileHeader({ member }: { member: ExecomMember }) {
  return (
    <div className="grid gap-10 md:grid-cols-[448px_1fr] md:items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto h-96 w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:mx-0 md:h-[28rem] md:w-full"
      >
        <Image
          src={member.photo}
          alt={member.fullName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 384px, 448px"
          priority
          style={{
            objectPosition: "center 15%",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl text-transform: uppercase">
          {member.fullName}
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl text-transform: uppercase">
          {member.role}
        </h2>
        <p className="mt-3 text-white/60 text-transform: uppercase">
          {member.department}
        </p>
        <p className="mt-1 text-sm text-white/40 ">
          {member.academicYear}
        </p>
      <SocialLinks member={member} />
      </motion.div>
    </div>
  );
}