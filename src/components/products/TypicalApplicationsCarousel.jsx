import React, { useState, useRef, useEffect } from 'react';
import { Layers } from 'lucide-react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * TypicalApplicationsCarousel
 * Global reusable Typical Applications section.
 *
 * Responsiveness:
 * - Desktop (>= 1024px): STRICTLY UNCHANGED original 5-column grid layout, no carousel, no autoplay.
 * - Mobile (< 1024px): Continuous automatic horizontal sliding carousel from right to left with seamless loop and manual touch swiping support.
 */
export default function TypicalApplicationsCarousel({
  id = 'applications',
  applications = [],
  subheading = 'TYPICAL APPLICATIONS',
  headingPrefix = 'Typical',
  headingHighlight = 'Applications',
  description = 'Designed for mission-critical graphical interfaces, telemetry controllers, and industrial edge systems.',
  speed = 28, // Animation duration in seconds for mobile loop
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const currentDragX = useRef(0);
  const isHorizontalSwipe = useRef(null);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  if (!applications || applications.length === 0) {
    return null;
  }

  // Ensure enough items on mobile so that one half exceeds screen width before cloning
  const baseItems =
    applications.length < 5
      ? [...applications, ...applications, ...applications]
      : applications;

  // Duplicated track for mobile seamless infinite marquee
  const displayItems = [...baseItems, ...baseItems];

  // Mobile Touch Interactions
  const handleTouchStart = (e) => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    currentDragX.current = 0;
    isHorizontalSwipe.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartX.current;
    const deltaY = currentY - touchStartY.current;

    if (isHorizontalSwipe.current === null) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        isHorizontalSwipe.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    // Only apply horizontal swipe drag if horizontal movement dominates (never block vertical scroll)
    if (isHorizontalSwipe.current) {
      currentDragX.current = deltaX;
      setDragOffset(deltaX);
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    setDragOffset(0);

    // Resume automatic sliding after user interaction ends
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      isHorizontalSwipe.current = null;
    }, 900);
  };

  return (
    <section
      id={id}
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
    >
      <div className="section-container relative">
        <SectionHeadingContainer
          subheading={subheading}
          heading={
            <>
              {headingPrefix}{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            </>
          }
          description={description}
        />

        {/* 1. DESKTOP VIEW (>= 1024px): STRICTLY UNCHANGED 5-column grid layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 sm:gap-5">
          {applications.map((app) => {
            const Icon = app.icon || Layers;
            return (
              <div
                key={app.id || app.title}
                className="group relative rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                {/* Application Visual */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#EDF2F7] dark:bg-[#101936]">
                  <img
                    src={app.image}
                    alt={app.title || app.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1733]/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/95 dark:bg-[#101936]/90 border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimal Card Label */}
                <div className="p-3.5 sm:p-4 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-snug">
                    {app.title || app.name}
                  </h3>
                  {(app.subtitle || app.description) && (
                    <p className="text-[11px] text-[#52627C] dark:text-[#AAB6D0] mt-1 leading-snug">
                      {app.subtitle || app.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. MOBILE VIEW (< 1024px): Continuous automatic horizontal sliding carousel */}
        <div
          className="block lg:hidden relative w-full overflow-hidden select-none -mx-4 sm:-mx-6 px-4 sm:px-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          role="region"
          aria-label={`${headingPrefix} ${headingHighlight} mobile carousel`}
        >
          {/* Soft edge fade masks for smooth right entry and left exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 z-10 bg-gradient-to-r from-[#F5F8FC] dark:from-[#0D1733] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 z-10 bg-gradient-to-l from-[#F5F8FC] dark:from-[#0D1733] to-transparent" />

          {/* Marquee Track Container */}
          <div
            className="typical-apps-mobile-marquee-track flex items-stretch gap-3.5 sm:gap-4 w-max py-2"
            style={{
              animationDuration: `${speed}s`,
              animationPlayState: isPaused ? 'paused' : 'running',
              transform: isSwiping ? `translate3d(${dragOffset}px, 0, 0)` : undefined,
              transition: isSwiping ? 'none' : 'transform 0.3s ease-out',
            }}
          >
            {displayItems.map((app, index) => {
              const Icon = app.icon || Layers;
              const appKey = `mobile-${app.id || app.title}-${index}`;

              return (
                <div
                  key={appKey}
                  className="group relative w-[220px] sm:w-[245px] shrink-0 rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] overflow-hidden shadow-xs flex flex-col"
                >
                  {/* Application Visual */}
                  <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#EDF2F7] dark:bg-[#101936] shrink-0">
                    <img
                      src={app.image}
                      alt={app.title || app.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1733]/55 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-white/95 dark:bg-[#101936]/90 border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Minimal Card Label */}
                  <div className="p-3 sm:p-3.5 text-center flex-1 flex flex-col justify-center min-w-0">
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug truncate">
                      {app.title || app.name}
                    </h3>
                    {(app.subtitle || app.description) && (
                      <p className="text-[10.5px] sm:text-[11px] text-[#52627C] dark:text-[#AAB6D0] mt-0.5 leading-snug truncate">
                        {app.subtitle || app.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
