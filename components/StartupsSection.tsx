'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { startups, type Startup } from '@/data/startups';
import StartupModal from './StartupModal';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function StartupsSection() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  return (
    <section id="startups" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Featured <span className="gold-gradient">Startups</span>
          </h2>
          <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto">
            Meet the innovative startups born from our incubation program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.slice(0, 3).map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedStartup(startup)}
              className="glass rounded-3xl p-6 flex flex-col group hover:bg-white/10 transition-all duration-300 relative border border-white/5 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-white/20 transition-colors bg-white/5">
                  {startup.logo ? (
                    <Image
                      src={startup.logo}
                      alt={`${startup.name} logo`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/50 font-bold text-xl">
                      {startup.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-white transition-colors duration-300 mb-2">
                  {startup.name}
                </h3>
                <p className="text-[#A8A8A8] text-sm leading-relaxed line-clamp-3">
                  {startup.shortDescription}
                </p>
              </div>
              
              <div className="mt-6 flex items-center text-xs text-[#A8A8A8] gap-2 pt-4 border-t border-white/5">
                <span>{startup.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/startups"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 group"
          >
            View All Startups
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
      <StartupModal
        isOpen={!!selectedStartup}
        startup={selectedStartup}
        onClose={() => setSelectedStartup(null)}
      />
    </section>
  );
}
