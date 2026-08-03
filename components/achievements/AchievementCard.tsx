'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Achievement } from '@/data/achievements';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full"
    >
      <div className="relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#D4AF37]/90 text-[#111111] border-none font-semibold backdrop-blur-sm">
              {achievement.category}
            </Badge>
          </div>
          
          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37]">{achievement.year}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#D4AF37]">
            {achievement.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#D4AF37] font-medium mb-3">
            {achievement.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 flex-1">
            {achievement.description}
          </p>
        </div>

        {/* Bottom Gold Accent Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
