import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import {
  Car,
  Camera,
  Factory,
  Shield,
  Eye,
  ScanLine,
  HardDrive,
  Target,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { navigateTo } from '../../utils/navigation';

/* ─── Data ─────────────────────────────────────────────────────────────── */
const solutions = [
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle & Mobility Solutions',
    description:
      'Embedded vision solutions for driver monitoring, vehicle identification and detection.',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    imageAlt: 'AI Traffic Surveillance with Plate Detection',
    features: [
      { icon: Eye, label: 'Driver Monitoring System (DMS)', status: null, href: '/solutions/driver-monitoring-system' },
      { icon: ScanLine, label: 'Automatic Number Plate Recognition (ANPR)', status: null, href: '/solutions/anpr-systems' },
      { icon: Camera, label: 'Vehicle Detection Camera (VDC)', status: null, href: '/solutions/vehicle-detection-camera' },
    ],
    ctaGradient: true,
    href: '/vehicle-mobility',
    buttonText: 'Explore Solutions',
  },
  {
    id: 'surveillance',
    icon: Camera,
    title: 'Video & Surveillance Solutions',
    description:
      'Embedded video recording, monitoring, and analytics for enhanced security.',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    imageAlt: 'AI Security Surveillance at Modern Entrance',
    features: [
      { icon: HardDrive, label: 'Mobile Network Video Recorder (MNVR)', status: 'In Development', href: '/solutions/video-surveillance' },
    ],
    ctaGradient: false,
    href: '/solutions/video-surveillance',
    buttonText: 'Explore Solutions',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial & Machine Vision Solutions',
    description:
      'Embedded hardware and vision processing capabilities for industrial monitoring and automation applications.',
    image: '/images/Automated Gear Inspection Line.png',
    imageAlt: 'Automated Gear Inspection Line',
    features: [],
    ctaGradient: false,
    href: '/contact',
    buttonText: 'Contact Our Team',
  },
  {
    id: 'defence',
    icon: Shield,
    title: 'Defence & Advanced Vision Solutions',
    description:
      'Specialized embedded vision solutions for defence and mission-critical applications.',
    image: '/images/Futuristic Mountain Surveillance HUD.png',
    imageAlt: 'Futuristic Mountain Surveillance HUD',
    features: [
      { icon: Target, label: 'Seeker', status: 'In Development', href: '/solutions/seeker-systems' },
    ],
    ctaGradient: false,
    href: '/solutions/defence-advanced-vision',
    buttonText: 'Explore Solutions',
  },
];

/* ─── Badge component ───────────────────────────────────────────────────── */
function StatusBadge({ status }) {
  if (!status) return null;
  const isDev = status === 'In Development';
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap flex-shrink-0 ${
        isDev
          ? 'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/40'
          : 'bg-[#E2EEFB] text-[#089EC2] border border-[#C5DDF5] dark:bg-[#1A2C52] dark:text-[#2DD4F0] dark:border-[#244277]'
      }`}
    >
      {status}
    </span>
  );
}

/* ─── Single Card ───────────────────────────────────────────────────────── */
function SolutionCard({ solution, className = '' }) {
  const CardIcon = solution.icon;

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] rounded-[18px] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-4 sm:p-4.5 ${className}`}
    >
      {/* ── Icon + Heading Row ── */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EBF5FD] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center shadow-2xs">
          <CardIcon className="w-4.5 h-4.5 text-[#089EC2] dark:text-[#2DD4F0]" />
        </div>
        <h3 className="text-sm sm:text-[14.5px] font-bold leading-snug text-[#14213D] dark:text-[#F8FAFC]">
          <a
            href={solution.href}
            onClick={(e) => navigateTo(solution.href, e)}
            className="hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors"
          >
            {solution.title}
          </a>
        </h3>
      </div>

      {/* ── Description directly below heading ── */}
      <p className="text-xs leading-relaxed text-[#52627C] dark:text-[#AAB6D0] mb-3">
        {solution.description}
      </p>

      {/* ── Image below description ── */}
      <a
        href={solution.href}
        onClick={(e) => navigateTo(solution.href, e)}
        className="w-full h-32 sm:h-36 rounded-xl overflow-hidden border border-[#DCE8F5] dark:border-[#24355A] mb-3.5 block group/img flex-shrink-0"
      >
        <img
          src={solution.image}
          alt={solution.imageAlt}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </a>

      {/* ── Subtopics List (Compact horizontal rows) ── */}
      {solution.features && solution.features.length > 0 && (
        <div className="space-y-2 mb-3.5">
          {solution.features.map((feat, i) => {
            const FeatIcon = feat.icon;
            return (
              <a
                key={i}
                href={feat.href}
                onClick={(e) => navigateTo(feat.href, e)}
                className="flex items-center justify-between gap-2 group/feat hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors cursor-pointer py-0.5"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FeatIcon className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0] flex-shrink-0" />
                  <span className="text-xs text-[#14213D] dark:text-[#D4E3F5] group-hover/feat:text-[#089EC2] dark:group-hover/feat:text-[#2DD4F0] font-medium leading-tight truncate">
                    {feat.label}
                  </span>
                </div>
                {feat.status && <StatusBadge status={feat.status} />}
              </a>
            );
          })}
        </div>
      )}

      {/* ── Full-width Explore Solutions / Contact CTA Button ── */}
      <div className="mt-auto">
        <a
          href={solution.href}
          onClick={(e) => navigateTo(solution.href, e)}
          className="explore-btn text-xs py-2"
        >
          {solution.buttonText || 'Explore Solutions'}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

