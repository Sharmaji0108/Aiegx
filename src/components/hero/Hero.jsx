import React, { useState, useEffect, useRef, useCallback } from 'react';
import PCBModel from './PCBModel';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    heading: 'Embedded Computing Made Easy',
    description: 'Explore integrated hardware and software platforms designed to simplify embedded product development, accelerate time to market, and support long product lifecycles.'
  },
  {
    id: 2,
    heading: 'Product Samples for Lino iMX93 and OSM iMX93',
    description: 'Get ready to accelerate your next embedded project with ultra-compact, scalable SoMs from Toradex. The new Lino and OSM bring industrial-grade embedded computing to space-constrained edge AI applications without compromising performance or reliability. Lino features a board-to-board connector, while OSM provides a solderable open standard design.'
  },
  {
    id: 3,
    heading: 'Simplifying the Development and Operation of Linux IoT Devices',
    description: null
  },
  {
    id: 4,
    heading: 'Introducing the Luna SL1680 Single Board Computer',
    description: 'An AI-ready single board computer built for pro consumer and light industrial edge AI applications, combining powerful performance with integrated connectivity. Luna integrates the Synaptics SL1680 SoC with Toradex’s quality and Torizon for simplified development, remote management, and CRA-ready security workflows.'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionState, setTransitionState] = useState('active'); // 'active' | 'exiting' | 'entering'
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const transitionTimeoutRef = useRef(null);

  // Listen for prefers-reduced-motion accessibility preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const goToSlide = useCallback((nextIndex) => {
    if (nextIndex === currentSlide || transitionState === 'exiting') return;

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    if (prefersReducedMotion) {
      setCurrentSlide(nextIndex);
      return;
    }

    // Step 1: Outgoing text fades out and glides slightly upward
    setTransitionState('exiting');

    transitionTimeoutRef.current = setTimeout(() => {
      // Step 2: Swap content and position at bottom entry offset
      setCurrentSlide(nextIndex);
      setTransitionState('entering');

      // Step 3: Trigger upward glide into position on next paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionState('active');
        });
      });
    }, 280);
  }, [currentSlide, transitionState, prefersReducedMotion]);

  const goToNextSlide = useCallback(() => {
    const next = (currentSlide + 1) % heroSlides.length;
    goToSlide(next);
  }, [currentSlide, goToSlide]);

  // Automatic slide advance every 6 seconds (paused when user hovers or focuses text area)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      goToNextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered, goToNextSlide]);

  // Clean up timeouts on component unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  // Dynamic CSS classes for smooth upward fade-and-slide
  const getTransitionClasses = () => {
    if (prefersReducedMotion) {
      return transitionState === 'active' 
        ? 'opacity-100 transition-opacity duration-200' 
        : 'opacity-0 transition-opacity duration-200';
    }

    switch (transitionState) {
      case 'exiting':
        return 'opacity-0 -translate-y-3.5 transition-all duration-280 ease-in pointer-events-none';
      case 'entering':
        return 'opacity-0 translate-y-3.5 transition-none pointer-events-none';
      case 'active':
      default:
        return 'opacity-100 translate-y-0 transition-all duration-500 ease-out';
    }
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EBF2FC] via-[#F4F8FD] to-[#E5EEFA] dark:bg-[#101936] dark:bg-none transition-colors duration-300">
      {/* Subtle Geometric Circuit Lines & Technical Grid Details */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-40" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-tech-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" className="text-blue-500/10 dark:text-[#42D9F5]/10" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-tech-grid)" />
        {/* Subtle geometric circuit trace paths */}
        <path d="M 80 160 L 280 160 L 340 220 L 680 220" fill="none" stroke="currentColor" className="text-blue-500/30 dark:text-[#42D9F5]/25" strokeWidth="1" strokeDasharray="6 4" />
        <circle cx="80" cy="160" r="2.5" className="fill-blue-500/50 dark:fill-[#42D9F5]/60" />
        <circle cx="680" cy="220" r="2.5" className="fill-blue-500/50 dark:fill-[#42D9F5]/60" />
        <path d="M 520 80 L 720 80 L 780 140 L 1050 140" fill="none" stroke="currentColor" className="text-blue-600/30 dark:text-[#3478F6]/30" strokeWidth="1" />
        <circle cx="780" cy="140" r="2" className="fill-blue-600/50 dark:fill-[#3478F6]/60" />
        <path d="M 750 400 L 980 400 L 1060 330 L 1280 330" fill="none" stroke="currentColor" className="text-blue-500/25 dark:text-[#42D9F5]/20" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="1060" cy="330" r="2.5" className="fill-blue-500/50 dark:fill-[#42D9F5]/50" />
      </svg>

      {/* Background Radial Glow Lights for Soft Depth */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] bg-gradient-to-tr from-blue-400/20 via-cyan-400/15 to-transparent dark:from-[#3478F6]/20 dark:via-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-blue-400/20 via-cyan-400/15 to-transparent dark:from-[#3478F6]/20 dark:via-[#42D9F5]/10 rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Two-Column Hero Grid — Frameless, Blending Directly into Page Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Minimal, Spacious, Left-Aligned Typography (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              
              {/* Sliding Hero Text Area with Stable Minimum Height to Prevent Jumping */}
              <div 
                className="w-full min-h-[280px] sm:min-h-[290px] lg:min-h-[310px] flex flex-col justify-start focus:outline-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
                tabIndex={0}
                aria-live="polite"
                aria-atomic="true"
                aria-label="Hero announcements carousel. Hover or focus to pause sliding."
              >
                <div className={`transform will-change-[transform,opacity] ${getTransitionClasses()}`}>
                  {/* Main Hero Heading — Elegant Serif Matching Reference */}
                  <h1 className="font-serif text-[clamp(2rem,3.5vw,3.65rem)] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.16] mb-6 max-w-3xl transition-colors duration-200">
                    {currentSlideData.heading}
                  </h1>

                  {/* Description — Matching Typography & Formatting */}
                  {currentSlideData.description && (
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-[#F5F7FC]/70 leading-relaxed max-w-2xl font-normal transition-colors duration-200">
                      {currentSlideData.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Horizontal Slide Indicators (Four Slim Bars) */}
              <div 
                className="flex items-center gap-2.5 mt-6 mb-2" 
                role="tablist" 
                aria-label="Hero slide indicators"
              >
                {heroSlides.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={slide.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${idx + 1}: ${slide.heading}`}
                      onClick={() => goToSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42D9F5] ${
                        isActive 
                          ? 'w-10 bg-gradient-to-r from-[#0284C7] to-[#2563EB] dark:from-[#42D9F5] dark:to-[#3478F6] shadow-md shadow-blue-500/20 dark:shadow-[#42D9F5]/30' 
                          : 'w-5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Single Hero CTA Button */}
              <div className="flex items-center mt-6 sm:mt-8">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold text-sm text-slate-900 dark:text-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 border border-slate-300 dark:border-white/20 hover:border-blue-500 dark:hover:border-[#42D9F5] hover:text-blue-600 dark:hover:text-[#42D9F5] shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  aria-label="Explore Hardware Products"
                >
                  <span>Explore Hardware</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Column: Frameless 3D PCB Model (5 cols on lg) */}
            <div className="lg:col-span-5 relative flex items-center justify-center overflow-visible">
              
              {/* Subtle Ambient Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-blue-400/20 via-cyan-400/20 to-transparent dark:from-[#3478F6]/25 dark:via-[#42D9F5]/20 blur-[85px]" />
              </div>

              {/* Frameless 3D PCB Model Container — Unconstrained, Fully Visible & Responsive */}
              <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[600px] flex items-center justify-center overflow-visible">
                <PCBModel />
              </div>

            </div>

          </div>
        </div>
      </section>

  );
}
