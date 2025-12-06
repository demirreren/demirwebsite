'use client';

import { aboutData } from '@/data/about';
import { socialLinks } from '@/data/navigation';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/3 -right-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-main py-32">
        <div className="max-w-3xl">
          {/* Name with distinctive typography */}
          <div className="mb-10 opacity-0 animate-fade-up">
            <h1 className="font-display text-hero text-foreground mb-6 italic">
              {aboutData.name}
            </h1>
            {/* Orange accent line */}
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-warm rounded-full" />
          </div>

          {/* Tagline */}
          <p className="font-display text-display text-foreground/90 mb-12 opacity-0 animate-fade-up animation-delay-200">
            {aboutData.tagline}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 opacity-0 animate-fade-up animation-delay-400">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground-tertiary hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <SocialIcon icon={link.icon} className="w-5 h-5" />
                <span className="text-body-sm hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 text-foreground-muted">
            <span className="text-caption uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
