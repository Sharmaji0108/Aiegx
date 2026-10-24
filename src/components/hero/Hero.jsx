import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const heroSlides = [
  {
    id: 1,
    tag: 'Embedded Hardware Platforms',
    heading: 'Embedded Computing Made Easy',
    description: 'Explore integrated hardware and software platforms designed to simplify embedded product development, accelerate time to market, and support long product lifecycles.',
    ctaText: 'Explore Hardware',
    ctaHref: '#hardware-platforms',
    image: '/images/sbc-platform-hd.jpg',
    fallbackImage: '/images/rz-g2l-hd.jpg',
    alt: 'AIEGX Embedded Single Board Computer'
  },
  {
    id: 2,
    tag: 'Integrated Solutions',
    heading: 'Our Integrated Solutions',
    description: 'Pre-validated turnkey architectures for Human-Machine Interfaces (HMI), Driver Monitoring Systems (DMS), Vehicle Domain Controllers (VDC), and high-speed ANPR computer vision.',
    ctaText: 'Explore Solutions',
    ctaHref: '#integrated-solutions',
    image: '/images/integrated-solution-hd.jpg',
    fallbackImage: '/images/vdc-solution-hd.jpg',
    alt: 'AIEGX Integrated Vision & Controller Solution'
  },
  {
    id: 3,
    tag: 'Industries & Applications',
    heading: 'Industries We Serve',
    description: 'Mission-critical computing platforms engineered for Railways (EN 50155), Public Transportation, Intelligent Traffic, Smart Cities, Security Surveillance, and Rugged Defense.',
    ctaText: 'Explore Industries',
    ctaHref: '#industries',
    image: '/images/industrial-computing-hd.jpg',
    fallbackImage: '/images/sbc-platform-hd.jpg',
    alt: 'AIEGX Industrial Computing Hardware'
  },
  {
    id: 4,
    tag: 'Full-Lifecycle Services',
    heading: 'Our Engineering Capabilities',
    description: 'From SoM, SBC, and custom carrier-board design to production-grade Linux & Yocto BSP development, multi-camera ISP tuning, and edge AI model deployment.',
    ctaText: 'Talk to Engineers',
    ctaHref: '#contact',
    image: '/images/hero-som-module.jpg',
    fallbackImage: '/images/aiegx-hardware-som-hd.jpg',
    alt: 'AIEGX Embedded Engineering Capabilities'
  }
];

