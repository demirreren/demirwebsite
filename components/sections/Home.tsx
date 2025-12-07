'use client';

import Image from 'next/image';

export function Home() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left - Creative blob cutout */}
          <div className="relative flex-shrink-0">
            {/* SVG for blob clip path */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.5,0.03 C0.75,0.03 0.92,0.15 0.96,0.35 C1,0.55 0.95,0.75 0.85,0.88 C0.75,1.01 0.55,0.98 0.4,0.97 C0.25,0.96 0.1,0.92 0.05,0.75 C0,0.58 0.02,0.35 0.12,0.2 C0.22,0.05 0.35,0.03 0.5,0.03Z"/>
                </clipPath>
              </defs>
            </svg>

            <div className="relative w-72 h-80 md:w-80 md:h-96">
              
              {/* Outer glow layer */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent-warm/20 to-accent/10 blur-sm scale-105"
                style={{ clipPath: 'url(#blobClip)' }}
              />
              
              {/* Accent border layer */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-accent to-accent-warm scale-[1.02]"
                style={{ clipPath: 'url(#blobClip)' }}
              />
              
              {/* Dark inner border */}
              <div 
                className="absolute inset-0 bg-background scale-[0.98]"
                style={{ clipPath: 'url(#blobClip)' }}
              />
              
              {/* Image */}
              <div 
                className="absolute inset-0 overflow-hidden scale-[0.96]"
                style={{ clipPath: 'url(#blobClip)' }}
              >
                <Image
                  src="/images/demir.jpg"
                  alt="Demir Eren"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-3 right-8 w-3 h-3 bg-accent rounded-full opacity-60" />
              <div className="absolute bottom-12 -right-4 w-2 h-2 bg-accent-warm rounded-full opacity-40" />
              <div className="absolute top-1/3 -left-3 w-12 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </div>
          </div>

          {/* Right - Text content */}
          <div className="flex-1 max-w-lg">
            {/* Main headline */}
            <h1 className="font-display text-2xl md:text-[1.7rem] text-foreground leading-snug mb-6 tracking-tight">
              Engineering @{' '}
              <a 
                href="https://uwaterloo.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-1 hover:text-accent transition-colors"
              >
                University of Waterloo
              </a>
            </h1>

            {/* Bio paragraphs */}
            <div className="space-y-5 text-foreground-secondary font-light tracking-wide">
              <p className="text-base leading-relaxed font-light tracking-wide">
                Hey! My name is Demir (duh-meer), and I&apos;m currently in my third year of Management Engineering.
              </p>

              <p className="text-base leading-relaxed font-light tracking-wide">
                Based in Toronto 🇨🇦, but you&apos;ll often find me somewhere new :)
              </p>

              <div>
                <p className="text-base leading-relaxed mb-3">
                  What I&apos;m currently up to...
                </p>
                <ul className="space-y-2.5 text-base list-none font-light tracking-wide">
                  <li className="flex items-center gap-1">
                    <span>• building internal tooling @</span>
                    <a 
                      href="https://www.northside.ventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 underline underline-offset-2 hover:text-emerald-500 transition-colors"
                    >
                      Northside Ventures
                    </a>
                    <img 
                      src="/logos/northsidelogo.png" 
                      alt="" 
                      className="w-4 h-4 rounded-sm"
                    />
                  </li>
                  <li className="flex items-center gap-1">
                    <span>• wrapped up internship @</span>
                    <a 
                      href="https://www.geotab.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-500 underline underline-offset-2 hover:text-blue-400 transition-colors"
                    >
                      Geotab
                    </a>
                    <img 
                      src="/logos/geotablogo.jpeg" 
                      alt="" 
                      className="w-4 h-4 rounded-sm"
                    />
                  </li>
                  <li className="flex items-center gap-1 flex-wrap">
                    <span>• hosted</span>
                    <a 
                      href="https://cursor.com/community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-foreground-tertiary underline underline-offset-2 hover:text-foreground transition-colors"
                    >
                      Cafe Cursor
                    </a>
                    <img 
                      src="/logos/cursorlogo.png" 
                      alt="" 
                      className="w-4 h-4 rounded-sm"
                    />
                    <span>in both <em>Waterloo</em> and <em>Toronto</em></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
