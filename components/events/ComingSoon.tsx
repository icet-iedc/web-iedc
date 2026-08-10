'use client';

import { motion, useReducedMotion } from 'framer-motion';

const BANDS = [
  { top: '8%', bg: 'bg-white', text: 'text-black', dir: 1, speed: 28, size: 'text-sm sm:text-base' },
  { top: '24%', bg: 'bg-black', text: 'text-white', dir: -1, speed: 22, size: 'text-sm sm:text-base' },
  { top: '42%', bg: 'bg-white', text: 'text-black', dir: 1, speed: 34, size: 'text-sm sm:text-base' },
  { top: '60%', bg: 'bg-black', text: 'text-white', dir: -1, speed: 25, size: 'text-sm sm:text-base' },
  { top: '76%', bg: 'bg-white', text: 'text-black', dir: 1, speed: 30, size: 'text-sm sm:text-base' },
  { top: '90%', bg: 'bg-black', text: 'text-white', dir: -1, speed: 20, size: 'text-xs sm:text-sm' },
];

const LABEL = 'COMING SOON';
const REPEAT = 8;

function MarqueeBand({
  bg,
  text,
  top,
  dir,
  speed,
  size,
  reduced,
}: {
  bg: string;
  text: string;
  top: string;
  dir: number;
  speed: number;
  size: string;
  reduced: boolean;
}) {
  const content = Array.from({ length: REPEAT }, (_, i) => (
    <span key={i} className="whitespace-nowrap">
      {LABEL}
      <span className="mx-6 sm:mx-10 opacity-40">·</span>
    </span>
  ));

  const animProps = reduced
    ? {}
    : {
      animate: { x: dir === 1 ? ['0%', '-50%'] : ['-50%', '0%'] },
      transition: { duration: speed, ease: 'linear' as const, repeat: Infinity },
    };

  return (
    <div
      aria-hidden="true"
      className={`absolute w-[200%] left-[-50%] py-2 sm:py-2.5 ${bg} overflow-hidden`}
      style={{ top, transform: 'rotate(-10deg)', transformOrigin: 'center center' }}
    >
      <motion.div
        className={`flex items-center font-black uppercase tracking-[0.15em] ${text} ${size}`}
        {...animProps}
        style={{ width: '200%' }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
}

export default function ComingSoon() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label="No upcoming events — coming soon"
      className="relative mx-auto w-full max-w-2xl xl:max-w-3xl"
    >
      {/* Outer composition container — clips all bands */}
      <div
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
        style={{ height: 'clamp(320px, 45vw, 520px)' }}
      >
        {/* Dark tinted backdrop matching site background */}
        <div className="absolute inset-0 bg-[#111111]" />

        {/* Animated diagonal bands — rendered behind card */}
        {BANDS.map((band, i) => (
          <MarqueeBand key={i} {...band} reduced={!!shouldReduce} />
        ))}

        {/* Central white card — sits above bands via z-index */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-xl sm:rounded-2xl px-10 sm:px-16 py-7 sm:py-10 shadow-[0_8px_60px_rgba(0,0,0,0.6)] text-center select-none"
          >
            <p
              className="font-black uppercase leading-none text-black"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              COMING
            </p>
            <p
              className="font-black uppercase leading-none text-black"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              SOON
            </p>

            {/* Gold accent line */}
            <div className="mt-3 sm:mt-4 mx-auto h-[3px] w-16 sm:w-24 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700]" />
          </motion.div>
        </div>

        {/* Subtle gold glow ring around composition */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-[#D4AF37]/20 pointer-events-none z-20" />
      </div>
    </motion.div>
  );
}
