'use client';

import { motion } from 'framer-motion';
import { Calendar, Images, ArrowUpRight } from 'lucide-react';
import type { GalleryCollection } from '@/data/gallery';

interface GalleryCardProps {
  collection: GalleryCollection;
  index: number;
  onClick: () => void;
}

export default function GalleryCard({ collection, index, onClick }: GalleryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative w-full text-left overflow-hidden rounded-2xl bg-white/5 border border-white/8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
        <motion.img
          src={collection.coverImage}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Image Count Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <Images className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-medium text-white">{collection.imageCount}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Event Date */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-3.5 h-3.5 text-white/55" />
          <time className="text-xs font-mono text-white/55 tracking-wider">
            {new Date(collection.eventDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-white/75 transition-colors duration-300">
          {collection.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/55 line-clamp-2 mb-4">
          {collection.description}
        </p>

        {/* View Button */}
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <span>View Gallery</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
      </div>
    </motion.button>
  );
}
