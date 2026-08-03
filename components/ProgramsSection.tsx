'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Zap, Code, Users, TrendingUp, Rocket } from 'lucide-react';

export default function ProgramsSection() {
  const programs = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Transform ideas into breakthrough solutions',
    },
    {
      icon: Zap,
      title: 'Ideation',
      description: 'Structured brainstorming and concept development',
    },
    {
      icon: Code,
      title: 'Hackathons',
      description: 'Build solutions in intensive coding sprints',
    },
    {
      icon: Users,
      title: 'Workshops',
      description: 'Hands-on learning with industry experts',
    },
    {
      icon: TrendingUp,
      title: 'Mentorship',
      description: 'Guidance from successful entrepreneurs',
    },
    {
      icon: Rocket,
      title: 'Startup Incubation',
      description: 'End-to-end support for launching startups',
    },
  ];

  return (
    <section id="programs" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Our <span className="gold-gradient">Programs</span>
          </h2>
          <p className="text-lg text-[#A8A8A8] max-w-2xl mx-auto">
            Comprehensive programs designed to nurture innovation at every stage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-3xl p-8 group hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-[#A8A8A8] leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
