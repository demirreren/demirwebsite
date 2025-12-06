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
      { id: 'madeira', caption: 'Madeira, Portugal', image: '/images/gallery/travel/1. madeira.JPG' },
      { id: 'fethiye', caption: 'Fehtiye, Turkiye', image: '/images/gallery/travel/2. southturkey.jpg' },
      { id: 'manitoulin', caption: 'Manitoulin Island, Canada', image: '/images/gallery/travel/3. tobermory.jpg' },
      { id: 'barcelona', caption: 'Barcelona', image: '/images/gallery/travel/4. barcelona.JPG' },
      { id: 'sanfrancisco', caption: 'San Francisco', image: '/images/gallery/travel/5. sanfrancisco.JPG' },
      { id: 'como', caption: 'Lake Como', image: '/images/gallery/travel/6. como.JPG' },
      { id: 'naples', caption: 'Naples, Italy', image: '/images/gallery/travel/7. naples.JPG' },
      { id: 'milan', caption: 'Milan, Italy', image: '/images/gallery/travel/8. milan.JPG' },
      { id: 'pyramids', caption: 'Pyramids of Giza', image: '/images/gallery/travel/9. pyramids.jpg' },
      { id: 'newyork', caption: 'New York City', image: '/images/gallery/travel/10. newyork.jpg' },
      { id: 'london', caption: 'London, UK', image: '/images/gallery/travel/11. london.JPG' },
      { id: 'pompeii', caption: 'Pompeii, Italy', image: '/images/gallery/travel/12. pompeii.JPG' },
      { id: 'lugano', caption: 'Lugano, Switzerland', image: '/images/gallery/travel/13. switzerland.JPG' },
      { id: 'cancun', caption: 'Cancun, Mexico', image: '/images/gallery/travel/14. cancun.jpg' },
      { id: 'istanbul', caption: 'Istanbul, Turkiye', image: '/images/gallery/travel/15. istanbul.jpg' },
      { id: 'porto', caption: 'Porto, Portugal', image: '/images/gallery/travel/16. porto.JPG' },
      { id: 'nassau', caption: 'Nassau, Bahamas', image: '/images/gallery/travel/17. bahamas.JPG' },
      { id: 'miami', caption: 'Miami', image: '/images/gallery/travel/18. miami.jpg' },
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
