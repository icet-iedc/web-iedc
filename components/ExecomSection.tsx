'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { execomMembers } from '@/data/execom';
import ExecomCard from '@/components/execom/ExecomCard';
import { ArrowRight } from 'lucide-react';

export default function ExecomSection() {
  return (
    <section id="team" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Meet Our{' '}
              <span className="gold-gradient">
                Team
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              The passionate leaders driving innovation and entrepreneurship at IEDC ICET
            </p>
          </motion.div>
        </div>

        {/* Execom Grid */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* First Row: 2 Members Centered */}
          <div className="flex justify-center gap-8 sm:gap-10 lg:gap-12">
            {execomMembers.slice(0, 2).map((member, index) => (
              <div key={member.id} className="w-1/2 sm:w-1/3 lg:w-1/4 max-w-[280px]">
                <ExecomCard member={member} index={index} />
              </div>
            ))}
          </div>
          
          {/* Subsequent Rows: 4 Members Grid */}
          {execomMembers.length > 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {execomMembers.slice(2).map((member, index) => (
                <ExecomCard key={member.id} member={member} index={index + 2} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
