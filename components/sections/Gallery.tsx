'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryData, interestsData } from '@/data/interests';

export function Gallery() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Filter out the empty interests section from galleryData
  const filteredGalleryData = galleryData.filter(section => section.id !== 'interests');

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
          {/* Regular gallery sections (Events, Travel) */}
          {filteredGalleryData.map((section) => {
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
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative aspect-[4/3] rounded-lg overflow-hidden 
                               bg-background-secondary border border-border
                               hover:border-accent/30 transition-all duration-300
                               ${item.url ? 'cursor-pointer' : ''}`}
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
                          {item.url ? (
                            /* Events with links - caption + divider + view event */
                            <div className="inline-flex flex-col">
                              <p className="text-[11px] text-white/90 font-light tracking-[0.15em] uppercase group-hover:text-accent transition-colors">
                                {item.caption}
                              </p>
                              <div className="w-full h-px bg-white/30 group-hover:bg-accent/50 mt-2 mb-1.5 transition-colors" />
                              <div className="flex items-center gap-1">
                                <span className="text-[9px] text-white/60 font-light tracking-[0.1em] uppercase group-hover:text-accent transition-colors">View Event</span>
                                <svg className="w-2.5 h-2.5 text-white/60 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                            </div>
                          ) : (
                            /* Regular items without links */
                            <p className="text-[11px] text-white/90 font-light tracking-[0.15em] uppercase">
                              {item.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Seamless scroll indicator */}
                {hasMore && !isExpanded && (
                  <div 
                    onClick={() => toggleSection(section.id)}
                    className="mt-4 cursor-pointer group/more"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                      <span className="text-[10px] text-foreground-muted/60 uppercase tracking-[0.2em] 
                                     group-hover/more:text-foreground-muted transition-colors duration-300">
                        scroll
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                    
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

          {/* Interests Section with diagonal cut bars */}
          <div>
            <h3 className="font-display text-xl text-foreground italic mb-6">
              Interests
            </h3>

            <div className="space-y-4">
              {interestsData.map((interest) => (
                <div 
                  key={interest.id}
                  className="group relative h-28 md:h-36 rounded-xl overflow-hidden border border-border
                           hover:border-accent/30 transition-all duration-300"
                >
                  {/* 4 images with diagonal cuts */}
                  <div className="absolute inset-0 flex">
                    {interest.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative flex-1 overflow-hidden"
                        style={{
                          clipPath: index === 0 
                            ? 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' 
                            : index === 3 
                              ? 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                              : 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                          marginLeft: index === 0 ? '0' : '-8%',
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={`${interest.title} ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ objectPosition: image.position || 'center center' }}
                          sizes="25vw"
                        />
                      </div>
                    ))}
                  </div>


                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Label - bottom left */}
                  <div className="absolute bottom-0 left-0 pb-3 pl-5 md:pl-6">
                    <h4 className="text-[11px] md:text-xs text-white font-light tracking-[0.25em] uppercase
                                 drop-shadow-lg">
                      {interest.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
