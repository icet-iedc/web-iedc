'use client';

import { motion } from 'framer-motion';

export default function TrustSection() {
  const partners = [
    'Kerala Startup Mission',
    'KDISC',
    'APJ Abdul Kalam Technological University',
    'National Innovation Foundation',
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-wider text-[#A8A8A8] mb-12"
        >
          Trusted by Kerala Innovation Ecosystem
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <span className="text-[#A8A8A8] hover:text-white transition-colors duration-300 text-center text-sm font-medium">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
