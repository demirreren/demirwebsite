'use client';

import { galleryData } from '@/data/interests';

export function Gallery() {
  return (
    <section id="gallery" className="section border-t border-border">
      <div className="container-main">
        <span className="section-label">Gallery</span>

        <div className="space-y-16">
          {galleryData.map((section) => (
            <div key={section.id}>
              {/* Section title */}
              <h3 className="font-display text-xl text-foreground italic mb-6">
                {section.title}
              </h3>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-3">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden 
                             bg-background-secondary border border-border cursor-pointer
                             hover:border-accent/30 transition-all duration-300"
                  >
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border border-border-light opacity-30" />
                    </div>

                    {/* Hover overlay with caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  flex items-end p-4">
                      <p className="text-sm text-foreground font-medium leading-snug">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
