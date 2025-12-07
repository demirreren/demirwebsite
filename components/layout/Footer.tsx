import { socialLinks } from '@/data/navigation';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <h3 className="font-display text-display text-foreground mb-3 italic">
              Let&apos;s connect
            </h3>
            <p className="text-body text-foreground-secondary max-w-sm">
              Always open to interesting conversations, collaborations, 
              or just saying hello.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-tertiary hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <SocialIcon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <p className="text-caption text-foreground-muted">
            Demir Eren · Toronto
          </p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent-warm rounded-full" />
        </div>
      </div>
    </footer>
  );
}
