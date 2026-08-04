'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { GalleryImage } from '@/data/gallery';

interface GalleryThumbnailStripProps {
  images: GalleryImage[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export default function GalleryThumbnailStrip({
  images,
  selectedIndex,
  onSelectImage,
}: GalleryThumbnailStripProps) {
  const selectedThumbnailRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative w-full">
      {/* Thumbnail Strip - Horizontal single row, scrollable on mobile */}
      <div className="flex gap-2 sm:gap-2.5 justify-start sm:justify-center items-center flex-nowrap overflow-x-auto sm:overflow-x-visible pt-2 sm:pt-0 pb-2 sm:pb-0 px-2 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {images.map((image, index) => {
          const isSelected = index === selectedIndex;

          return (
            <motion.button
              key={image.id}
              ref={isSelected ? selectedThumbnailRef : null}
              onClick={() => onSelectImage(index)}
              aria-label={`View image ${index + 1}`}
              aria-current={isSelected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className={`
                relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300
                ${isSelected
                  ? 'border-[#D4AF37] scale-105 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#111111]'
                  : 'border-white/20 hover:border-white/50 hover:scale-105'
                }
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]
              `}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Selected Overlay */}
              {isSelected && (
                <div className="absolute inset-0 bg-[#D4AF37]/10 pointer-events-none" />
              )}

              {/* Hover Overlay */}
              {!isSelected && (
                <div className="absolute inset-0 bg-black/40 hover:bg-black/0 transition-colors duration-300" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
