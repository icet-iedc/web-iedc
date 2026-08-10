'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustSection() {
  const partners = [
    { name: 'Kerala Startup Mission', logo: '/images/partners/ksm.png' },
    { name: 'KDISC', logo: '/images/partners/iic.png' },

  ];

  return (
    <section className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-wider text-[#A8A8A8] mb-12"
        >
          Trusted by Kerala Innovation Ecosystem
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-70">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-40 h-16 sm:w-48 sm:h-40 flex items-center justify-center">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
