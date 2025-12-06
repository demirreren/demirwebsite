'use client';

import Image from 'next/image';
import { experienceData } from '@/data/experience';

export function Experience() {
  return (
    <section id="work" className="section border-t border-border">
      <div className="container-main">
        <span className="section-label">Work</span>

        <div className="space-y-6">
          {experienceData.map((entry) => (
            <article
              key={entry.id}
              className="group grid md:grid-cols-[1fr,180px] gap-6 p-5 rounded-xl 
                       bg-background-secondary/50 border border-border
                       hover:border-accent/20 hover:bg-background-secondary transition-all"
            >
              {/* Content */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg text-foreground italic">
                    {entry.company}
                  </h3>
                  <span className="text-accent text-sm">{entry.role}</span>
                </div>
                
                <p className="text-body text-foreground-secondary/80 leading-relaxed">
                  {entry.description}
                </p>
                
                <div className="flex items-center gap-3 text-caption text-foreground-tertiary">
                  <span>{entry.period}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground-muted" />
                  <span>{entry.location}</span>
                </div>
              </div>

              {/* Image */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden 
                              bg-background-tertiary border border-border 
                              group-hover:border-accent/20 transition-colors">
                  <Image
                    src={entry.image}
                    alt={entry.company}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    sizes="180px"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
