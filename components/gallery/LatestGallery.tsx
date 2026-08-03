'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getLatestCollections } from '@/data/gallery';
import type { GalleryCollection } from '@/data/gallery';
import GalleryCard from './GalleryCard';
import GalleryModal from './GalleryModal';

export default function LatestGallery() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [selectedCollection, setSelectedCollection] = useState<GalleryCollection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const latestCollections = getLatestCollections(3);

  const handleCardClick = (collection: GalleryCollection) => {
    setSelectedCollection(collection);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing collection to allow exit animation
    setTimeout(() => setSelectedCollection(null), 300);
  };

  const handleViewAllClick = () => {
    router.push('/gallery');
  };

  const fade = (delay = 0, y = 20) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-50px' },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-black">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Subtle Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D4AF37] opacity-[0.08] blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              {...fade(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-white/55 uppercase">
                Gallery
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...fade(0.1, 26)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4"
            >
              Capturing Innovation,
              <br />
              <span className="text-[#D4AF37]">One Moment at a Time</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              {...fade(0.2, 16)}
              className="max-w-2xl mx-auto text-base md:text-lg text-white/55 leading-relaxed"
            >
              Explore highlights from our latest workshops, hackathons, startup events,
              and community activities.
            </motion.p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {latestCollections.map((collection, index) => (
              <GalleryCard
                key={collection.id}
                collection={collection}
                index={index}
                onClick={() => handleCardClick(collection)}
              />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            {...fade(0.4)}
            className="flex justify-center"
          >
            <button
              onClick={handleViewAllClick}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>View All Gallery</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        collection={selectedCollection}
        onClose={handleCloseModal}
      />
    </>
  );
}
