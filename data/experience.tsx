export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: React.ReactNode;
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
    description: (
      <>
        <a href="https://www.northside.ventures/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Northside Ventures</a> is a solo GP venture fund in Toronto. The focus is on supporting strong Canadian founding teams at the earliest stages.
        <br /><br />
        The partner, <a href="https://www.linkedin.com/in/alexander-mcisaac/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Alex McIsaac</a>, previously worked at <a href="https://www.linkedin.com/company/global-founders-capital/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Global Founders Capital</a> and <a href="https://www.linkedin.com/company/bdc/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">BDC</a>. He brings over 15 years of experience in the Canadian ecosystem as both an operator and early stage investor.
        <br /><br />
        As a product and venture intern, I work with Alex across our full funnel from first touch to committed capital. I source founders, join calls, and support research and memo writing. I also build internal workflows and scoring systems that strengthen how we evaluate founders and manage our process in a lean team.
      </>
    ),
    image: '/images/work/northside.JPG',
    imageCaption: 'Hosting AMA event @ Waterloo Tech Week 2025',
    url: 'https://www.northside.ventures/',
  },
  {
    id: 'geotab',
    company: 'Geotab',
    role: 'Systems Analyst',
    period: '2025',
    location: 'Toronto',
    description: (
      <>
        <a href="https://www.geotab.com/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Geotab</a> is a global leader in connected vehicle telematics and fleet management, serving millions of vehicles worldwide. Founded in 2000 and still privately held and employee owned under founder CEO <a href="https://www.linkedin.com/in/neilcawse/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Neil Cawse</a>, the company is consistently ranked among the top fleet management platforms and recognized as a high growth tech company.
        <br /><br />
        I worked on the Enterprise Architecture team, supporting large scale technology transformation across the organization. My work focused on improving system inventories, raising data quality, and strengthening internal workflows. I reviewed thousands of applications, standardized records, and supported automation efforts that helped teams work with clearer, more reliable information.
      </>
    ),
    image: '/images/work/geotab.JPG',
    imageCaption: 'BTO Summit @ Geotab HQ in Oakville, Ontario',
    url: 'https://www.geotab.com/',
  },
  {
    id: 'epoch',
    company: 'Epoch',
    role: 'Product Analyst',
    period: '2025',
    location: 'San Francisco',
    description: (
      <>
        <a href="https://www.epochapp.com/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Epoch</a> is a San Francisco based employee experience platform that helps people teams plan, promote, and measure internal events and programs in one place. Founded by <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">University of Waterloo</a> alumni <a href="https://www.linkedin.com/in/jadechoy/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Jade Choy</a>, <a href="https://www.linkedin.com/in/keithchoy/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Keith Choy</a>, and <a href="https://www.linkedin.com/in/mike-miller-09262979/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Michael Miller</a>, Epoch raised a US$3.6M seed round led by <a href="https://www.linkedin.com/company/rallyventures/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Rally Ventures</a> with participation from others.
        <br /><br />
        I joined as a Product Analyst, working across product, customer experience, and engineering. My work focused on building data driven reports and internal tools, including direct work for clients like <a href="https://www.linkedin.com/company/salesforce/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Salesforce</a>, <a href="https://www.linkedin.com/company/electronic-arts/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Electronic Arts</a>, and <a href="https://www.linkedin.com/company/workday/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Workday</a>. I also helped launch new features like Communities for multiple enterprise clients, set up demo and onboarding environments, and created documentation that improved how the team onboarded and supported customers.
      </>
    ),
    image: '/images/work/epoch.JPG',
    imageCaption: 'With our CEO and Co-Founder Jade Choy @ office in SF',
    url: 'https://www.epochapp.com/',
  },
  {
    id: 'research',
    company: 'UW Behavioral Analytics and Modeling Lab',
    role: 'AI Research Assistant',
    period: '2025',
    location: 'Waterloo',
    description: (
      <>
        <a href="https://uwaterloo.ca/engineering/undergraduate-students/degree-enhancement/research-opportunities/ura" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Undergraduate Research Assistantships</a> at Waterloo place students on funded research teams where they contribute to data analysis, modeling, and software pipelines. I worked under <a href="https://uwaterloo.ca/management-science-engineering/profile/kmckay" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Professor Ken McKay</a>, a senior faculty member in <a href="https://uwaterloo.ca/management-science-engineering/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Management Sciences</a> known for work in behavioral analytics, anomaly detection, and decision support systems across operations, security, and information networks.
        <br /><br />
        As an AI Research Assistant, I helped build a predictive modeling pipeline using <a href="https://www.chicagopolice.org/" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Chicago Police Department</a> homicide and contextual datasets. I engineered key indicators, merged multi-source data, and supported exploratory analysis across more than a decade of records. The team used <em>Python</em>, <em>pandas</em>, <em>scikit-learn</em>, and <em>SHAP/LIME</em> for modeling and interpretability.
      </>
    ),
    image: '/images/work/waterloo.jpg',
    imageCaption: 'Associated directly with the University of Waterloo',
    url: 'https://uwaterloo.ca/engineering/undergraduate-students/degree-enhancement/research-opportunities/ura',
  },
  {
    id: 'siemens',
    company: 'Siemens',
    role: 'Process & Technology Specialist',
    period: '2024',
    location: 'Toronto',
    description: (
      <>
        <a href="https://www.siemens.com/global/en.html" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Siemens</a> is a global technology company with more than 300,000 employees, known for its work in automation, digital industries, and infrastructure. The <a href="https://www.siemens.com/global/en/products/services/gbs/our-insights/newsroom/digital-transformation-with-process-optimization.html" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">Regional Process Office</a> supports digital transformation across the organization by improving workflows, streamlining operations, and driving adoption of internal platforms used by hundreds of teams.
        <br /><br />
        I supported product, analytics, and process optimization work. This included redesigning internal systems (<em>Figma</em> + <em>low-code</em>), building dashboards (<em>Power BI</em>) that improved visibility into project activity, supporting AI and GenAI onboarding, and delivered updates to internal <em>Mendix</em> features and workflows. I also created documentation, improved SOPs, and supported events and presentations that helped teams align on digital transformation efforts.
      </>
    ),
    image: '/images/work/siemens.JPG',
    imageCaption: 'Launch party of our fully AI-powered robot employee',
    url: 'https://www.siemens.com/global/en/products/services/gbs/our-insights/newsroom/digital-transformation-with-process-optimization.html',
  },
  {
    id: 'bmw',
    company: 'BMW',
    role: 'GTM Intern',
    period: '2024',
    location: 'Istanbul',
    description: (
      <>
        <a href="https://www.bmwgroup.com/en.html" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">BMW</a> is a global premium automotive group that sold 2.45 million cars and over 210,000 motorcycles worldwide in 2024, with a workforce of about 159,000 employees. I was working abroad specifically under <a href="https://www.bmw.com.tr/tr/index.html" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary underline underline-offset-2 hover:text-accent transition-colors">BMW Turkiye</a> in Istanbul.
        <br /><br />
        My role as a GTM Intern, supporting the loyalty and digitalization effort. I helped map and design processes, built presentations for internal and external pitches, supported cross-functional teams in marketing and customer experience, and helped design loyalty program segments, membership tiers, and data-driven campaign structures. I also handled data normalization tasks, website form design, and reporting analysis — helping bridge business goals with technical execution.
      </>
    ),
    image: '/images/work/bmw.JPG',
    imageCaption: 'Working directly under the GM of BMW Turkey',
    url: 'https://www.bmw.com.tr/tr/index.html',
  },
];
