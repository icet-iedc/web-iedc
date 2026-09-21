'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Lightbulb, Handshake, HelpCircle } from 'lucide-react';
import type { CommunityRequestType } from './types';

interface Option {
  type: CommunityRequestType;
  icon: React.ElementType;
  title: string;
  description: string;
}

const OPTIONS: Option[] = [
  {
    type: 'join',
    icon: Users,
    title: 'Join the IEDC Community',
    description: 'Become a member and get involved.',
  },
  {
    type: 'idea',
    icon: Lightbulb,
    title: 'Have an idea?',
    description: 'Tell us about your idea and let\'s explore it.',
  },
  {
    type: 'collaboration',
    icon: Handshake,
    title: 'Want to collaborate?',
    description: 'Let\'s build something meaningful together.',
  },
  {
    type: 'question',
    icon: HelpCircle,
    title: 'Have a question?',
    description: 'We\'re here to help.',
  },
];

interface CommunityOptionsProps {
  onSelect: (type: CommunityRequestType) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function CommunityOptions({ onSelect }: CommunityOptionsProps) {
  return (
    <motion.div
      key="options"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-3"
    >
      {OPTIONS.map((option, i) => {
        const Icon = option.icon;
        return (
          <motion.button
            key={option.type}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            onClick={() => onSelect(option.type)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(option.type);
              }
            }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl
              border border-white/8 bg-white/3 hover:bg-white/6 hover:border-[#D4AF37]/40
              transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2"
            aria-label={option.title}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/8
              group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10
              flex items-center justify-center transition-all duration-300"
            >
              <Icon
                className="w-5 h-5 text-white/50 group-hover:text-[#D4AF37] transition-colors duration-300"
                strokeWidth={1.5}
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-white leading-snug">{option.title}</p>
              <p className="text-[13px] text-white/45 mt-0.5 leading-snug">{option.description}</p>
            </div>

            {/* Arrow */}
            <ArrowRight
              className="flex-shrink-0 w-4 h-4 text-white/25 group-hover:text-[#D4AF37]
                group-hover:translate-x-0.5 transition-all duration-300"
              strokeWidth={2}
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
}
