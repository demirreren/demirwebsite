export interface GalleryItem {
  id: string;
  caption: string;
  image?: string;
}

export interface GallerySection {
  id: string;
  title: string;
  items: GalleryItem[];
}

export const galleryData: GallerySection[] = [
  {
    id: 'events',
    title: 'Events',
    items: [
      { id: 'hackathon', caption: 'Building something from nothing in 48 hours' },
      { id: 'conference', caption: 'Ideas that shift perspective' },
      { id: 'meetup', caption: 'The best conversations happen after' },
    ],
  },
  {
    id: 'travel',
    title: 'Travel',
    items: [
      { id: 'istanbul', caption: 'Where two continents meet' },
      { id: 'sf', caption: 'Walking the hills of San Francisco' },
      { id: 'nature', caption: 'Finding perspective in open spaces' },
    ],
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    items: [
      { id: 'concert', caption: 'Live music hits different' },
      { id: 'sports', caption: 'Energy you can only feel in person' },
      { id: 'game', caption: 'Competition brings out the best' },
    ],
  },
];
