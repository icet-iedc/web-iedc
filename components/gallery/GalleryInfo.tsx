'use client';

import { Calendar, Images } from 'lucide-react';
import type { GalleryCollection } from '@/data/gallery';

interface GalleryInfoProps {
  collection: GalleryCollection;
}

export default function GalleryInfo({ collection }: GalleryInfoProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {collection.title}
      </h2>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B93A6]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time className="font-mono">
            {new Date(collection.eventDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <div className="flex items-center gap-2">
          <Images className="w-4 h-4" />
          <span className="font-mono">{collection.imageCount} Images</span>
        </div>
      </div>
    </div>
  );
}
