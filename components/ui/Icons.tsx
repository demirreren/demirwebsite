// Custom decorative graphics - abstract shapes that feel modern and artistic

export function WaveGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" className={className}>
      <path
        d="M0 20C20 20 20 8 40 8C60 8 60 32 80 32C100 32 100 20 120 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="opacity-60"
      />
      <path
        d="M0 28C20 28 20 16 40 16C60 16 60 40 80 40C100 40 100 28 120 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="opacity-30"
      />
    </svg>
  );
}

export function CircleCluster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <circle cx="20" cy="30" r="12" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
      <circle cx="38" cy="22" r="8" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
      <circle cx="42" cy="38" r="6" fill="currentColor" className="opacity-30" />
    </svg>
  );
}

export function AbstractShape({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path
        d="M40 10L65 25V55L40 70L15 55V25L40 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="opacity-50"
      />
      <circle cx="40" cy="40" r="12" fill="currentColor" className="opacity-20" />
    </svg>
  );
}

export function FlowLine({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 50" fill="none" className={className}>
      <path
        d="M0 25C50 25 50 10 100 10C150 10 150 40 200 40"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 6"
        className="opacity-40"
      />
    </svg>
  );
}

export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" className="opacity-20" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  );
}

export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DiamondIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PulseRing({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="8" fill="currentColor" className="opacity-80" />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1" className="opacity-40" />
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
    </svg>
  );
}

export function StarBurst({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 0V32M0 16H32M4.69 4.69L27.31 27.31M27.31 4.69L4.69 27.31" 
            stroke="currentColor" strokeWidth="1" className="opacity-50" />
    </svg>
  );
}

export function OrbGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className}>
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
      <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="1" className="opacity-50" />
      <circle cx="60" cy="60" r="6" fill="currentColor" className="opacity-60" />
    </svg>
  );
}

