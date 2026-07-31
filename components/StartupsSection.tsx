'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function StartupsSection() {
  const startups = [
    {
      name: 'TechVenture',
      description: 'AI-powered educational platform revolutionizing online learning',
      category: 'EdTech',
    },
    {
      name: 'GreenFlow',
      description: 'Sustainable agriculture solutions using IoT and automation',
      category: 'AgriTech',
    },
    {
      name: 'HealthBridge',
      description: 'Connecting patients with healthcare providers seamlessly',
      category: 'HealthTech',
    },
  ];

  return (
    <section id="startups" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full" />
      
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

        <div className="space-y-6">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="glass rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 group hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-[#D4AF37] transition-colors duration-300">
                    {startup.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold">
                    {startup.category}
                  </span>
                </div>
                <p className="text-[#A8A8A8]">{startup.description}</p>
              </div>
              <button className="flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-all duration-300 group/btn">
                Visit
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