/* ─── Mobile Auto-Sliding Carousel Component (Exclusively on Mobile) ─── */
function MobileSolutionsCarousel({ solutions }) {
  const total = solutions.length;
  // Extended array for seamless right-to-left infinite loop: [last, ...items, first]
  const extendedItems = [solutions[total - 1], ...solutions, solutions[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  // Transition to target slide index
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

  // Handle seamless wrap-around at the cloned boundary slides
  const handleTransitionEnd = () => {
    if (currentIndex >= extendedItems.length - 1) {
      // Reached cloned first slide at the end -> jump to real first slide (index 1) without animation
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      // Reached cloned last slide at the start -> jump to real last slide (index total) without animation
      setIsTransitioning(false);
      setCurrentIndex(total);
    } else {
      setIsTransitioning(false);
    }
  };

  // Automatic slide interval: 5 seconds, looping infinitely right to left
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

  // Touch Swipe Handlers for mobile gestures
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

    // Minimum swipe threshold 40px and dominant horizontal angle
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Active pagination dot index (0 to total - 1)
  const activeDotIndex = (currentIndex - 1 + total) % total;

  return (
    <div
      className="relative w-full max-w-md mx-auto px-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Single-Card Carousel Stage with CSS transform: translateX() ── */}
      <div className="relative w-full overflow-hidden rounded-[18px]">
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
          {extendedItems.map((sol, index) => (
            <div
              key={`slide-${index}-${sol.id}`}
              className="w-full min-w-full shrink-0"
            >
              <SolutionCard solution={sol} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Navigation Controls: Previous Button, Pagination Dots, Next Button ── */}
      <div className="flex items-center justify-center gap-3.5 mt-5">
        {/* Previous Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous solution card"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] text-slate-700 dark:text-slate-200 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Four Pagination Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Solutions carousel pagination">
          {solutions.map((sol, idx) => {
            const isActive = idx === activeDotIndex;
            return (
              <button
                key={sol.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${sol.title}`}
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

        {/* Next Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next solution card"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] text-slate-700 dark:text-slate-200 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function Applications() {
  return (
    <section
      id="integrated-solutions"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300"
    >
      {/* Anchor aliases */}
      <div id="solutions" className="sr-only" />
      <div id="applications" className="sr-only" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#3285FF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#2DD4F0]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative">

        {/* ── Section Header Banner ── */}
        <SectionHeadingContainer
          subheading="INTEGRATED SOLUTIONS"
          heading={
            <>
              Our{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Integrated Solutions
              </span>
            </>
          }
          description="Embedded hardware and software solutions for transportation, surveillance, industrial automation, and defence applications."
        />

        {/* ── Desktop & Tablet Grid: Exactly 4 Cards ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
          {solutions.map((sol) => (
            <SolutionCard key={sol.id} solution={sol} />
          ))}
        </div>

        {/* ── Mobile Auto-Sliding Carousel: Exclusively on Mobile Screens (sm:hidden) ── */}
        <div className="block sm:hidden">
          <MobileSolutionsCarousel solutions={solutions} />
        </div>

      </div>
    </section>
  );
}
