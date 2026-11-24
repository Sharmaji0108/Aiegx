import React, { useRef, useState } from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * KeyCapabilities Component
 * Reusable capability showcase positioned immediately after the Solution Hero section.
 * Responsive behavior:
 * - Desktop & Tablet (>= 640px): Original 5-column grid layout with thin vertical separators
 * - Mobile (< 640px): Smooth, continuous right-to-left marquee carousel with touch swiping, matching Industries We Serve
 */
export default function KeyCapabilities({
  subheading = 'SYSTEM CAPABILITIES & ARCHITECTURE',
  heading = 'Key Capabilities',
  description = 'Core functional capabilities engineered into this platform architecture for demanding real-time operational environments.',
  capabilities = []
}) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  if (!capabilities || capabilities.length === 0) return null;

  const hasDescriptions = capabilities.some((cap) => cap.description || cap.desc);

  if (hasDescriptions) {
    return (
      <section className="py-8 sm:py-10 bg-transparent border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading={subheading}
            heading={heading}
            description={description}
            className="mb-0"
          >
            {/* Grid of Capability Cards with Icon on Left, Title & Description on Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const desc = cap.description || cap.desc;
                return (
                  <div
                    key={cap.name || idx}
                    className="flex items-start gap-3 sm:gap-3.5 p-4 sm:p-4.5 rounded-xl bg-white dark:bg-[#14234B]/80 border border-[#DCE6F3] dark:border-white/10 shadow-xs hover:border-[#0066FF]/30 dark:hover:border-[#38BDF8]/30 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50/90 dark:bg-[#1C2C55] border border-blue-100/70 dark:border-blue-900/40 text-[#0066FF] dark:text-[#38BDF8] flex items-center justify-center shrink-0">
                      {Icon ? <Icon className="w-5 h-5 text-[#0066FF] dark:text-[#38BDF8]" /> : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-[#0D1733] dark:text-white leading-snug">
                        {cap.name}
                      </h3>
                      {desc && (
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          {desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionHeadingContainer>
        </div>
      </section>
    );
  }

  // Repeat sequence 4 times for seamless mobile marquee
  const trackItems = [
    ...capabilities,
    ...capabilities,
    ...capabilities,
    ...capabilities,
  ];

  // Mouse drag handlers for manual drag on mobile/touch simulators
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 640) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current || window.innerWidth >= 640) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const renderCard = (cap, uniqueKey, isExtra = false) => {
    const Icon = cap.icon;
    const desc = cap.description || cap.desc;
    return (
      <div
        key={uniqueKey}
        className={`flex flex-col items-center justify-start text-center shrink-0 w-[180px] px-3.5 py-5 border-r border-[#D0E3F7] dark:border-white/10 sm:border-r-0 sm:w-auto sm:px-4 sm:py-6 lg:py-7 ${isExtra ? 'sm:hidden' : ''
          }`}
      >
        {/* Prominent Blue/Cyan Icon Badge */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#CDE1F5] dark:border-white/10 shadow-xs flex items-center justify-center mb-2.5 sm:mb-3.5 shrink-0">
          {Icon ? <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" /> : null}
        </div>

        {/* Capability Label Directly Below Icon */}
        <span className="text-xs sm:text-[13px] lg:text-sm font-bold text-[#14213D] dark:text-white leading-tight tracking-tight max-w-[150px] sm:max-w-none break-words whitespace-normal select-none">
          {cap.name}
        </span>

        {/* Capability Description */}
        {desc && (
          <p className="mt-2 text-xs leading-relaxed text-[#52627C] dark:text-[#AAB6D0] font-normal max-w-[220px] select-none whitespace-normal">
            {desc}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="py-10 sm:py-12 bg-transparent border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="section-container">
        {/* Section Heading Container */}
        <SectionHeadingContainer
          subheading={subheading}
          heading={heading}
          description={description}
        />

        {/* Key Capabilities Panel (Transparent Background) */}
        <div className="mt-6 sm:mt-8 rounded-2xl border border-[#D0E3F7] dark:border-white/10 bg-transparent shadow-xs overflow-hidden">
          {/*
            Carousel Viewport:
            - Mobile (< 640px): Horizontal sliding marquee carousel with touch/drag support
            - Desktop & Tablet (>= 640px): Standard grid layout (4 or 5 columns)
          */}
          <div
            ref={scrollRef}
            className="key-capabilities-carousel-viewport relative w-full overflow-hidden overflow-x-auto no-scrollbar py-1 select-none cursor-grab active:cursor-grabbing sm:cursor-default sm:overflow-visible sm:py-0 [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)] sm:[mask-image:none] sm:[-webkit-mask-image:none]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div
              className="key-capabilities-marquee-track flex flex-nowrap whitespace-nowrap sm:block sm:w-full sm:transform-none"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {/* Primary Track: becomes 4-column or 5-column grid on desktop & tablet */}
              <div
                className={`flex flex-nowrap shrink-0 items-stretch sm:grid ${capabilities.length === 4
                  ? 'sm:grid-cols-4'
                  : capabilities.length === 3
                    ? 'sm:grid-cols-3'
                    : capabilities.length === 6
                      ? 'sm:grid-cols-3 lg:grid-cols-6'
                      : 'sm:grid-cols-5'
                  } sm:divide-x sm:divide-[#D0E3F7] sm:dark:divide-white/10 sm:w-full`}
              >
                {trackItems.map((item, index) => {
                  const isExtra = index >= capabilities.length;
                  return renderCard(item, `cap-t1-${index}`, isExtra);
                })}
              </div>

              {/* Seamless Infinite Loop Clone Track (Hidden on desktop & tablet) */}
              <div
                className="key-capabilities-clone-track carousel-clone-track flex flex-nowrap shrink-0 items-center sm:hidden"
                aria-hidden="true"
              >
                {trackItems.map((item, index) => renderCard(item, `cap-t2-${index}`, false))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
