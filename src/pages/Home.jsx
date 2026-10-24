import React from 'react';
import Hero from '../components/hero/Hero';
import Products from '../components/products/Products';
import Applications from '../components/applications/Applications';
import Developers from '../components/developers/Developers';
import FinalCTA from '../components/cta/FinalCTA';
import ContactSection from '../components/contact/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300">
      <Hero />
      <Products />
      <Applications />
      <Developers />
      <FinalCTA />
      <ContactSection />
    </div>
  );
}
