export interface CommunityImage {
  src: string;
  caption: string;
  url?: string;
}

export interface CommunityEntry {
  id: string;
  name: string;
  role: string;
  description: string;
  images: CommunityImage[];
  logo: string;
  url: string;
}

export const communityData: CommunityEntry[] = [
  {
    id: 'cansbridge',
    name: 'Cansbridge Scholars',
    role: 'Scholar',
    description: 'Selected as 1 of 15 students nationally for the entrepreneurship program, building a startup project in 8 weeks with 100+ early users.',
    images: [
      { src: '/images/community/cansbridge1.png?v=2', caption: 'Startup Research', url: 'https://substack.com/home/post/p-179695692' },
      { src: '/images/community/cansbridge2.JPG', caption: 'Overnight Bootcamp', url: 'https://www.cansbridgescholars.com/courses/foundations' },
    ],
    logo: '/images/community/logos/scholars.png',
    url: 'https://www.cansbridgescholars.com/',
  },
  {
    id: 'cafe-cursor',
    name: 'Cafe Cursor',
    role: 'Organizer',
    description: 'I organized the Waterloo and Toronto editions of Cafe Cursor, a community pop-up for builders using Cursor to learn, ship, and connect.',
    images: [
      { src: '/images/community/cursor1.jpg', caption: 'Event Page', url: 'https://luma.com/uwaterloo-1' },
      { src: '/images/community/cursor2.jpg', caption: 'Personal Recap', url: 'https://x.com/demireren_/status/1995961670855000124' },
    ],
    logo: '/images/community/logos/cursorpic.jpg',
    url: 'https://cursor.com/community',
  },
  {
    id: 'industry40',
    name: 'Industry 4.0 Design Team',
    role: 'President',
    description: 'Led the team\'s growth and product direction, scaling from 4 to 25+ members, launching our first 100+ person hackathon, and driving new software initiatives.',
    images: [
      { src: '/images/community/i4_1.jpg', caption: 'Panel Events', url: 'https://www.linkedin.com/posts/industry4team_what-happens-when-you-combine-diverse-professional-activity-7400687378606260224-zi74' },
      { src: '/images/community/i4_2.JPG', caption: 'Annual Competition', url: 'https://www.instagram.com/p/DIRXLLOgvqJ/' },
    ],
    logo: '/images/community/logos/BlackI4Logo.png',
    url: 'https://www.uwindustry4.ca/',
  },
  {
    id: 'tsa',
    name: 'Turkish Students Association',
    role: 'Founder',
    description: 'Founded and rebuilt the Turkish Students Association from the ground up, growing it into a vibrant community with campus wide cultural events.',
    images: [
      { src: '/images/community/tsa1.png', caption: 'Instagram Page', url: 'https://www.instagram.com/uwtsa/' },
      { src: '/images/community/tsa2.jpeg', caption: 'Event Recap', url: 'https://www.linkedin.com/posts/demireren_this-past-weekend-i-had-the-incredible-honour-activity-7267272306991751168-aXW1' },
    ],
    logo: '/images/community/logos/tsa_square.png',
    url: 'https://www.linkedin.com/company/uwtsa/',
  },
  {
    id: 'wvg',
    name: 'Waterloo Venture Group',
    role: 'Associate',
    description: 'Supporting early-stage Canadian startups with funding and go-to-market strategy, such as OpenNote who was in the YC F25 batch.',
    images: [
      { src: '/images/community/wvg_1.png', caption: 'Tech Week Presence', url: 'https://www.linkedin.com/posts/waterlooventuregroup_waterlootechweek-venturecapital-tech-activity-7370671027644702721-HW-u' },
      { src: '/images/community/wvg_2.jpeg?v=2', caption: 'Golden Ventures Collab', url: 'https://www.linkedin.com/posts/waterlooventuregroup_venture-waterlooecosystem-maplevalley-activity-7397122381510516736-kaNT' },
    ],
    logo: '/images/community/logos/wvg_pic.jpg',
    url: 'https://www.linkedin.com/company/waterlooventuregroup/',
  },
  {
    id: 'athletic',
    name: 'Markville Athletic Council',
    role: 'President',
    description: 'Fundraised over $25,000 for the Canadian Cancer Society through our biennial overnight Relay for Life event, amongst other initiatives as a student-athlete.',
    images: [
      { src: '/images/community/mac1.JPG', caption: 'Relay for Life 2023', url: 'https://www.youtube.com/watch?v=ZnvKlsrOsbM' },
      { src: '/images/community/mac2.JPG', caption: 'Athletic Campaigns', url: 'https://www.instagram.com/markvillemac/' },
    ],
    logo: '/images/community/logos/mac.JPG',
    url: 'https://www.linkedin.com/company/markville-athletic-council/',
  },
];
