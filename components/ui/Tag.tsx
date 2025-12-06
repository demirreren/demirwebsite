import { Tag as TagType } from '@/data/types';

interface TagProps {
  tag: TagType;
  size?: 'sm' | 'md';
}

export function Tag({ tag, size = 'md' }: TagProps) {
  const variantClasses = {
    primary: 'tag-primary',
    secondary: 'tag-secondary',
    accent: 'tag-accent',
    neutral: 'tag-neutral',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-caption',
    md: 'px-3 py-1 text-body-sm',
  };

  return (
    <span
      className={`tag ${variantClasses[tag.variant || 'neutral']} ${sizeClasses[size]}`}
    >
      {tag.label}
    </span>
  );
}

