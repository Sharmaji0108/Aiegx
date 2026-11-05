import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Our Engineering Capabilities Component
 * Displays four horizontally aligned engineering capability cards in one row on desktop:
 * 1. Hardware Design (hardware-design.png)
 * 2. Linux / Yocto BSP & Driver Development (linux-yocto.png)
 * 3. Camera & Multimedia Integration (camera-multimedia.png)
 * 4. Edge AI Application Development (edge-ai.png)
 */
export default function FinalCTA() {
  const capabilities = [
    {
      id: 'hardware-design',
      title: 'Hardware Design',
      image: '/images/capabilities/hardware-design.png',
      alt: 'Photorealistic green circuit board hardware design',
    },
    {
      id: 'linux-yocto-bsp',
      title: 'Linux / Yocto BSP & Driver Development',
      image: '/images/capabilities/linux-yocto.png',
      alt: 'Linux software stack and BSP drivers on embedded board',
    },
    {
      id: 'camera-multimedia',
      title: 'Camera & Multimedia Integration',
      image: '/images/capabilities/camera-multimedia.png',
      alt: 'Industrial camera hardware and multimedia pipeline showcase',
    },
    {
      id: 'edge-ai-development',
      title: 'Edge AI Application Development',
      image: '/images/capabilities/edge-ai.png',
      alt: 'Futuristic edge AI compute board with holographic applications',
    },
  ];

  return (
    <section 
      id="engineering-capabilities" 
      className="py-4 sm:py-5 lg:py-6 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Anchor alias for backwards-compatible capability links */}
      <div id="capabilities" className="sr-only" />

      {/* Ambient Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#3285FF]/10 via-[#2DD4F0]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-[#2DD4F0]/10 via-[#3285FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container relative">
        
        {/* Section Heading */}
        <SectionHeadingContainer
          subheading="OUR ENGINEERING CAPABILITIES"
          heading={
            <>
              Our <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">Engineering Capabilities</span>
            </>
          }
          description="End-to-end design, development and integration of embedded hardware, software and AI-based vision systems."
        />

        {/* 4 Engineering Capability Cards in a Single Horizontal Row on Desktop */}
        {/* Responsive: 4 cols on lg, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/70 dark:hover:border-[#2DD4F0]/70 p-4 sm:p-5 flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#3285FF]/10 transition-all duration-300 backdrop-blur-md shadow-xs h-full overflow-hidden"
            >
              {/* Capability Image Container */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-[#101936] border border-[#E2E8F0] dark:border-[#24355A]/80 shadow-inner">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Capability Title Directly Below Image */}
              <h3 className="text-base sm:text-lg font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-snug text-center mt-auto">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
