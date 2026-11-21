import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import { navigateTo } from '../../utils/navigation';
import SOM3DViewer from './SOM3DViewer';
import RZG2L from '../../../public/images/RZG2L.png';
import RZG2N from '../../../public/images/RZG2N.png';
import RZV2L from '../../../public/images/RZV2L.png';
import RZV2H from '../../../public/images/RZV2H.png';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cpu,
  CircuitBoard,
  LayoutGrid,
  ShieldCheck,
  Clock,
  Layers,
  Server,
  Zap,
} from 'lucide-react';

/* ─── Hardware tag data per product ─────────────────────────────────── */
const HW_TAGS = {
  'rz-g2l': [
    { label: 'SMARC SoM', icon: CircuitBoard },
    { label: 'SBC', icon: LayoutGrid },
    { label: 'Carrier Board', icon: Layers },
  ],
  'rz-g2n': [
    { label: 'SBC', icon: LayoutGrid },
  ],
  'rz-v2l': [
    { label: 'SMARC SoM', icon: CircuitBoard },
    { label: 'SBC', icon: LayoutGrid },
    { label: 'Carrier Board', icon: Layers },
  ],
  'rz-v2h': [
    { label: 'SBC', icon: LayoutGrid },
  ],
};

/* ─── Bottom feature strip data ─────────────────────────────────────── */
const FEATURES = [
  {
    icon: Zap,
    title: 'Optimized for Real-World Applications',
    sub: 'HMI, multimedia, vision AI and edge computing.',
  },
  {
    icon: Layers,
    title: 'Flexible Hardware Options',
    sub: 'SoM, SBC, carrier boards (platform dependent).',
  },
  {
    icon: Server,
    title: 'Ready for Product Development',
    sub: 'From evaluation to production.',
  },
  {
    icon: Clock,
    title: 'Long-Term Support',
    sub: 'Stable supply and lifecycle management.',
  },
];

/* ─── Single Hardware Card Component ───────────────────────────────────── */
function HardwareCard({ product, className = '' }) {
  const hwTags = HW_TAGS[product.id] || [];

  return (
    <div
      className={`group relative flex flex-col bg-white dark:bg-[#17264A] rounded-[18px] border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 p-4 sm:p-5 ${
        product.ctaGradient
          ? 'border-[#089EC2]/50 dark:border-[#2DD4F0]/40 shadow-[0_2px_12px_rgba(8,158,194,0.12)]'
          : 'border-[#DCE8F5] dark:border-[#24355A] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/30'
      } ${className}`}
    >
      {/* 1. Platform name */}
      <h3 className="text-lg sm:text-xl font-extrabold text-[#14213D] dark:text-[#F8FAFC] tracking-tight leading-tight">
        {product.name}
      </h3>

      {/* 2. Subtitle */}
      <p className="platform-subtitle text-sm font-bold text-[#1672E8] dark:text-[#2DD4F0] normal-case">
        {product.subtitle}
      </p>

      {/* 3. Platform description */}
      <p className="text-xs sm:text-[13px] leading-relaxed text-[#52627C] dark:text-[#AAB6D0] mb-3">
        {product.shortDescription}
      </p>

      {/* 4. Hardware Image / 3D Model */}
      <div
        className="w-full h-36 sm:h-40 flex items-center justify-center bg-white dark:bg-[#17264A] mb-4 overflow-hidden rounded-xl cursor-pointer"
        onClick={(e) => navigateTo(`/products/${product.id}`, e)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateTo(`/products/${product.id}`, e);
          }
        }}
        aria-label={`View ${product.name} platform`}
      >
        {product.model3d ? (
          <div className="w-full h-full p-1 pointer-events-auto">
            <SOM3DViewer
              modelUrl={product.model3d}
              fallbackSrc={product.image}
              fallbackAlt={product.name}
            />
          </div>
        ) : product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                e.currentTarget.src = product.fallbackImage;
              }
            }}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#AAB6D0] text-xs italic">
            Hardware in Development
          </div>
        )}
      </div>

      {/* 5. AVAILABLE HARDWARE label */}
      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#52627C] dark:text-[#AAB6D0] mb-1.5">
        AVAILABLE HARDWARE
      </p>

      {/* 6. Hardware tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {hwTags.map(({ label, icon: TagIcon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-[#E2EEFB] dark:bg-[#1A2C52] text-[#089EC2] dark:text-[#2DD4F0] border border-[#C5DDF5] dark:border-[#244277]"
          >
            <TagIcon className="w-3 h-3" />
            {label}
          </span>
        ))}
      </div>

      {/* 7. Explore Platform button */}
      <div className="mt-auto">
        <button
          onClick={(e) => navigateTo(`/products/${product.id}`, e)}
          className="explore-btn"
        >
          Explore Platform
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

