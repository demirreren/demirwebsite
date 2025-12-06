'use client';

import { aboutData } from '@/data/about';

export function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/3 -right-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-64 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
      
      <div className="text-center max-w-2xl px-6">
        {/* Large name */}
        <h1 className="font-display text-[clamp(4rem,12vw,8rem)] text-foreground italic leading-[0.9] mb-6">
          {aboutData.name.split(' ')[0]}
          <br />
          <span className="text-foreground/60">{aboutData.name.split(' ')[1]}</span>
        </h1>

        {/* Orange accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-warm rounded-full mx-auto mb-8" />

        {/* Brief intro */}
        <p className="text-lg text-foreground-secondary leading-relaxed max-w-md mx-auto">
          {aboutData.intro[0].split('.')[0]}.
        </p>
      </div>
    </section>
  );
}

