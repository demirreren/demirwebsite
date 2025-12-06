export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
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
      { id: 'hackathon', caption: 'Building something from nothing in 48 hours', image: '/images/gallery/events/hackathon.jpg' },
      { id: 'conference', caption: 'Ideas that shift perspective', image: '/images/gallery/events/conference.jpg' },
      { id: 'meetup', caption: 'The best conversations happen after', image: '/images/gallery/events/meetup.jpg' },
    ],
  },
  {
    id: 'travel',
    title: 'Travel',
    items: [
      { id: 'istanbul', caption: 'Where two continents meet', image: '/images/gallery/events/istanbul.jpg' },
      { id: 'sf', caption: 'Walking the hills of San Francisco', image: '/images/gallery/travel/sf.jpg' },
      { id: 'nature', caption: 'Finding perspective in open spaces', image: '/images/gallery/travel/nature.jpg' },
    ],
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    items: [
      { id: 'concert', caption: 'Live music hits different', image: '/images/gallery/entertainment/concert.jpg' },
      { id: 'sports', caption: 'Energy you can only feel in person', image: '/images/gallery/entertainment/sports.jpg' },
      { id: 'game', caption: 'Competition brings out the best', image: '/images/gallery/entertainment/game.jpg' },
    ],
  },
];
