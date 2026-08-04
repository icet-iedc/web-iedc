'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AchievementsPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Light source */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white opacity-[0.12] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-white/55 uppercase">
              Coming Soon
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-4">
            Achievements
            <br />
            <span className="text-[#D4AF37]">Coming Soon</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/55 leading-relaxed mb-8">
            We&apos;re preparing a complete showcase of our recognitions, startup success
            stories, awards, and milestones. Stay tuned!
          </p>

          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
