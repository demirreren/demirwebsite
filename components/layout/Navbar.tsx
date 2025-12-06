'use client';

import { socialLinks } from '@/data/navigation';
import { SocialIcon } from '@/components/ui/SocialIcon';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'community', label: 'Community' },
  { id: 'gallery', label: 'Gallery' },
];

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Left - Name and tagline */}
        <button 
          onClick={() => onSectionChange('home')}
          className="text-left group"
        >
          <h1 className="font-display text-lg text-foreground italic leading-tight">
            Demir Eren
          </h1>
          <p className="text-[11px] text-foreground-tertiary tracking-wide">
            product <span className="text-accent">×</span> people <span className="text-accent">×</span> possibility
          </p>
        </button>

        {/* Center - Section buttons */}
        <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-background-secondary/50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-background-tertiary text-foreground'
                  : 'text-foreground-tertiary hover:text-foreground'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Right - Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-tertiary hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
