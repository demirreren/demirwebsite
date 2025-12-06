export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  image: string;
  imageCaption: string;
  imageCaptionHighlight?: string;
  url: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 'northside',
    company: 'Northside Ventures',
    role: 'Product and Venture Intern',
    period: '2025',
    location: 'Toronto',
    description: 'Building tools to find exceptional founders before anyone else does. Product thinking meets data pipelines.',
    image: '/images/work/northside.JPG',
    imageCaption: 'Hosting',
    imageCaptionHighlight: 'Raising Pre-Seed with Northside Ventures',
    url: 'https://www.northside.ventures/',
  },
  {
    id: 'geotab',
    company: 'Geotab',
    role: 'Systems Analyst',
    period: '2025',
    location: 'Toronto',
    description: 'Enterprise-wide technology transformation. Translating requirements into product specs for AI onboarding and financial tools.',
    image: '/images/work/geotab.JPG',
    imageCaption: 'BTO summit at the Headquarters in Oakville, Ontario',
    url: 'https://www.geotab.com/',
  },
  {
    id: 'epoch',
    company: 'Epoch',
    role: 'Product Analyst',
    period: '2025',
    location: 'San Francisco',
    description: 'Turned user feedback into features, and features into outcomes for a growing team.',
    image: '/images/work/epoch.JPG',
    imageCaption: 'With our CEO and Co-Founder, Jade Choy, at our HQ in SF',
    url: 'https://www.epochapp.com/',
  },
  {
    id: 'research',
    company: 'UW Behavioral Analytics and Modeling Lab',
    role: 'AI Research Assistant',
    period: '2025',
    location: 'Waterloo',
    description: 'Building forecasting models that inform real-world decisions.',
    image: '/images/work/waterloo.jpg',
    imageCaption: 'Associate directly with the University of Waterloo',
    url: 'https://uwaterloo.ca/engineering/undergraduate-students/degree-enhancement/research-opportunities/ura',
  },
  {
    id: 'siemens',
    company: 'Siemens',
    role: 'Process & Technology Specialist',
    period: '2024',
    location: 'Toronto',
    description: 'Digital transformation at scale. Learned how large organizations move.',
    image: '/images/work/siemens.JPG',
    imageCaption: 'The official release party of our fully AI robot employee',
    url: 'https://www.siemens.com/global/en/products/services/gbs/our-insights/newsroom/digital-transformation-with-process-optimization.html',
  },
  {
    id: 'bmw',
    company: 'BMW',
    role: 'GTM Intern',
    period: '2024',
    location: 'Istanbul',
    description: 'Campaign optimization and digital transformation strategy for BMW retail next.',
    image: '/images/work/bmw.JPG',
    imageCaption: 'Working directly under the General Manager of BMW Group in Turkey',
    url: 'https://www.bmw.com.tr/tr/index.html',
  },
];
