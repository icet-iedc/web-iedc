'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Events', href: '/events' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socials = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/iedc_icet/' },
    { name: 'Twitter', icon: FaXTwitter, href: 'https://x.com/iedc_icet' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/iedcicet/posts/?feedView=all' },
    { name: 'Facebook', icon: FaFacebook, href: '#' },
  ];

  return (
    <footer id="contact" className="relative py-16 border-t border-white/5 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">IEDC ICET</span>
        </motion.div>

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 mb-10 sm:mb-12"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 sm:gap-8"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#D4AF37] hover:scale-110 transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>

      </div>
    </footer>
  );
}