/* ─── Mobile Auto-Sliding Carousel Component (Exclusively on Mobile) ─── */
function MobileHardwareCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  // Transition to target slide with directional animation (600–800ms)
  const goToSlide = useCallback((nextIndex, dir = 'next') => {
    if (nextIndex === currentIndex || isTransitioning) return;

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setOutgoingIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setSlideDirection(dir);
    setIsTransitioning(true);

    transitionTimeoutRef.current = setTimeout(() => {
      setOutgoingIndex(null);
      setIsTransitioning(false);
    }, 700);
  }, [currentIndex, isTransitioning]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % products.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, products.length, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, products.length, goToSlide]);

  const handleDotClick = useCallback((idx) => {
    if (idx === currentIndex || isTransitioning) return;
    const dir = idx > currentIndex ? 'next' : 'prev';
    goToSlide(idx, dir);
  }, [currentIndex, isTransitioning, goToSlide]);

  // Automatic slide interval: 5 seconds, looping infinitely
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isPaused && !prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, currentIndex, handleNext]);

  // Clean up transition timer on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

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

  return (
    <div
      className="relative w-full max-w-md mx-auto px-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Single-Card Carousel Stage ── */}
      <div className="relative w-full overflow-hidden rounded-[18px]">
        {/* Outgoing Card (Fades out and exits) */}
        {outgoingIndex !== null && (
          <div
            key={`outgoing-${outgoingIndex}`}
            className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${
              slideDirection === 'next' ? 'solution-slide-out-left' : 'solution-slide-out-right'
            }`}
          >
            <HardwareCard product={products[outgoingIndex]} />
          </div>
        )}

        {/* Incoming / Active Card (Fades in and slides into view) */}
        <div
          key={`active-${currentIndex}`}
          className={`relative w-full z-10 ${
            isTransitioning
              ? slideDirection === 'next'
                ? 'solution-slide-in-right'
                : 'solution-slide-in-left'
              : ''
          }`}
        >
          <HardwareCard product={products[currentIndex]} />
        </div>
      </div>

      {/* ── Navigation Controls: Previous Button, Pagination Dots, Next Button ── */}
      <div className="flex items-center justify-center gap-3.5 mt-5">
        {/* Previous Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous hardware platform"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] text-slate-700 dark:text-slate-200 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Four Pagination Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Hardware carousel pagination">
          {products.map((prod, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={prod.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${prod.name}`}
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
          aria-label="Next hardware platform"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] text-slate-700 dark:text-slate-200 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const products = [
    {
      id: 'rz-g2l',
      name: 'RZ/G2L',
      subtitle: 'Embedded Control & HMI',
      image: RZG2L,
      fallbackImage: '/images/RZG2L.png',
      fullName: 'Renesas RZ/G2L SMARC MPU Module',
      shortDescription:
        'For industrial HMI, control, display and connected embedded applications.',
      categoryLabel: 'Embedded MPU Module',
      badge: 'Cortex-A55 + M33',
      headline: 'Dual 64-bit Arm Cortex-A55 with 3D Graphics for Next-Gen HMI',
      specs: [
        { label: 'Core CPU', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33 @ 200MHz' },
        { label: '3D Graphics', value: 'Arm Mali-G31 GPU (500MHz)' },
        { label: 'Memory', value: 'Up to 4GB DDR4 / LPDDR4 + 16GB eMMC 5.1' },
        { label: 'Connectivity', value: 'Dual Gigabit Ethernet, MIPI-CSI, USB 2.0 Host/OTG' },
      ],
      description:
        'Compact SMARC System on Module combining dual Cortex-A55 performance with integrated 3D graphics for edge HMI, industrial control, and medical devices.',
      ctaGradient: true,
    },
    {
      id: 'rz-g2n',
      name: 'RZ/G2N',
      subtitle: 'Multimedia & Video',
      image: RZG2N,
      fallbackImage: '/images/RZG2N.png',
      fullName: 'Renesas RZ/G2N High-Performance Embedded SBC',
      shortDescription:
        'For multimedia, display and video processing applications.',
      categoryLabel: 'High-Performance SBC',
      badge: 'Dual Cortex-A57',
      headline: 'Dual Arm Cortex-A57 @ 1.5GHz with 4K UHD Video Processing',
      specs: [
        { label: 'Core CPU', value: 'Dual Arm Cortex-A57 @ 1.5GHz 64-bit' },
        { label: 'Graphics & Video', value: 'PowerVR Series 6XE GPU + 4K H.265/H.264 VPU' },
        { label: 'High-Speed Bus', value: 'PCIe Gen2 (1-lane), USB 3.0, Dual GbE' },
        { label: 'Display Engine', value: 'HDMI 1.4b, Dual LVDS (up to 1080p60)' },
      ],
      description:
        'High-compute 64-bit embedded single-board computer designed for video surveillance, intelligent digital signage, and high-throughput industrial gateways.',
      ctaGradient: false,
    },
    {
      id: 'rz-v2l',
      name: 'RZ/V2L',
      subtitle: 'Entry Vision AI',
      image: RZV2L,
      fallbackImage: '/images/RZV2L.png',
      fullName: 'Renesas RZ/V2L AI Vision Evaluation Board',
      shortDescription:
        'Low-power vision AI platform for smart cameras and compact edge AI applications.',
      categoryLabel: 'Vision AI Processor',
      badge: 'DRP-AI Neural Core',
      headline: 'Embedded MPU with Renesas DRP-AI Dedicated Neural Engine',
      specs: [
        { label: 'AI Accelerator', value: 'Renesas DRP-AI Engine (0.5 TOPS/W efficiency)' },
        { label: 'Core CPU', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33' },
        { label: 'Vision Interface', value: '4-Lane MIPI-CSI2 Camera with ISP' },
        { label: 'Power Envelope', value: 'Sub-4W Thermal Design Power (Fanless)' },
      ],
      description:
        'Vision-optimized processor board featuring Renesas proprietary DRP-AI accelerator, delivering low-latency real-time vision analytics without active cooling.',
      ctaGradient: false,
    },
    {
      id: 'rz-v2h',
      name: 'RZ/V2H',
      subtitle: 'High-Performance Edge AI',
      image: RZV2H,
      fallbackImage: '/images/RZV2H.png',
      fullName: 'Renesas RZ/V2H High-Performance AI Vision Module',
      shortDescription:
        'For multi-camera AI, robotics and advanced vision analytics applications.',
      categoryLabel: 'Edge AI Processor',
      badge: 'DRP-AI 2nd Gen',
      headline: 'High-Performance Embedded AI with 2nd Gen DRP-AI @ 10 TOPS',
      specs: [
        { label: 'AI Performance', value: '2nd Gen DRP-AI Accelerator @ 10 TOPS' },
        { label: 'Core CPU', value: 'Quad Arm Cortex-A55 @ 1.8GHz + Cortex-R8' },
        { label: 'Multi-Camera', value: 'Up to 8 MIPI-CSI2 Camera Streams' },
        { label: 'Memory', value: 'Up to 8GB LPDDR5 + 64GB eMMC 5.1' },
      ],
      description:
        'High-performance AI vision module with 2nd generation DRP-AI accelerator for multi-camera real-time inference in surveillance, automotive and industrial applications.',
      ctaGradient: false,
    },
  ];

  return (
    <section
      id="hardware-platforms"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300"
    >
      {/* Anchor alias */}
      <div id="products" className="sr-only" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3285FF]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#2DD4F0]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative">

        {/* ══ Section Header Banner ══════════════════════════════════════════ */}
        <SectionHeadingContainer
          subheading="EMBEDDED HARDWARE PLATFORMS"
          heading={
            <>
              Our{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Hardware Platforms
              </span>
            </>
          }
          description="High-reliability System-on-Modules and single-board computers powered by Renesas RZ processors for edge computing and industrial control."
          rightContent={
            <div className="w-full xl:w-auto grid grid-cols-2 sm:grid-cols-4 xl:flex xl:flex-nowrap items-center gap-2 sm:gap-3">
              {[
                { icon: Cpu, title: 'Renesas RZ Family', sub: 'Powered Platforms' },
                { icon: Layers, title: 'Multiple', sub: 'Form Factors' },
                { icon: ShieldCheck, title: 'Industrial Grade', sub: 'Rugged & Reliable' },
                { icon: Clock, title: 'Long Product', sub: 'Lifecycle Support' },
              ].map(({ icon: Icon, title, sub }, idx, arr) => (
                <div key={title} className="flex items-center gap-2 px-1 sm:px-1.5 xl:px-2 py-1 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center shadow-xs">
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-[12.5px] xl:text-[13px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug tracking-tight truncate">{title}</p>
                    <p className="text-[10px] sm:text-[11px] xl:text-[11.5px] text-[#52627C] dark:text-[#AAB6D0] leading-snug mt-0.5 truncate">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          }
        />

        {/* ══ Four Platform Cards ════════════════════════════════════════════ */}
        {/* Desktop & Tablet: 2 or 4-column Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {products.map((product) => (
            <HardwareCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View: Auto-sliding Carousel (sm:hidden) */}
        <div className="block sm:hidden">
          <MobileHardwareCarousel products={products} />
        </div>

        {/* ══ Bottom Feature Strip ══════════════════════════════════════════ */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#DCE8F5] dark:divide-[#24355A] rounded-2xl border border-[#DCE8F5] dark:border-[#24355A] bg-white dark:bg-[#17264A] shadow-sm overflow-hidden">
          {FEATURES.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3 px-4 sm:px-5 py-4 sm:py-5">
              <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">{title}</p>
                <p className="text-[11px] sm:text-xs text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
