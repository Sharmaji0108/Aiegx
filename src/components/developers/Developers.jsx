import React, { useRef, useState } from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import { 
  Train, 
  Bus, 
  Cctv, 
  Building2, 
  Shield 
} from 'lucide-react';

/**
 * Industries We Serve Component
 * Responsive behavior:
 * - Desktop (>= 1024px): Restored original 5-column grid layout, animation disabled
 * - Mobile (< 1024px): Smooth, continuous right-to-left marquee carousel with touch swiping
 * 1. Railways
 * 2. Public Transportation
 * 3. Security & Surveillance
 * 4. Smart City
 * 5. Defense
 */
export default function Developers() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const baseIndustries = [
    {
      id: 'railways',
      name: 'Railways',
      icon: Train,
    },
    {
      id: 'public-transportation',
      name: 'Public Transportation',
      icon: Bus,
    },
    {
      id: 'security-surveillance',
      name: 'Security & Surveillance',
      icon: Cctv,
    },
    {
      id: 'smart-city',
      name: 'Smart City',
      icon: Building2,
    },
    {
      id: 'defense',
      name: 'Defense',
      icon: Shield,
    },
  ];

  // Repeat sequence 4 times for seamless mobile marquee (20 items)
  const trackItems = [
    ...baseIndustries,
    ...baseIndustries,
    ...baseIndustries,
    ...baseIndustries,
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
        className={`group relative rounded-xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/70 dark:hover:border-[#2DD4F0]/70 p-1 flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3285FF]/10 transition-all duration-300 backdrop-blur-md shadow-xs w-[70px] h-[70px] min-w-[70px] max-w-[70px] shrink-0 aspect-square mr-2.5 cursor-pointer select-none lg:w-full lg:max-w-none lg:min-w-0 lg:h-full lg:aspect-auto lg:mr-0 lg:py-7 lg:px-4 lg:rounded-2xl lg:cursor-default ${isExtra ? 'lg:hidden' : ''}`}
      >
        {/* Industry Icon Container: 22px on mobile, 56px (w-14) on desktop */}
        <div className="w-[22px] h-[22px] rounded-md bg-[#EDF2F7] dark:bg-[#101936] text-[#089EC2] dark:text-[#2DD4F0] border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center mb-1 shrink-0 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent group-hover:shadow-sm group-hover:shadow-[#2DD4F0]/20 transition-all duration-300 lg:w-14 lg:h-14 lg:rounded-2xl lg:mb-4 lg:group-hover:scale-110">
          <Icon className="w-3 h-3 lg:w-7 lg:h-7" />
        </div>

        {/* Industry Label: 8.5px with 2-line wrap on mobile, 17px on desktop */}
        <h3 className="text-[8.5px] font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-[1.1] text-center break-words px-0.5 line-clamp-2 whitespace-normal select-none lg:text-base lg:text-[17px] lg:leading-snug lg:px-0 lg:line-clamp-none">
          {item.name}
        </h3>
      </div>
    );
  };

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
          description="Delivering embedded, vision and AI solutions for mission-critical applications across key industry sectors."
        />

        {/* 
          Industry Cards Container:
          - Desktop (>= 1024px): Restored original 5-column grid layout, animation disabled
          - Mobile (< 1024px): Infinite right-to-left scrolling carousel
        */}
        <div 
          ref={scrollRef}
          className="industry-carousel-viewport relative w-full overflow-hidden overflow-x-auto no-scrollbar py-2 select-none cursor-grab active:cursor-grabbing lg:cursor-default lg:overflow-visible lg:py-0 [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] lg:[mask-image:none] lg:[-webkit-mask-image:none]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div 
            className="industry-marquee-track flex flex-nowrap whitespace-nowrap lg:block lg:w-full lg:transform-none"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {/* Primary Track: becomes original 5-column grid on desktop */}
            <div className="flex flex-nowrap shrink-0 items-center lg:grid lg:grid-cols-5 lg:gap-5 lg:w-full">
              {trackItems.map((item, index) => {
                const isExtra = index >= baseIndustries.length;
                return renderCard(item, `t1-${item.id}-${index}`, isExtra);
              })}
            </div>

            {/* Seamless Infinite Loop Clone Track (Hidden on desktop) */}
            <div className="carousel-clone-track flex flex-nowrap shrink-0 items-center lg:hidden" aria-hidden="true">
              {trackItems.map((item, index) => renderCard(item, `t2-${item.id}-${index}`, false))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
