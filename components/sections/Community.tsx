'use client';

import Image from 'next/image';
import { communityData } from '@/data/community';

export function Community() {
  return (
    <section className="min-h-screen py-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-foreground italic">
            Community
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {communityData.map((entry) => (
            <div
              key={entry.id}
              className="group/card relative p-5 rounded-xl bg-background-secondary/50 border border-border
                       hover:border-accent/20 hover:bg-background-secondary transition-all overflow-hidden"
            >
              {/* Main card link - covers everything except images */}
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0"
                aria-label={`Visit ${entry.name}`}
              />

              {/* Link icon in top right */}
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-20 opacity-40 group-hover/card:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-background/60 group-hover/card:bg-accent/20 rounded-full p-2 transition-colors duration-300">
                  <svg className="w-4 h-4 text-foreground-muted group-hover/card:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>

              {/* Faded logo background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div 
                  className="w-full h-full opacity-[0.14]"
                  style={{
                    backgroundImage: `url(${entry.logo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'saturate(0.6)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 pointer-events-none">
                {/* Title and Role */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 pr-10">
                  <h3 className="font-display text-lg text-foreground italic">
                    {entry.name}
                  </h3>
                  <span className="text-foreground-muted text-sm">→</span>
                  <span className="font-display text-sm text-accent italic tracking-wide">
                    {entry.role}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-[13px] text-foreground-tertiary leading-[1.7] tracking-[0.01em] mb-4">
                  {entry.description}
                </p>

                {/* Images */}
                <div className="grid grid-cols-2 gap-3 pointer-events-auto">
                  {entry.images.map((image, index) => (
                    <div key={index} className="space-y-2">
                      <a 
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group/image cursor-pointer z-20"
                      >
                        {/* Animated gradient border */}
                        <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-accent/30 via-accent-warm/30 to-accent/30
                                      opacity-50 group-hover/image:opacity-100 transition-opacity duration-500
                                      animate-border-glow"
                             style={{ backgroundSize: '200% 200%' }}
                        />
                        
                        {/* Image container */}
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-background-tertiary">
                          <Image
                            src={image.src}
                            alt={image.caption}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                            sizes="150px"
                          />
                          
                          {/* Hover overlay with link indicator */}
                          <div className="absolute inset-0 bg-background/0 group-hover/image:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-background/80 rounded-full p-2">
                              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                      <p className="text-[11px] text-foreground-muted leading-snug text-center">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
