'use client';

import { aboutData } from '@/data/about';

export function About() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container-main">
        <span className="section-label">About</span>

        <div className="prose max-w-2xl">
          {aboutData.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="text-foreground">{aboutData.currentFocus}</p>
        </div>
      </div>
    </section>
  );
}
