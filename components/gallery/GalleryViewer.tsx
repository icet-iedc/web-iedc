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
    if (currentIndex > 0) {
      setImageDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < collection.images.length - 1) {
      setImageDirection(1);
      setCurrentIndex((prev) => prev + 1);
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
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === collection.images.length - 1;

  return (
    <div className="flex flex-col items-center w-full bg-black/90">
      {/* Main Image Container with Navigation */}
      <div className="relative flex items-center justify-center gap-4 px-6 py-8">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={isFirst}
          aria-label="Previous image"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 flex-shrink-0"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 transition-transform duration-300 group-hover:-translate-x-0.5 group-disabled:translate-x-0" />
        </button>

        {/* Main Image - Fixed container size */}
        <div className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] md:w-[420px] md:h-[520px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
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
          disabled={isLast}
          aria-label="Next image"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 flex-shrink-0"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 transition-transform duration-300 group-hover:translate-x-0.5 group-disabled:translate-x-0" />
        </button>
      </div>

      {/* Thumbnail Strip - Horizontal single row */}
      <div className="w-full border-t border-gray-200 bg-gray-50 px-4 py-4">
        <GalleryThumbnailStrip
          images={collection.images}
          selectedIndex={currentIndex}
          onSelectImage={handleSelectImage}
        />
      </div>
    </div>
  );
}
