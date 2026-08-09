'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Startup } from '@/data/startups';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

interface StartupModalProps {
  isOpen: boolean;
  startup: Startup | null;
  onClose: () => void;
}

export default function StartupModal({ isOpen, startup, onClose }: StartupModalProps) {
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!startup) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl glass rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_25px_100px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 text-white border border-white/10 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Logo Area */}
                <div className="flex flex-col items-center gap-6">
                  <div className="relative w-32 h-32 rounded-3xl overflow-hidden shrink-0 border border-white/10 bg-white/5">
                    {startup.logo ? (
                      <Image
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/50 font-bold text-4xl">
                        {startup.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {startup.linkedin && (
                      <Link
                        href={startup.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                        aria-label={`${startup.name} LinkedIn`}
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </Link>
                    )}
                    {startup.instagram && (
                      <Link
                        href={startup.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                        aria-label={`${startup.name} Instagram`}
                      >
                        <FaInstagram className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 mt-4 md:mt-0">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{startup.name}</h2>
                    <div className="flex items-center text-sm text-[#A8A8A8] gap-2">
                      <span>{startup.category}</span>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/80 leading-relaxed text-lg whitespace-pre-wrap">
                      {startup.description}
                    </p>
                  </div>
                  
                  {startup.website && (
                    <div className="mt-8">
                      <Link
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 group/btn"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  )}
                  
                  {/* Team Members Section */}
                  {startup.teamMembers && startup.teamMembers.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-4">Team</h3>
                      <div className="flex flex-wrap gap-4">
                        {startup.teamMembers.map((member, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-white font-medium">{member}</span>
                            {idx < startup.teamMembers!.length - 1 && (
                              <span className="text-[#A8A8A8] ml-4">•</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
