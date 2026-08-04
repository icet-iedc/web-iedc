'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  const links = {
    'Quick Links': ['Home', 'About', 'Programs', 'Startups'],
    'Resources': ['Events', 'Blog', 'Gallery', 'News'],
    'Contact': ['iedc@icet.ac.in', '+91 1234567890', 'ICET Campus, Kerala'],
  };

  return (
    <footer id="contact" className="relative border-t border-[#D4AF37]/20 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-zinc-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold">IEDC ICET</span>
            </div>
            <p className="text-[#A8A8A8] text-sm leading-relaxed">
              Engineering the future through innovation and entrepreneurship
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#A8A8A8] hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A8A8A8] text-sm">
            © 2026 IEDC ICET — Engineering the Future
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#A8A8A8] hover:text-white transition-colors duration-300 text-sm">
              Privacy
            </a>
            <a href="#" className="text-[#A8A8A8] hover:text-white transition-colors duration-300 text-sm">
              Terms
            </a>
            <a href="#" className="text-[#A8A8A8] hover:text-white transition-colors duration-300 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
