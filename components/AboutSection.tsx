'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Innovation
              <br />
              <span className="gold-gradient">Begins Here</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#A8A8A8] leading-relaxed">
              IEDC ICET is a premier innovation and entrepreneurship hub that nurtures the next generation 
              of entrepreneurs and innovators. We provide a comprehensive ecosystem where ideas transform 
              into viable businesses.
            </p>
            <p className="text-lg text-[#A8A8A8] leading-relaxed">
              Through mentorship, funding support, industry connections, and cutting-edge resources, 
              we empower students to build startups that create real-world impact and drive technological advancement.
            </p>
            
            {/* Animated line graphics */}
            <div className="relative pt-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-transparent origin-left"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
