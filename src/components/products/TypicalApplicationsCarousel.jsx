import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * MobileTypicalApplicationsCarousel
 * Automatic horizontal sliding carousel exclusively on mobile (< 1024px).
 * Displays one card at a time with smooth 700ms right-to-left slide transition,
 * 5-second auto-slide interval, infinite loop, and touch gestures.
 */
function MobileTypicalApplicationsCarousel({ applications }) {
  const total = applications.length;
  // Extended array for seamless right-to-left infinite loop: [last, ...items, first]
  const extendedItems = [applications[total - 1], ...applications, applications[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  const goToSlide = useCallback((targetIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(targetIndex);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleDotClick = useCallback((idx) => {
    goToSlide(idx + 1);
  }, [goToSlide]);

  const handleTransitionEnd = () => {
    if (currentIndex >= extendedItems.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(total);
    } else {
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isSwipingRef.current = true;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (!isSwipingRef.current) return;
    isSwipingRef.current = false;

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const activeDotIndex = (currentIndex - 1 + total) % total;

  return (
    <div
      className="relative w-full max-w-md mx-auto px-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Single-Card Carousel Stage ── */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <div
          className="flex w-full will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedItems.map((app, index) => {
            const Icon = app.icon || Layers;
            return (
              <div
                key={`slide-${index}-${app.id || app.title || index}`}
                className="w-full min-w-full shrink-0 flex flex-col rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] overflow-hidden shadow-xs"
              >
                {/* Application Visual */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#EDF2F7] dark:bg-[#101936] shrink-0">
                  <img
                    src={app.image}
                    alt={app.title || app.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1733]/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/95 dark:bg-[#101936]/90 border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimal Card Label */}
                <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-center min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">
                    {app.title || app.name}
                  </h3>
                  {(app.subtitle || app.description) && (
                    <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] mt-1.5 leading-relaxed">
                      {app.subtitle || app.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Navigation Controls: Previous Button, Pagination Dots, Next Button ── */}
      <div className="flex items-center justify-center gap-3.5 mt-5">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous application card"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] text-slate-700 dark:text-slate-200 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Applications carousel pagination">
          {applications.map((app, idx) => {
            const isActive = idx === activeDotIndex;
            return (
              <button
                key={app.id || idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${app.title || app.name}`}
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-7 h-2.5 bg-[#089EC2] dark:bg-[#2DD4F0]'
                    : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next application card"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] text-slate-700 dark:text-slate-200 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

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
  speed = 28, // Kept for backwards compatibility
}) {
  if (!applications || applications.length === 0) {
    return null;
  }

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

        {/* 2. MOBILE VIEW (< 1024px): Automatic 5-second horizontal sliding carousel */}
        <div className="block lg:hidden">
          <MobileTypicalApplicationsCarousel applications={applications} />
        </div>
      </div>
    </section>
  );
}
