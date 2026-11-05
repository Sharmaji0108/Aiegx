import React, { useRef, useState } from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import { 
  CircuitBoard, 
  Terminal, 
  Camera, 
  BrainCircuit 
} from 'lucide-react';

/**
 * Our Engineering Capabilities Component
 * Responsive behavior:
 * - Desktop (>= 1024px): Restored original 4-column grid layout, animation disabled
 * - Mobile (< 1024px): Smooth, continuous right-to-left marquee carousel with touch swiping
 * 1. Hardware Design
 * 2. Linux / Yocto BSP & Driver Development
 * 3. Camera & Multimedia Integration
 * 4. Edge AI Application Development
 */
export default function FinalCTA() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const baseCapabilities = [
    {
      id: 'hardware-design',
      title: 'Hardware Design',
      icon: CircuitBoard,
    },
    {
      id: 'linux-yocto-bsp',
      title: 'Linux / Yocto BSP & Driver Development',
      icon: Terminal,
    },
    {
      id: 'camera-multimedia',
      title: 'Camera & Multimedia Integration',
      icon: Camera,
    },
    {
      id: 'edge-ai-development',
      title: 'Edge AI Application Development',
      icon: BrainCircuit,
    },
  ];

  // Repeat sequence 5 times for seamless mobile marquee (20 items)
  const trackItems = [
    ...baseCapabilities,
    ...baseCapabilities,
    ...baseCapabilities,
    ...baseCapabilities,
    ...baseCapabilities,
  ];

  // Mouse drag handlers for manual drag on mobile/touch simulators
  const handleMouseDown = (e) => {
    // Only drag on non-desktop
    if (window.innerWidth >= 1024) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current || window.innerWidth >= 1024) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const renderCard = (item, uniqueKey, isExtra = false) => {
    const Icon = item.icon;
    return (
      <div
        key={uniqueKey}
        className={`group relative rounded-xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/70 dark:hover:border-[#2DD4F0]/70 p-1 flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3285FF]/10 transition-all duration-300 backdrop-blur-md shadow-xs w-[70px] h-[70px] min-w-[70px] max-w-[70px] shrink-0 aspect-square mr-2 cursor-pointer select-none overflow-hidden lg:w-full lg:max-w-none lg:min-w-0 lg:h-full lg:aspect-auto lg:mr-0 lg:py-7 lg:px-4 lg:rounded-2xl lg:cursor-default ${isExtra ? 'lg:hidden' : ''}`}
      >
        {/* Capability Icon Container: 22px on mobile, 56px (w-14) on desktop */}
        <div className="w-[22px] h-[22px] rounded-md bg-[#EDF2F7] dark:bg-[#101936] text-[#089EC2] dark:text-[#2DD4F0] border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center mb-1 shrink-0 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent group-hover:shadow-sm group-hover:shadow-[#2DD4F0]/20 transition-all duration-300 lg:w-14 lg:h-14 lg:rounded-2xl lg:mb-4 lg:group-hover:scale-110">
          <Icon className="w-3 h-3 lg:w-7 lg:h-7" />
        </div>

        {/* Capability Title: 9px with text wrapping on mobile, 18px on desktop */}
        <h3 className="text-[9px] font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-[1.15] text-center break-words px-0.5 line-clamp-2 whitespace-normal select-none lg:text-base lg:text-lg lg:leading-snug lg:px-0 lg:line-clamp-none">
          {item.title}
        </h3>
      </div>
    );
  };

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

        {/* 
          Engineering Capabilities Container:
          - Desktop (>= 1024px): Restored original 4-column grid layout, animation disabled
          - Mobile (< 1024px): Infinite right-to-left scrolling carousel
        */}
        <div 
          ref={scrollRef}
          className="capability-carousel-viewport relative w-full overflow-hidden overflow-x-auto no-scrollbar py-2 select-none cursor-grab active:cursor-grabbing lg:cursor-default lg:overflow-visible lg:py-0 [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] lg:[mask-image:none] lg:[-webkit-mask-image:none]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div 
            className="capability-marquee-track flex flex-nowrap whitespace-nowrap lg:block lg:w-full lg:transform-none"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {/* Primary Track: becomes original 4-column grid on desktop */}
            <div className="flex flex-nowrap shrink-0 items-center lg:grid lg:grid-cols-4 lg:gap-5 lg:w-full">
              {trackItems.map((item, index) => {
                const isExtra = index >= baseCapabilities.length;
                return renderCard(item, `cap1-${item.id}-${index}`, isExtra);
              })}
            </div>

            {/* Seamless Infinite Loop Clone Track (Hidden on desktop) */}
            <div className="carousel-clone-track flex flex-nowrap shrink-0 items-center lg:hidden" aria-hidden="true">
              {trackItems.map((item, index) => renderCard(item, `cap2-${item.id}-${index}`, false))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
