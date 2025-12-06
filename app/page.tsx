import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Community } from '@/components/sections/Community';
import { Gallery } from '@/components/sections/Gallery';

export default function Home() {
  return (
    <div className="noise relative">
      <Hero />
      <About />
      <Experience />
      <Community />
      <Gallery />
    </div>
  );
}
