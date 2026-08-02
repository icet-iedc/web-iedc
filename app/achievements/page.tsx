'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Award, Trophy, Star } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37]" />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Achievements{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          We're currently preparing a complete showcase of our achievements, recognitions, startup success stories, awards, and milestones. Please check back soon.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {[
            { icon: Award, text: 'Awards' },
            { icon: Trophy, text: 'Recognitions' },
            { icon: Star, text: 'Milestones' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
            >
              <item.icon className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm sm:text-base text-white font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mb-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">15+</div>
            <div className="text-xs sm:text-sm text-gray-400">Awards</div>
          </div>
          <div className="text-center border-l border-r border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">10+</div>
            <div className="text-xs sm:text-sm text-gray-400">Startups</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">50+</div>
            <div className="text-xs sm:text-sm text-gray-400">Recognitions</div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#111111] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-sm text-gray-500"
        >
          Stay tuned for our complete achievement showcase
        </motion.p>
      </div>
    </div>
  );
}
