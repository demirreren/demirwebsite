'use client';

// Custom decorative graphics - hand-drawn aesthetic

export function WaveGraphic({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 40" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path 
        d="M10 20 Q30 5, 50 20 T90 20 T110 20" 
        className="graphic-line"
      />
    </svg>
  );
}

export function ArrowGraphic({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function StarGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L13.09 8.26L19 7L14.74 10.91L19 15L13.09 13.74L12 20L10.91 13.74L5 15L9.26 10.91L5 7L10.91 8.26L12 2Z" />
    </svg>
  );
}

export function CircleGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="20" cy="20" r="18" className="graphic-line" />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  );
}

export function DiamondGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
  );
}

export function PulseGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 12H12L16 4L22 20L28 8L32 12H58" />
    </svg>
  );
}

export function GridGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
      <line x1="0" y1="12" x2="48" y2="12" />
      <line x1="0" y1="24" x2="48" y2="24" />
      <line x1="0" y1="36" x2="48" y2="36" />
      <line x1="12" y1="0" x2="12" y2="48" />
      <line x1="24" y1="0" x2="24" y2="48" />
      <line x1="36" y1="0" x2="36" y2="48" />
    </svg>
  );
}

// Decorative corner element
export function CornerAccent({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 80 L0 20 Q0 0 20 0 L80 0" />
    </svg>
  );
}

// Abstract blob shape
export function BlobGraphic({ className = '', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path
        fill={color}
        d="M44.5,-76.3C58.2,-68.5,70.3,-57.5,78.4,-43.8C86.5,-30.1,90.6,-13.7,89.2,2.2C87.8,18.1,80.9,33.5,71.2,46.8C61.5,60.1,49,71.3,34.6,77.8C20.2,84.3,3.9,86.1,-11.8,83.5C-27.5,80.9,-42.6,73.9,-55.7,64C-68.8,54.1,-79.9,41.3,-85.4,26.3C-90.9,11.3,-90.8,-5.9,-86.1,-21.7C-81.4,-37.5,-72.1,-51.9,-59.4,-60.3C-46.7,-68.7,-30.6,-71.1,-15.4,-73.6C-0.2,-76.1,14.1,-78.7,28.4,-79.1C42.7,-79.5,57,-76.8,44.5,-76.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

