'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/interests';

export function Gallery() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <section className="min-h-screen py-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-foreground italic">
            Gallery
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <div className="space-y-16">
          {galleryData.map((section) => {
            const isExpanded = expandedSections[section.id];
            const initialCount = 3;
            const hasMore = section.items.length > initialCount;
            const displayItems = isExpanded ? section.items : section.items.slice(0, initialCount);

            return (
              <div key={section.id}>
                {/* Section title */}
                <h3 className="font-display text-xl text-foreground italic mb-6">
                  {section.title}
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {displayItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative aspect-[4/3] rounded-lg overflow-hidden 
                               bg-background-secondary border border-border cursor-pointer
                               hover:border-accent/30 transition-all duration-300"
                    >
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 300px"
                      />

                      {/* Caption overlay - always visible at bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent pt-8 pb-2 px-3">
                        <p className="text-xs text-foreground font-medium tracking-wide">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* See more / See less button */}
                {hasMore && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full
                               bg-background-secondary/50 border border-border
                               hover:border-accent/30 hover:bg-background-secondary
                               transition-all duration-300"
                    >
                      <span className="text-sm text-foreground-secondary group-hover/btn:text-foreground transition-colors">
                        {isExpanded ? 'See less' : `See more (${section.items.length - initialCount})`}
                      </span>
                      <svg 
                        className={`w-4 h-4 text-foreground-muted group-hover/btn:text-accent transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
