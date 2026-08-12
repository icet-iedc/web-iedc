'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Rocket } from 'lucide-react';

export default function StartupsComingSoon() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-white opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full" />
            <div className="relative p-6 glass rounded-full border border-white/10">
              <Rocket className="w-16 h-16 text-[#D4AF37]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Startup Directory <br />
            <span className="gold-gradient">Coming Soon</span>
          </h1>

          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto mb-12 leading-relaxed">
            We are working hard to bring you a comprehensive directory of all the incredible startups incubated at IEDC. Stay tuned!
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
