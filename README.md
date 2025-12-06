# Demir's Personal Website

A personal website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase who I am, how I work, and how I think.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout with navbar/footer
│   └── page.tsx            # Main page assembling all sections
│
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Timeline, etc.
│   └── ui/                 # Reusable UI components
│
├── data/                   # Content data files (TypeScript)
│   ├── about.ts            # About section content
│   ├── experience.ts       # Timeline and organizations
│   ├── interests.ts        # Gallery items
│   ├── skills.ts           # Skills with evidence
│   ├── community.ts        # Community involvement
│   ├── writing.ts          # Blog posts and config
│   ├── goals.ts            # Now and next goals
│   ├── navigation.ts       # Nav items and social links
│   └── types.ts            # Shared TypeScript types
│
├── public/
│   └── images/             # Your photos and images
│       ├── portrait.jpg    # Main portrait
│       └── gallery/        # Gallery images
│
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### 1. Update Your Content

All content is in the `/data` folder. Edit these files to add your real information:

- `about.ts` - Your bio, headline, and highlights
- `experience.ts` - Timeline entries and organization details
- `interests.ts` - Gallery photos and captions
- `skills.ts` - Skills with evidence links
- `community.ts` - Community involvement
- `writing.ts` - Substack URL and featured posts
- `goals.ts` - Current focus and goals
- `navigation.ts` - Social links and site metadata

### 2. Add Your Photos

Place your images in `/public/images/`:

- `portrait.jpg` - Your main portrait (About section)
- `gallery/` folder - Photos for the interests gallery

Then uncomment the `Image` components in the sections.

### 3. Update Social Links

Edit `data/navigation.ts` to update your:
- Email
- LinkedIn
- GitHub
- Substack
- Twitter/X

### 4. Customize Colors

The color palette is defined in `tailwind.config.ts`. The current theme uses:
- **Primary**: Terracotta/rust (#B5634B)
- **Secondary**: Sage green (#7D8B6F)  
- **Accent**: Muted gold (#C9A857)
- **Background**: Warm off-white (#FAF8F5)
- **Foreground**: Soft charcoal (#2D2A26)

### 5. Update Site Metadata

Edit `siteMetadata` in `data/navigation.ts` for SEO.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy!

### Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in the `.next` folder.

## Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Fade-in animations on scroll
- ✅ Interactive gallery with lightbox
- ✅ Evidence-based skills section
- ✅ Timeline with year grouping
- ✅ Progress bars for goals
- ✅ Dark/muted vintage color palette
- ✅ SEO-friendly metadata

## License

MIT - Feel free to use this as a template for your own site!

---

Built with ❤️ and curiosity
