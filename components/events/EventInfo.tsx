'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, Tag, DollarSign } from 'lucide-react';
import { Event } from '@/data/events';
import { Badge } from '@/components/ui/badge';

interface EventInfoProps {
  event: Event;
}

export default function EventInfo({ event }: EventInfoProps) {
  const infoItems = [
    { icon: Calendar, label: 'Date', value: new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
    { icon: Clock, label: 'Time', value: event.time },
    { icon: MapPin, label: 'Venue', value: event.venue },
    //{ icon: Users, label: 'Max Participants', value: event.maxParticipants.toString() },
    { icon: DollarSign, label: 'Registration Fee', value: event.registrationFee },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Tags */}
      

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
          {event.title}
        </h3>
        <p className="text-lg sm:text-xl text-[#D4AF37] font-medium">
          {event.subtitle}
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-base sm:text-lg text-gray-300 leading-relaxed"
      >
        {event.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {event.tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 transition-colors duration-300"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </motion.div>

      {/* Event Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <item.icon className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-400 mb-1">{item.label}</p>
              <p className="text-sm sm:text-base font-medium text-white truncate">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Registration Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="text-sm text-gray-400">Registration Status:</span>
        <Badge
          variant={event.registrationStatus === 'Open' ? 'default' : 'secondary'}
          className={`${
            event.registrationStatus === 'Open'
              ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30'
              : event.registrationStatus === 'Closed'
              ? 'bg-[#D4AF37]/10 text-[#D4AF37]/55 border-[#D4AF37]/20'
              : 'bg-[#D4AF37]/15 text-[#D4AF37]/80 border-[#D4AF37]/25'
          } border`}
        >
          {event.registrationStatus}
        </Badge>
      </motion.div>

      {/* 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="/events"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#111111] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
        >
          View Details
        </Link>
      </motion.div>
      */}
    </div>
  );
}
