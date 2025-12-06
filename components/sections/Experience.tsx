'use client';

import Image from 'next/image';
import { experienceData } from '@/data/experience';

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function Experience() {
  return (
    <section id="work" className="section border-t border-border">
      <div className="container-main">
        <span className="section-label">Work</span>

        <div className="space-y-6">
          {experienceData.map((entry) => (
            <article
              key={entry.id}
              className="group relative grid md:grid-cols-[1fr,200px] gap-6 p-5 rounded-xl 
                       bg-background-secondary/50 border border-border
                       hover:border-accent/20 hover:bg-background-secondary transition-all"
            >
              {/* Clickable link overlay (excludes image area) */}
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 md:right-[220px] z-10 rounded-xl"
                aria-label={`Visit ${entry.company} website`}
              />

              {/* Content */}
              <div className="space-y-4 relative">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg text-foreground italic">
                    {entry.company}
                  </h3>
                  <span className="text-accent text-sm">{entry.role}</span>
                </div>
                
                {/* Sleeker description with refined styling */}
                <p className="text-[13px] text-foreground-tertiary leading-[1.6] tracking-[0.01em] max-w-md">
                  {entry.description}
                </p>
                
                <div className="flex items-center gap-4 pt-1">
                  {/* External link icon - bottom left */}
                  <div className="flex items-center gap-1.5 text-foreground-muted group-hover:text-accent transition-colors">
                    <ExternalLinkIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit
                    </span>
                  </div>
                  
                  {/* Separator */}
                  <div className="w-px h-3 bg-border" />
                  
                  {/* Date and location */}
                  <div className="flex items-center gap-2 text-[11px] text-foreground-muted tracking-wide">
                    <span>{entry.period}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-foreground-muted" />
                    <span>{entry.location}</span>
                  </div>
                </div>
              </div>

              {/* Image with animated border - not part of the link */}
              <div className="hidden md:block relative z-20">
                <div className="relative group/image">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-accent/40 via-accent-warm/40 to-accent/40 
                                opacity-50 group-hover/image:opacity-100 transition-opacity duration-500
                                animate-border-glow" 
                       style={{ backgroundSize: '200% 200%' }}
                  />
                  
                  {/* Image container */}
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-background-tertiary">
                    <Image
                      src={entry.image}
                      alt={entry.company}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    
                    {/* Hover caption */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover/image:translate-y-0 
                                  transition-transform duration-300 ease-out">
                      <div className="bg-gradient-to-t from-background/95 via-background/80 to-transparent pt-8 pb-3 px-3">
                        <p className="text-xs text-foreground leading-snug">
                          {entry.imageCaptionHighlight ? (
                            <>
                              {entry.imageCaption}{' '}
                              <em className="text-accent">{entry.imageCaptionHighlight}</em>
                              {' '}at Waterloo Tech Week 2025
                            </>
                          ) : (
                            entry.imageCaption
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
