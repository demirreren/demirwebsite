export interface CommunityEntry {
  id: string;
  name: string;
  role: string;
}

export const communityData: CommunityEntry[] = [
  {
    id: 'cansbridge',
    name: 'Cansbridge Fellowship',
    role: 'Scholar',
  },
  {
    id: 'cafe-cursor',
    name: 'Cafe Cursor',
    role: 'Member',
  },
  {
    id: 'industry40',
    name: 'Industry 4.0 Design Team',
    role: 'President',
  },
  {
    id: 'tsa',
    name: 'Turkish Students Association',
    role: 'Founder & President',
  },
  {
    id: 'wvg',
    name: 'Waterloo Venture Group',
    role: 'Member',
  },
  {
    id: 'athletic',
    name: 'Athletic Council',
    role: 'President',
  },
];
