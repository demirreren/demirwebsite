export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
  url?: string;
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
      { id: 'yc-toronto', caption: 'YC in Toronto', image: '/images/gallery/events/1. ycintoronto.jpg', url: 'https://events.ycombinator.com/canada-2025' },
      { id: 'socratica', caption: 'Socratica Symposium', image: '/images/gallery/events/2. symposium.jpg', url: 'https://luma.com/waterloo?tk=pA6Xej' },
      { id: 'hack-the-north', caption: 'Hack the North 2025', image: '/images/gallery/events/3. hackthenorth.JPG', url: 'https://hackthenorth.com/' },
      { id: 'iise', caption: 'IISE Annual Conference', image: '/images/gallery/events/4. iise.jpg', url: 'https://uwaterlooiise.ca/2025-regional-conference/' },
      { id: 'north-unites', caption: 'The North Unites in Toronto', image: '/images/gallery/events/5. thenorrhunites.JPG', url: 'https://luma.com/pl4xi6d8?tk=A7iSLu' },
      { id: 'akatos', caption: 'Akatos Fall Demo Showcase', image: '/images/gallery/events/6. akatosdemoday.jpg', url: 'https://luma.com/lorh5apm?tk=dgZ43n' },
      { id: 'cafe-cursor', caption: 'Cafe Cursor Toronto', image: '/images/gallery/events/7. cafecursor.JPG', url: 'https://luma.com/cafe-cursor-toronto' },
      { id: 'eclipse', caption: 'Eclipse Case Competition', image: '/images/gallery/events/8. eclipse.jpg', url: 'https://versafi.ca/wcm-events/university-of-toronto-presents-3rd-annual-eclipse-case-competition' },
      { id: 'ofsaa', caption: 'OFSAA Provincials', image: '/images/gallery/events/9. OFSAA.JPG', url: 'https://www.ofsaa.on.ca/championship/ultimate-festival/' },
    ],
  },
  {
    id: 'travel',
    title: 'Favourite Travel',
    items: [
      { id: 'madeira', caption: 'Madeira, Portugal', image: '/images/gallery/travel/1. madeira.JPG' },
      { id: 'fethiye', caption: 'Fethiye, Turkiye', image: '/images/gallery/travel/2. southturkey.jpg' },
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
      { id: 'porto', caption: 'Porto, Portugal', image: '/images/gallery/travel/16. porto.JPG?t=1733520000' },
      { id: 'nassau', caption: 'Nassau, Bahamas', image: '/images/gallery/travel/17. bahamas.jpg?t=1733621400' },
      { id: 'miami', caption: 'Miami, United States', image: '/images/gallery/travel/18. miami.JPG?t=1733621400' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    items: [],
  },
];

// Interests data with 4 images per interest
export interface InterestImage {
  src: string;
  position?: string; // CSS object-position value (e.g., 'center top', 'center 30%')
}

export interface InterestBar {
  id: string;
  title: string;
  images: InterestImage[];
}

export const interestsData: InterestBar[] = [
  {
    id: 'outdoors',
    title: 'The Outdoors',
    images: [
      { src: '/images/gallery/interests/outdoors1.jpg' },
      { src: '/images/gallery/interests/outdoors2.jpg' },
      { src: '/images/gallery/interests/outdoors3.JPG' },
      { src: '/images/gallery/interests/outdoors4.JPG' },
    ],
  },
  {
    id: 'athletics',
    title: 'Athletics',
    images: [
      { src: '/images/gallery/interests/athletics1.jpg' },
      { src: '/images/gallery/interests/athletics2.JPG', position: 'center 20%' },
      { src: '/images/gallery/interests/athletics3.JPG', position: 'center 55%' },  // shifted up
      { src: '/images/gallery/interests/athletics4.JPG', position: 'center 25%' },
    ],
  },
  {
    id: 'music',
    title: 'Concerts & Raving',
    images: [
      { src: '/images/gallery/interests/music1.JPG?t=1733614600' },
      { src: '/images/gallery/interests/music2.JPG?t=1733614600' },
      { src: '/images/gallery/interests/music3.jpg?t=1733614600' },
      { src: '/images/gallery/interests/music4.JPG?t=1733614600' },
    ],
  },
  {
    id: 'photography',
    title: 'Photography',
    images: [
      { src: '/images/gallery/interests/photo1.JPG', position: 'center 60%' },
      { src: '/images/gallery/interests/photo3.JPG' },
      { src: '/images/gallery/interests/photo4.JPG' },
      { src: '/images/gallery/interests/photo2.JPG' },  // swapped with photo3
    ],
  },
  {
    id: 'sports',
    title: 'Sports Enthusiast',
    images: [
      { src: '/images/gallery/interests/sports4.JPG', position: 'center 70%' },     // swapped: was sports1, now sports4
      { src: '/images/gallery/interests/sports2.JPG', position: 'center 65%' },
      { src: '/images/gallery/interests/sports3.jpg' },
      { src: '/images/gallery/interests/sports1.jpg', position: 'center 70%' },     // swapped: was sports4, now sports1
    ],
  },
  {
    id: 'cafe',
    title: 'Cafe Hopping',
    images: [
      { src: '/images/gallery/interests/coffee2.JPG', position: 'center 70%' },     // swapped: was coffee1, now coffee2
      { src: '/images/gallery/interests/coffee1.JPG', position: 'center 65%' },     // swapped: was coffee2, now coffee1
      { src: '/images/gallery/interests/coffee4.JPG' },                              // swapped: was coffee3, now coffee4
      { src: '/images/gallery/interests/coffee3.JPG', position: 'center 70%' },     // swapped: was coffee4, now coffee3
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering Community',
    images: [
      { src: '/images/gallery/interests/eng1.JPG', position: 'center 60%' },
      { src: '/images/gallery/interests/eng2.JPG' },
      { src: '/images/gallery/interests/eng3.JPG', position: 'center 75%' },
      { src: '/images/gallery/interests/eng4.JPG' },
    ],
  },
];
