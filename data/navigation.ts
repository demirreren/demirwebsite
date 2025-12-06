import { NavItem, SocialLink } from './types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Community', href: '#community' },
  { label: 'Gallery', href: '#gallery' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Email', url: 'mailto:deren@uwaterloo.ca', icon: 'email' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/demireren', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/demirreren', icon: 'github' },
  { name: 'X', url: 'https://x.com/demireren_', icon: 'twitter' },
];

export const siteMetadata = {
  title: 'Demir Eren',
  description: 'Product builder exploring the intersection of technology, people, and possibility.',
  author: 'Demir Eren',
};

