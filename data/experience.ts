export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  image?: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 'northside',
    company: 'Northside Ventures',
    role: 'Technical Product Manager',
    period: '2024',
    location: 'Toronto',
    description: 'Building tools to find exceptional founders before anyone else does. Product thinking meets data pipelines.',
  },
  {
    id: 'bmw',
    company: 'BMW Group',
    role: 'GTM Intern',
    period: '2024',
    location: 'Istanbul',
    description: 'Campaign optimization and digital transformation strategy for BMW retail next.',
  },
  {
    id: 'epoch',
    company: 'Epoch',
    role: 'Product Analyst',
    period: '2023',
    location: 'San Francisco',
    description: 'Turned user feedback into features, and features into outcomes for a growing team.',
  },
  {
    id: 'siemens',
    company: 'Siemens',
    role: 'Product Manager',
    period: '2023',
    location: 'Toronto',
    description: 'Digital transformation at scale. Learned how large organizations move.',
  },
  {
    id: 'research',
    company: 'UW Research Lab',
    role: 'AI Research Assistant',
    period: '2022',
    location: 'Waterloo',
    description: 'Building forecasting models that inform real-world decisions.',
  },
];
