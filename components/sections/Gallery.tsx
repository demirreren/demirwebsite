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

                      {/* Sleek caption overlay */}
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-3 px-3">
                          <p className="text-[11px] text-white/90 font-light tracking-[0.15em] uppercase">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Seamless scroll indicator */}
                {hasMore && !isExpanded && (
                  <div 
                    onClick={() => toggleSection(section.id)}
                    className="mt-4 cursor-pointer group/more"
                  >
                    {/* Fade line with text */}
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                      <span className="text-[10px] text-foreground-muted/60 uppercase tracking-[0.2em] 
                                     group-hover/more:text-foreground-muted transition-colors duration-300">
                        scroll
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                    
                    {/* Animated chevron */}
                    <div className="flex justify-center mt-2">
                      <svg 
                        className="w-4 h-4 text-foreground-muted/40 group-hover/more:text-accent/60 
                                 animate-bounce transition-colors duration-300"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Collapse indicator when expanded */}
                {hasMore && isExpanded && (
                  <div 
                    onClick={() => toggleSection(section.id)}
                    className="mt-6 cursor-pointer group/less"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                      <span className="text-[10px] text-foreground-muted/60 uppercase tracking-[0.2em]
                                     group-hover/less:text-foreground-muted transition-colors duration-300">
                        collapse
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                    
                    <div className="flex justify-center mt-2">
                      <svg 
                        className="w-4 h-4 text-foreground-muted/40 group-hover/less:text-accent/60 
                                 rotate-180 transition-colors duration-300"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
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
