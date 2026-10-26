import React from 'react';
import { 
  CircuitBoard, 
  Terminal, 
  Camera, 
  BrainCircuit 
} from 'lucide-react';

/**
 * Our Engineering Capabilities Component
 * Replaces the previous Final CTA section.
 * Displays four horizontally aligned engineering capability cards in one row on desktop:
 * 1. Hardware Design (SoM, SBC, and carrier board design)
 * 2. Linux / Yocto BSP & Driver Development (Embedded Linux, Yocto BSP customization, kernel and device drivers)
 * 3. Camera & Multimedia Integration (Camera interfaces, multimedia pipelines, and HW/SW integration)
 * 4. Edge AI Application Development (Edge AI deployment, model optimization, and on-device inference)
 */
export default function FinalCTA() {
  const capabilities = [
    {
      id: 'hardware-design',
      title: 'Hardware Design',
      icon: CircuitBoard
    },
    {
      id: 'linux-yocto-bsp',
      title: 'Linux / Yocto BSP & Driver Development',
      icon: Terminal
    },
    {
      id: 'camera-multimedia',
      title: 'Camera & Multimedia Integration',
      icon: Camera
    },
    {
      id: 'edge-ai-development',
      title: 'Edge AI Application Development',
      icon: BrainCircuit
    }
  ];

  return (
    <section 
      id="engineering-capabilities" 
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Anchor alias for backwards-compatible capability links */}
      <div id="capabilities" className="sr-only" />

      {/* Ambient Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#3285FF]/10 via-[#2DD4F0]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-[#2DD4F0]/10 via-[#3285FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Large Outer Section Container */}
      <div className="section-container relative">
        
        {/* Section Heading */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC]">
            Our <span className="bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] bg-clip-text text-transparent">Engineering Capabilities</span>
          </h2>
        </div>

        {/* 4 Engineering Capability Cards in a Single Horizontal Row on Desktop */}
        {/* Responsive: 4 cols on lg, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/70 dark:hover:border-[#2DD4F0]/70 py-7 px-4 sm:py-8 sm:px-5 flex flex-col justify-center items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#3285FF]/10 transition-all duration-300 backdrop-blur-md shadow-xs h-full"
              >
                {/* Capability Icon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EDF2F7] dark:bg-[#101936] text-[#089EC2] dark:text-[#2DD4F0] border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent group-hover:shadow-md group-hover:shadow-[#2DD4F0]/20 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Capability Title Directly Below Icon */}
                <h3 className="text-base sm:text-lg font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-snug text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
