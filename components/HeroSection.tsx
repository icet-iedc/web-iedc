'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fade = (delay = 0, y = 20) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0E1A]">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(139,147,166,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,147,166,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Single restrained light source, tied to brand color */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[var(--primary)] opacity-[0.12] blur-[160px] pointer-events-none" />

      {/* Registration marks */}
      <RegistrationMark className="top-8 left-8" />
      <RegistrationMark className="top-8 right-8" />
      <RegistrationMark className="bottom-8 left-8" />
      <RegistrationMark className="bottom-8 right-8" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
          <div>
            {/* Eyebrow */}
            <motion.div
              {...fade(0)}
              className="flex items-center gap-3 mb-8 font-mono text-xs tracking-[0.25em] text-[#8B93A6] uppercase"
            >
              <span className="w-8 h-px bg-[#8B93A6]" />
              IEDC · ICET — Build Log №014
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fade(0.1, 26)}
              className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold leading-[0.98] tracking-tight text-[#F2EFE9]"
            >
              Empowering{' '}
              <span className="relative inline-block text-[var(--primary)]">
                Ideas
                <AnnotationCallout label="42 ventures incubated" />
              </span>
              .
              <br />
              Building Startups.
              <br />
              Creating Impact.
            </motion.h1>

            <motion.p
              {...fade(0.3, 16)}
              className="mt-8 max-w-xl text-base md:text-lg text-[#8B93A6] leading-relaxed"
            >
              IEDC ICET turns engineering students into founders — through
              entrepreneurship programs, hands-on labs, mentorship, and a
              community built for people who&apos;d rather ship than wait.
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fade(0.45, 16)}
              className="mt-10 flex flex-row items-center gap-3 sm:gap-4"
            >
              <button className="group inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-[#F2EFE9] px-4 sm:px-7 py-3.5 rounded-md font-medium text-sm tracking-wide transition-transform duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                Explore IEDC
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group relative inline-flex items-center justify-center px-4 sm:px-7 py-3.5 font-mono text-sm tracking-wide text-[#F2EFE9] transition-colors duration-300 hover:text-[var(--primary)] whitespace-nowrap">
                <CornerBrackets />
                Join Community
              </button>
            </motion.div>
          </div>

          {/* Spec sheet — desktop only */}
          <motion.div
            {...fade(0.55, 0)}
            className="hidden lg:block border-l border-white/10 pl-8 font-mono text-xs text-[#8B93A6] leading-loose"
          >
            <SpecLine k="EST." v="2019" />
            <SpecLine k="MEMBERS" v="300+" />
            <SpecLine k="VENTURES" v="42" />
            <SpecLine k="STATUS" v="ACTIVE" accent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RegistrationMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute w-6 h-6 text-white/20 pointer-events-none ${className}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 0V24M0 12H24" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 transition-colors group-hover:border-[var(--primary)]" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 transition-colors group-hover:border-[var(--primary)]" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 transition-colors group-hover:border-[var(--primary)]" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 transition-colors group-hover:border-[var(--primary)]" />
    </>
  );
}

function AnnotationCallout({ label }: { label: string }) {
  return (
    <span className="hidden md:inline-flex absolute left-[104%] top-1/2 -translate-y-1/2 items-center whitespace-nowrap">
      <svg width="72" height="2" className="text-white/20">
        <line
          x1="0"
          y1="1"
          x2="72"
          y2="1"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      </svg>
      <span className="ml-2 font-mono text-xs tracking-wide text-[#8B93A6]">
        {label}
      </span>
    </span>
  );
}

function SpecLine({
  k,
  v,
  accent = false,
}: {
  k: string;
  v: string;
  accent?: boolean;
}) {
  return (
    <div className="flex justify-between gap-6 py-1 border-b border-white/5 last:border-0">
      <span>{k}</span>
      <span className={accent ? 'text-[var(--primary)]' : 'text-[#F2EFE9]'}>
        {v}
      </span>
    </div>
  );
}