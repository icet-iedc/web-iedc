'use client';

import { Globe, X } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import type { ExecomMember } from '@/data/execom';

const socialConfig = [
  { key: 'linkedin', icon: FaLinkedin, label: 'LinkedIn' },
  { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
  { key: 'github', icon: FaGithub, label: 'GitHub' },
  { key: 'website', icon: Globe, label: 'Portfolio' },
  { key: 'x', icon: X, label: 'X (Twitter)' },
] as const;

export default function SocialLinks({ member }: { member: ExecomMember }) {
  const active = socialConfig.filter((s) => member[s.key]);
  if (active.length === 0) return null;

  const linkClass =
    'group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:scale-110 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]';

  return (
    <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
      {active.map(({ key, icon: Icon, label }) => (
        <a
          key={key}
          href={member[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={linkClass}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}