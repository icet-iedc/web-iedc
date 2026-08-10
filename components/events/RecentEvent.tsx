'use client';

import { motion } from 'framer-motion';
import { getLatestEvent } from '@/data/events';
import EventInfo from './EventInfo';
import EventPoster from './EventPoster';
import ComingSoon from './ComingSoon';

export default function RecentEvent() {
  const event = getLatestEvent();

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Upcoming{' '}
            <span className="gold-gradient">
              Event
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto"
          >
            {event
              ? 'Discover our latest workshops, startup programs, hackathons, and community events designed to inspire innovation and entrepreneurship.'
              : 'Stay tuned for our next workshops, startup programs, hackathons, and community events.'}
          </motion.p>
        </div>

        {/* Conditional Content */}
        {event ? (
          /* Event Content */
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
        ) : (
          /* Coming Soon State */
          <ComingSoon />
        )}
      </div>
    </section>
  );
}
