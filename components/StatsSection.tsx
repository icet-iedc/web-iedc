'use client';

import { motion } from 'framer-motion';
import { Users, Calendar, Rocket, Building2 } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Students' },
    { icon: Calendar, value: '120+', label: 'Events' },
    { icon: Rocket, value: '35+', label: 'Startups' },
    { icon: Building2, value: '15+', label: 'Industry Partners' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-3xl p-8 text-center group hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-4xl md:text-5xl font-bold mb-2 gold-gradient">
                {stat.value}
              </h3>
              <p className="text-[#A8A8A8] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
