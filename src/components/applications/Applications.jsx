import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import {
  Car,
  Camera,
  Factory,
  Shield,
  Eye,
  ScanLine,
  Car as CarIcon,
  ParkingCircle,
  HardDrive,
  Monitor,
  Settings,
  Users,
  BarChart2,
  Layers,
  Search,
  Cpu,
  Server,
  Target,
  RadioTower,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  RotateCcw,
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
    backDescription:
      'Automotive-qualified embedded vision platforms for driver monitoring, license plate recognition, and vehicle detection.',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    imageAlt: 'AI Traffic Surveillance with Plate Detection',
    subtopics: [
      { icon: Eye, title: 'Driver Monitoring System (DMS)', status: null, href: '/solutions/driver-monitoring-system' },
      { icon: ScanLine, title: 'Automatic Number Plate Recognition (ANPR)', status: null, href: '/solutions/anpr-systems' },
      { icon: Camera, title: 'Vehicle Detection Camera (VDC)', status: null, href: '/solutions/vehicle-detection-camera' },
    ],
    ctaGradient: true,
    href: '/vehicle-mobility',
  },
  {
    id: 'surveillance',
    icon: Camera,
    title: 'Video & Surveillance Solutions',
    description:
      'Embedded video recording, monitoring, and analytics for enhanced security.',
    backDescription:
      'Embedded video recording, live monitoring, and intelligent analytics for security and surveillance.',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    imageAlt: 'AI Security Surveillance at Modern Entrance',
    subtopics: [
      { icon: HardDrive, title: 'Mobile Network Video Recorder (MNVR)', status: 'In Development', href: '/solutions/nvr-systems' },
      { icon: Monitor, title: 'CCTV Monitoring System', status: null, href: '/solutions/cctv-monitoring' },
      { icon: Cpu, title: 'AI Video Analytics', status: null, href: '/solutions/ai-video-analytics' },
      { icon: Users, title: 'People Counting', status: null, href: '/solutions/people-counting' },
    ],
    ctaGradient: false,
    href: '/solutions/video-surveillance',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial & Machine Vision Solutions',
    description:
      'Embedded hardware and vision processing capabilities for industrial monitoring and automation applications.',
    backDescription:
      'Automated optical inspection, industrial HMIs, and edge vision systems engineered for smart manufacturing.',
    image: '/images/Automated Gear Inspection Line.png',
    imageAlt: 'Automated Gear Inspection Line',
    subtopics: [
      { icon: Monitor, title: 'Industrial / Railway HMI', status: null, href: '/solutions/industrial-railway-hmi' },
      { icon: Layers, title: 'Display / Video Controller', status: null, href: '/solutions/display-video-controller' },
      { icon: Search, title: 'AI Visual Inspection', status: null, href: '/solutions/ai-visual-inspection' },
      { icon: Camera, title: 'Smart Vision AI Camera', status: null, href: '/solutions/smart-vision-ai-camera' },
    ],
    buttonText: 'Contact Our Team',
    buttonHref: '#contact',
    ctaGradient: false,
    href: '/solutions/industrial-machine-vision',
  },
  {
    id: 'defence',
    icon: Shield,
    title: 'Defence & Advanced Vision Solutions',
    description:
      'Specialized embedded vision solutions for defence and mission-critical applications.',
    backDescription:
      'Specialized embedded vision and image-processing solutions for defence and mission-critical applications.',
    image: '/images/Realistic Outdoor Surveillance Camera Close-Up.png',
    imageAlt: 'Realistic Outdoor Surveillance Camera Close-Up',
    subtopics: [
      { icon: Target, title: 'Seeker', status: 'In Development', href: '/solutions/seeker-systems' },
      { icon: Eye, title: 'Surveillance Vision System', status: null, href: '/solutions/surveillance-vision' },
      { icon: RadioTower, title: 'Target Tracking & Recognition', status: null, href: '/solutions/target-tracking-recognition' },
      { icon: Shield, title: 'Rugged AI Embedded System', status: null, href: '/solutions/rugged-ai-embedded' },
    ],
    ctaGradient: false,
    href: '/solutions/defence-advanced-vision',
  },
];

