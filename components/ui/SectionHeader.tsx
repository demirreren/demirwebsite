interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div
      className={`section-header ${align === 'center' ? 'text-center mx-auto' : ''}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

