'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { GalleryCollection } from '@/data/gallery';
import GalleryViewer from './GalleryViewer';

interface GalleryModalProps {
  isOpen: boolean;
  collection: GalleryCollection | null;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, collection, onClose }: GalleryModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!collection) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50"
            style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            aria-hidden="true"
          />

          {/* Modal Container - Wide layout for horizontal thumbnails */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-auto max-w-[92vw] bg-white rounded-xl shadow-[0_25px_100px_rgba(0,0,0,0.5)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close gallery"
                className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 transition-all duration-300 hover:rotate-90 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gallery Viewer */}
              <GalleryViewer collection={collection} />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
