// Shared types for data models

export interface SocialLink {
  name: string;
  url: string;
  icon: 'email' | 'linkedin' | 'github' | 'twitter';
}

export interface NavItem {
  label: string;
  href: string;
}

