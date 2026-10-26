import React from 'react';
import { 
  Train, 
  Bus, 
  Cctv, 
  Building2, 
  Shield 
} from 'lucide-react';

/**
 * Industries We Serve Component
 * Replaces the previous SDK & Model Compilation section.
 * Displays five core industries in a single horizontal row on desktop:
 * 1. Railways
 * 2. Public Transportation
 * 3. Security & Surveillance
 * 4. Smart City
 * 5. Defense
 */
export default function Developers() {
  const industries = [
    {
      id: 'railways',
      name: 'Railways',
      icon: Train
    },
    {
      id: 'public-transportation',
      name: 'Public Transportation',
      icon: Bus
    },
    {
      id: 'security-surveillance',
      name: 'Security & Surveillance',
      icon: Cctv
    },
    {
      id: 'smart-city',
      name: 'Smart City',
      icon: Building2
    },
    {
      id: 'defense',
      name: 'Defense',
      icon: Shield
    }
  ];

  return (
    <section 
      id="industries" 
      className="py-16 sm:py-20 lg:py-24 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Anchor aliases for backwards-compatible links */}
      <div id="industries-we-serve" className="sr-only" />
      <div id="developers" className="sr-only" />

      {/* Subtle Ambient Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#3285FF]/10 via-[#2DD4F0]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-[#2DD4F0]/10 via-[#3285FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container relative">
        
        {/* Section Heading */}
        <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1733] tracking-tight">
            Industries <span className="bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(13,23,51,0.30)]">We Serve</span>
          </h2>
        </div>

        {/* 5 Industry Cards in a Single Horizontal Row on Desktop */}
        {/* Responsive: 5 cols on lg, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/70 dark:hover:border-[#2DD4F0]/70 py-7 px-4 sm:py-8 sm:px-5 flex flex-col justify-center items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#3285FF]/10 transition-all duration-300 backdrop-blur-md shadow-xs h-full"
              >
                {/* Industry Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EDF2F7] dark:bg-[#101936] text-[#089EC2] dark:text-[#2DD4F0] border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent group-hover:shadow-md group-hover:shadow-[#2DD4F0]/20 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Industry Name Directly Below Icon */}
                <h3 className="text-base sm:text-lg font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-snug text-center">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
