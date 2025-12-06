'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Home } from '@/components/sections/Home';
import { Experience } from '@/components/sections/Experience';
import { Community } from '@/components/sections/Community';
import { Gallery } from '@/components/sections/Gallery';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="pt-16">
        {activeSection === 'home' && <Home />}
        {activeSection === 'work' && <Experience />}
        {activeSection === 'community' && <Community />}
        {activeSection === 'gallery' && <Gallery />}
      </main>
    </>
  );
}
