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

          {/* Subsequent Rows: Main Execom Grid */}
          {execomMembers.length > 4 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {execomMembers.slice(2, -2).map((member, index, arr) => {
                const isSecondToLast = index === arr.length - 2;
                const hasTwoOnLastRowLg = arr.length % 4 === 2;

                return (
                  <div
                    key={member.id}
                    className={isSecondToLast && hasTwoOnLastRowLg ? 'lg:col-start-2' : ''}
                  >
                    <ExecomCard member={member} index={index + 2} />
                  </div>
                );
              })}
            </div>
          )}

          {/* Developers Section */}
          {/* Developers Section */}
          {execomMembers.length >= 4 && (
            <div className="mt-8 sm:mt-12 pt-12 sm:pt-16 border-t border-white/5">
              <div className="text-center mb-10 sm:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Web <span className="gold-gradient">Developers</span>
                  </h3>
                </motion.div>
              </div>
              
              <div className="flex justify-center gap-8 sm:gap-10 lg:gap-12">
                {execomMembers.slice(-2).map((member, index) => {
                  const devRole = index === 0 ? 'Full Stack Developer' : 'Backend Developer';
                  return (
                    <div key={member.id} className="w-1/2 sm:w-1/3 lg:w-1/4 max-w-[280px]">
                      <ExecomCard 
                        member={{...member, role: devRole}} 
                        index={execomMembers.length - 2 + index} 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
