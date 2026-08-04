'use client';

import { motion } from 'framer-motion';
import { getLatestEvent } from '@/data/events';
import EventInfo from './EventInfo';
import EventPoster from './EventPoster';

export default function RecentEvent() {
  const event = getLatestEvent();

  if (!event) {
    return null;
  }

  return (
    <section id="events" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full mb-4"
          >
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#D4AF37]">Recent Event</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Don't Miss Our{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Latest Event
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Discover our latest workshops, startup programs, hackathons, and community events designed to inspire innovation and entrepreneurship.
          </motion.p>
        </div>

        {/* Event Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Event Info (60%) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <EventInfo event={event} />
          </div>

          {/* Right Side - Event Poster (40%) */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <EventPoster poster={event.poster} title={event.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
