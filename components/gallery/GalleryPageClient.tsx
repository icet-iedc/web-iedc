'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { galleryCollections } from '@/data/gallery';
import type { GalleryCollection } from '@/data/gallery';
import GalleryCard from '@/components/gallery/GalleryCard';
import GalleryModal from '@/components/gallery/GalleryModal';
import Footer from '@/components/Footer';

export default function GalleryPageClient() {
  const reduceMotion = useReducedMotion();
  const [selectedCollection, setSelectedCollection] = useState<GalleryCollection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (collection: GalleryCollection) => {
    setSelectedCollection(collection);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCollection(null), 300);
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

  // Sort collections by date descending (newest first)
  const sortedCollections = [...galleryCollections].sort(
    (a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime()
  );

  return (
    <div className="relative min-h-screen bg-black pt-32">
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Single restrained light source */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white opacity-[0.12] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32 mt-5">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h1
            {...fade(0.1)}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Gallery
          </motion.h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCollections.map((collection, index) => (
            <GalleryCard
              key={collection.id}
              collection={collection}
              index={index}
              onClick={() => handleCardClick(collection)}
            />
          ))}
        </div>
      </div>

      <Footer />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        collection={selectedCollection}
        onClose={handleCloseModal}
      />
    </div>
  );
}
