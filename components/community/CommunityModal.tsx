'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Loader2 } from 'lucide-react';
import type { CommunityRequestType, ModalView, SubmitStatus } from './types';
import CommunityOptions from './CommunityOptions';
import CommunityForm, { FORM_CONFIG, type CommunityFormHandle } from './CommunityForm';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommunityModal({ isOpen, onClose }: CommunityModalProps) {
  const [view, setView] = useState<ModalView>('options');
  const [selectedType, setSelectedType] = useState<CommunityRequestType | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<CommunityFormHandle>(null);

  function handleClose() {
    onClose();
    setTimeout(() => {
      setView('options');
      setSelectedType(null);
      setSubmitStatus('idle');
    }, 350);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => closeButtonRef.current?.focus(), 100);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
   
  }, [isOpen]);

  function handleSelect(type: CommunityRequestType) {
    setSelectedType(type);
    setSubmitStatus('idle');
    setView('form');
   
    requestAnimationFrame(() => {
      if (scrollAreaRef.current) scrollAreaRef.current.scrollTop = 0;
    });
  }

  function handleBack() {
    setView('options');
    setSelectedType(null);
    setSubmitStatus('idle');
    requestAnimationFrame(() => {
      if (scrollAreaRef.current) scrollAreaRef.current.scrollTop = 0;
    });
  }

  const isSubmitting = submitStatus === 'submitting';
  const isSuccess = submitStatus === 'success';
  const showFooter = view === 'form' && selectedType && !isSuccess;
  const config = selectedType ? FORM_CONFIG[selectedType] : null;

  const headerTitle = view === 'options' ? (
    <>Become part of our<br className="hidden sm:block" /> community.</>
  ) : (
    config?.title
  );

  const headerDescription = view === 'options'
    ? 'Connect, create, collaborate and turn your ideas into impact with IEDC ICET.'
    : config?.description;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/75"
            style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            aria-hidden="true"
          />

     
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="community-modal-title"
              className="
                relative flex flex-col
                w-full max-w-lg
                max-h-[90vh] sm:max-h-[85vh]
                bg-[#111111] border border-white/10 rounded-3xl
                shadow-[0_32px_120px_rgba(0,0,0,0.7)]
                overflow-hidden pointer-events-auto
              "
              onClick={(e) => e.stopPropagation()}
            >
         
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-10" />

              
              <div className="flex-shrink-0 px-7 pt-8 pb-5 sm:px-9 sm:pt-9 sm:pb-6 relative">
                <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-[#D4AF37]/80 mb-3">
                  IEDC · ICET
                </span>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={view}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    id="community-modal-title"
                    className="text-[26px] sm:text-3xl font-bold text-white leading-tight tracking-tight pr-12"
                  >
                    {headerTitle}
                  </motion.h2>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={view}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 text-[14px] text-white/45 leading-relaxed pr-12"
                  >
                    {headerDescription}
                  </motion.p>
                </AnimatePresence>

               
                <button
                  ref={closeButtonRef}
                  onClick={handleClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20
                    w-9 h-9 flex items-center justify-center rounded-full
                    bg-white/5 hover:bg-white/12 border border-white/8 hover:border-white/20
                    text-white/60 hover:text-white transition-all duration-200
                    focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2"
                >
                  <X className="w-4 h-4" strokeWidth={2} />
                </button>

                {/* Divider beneath header */}
                <div className="absolute bottom-0 left-7 right-7 sm:left-9 sm:right-9 h-px bg-white/6" />
              </div>

     
              <div
                ref={scrollAreaRef}
                className="
                  modal-scroll
                  flex-1 min-h-0
                  overflow-y-auto overscroll-contain
                  py-5 sm:py-6
                  pl-7 sm:pl-9
                  pr-4 sm:pr-5
                  mr-3 sm:mr-4
                "
                tabIndex={0}
              >
                <AnimatePresence mode="wait">
                  {view === 'options' ? (
                    <CommunityOptions key="options" onSelect={handleSelect} />
                  ) : selectedType ? (
                    <CommunityForm
                      key={`form-${selectedType}`}
                      ref={formRef}
                      requestType={selectedType}
                      onClose={handleClose}
                      onStatusChange={setSubmitStatus}
                    />
                  ) : null}
                </AnimatePresence>
              </div>

              
              <AnimatePresence>
                {showFooter && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="
                      flex-shrink-0
                      flex items-center justify-between gap-3
                      px-7 py-4 sm:px-9 sm:py-5
                      border-t border-white/8
                      bg-[#111111]/95
                    "
                  >
                    {/* Back */}
                    <button
                      onClick={handleBack}
                      disabled={isSubmitting}
                      aria-label="Go back to options"
                      className="
                        inline-flex items-center gap-1.5 text-[13px] text-white/45
                        hover:text-white transition-colors duration-200 group
                        disabled:opacity-30 disabled:cursor-not-allowed
                      "
                    >
                      <ArrowLeft
                        className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200"
                        strokeWidth={2}
                      />
                      Back
                    </button>

                    {/* Submit */}
                    <button
                      onClick={() => formRef.current?.submit()}
                      disabled={isSubmitting}
                      className="
                        inline-flex items-center justify-center gap-2
                        px-6 py-2.5 rounded-full
                        bg-[#D4AF37] text-[#111111] text-[13px] font-semibold
                        hover:bg-[#FFD700] active:scale-[0.97]
                        transition-all duration-200
                        disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100
                      "
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        config?.submitLabel ?? 'Submit →'
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
