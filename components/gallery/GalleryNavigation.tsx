'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryNavigationProps {
  currentIndex: number;
  totalImages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryNavigation({
  currentIndex,
  totalImages,
  onPrevious,
  onNext,
}: GalleryNavigationProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalImages - 1;

  return (
    <div className="flex items-center justify-between gap-4">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isFirst}
        aria-label="Previous image"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5 group-disabled:translate-x-0" />
      </button>

      {/* Image Counter */}
      <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        <p className="text-sm font-mono text-white">
          Image <span className="text-white font-semibold">{currentIndex + 1}</span> of {totalImages}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isLast}
        aria-label="Next image"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-disabled:translate-x-0" />
      </button>
    </div>
  );
}
