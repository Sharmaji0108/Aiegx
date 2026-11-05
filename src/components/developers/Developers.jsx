import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Industries We Serve Component
 * Displays five core industries in a single horizontal row on desktop:
 * 1. Railways (high-speed-train.png)
 * 2. Public Transportation (electric-bus.png)
 * 3. Security & Surveillance (ai-surveillance-camera.png)
 * 4. Smart City (smart-city.png)
 * 5. Defense (ugv-defense.png)
 */
export default function Developers() {
  const industries = [
    {
      id: 'railways',
      name: 'Railways',
      image: '/images/industries/high-speed-train.png',
      alt: 'High-speed train for intelligent railways and transit systems',
    },
    {
      id: 'public-transportation',
      name: 'Public Transportation',
      image: '/images/industries/electric-bus.png',
      alt: 'Electric bus at modern transit station for public transportation',
    },
    {
      id: 'security-surveillance',
      name: 'Security & Surveillance',
      image: '/images/industries/ai-surveillance-camera.png',
      alt: 'AI-powered smart security surveillance camera',
    },
    {
      id: 'smart-city',
      name: 'Smart City',
      image: '/images/industries/smart-city.png',
      alt: 'Connected intelligent infrastructure for smart cities',
    },
    {
      id: 'defense',
      name: 'Defense',
      image: '/images/industries/ugv-defense.png',
      alt: 'Unmanned ground vehicle (UGV) at defense base',
    },
  ];

  return (
    <section 
      id="industries" 
      className="py-4 sm:py-5 lg:py-6 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Anchor aliases for backwards-compatible links */}
      <div id="industries-we-serve" className="sr-only" />
      <div id="developers" className="sr-only" />

      {/* Subtle Ambient Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#3285FF]/10 via-[#2DD4F0]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-[#2DD4F0]/10 via-[#3285FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container relative">
        
        {/* Section Heading */}
        <SectionHeadingContainer
          subheading="INDUSTRIES WE SERVE"
          heading={
            <>
              Industries <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">We Serve</span>
            </>
          }
          description="Delivering embedded computing, computer vision, and edge AI solutions engineered for mission-critical deployments across key industrial sectors."
        />

        {/* 5 Industry Cards in a Single Horizontal Row on Desktop */}
        {/* Responsive: 5 cols on lg, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {industries.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/70 dark:hover:border-[#2DD4F0]/70 p-4 sm:p-5 flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#3285FF]/10 transition-all duration-300 backdrop-blur-md shadow-xs h-full overflow-hidden"
            >
              {/* Industry Image Container */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-[#101936] border border-[#E2E8F0] dark:border-[#24355A]/80 shadow-inner">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Industry Name Directly Below Image */}
              <h3 className="text-base sm:text-[17px] font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-snug text-center mt-auto">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