const SLIDE_INTERVAL_MS = 3000; // 3-second automatic advancement
const EXIT_DURATION_MS = 220;   // subtle fade & horizontal exit (~220ms)
const ENTER_SETUP_MS = 40;      // brief setup tick before animating enter (~40ms)

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle' | 'exit' | 'enter'
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);

  const exitTimeoutRef = useRef(null);
  const enterTimeoutRef = useRef(null);

  // Accessibility: detect prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Track browser tab visibility to pause auto-advancement when tab is hidden
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleVisibilityChange = () => {
      setIsTabHidden(document.visibilityState === 'hidden');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Slide transition logic with subtle horizontal movement and opacity fade (400-600ms total)
  const goToSlide = useCallback((nextIndex, dir) => {
    if (nextIndex === currentSlide) return;

    const determinedDir = dir || (nextIndex > currentSlide ? 'next' : 'prev');

    if (prefersReducedMotion) {
      setCurrentSlide(nextIndex);
      return;
    }

    if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);

    setDirection(determinedDir);
    setTransitionPhase('exit');

    exitTimeoutRef.current = setTimeout(() => {
      setCurrentSlide(nextIndex);
      setTransitionPhase('enter');

      enterTimeoutRef.current = setTimeout(() => {
        setTransitionPhase('idle');
      }, ENTER_SETUP_MS);
    }, EXIT_DURATION_MS);
  }, [currentSlide, prefersReducedMotion]);

  const goToNextSlide = useCallback(() => {
    const next = (currentSlide + 1) % heroSlides.length;
    goToSlide(next, 'next');
  }, [currentSlide, goToSlide]);

  const goToPrevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    goToSlide(prev, 'prev');
  }, [currentSlide, goToSlide]);

  // Keyboard navigation for accessibility
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      goToNextSlide();
    }
  }, [goToPrevSlide, goToNextSlide]);

  // Slide auto-advance every 3 seconds (paused on hover, focus, or when tab is hidden)
  // Automatically resets the full 3-second timer on manual navigation
  useEffect(() => {
    if (isHovered || isFocused || isTabHidden) {
      return;
    }

    const timer = setInterval(() => {
      goToNextSlide();
    }, SLIDE_INTERVAL_MS);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide, isHovered, isFocused, isTabHidden, goToNextSlide]);

  // Clean up any pending transition timeouts on unmount
  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    };
  }, []);

  const current = heroSlides[currentSlide];

  // Subtle horizontal movement combined with opacity fade (400-600ms total duration)
  const getTextTransitionClass = () => {
    if (prefersReducedMotion) {
      return 'opacity-100 translate-x-0';
    }
    switch (transitionPhase) {
      case 'exit':
        return `opacity-0 ${
          direction === 'next' ? '-translate-x-6' : 'translate-x-6'
        } transition-all duration-220 ease-in`;
      case 'enter':
        return `opacity-0 ${
          direction === 'next' ? 'translate-x-6' : '-translate-x-6'
        } transition-none`;
      case 'idle':
      default:
        return 'opacity-100 translate-x-0 transition-all duration-300 ease-out';
    }
  };

  const getImageTransitionClass = () => {
    if (prefersReducedMotion) {
      return 'opacity-100 translate-x-0 scale-100';
    }
    switch (transitionPhase) {
      case 'exit':
        return `opacity-0 ${
          direction === 'next' ? '-translate-x-8' : 'translate-x-8'
        } scale-[0.98] transition-all duration-220 ease-in`;
      case 'enter':
        return `opacity-0 ${
          direction === 'next' ? 'translate-x-8' : '-translate-x-8'
        } scale-[0.98] transition-none`;
      case 'idle':
      default:
        return 'opacity-100 translate-x-0 scale-100 transition-all duration-300 ease-out';
    }
  };

  return (
    <section 
      id="hero"
      aria-roledescription="carousel"
      aria-label="AIEGX Embedded Computing Hero Showcase"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="relative pt-[88px] pb-6 sm:pt-[102px] sm:pb-8 lg:pt-[118px] lg:pb-10 overflow-hidden bg-[#F5F8FC] dark:bg-[#0D1733] select-none transition-colors duration-300"
    >
      {/* Circuit-board traces & technical grid pattern overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-30" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2DD4F0" strokeOpacity="0.08" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-circuit-grid)" />
        
        {/* Horizontal & Angled Circuit Traces */}
        <path d="M 60 180 L 260 180 L 320 240 L 620 240" fill="none" stroke="#2DD4F0" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="6 4" />
        <circle cx="60" cy="180" r="3" fill="#2DD4F0" fillOpacity="0.7" />
        <circle cx="620" cy="240" r="3" fill="#2DD4F0" fillOpacity="0.7" />
        
        <path d="M 500 100 L 700 100 L 760 160 L 1100 160" fill="none" stroke="#3285FF" strokeOpacity="0.4" strokeWidth="1.2" />
        <circle cx="760" cy="160" r="2.5" fill="#3285FF" fillOpacity="0.8" />
        <circle cx="1100" cy="160" r="2.5" fill="#3285FF" fillOpacity="0.8" />
        
        <path d="M 720 460 L 940 460 L 1020 380 L 1320 380" fill="none" stroke="#2DD4F0" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="8 6" />
        <circle cx="1020" cy="380" r="3" fill="#2DD4F0" fillOpacity="0.6" />
        <circle cx="1320" cy="380" r="3" fill="#2DD4F0" fillOpacity="0.6" />
      </svg>

      {/* Ambient Radial Under-Glow Lights */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-[#3285FF]/20 via-[#2DD4F0]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#2DD4F0]/20 via-[#3285FF]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Large Outer Section Container Matching Hardware Platforms Design */}
      <div className="section-container relative">
        
        {/* Previous Slide Arrow Button */}
        <button
          type="button"
          onClick={goToPrevSlide}
          className="absolute left-2.5 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/90 dark:bg-[#17264A]/90 hover:bg-white dark:hover:bg-[#1E3360] border border-slate-200 dark:border-[#24355A] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] text-slate-700 dark:text-white/80 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#2DD4F0]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4F0] cursor-pointer"
          aria-label="Previous slide"
          title="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Slide Arrow Button */}
        <button
          type="button"
          onClick={goToNextSlide}
          className="absolute right-2.5 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/90 dark:bg-[#17264A]/90 hover:bg-white dark:hover:bg-[#1E3360] border border-slate-200 dark:border-[#24355A] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] text-slate-700 dark:text-white/80 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#2DD4F0]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4F0] cursor-pointer"
          aria-label="Next slide"
          title="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Main Two-Column Hero Grid: Left Column Text, Right Column Hardware Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[460px] px-3 sm:px-8 lg:px-12 pb-10 sm:pb-12">
          
          {/* Left Column: Heading, Description, and CTA Button (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Sliding Hero Text Container with Stable Dimensions */}
            <div 
              className="w-full min-h-[260px] sm:min-h-[240px] flex flex-col justify-start"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className={`transform will-change-[transform,opacity] ${getTextTransitionClass()}`}>
                {/* Tag Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#17264A] border border-slate-200 dark:border-[#24355A] text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider mb-5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                  <span>{current.tag}</span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-[1.18] mb-5 max-w-2xl">
                  {current.heading}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl font-normal">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="mt-6 sm:mt-8">
              <div className={`transform will-change-[transform,opacity] ${getTextTransitionClass()}`}>
                <a
                  href={current.ctaHref}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 hover:shadow-[#2DD4F0]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  aria-label={`${current.ctaText} — Navigate to section`}
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Large Hardware Product Image (5 cols) */}
          {/* Frameless presentation, cleanly floating with soft under-glow and horizontal transition */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]">
            
            {/* Ambient Radial Backlight Glow specifically positioned behind hardware */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-72 h-72 sm:w-88 sm:h-88 md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-tr from-[#3285FF]/25 via-[#2DD4F0]/20 to-transparent blur-[90px]" />
            </div>

            {/* The Hardware Product Image — Frameless and Proportioned */}
            <div className={`w-full flex items-center justify-center transform will-change-[transform,opacity] ${getImageTransitionClass()}`}>
                <img
                  key={current.id}
                  src={current.image}
                  alt={current.alt}
                  width={1024}
                  height={1024}
                  onError={(e) => {
                    if (current.fallbackImage && e.currentTarget.src !== current.fallbackImage) {
                      e.currentTarget.src = current.fallbackImage;
                    }
                  }}
                  className="max-h-[340px] sm:max-h-[420px] lg:max-h-[460px] w-auto max-w-full object-contain rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-102"
                  loading="eager"
                />
            </div>

          </div>

        </div>

        {/* Four Slide Indicators Horizontally Centered at the Bottom of the Outer Container */}
        <div 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-3" 
          role="tablist" 
          aria-label="Hero slide indicators"
        >
          {heroSlides.map((slide, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={slide.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${slide.heading}`}
                onClick={() => goToSlide(idx, idx > currentSlide ? 'next' : 'prev')}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4F0] cursor-pointer ${
                  isActive 
                    ? 'w-10 bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] shadow-md shadow-[#2DD4F0]/40' 
                    : 'w-4 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