/* ─── Badge component ───────────────────────────────────────────────────── */
function StatusBadge({ status }) {
  if (!status) return null;
  const isDev = status === 'In Development';
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap flex-shrink-0 ${isDev
        ? 'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/40'
        : 'bg-[#E2EEFB] text-[#089EC2] border border-[#C5DDF5] dark:bg-[#1A2C52] dark:text-[#2DD4F0] dark:border-[#244277]'
        }`}
    >
      {status}
    </span>
  );
}

/* ─── Single Card with Bottom-to-Top 3D Flip Animation ─────────────────── */
function SolutionCard({ solution, className = '' }) {
  const CardIcon = solution.icon;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showBack = isFlipped || isHovered;

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFlipped(false);
  };

  const handleCardClick = (e) => {
    // If clicked on an interactive link or button inside, allow navigation without toggling
    if (e.target.closest('a, button')) return;
    if (showBack) {
      setIsFlipped(false);
      setIsHovered(false);
    } else {
      setIsFlipped(true);
    }
  };

  const handleFlipBack = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
    setIsHovered(false);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full min-h-[390px] sm:min-h-[410px] w-full [perspective:1200px] select-none group/card cursor-pointer ${className}`}
    >
      {/* ── 3D Flipper Container ── */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          transform: showBack ? 'rotateX(180deg)' : 'rotateX(0deg)',
        }}
      >
        {/* ── Front Face (Clean card without subtopics) ── */}
        <div
          className={`flex flex-col h-full w-full bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] rounded-[18px] shadow-xs hover:shadow-md transition-shadow duration-300 p-4 sm:p-4.5 ${
            showBack ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateX(0deg)',
          }}
        >
          {/* ── Icon + Heading Row ── */}
          <div className="flex items-center gap-2.5 mb-2.5 min-h-[40px]">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EBF5FD] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center shadow-2xs">
              <CardIcon className="w-4.5 h-4.5 text-[#089EC2] dark:text-[#2DD4F0]" />
            </div>
            <h3 className="text-sm sm:text-[14.5px] font-bold leading-snug text-[#14213D] dark:text-[#F8FAFC]">
              <a
                href={solution.href}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo(solution.href, e);
                }}
                className="hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors"
              >
                {solution.title}
              </a>
            </h3>
          </div>

          {/* ── Description directly below heading ── */}
          <p className="text-xs leading-relaxed text-[#52627C] dark:text-[#AAB6D0] mb-3 min-h-[48px] sm:min-h-[52px]">
            {solution.description}
          </p>

          {/* ── Image below description ── */}
          <a
            href={solution.href}
            onClick={(e) => {
              e.stopPropagation();
              navigateTo(solution.href, e);
            }}
            className="w-full h-36 sm:h-40 rounded-xl overflow-hidden border border-[#DCE8F5] dark:border-[#24355A] mb-3 block group/img flex-shrink-0"
          >
            <img
              src={solution.image}
              alt={solution.imageAlt}
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>

          {/* ── Full-width Explore Solutions CTA Button ── */}
          <div className="mt-auto pt-3">
            {solution.buttonText === 'Contact Our Team' ? (
              <a
                href={solution.buttonHref || '#contact'}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo(solution.buttonHref || '#contact', e);
                }}
                className="explore-btn text-xs py-2"
              >
                <span>Contact Our Team</span>
                <Mail className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            ) : (
              <a
                href={solution.buttonHref || solution.href}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo(solution.buttonHref || solution.href, e);
                }}
                className="explore-btn text-xs py-2"
              >
                <span>{solution.buttonText || 'Explore Solutions'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* ── Back Face (Revealed on Bottom-to-Top Flip) ── */}
        <div
          className={`absolute inset-0 flex flex-col h-full w-full bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] rounded-[18px] shadow-md p-4 sm:p-4.5 overflow-hidden ${
            showBack ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateX(180deg)',
          }}
        >
          {/* ── Header: Icon + Title + Flip-Back Button ── */}
          <div className="flex items-center justify-between gap-2 mb-2 min-h-[40px]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EBF5FD] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center shadow-2xs">
                <CardIcon className="w-4.5 h-4.5 text-[#089EC2] dark:text-[#2DD4F0]" />
              </div>
              <h3 className="text-sm sm:text-[14px] font-bold leading-snug text-[#14213D] dark:text-[#F8FAFC] truncate">
                {solution.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={handleFlipBack}
              aria-label="Flip card back to front"
              title="Return to front"
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:bg-[#EBF5FD] dark:hover:bg-[#1A2C52] transition-colors flex-shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ── Short Description ── */}
          <p className="text-xs leading-relaxed text-[#52627C] dark:text-[#AAB6D0] mb-3 min-h-[36px] line-clamp-2">
            {solution.backDescription || solution.description}
          </p>

          {/* ── Subtopics Section Header ── */}
          <div className="flex items-center justify-between mb-2 pb-1 border-b border-[#E8EFF7] dark:border-[#223555]">
            <span className="text-[10.5px] font-semibold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
              Solution Subtopics
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              {solution.subtopics?.length || 0} modules
            </span>
          </div>

          {/* ── Subtopics List ── */}
          <div className="flex-1 space-y-1.5 overflow-y-auto pr-0.5">
            {solution.subtopics?.map((sub, i) => {
              const SubIcon = sub.icon || Eye;
              return (
                <a
                  key={i}
                  href={sub.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo(sub.href, e);
                  }}
                  className="flex items-center justify-between gap-2 p-1.5 sm:p-2 rounded-lg bg-[#F8FBFE] dark:bg-[#13203E] border border-[#E3EDF7] dark:border-[#1E3156] hover:border-[#089EC2]/60 hover:bg-[#EBF5FD] dark:hover:bg-[#1A2B50] group/sub transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-md bg-white dark:bg-[#17264A] flex items-center justify-center flex-shrink-0 border border-[#DCE8F5] dark:border-[#24355A]">
                      <SubIcon className="w-3 h-3 text-[#089EC2] dark:text-[#2DD4F0]" />
                    </div>
                    <span className="text-xs text-[#14213D] dark:text-[#D4E3F5] group-hover/sub:text-[#089EC2] dark:group-hover/sub:text-[#2DD4F0] font-medium leading-tight truncate">
                      {sub.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {sub.status && <StatusBadge status={sub.status} />}
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-[#089EC2] dark:group-hover/sub:text-[#2DD4F0] group-hover/sub:translate-x-0.5 transition-all" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* ── Bottom Explore Solutions CTA ── */}
          <div className="mt-auto pt-3">
            <a
              href={solution.href}
              onClick={(e) => {
                e.stopPropagation();
                navigateTo(solution.href, e);
              }}
              className="explore-btn text-xs py-2 w-full"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
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
                className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
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
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
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
