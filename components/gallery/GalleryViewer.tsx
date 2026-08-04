'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryCollection } from '@/data/gallery';
import GalleryThumbnailStrip from './GalleryThumbnailStrip';

interface GalleryViewerProps {
  collection: GalleryCollection;
}

export default function GalleryViewer({ collection }: GalleryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDirection, setImageDirection] = useState(0);

  const handlePrevious = useCallback(() => {
    setImageDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Go to last image when at first
      setCurrentIndex(collection.images.length - 1);
    }
  }, [currentIndex, collection.images.length]);

  const handleNext = useCallback(() => {
    setImageDirection(1);
    if (currentIndex < collection.images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Go to first image when at last
      setCurrentIndex(0);
    }
  }, [currentIndex, collection.images.length]);

  const handleSelectImage = useCallback((index: number) => {
    setImageDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  const currentImage = collection.images[currentIndex];

  return (
    <div className="flex flex-col items-center w-full bg-transparent">
      {/* Main Image Container with Navigation */}
      <div className="relative flex items-center justify-center w-full gap-2 sm:gap-4 px-0 sm:px-6 py-4 sm:py-8">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          aria-label="Previous image"
          className="absolute left-2 sm:relative sm:left-auto z-10 group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 sm:bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] flex-shrink-0"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#D4AF37] transition-colors duration-300 sm:group-hover:-translate-x-0.5" />
        </button>

        {/* Main Image - Fixed container size */}
        <div className="relative w-[85vw] h-[55vh] sm:w-[380px] sm:h-[480px] md:w-[420px] md:h-[520px] flex items-center justify-center bg-black/40 border border-white/5 rounded-2xl overflow-hidden mx-auto">
          <AnimatePresence mode="wait" custom={imageDirection}>
            <motion.div
              key={currentImage.id}
              custom={imageDirection}
              initial={{ opacity: 0, x: imageDirection * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: imageDirection * -50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2 sm:relative sm:right-auto z-10 group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 sm:bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] flex-shrink-0"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#D4AF37] transition-colors duration-300 sm:group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Thumbnail Strip - Horizontal single row */}
      <div className="w-full border-t border-white/10 bg-transparent px-4 py-4">
        <GalleryThumbnailStrip
          images={collection.images}
          selectedIndex={currentIndex}
          onSelectImage={handleSelectImage}
        />
      </div>
    </div>
  );
}
