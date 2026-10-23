import React from 'react';
import Hero from '../components/hero/Hero';
import WhyAiegx from '../components/why/WhyAiegx';
import Products from '../components/products/Products';
import Applications from '../components/applications/Applications';
import Developers from '../components/developers/Developers';
import FinalCTA from '../components/cta/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WhyAiegx />
      <Products />
      <Applications />
      <Developers />
      <FinalCTA />
    </div>
  );
}
