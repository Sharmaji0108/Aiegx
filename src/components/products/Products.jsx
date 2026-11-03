import React, { useState } from 'react';
import RZG2L from '../../../public/images/RZG2L.png';
import RZG2N from '../../../public/images/RZG2N.png';
import RZV2L from '../../../public/images/RZV2L.png';
import RZV2H from '../../../public/images/RZV2H.png';
import {
  ArrowRight,
  FileText,
  Download,
  X,
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
    { label: 'SMARC SoM', icon: CircuitBoard },
    { label: 'SBC', icon: LayoutGrid },
    { label: 'Carrier Board', icon: Layers },
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

export default function Products() {
  const [activeDatasheet, setActiveDatasheet] = useState(null);

  const products = [
    {
      id: 'rz-g2l',
      name: 'RZ/G2L',
      subtitle: 'Embedded Control & HMI',
      image: RZG2L,
      fallbackImage: '/images/RZG2L.png',
      fullName: 'Renesas RZ/G2L SMARC 2.1 MPU Module',
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
        'Compact SMARC v2.1 System on Module combining dual Cortex-A55 performance with integrated 3D graphics for edge HMI, industrial control, and medical devices.',
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
      image: null,
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
        <div className="relative w-full mb-6 sm:mb-8 rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] bg-gradient-to-br from-[#EEF5FD] via-white to-[#E5F2FB] dark:from-[#101936] dark:via-[#0D1733] dark:to-[#101936] shadow-[0_6px_24px_rgba(50,133,255,0.10)] dark:shadow-[0_6px_24px_rgba(45,212,240,0.08)] overflow-hidden">

          {/* Network decoration SVG */}
          <svg
            className="absolute right-0 top-0 h-full w-[550px] lg:w-[650px] xl:w-[750px] opacity-[0.08] dark:opacity-[0.04] pointer-events-none select-none object-cover"
            viewBox="0 0 550 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="340" cy="30" r="5" fill="#089EC2" />
            <circle cx="420" cy="85" r="5.5" fill="#3285FF" />
            <circle cx="305" cy="135" r="5" fill="#089EC2" />
            <circle cx="480" cy="155" r="4.5" fill="#3285FF" />
            <circle cx="255" cy="50" r="4" fill="#089EC2" />
            <circle cx="385" cy="175" r="3.5" fill="#3285FF" />
            <circle cx="510" cy="45" r="3.5" fill="#089EC2" />
            <line x1="340" y1="30" x2="420" y2="85" stroke="#089EC2" strokeWidth="1.2" />
            <line x1="420" y1="85" x2="305" y2="135" stroke="#3285FF" strokeWidth="1.2" />
            <line x1="305" y1="135" x2="480" y2="155" stroke="#089EC2" strokeWidth="1.2" />
            <line x1="420" y1="85" x2="480" y2="155" stroke="#3285FF" strokeWidth="1.2" />
            <line x1="255" y1="50" x2="340" y2="30" stroke="#089EC2" strokeWidth="1.2" />
            <line x1="255" y1="50" x2="305" y2="135" stroke="#3285FF" strokeWidth="1.2" />
            <line x1="385" y1="175" x2="305" y2="135" stroke="#089EC2" strokeWidth="1.2" />
            <line x1="510" y1="45" x2="420" y2="85" stroke="#3285FF" strokeWidth="1.2" />
            <line x1="510" y1="45" x2="340" y2="30" stroke="#089EC2" strokeWidth="1.2" />
          </svg>

          <div className="relative flex flex-col xl:flex-row xl:items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">

            {/* Left: label + heading + description */}
            <div className="flex-1 min-w-0 pr-2">
              <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#2DD4F0] mb-0.5">
                EMBEDDED HARDWARE PLATFORMS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1733] dark:text-[#F8FAFC] tracking-tight mb-2">
                Our{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Hardware Platforms
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-[15px] font-normal text-[#52627C] dark:text-[#AAB6D0] leading-snug max-w-2xl xl:max-w-3xl">
                Processor-based embedded platforms for HMI, multimedia, vision AI and edge applications, available in different hardware form factors depending on the platform.
              </p>
            </div>

            {/* Right: 4 feature highlights */}
            <div className="flex-shrink-0 w-full xl:w-auto flex flex-wrap lg:flex-nowrap items-center justify-between xl:justify-end gap-y-4">
              {[
                { icon: Cpu, title: 'Renesas RZ Family', sub: 'Powered Platforms' },
                { icon: Layers, title: 'Multiple', sub: 'Form Factors' },
                { icon: ShieldCheck, title: 'Industrial Grade', sub: 'Rugged & Reliable' },
                { icon: Clock, title: 'Long Product', sub: 'Lifecycle Support' },
              ].map(({ icon: Icon, title, sub }, idx, arr) => (
                <React.Fragment key={title}>
                  <div className="flex items-center gap-2 px-1 sm:px-1.5 xl:px-2 py-1 min-w-0 flex-1 lg:flex-initial">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center shadow-xs">
                      <Icon className="w-4.5 h-4.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12.5px] xl:text-[13px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug tracking-tight whitespace-nowrap">{title}</p>
                      <p className="text-[11px] xl:text-[11.5px] text-[#52627C] dark:text-[#AAB6D0] leading-snug mt-0.5 whitespace-nowrap">{sub}</p>
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:block w-px h-7 bg-[#D4E3F5] dark:bg-[#223660] mx-1 xl:mx-1.5 flex-shrink-0" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>

        {/* ══ Four Platform Cards ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {products.map((product) => {
            const hwTags = HW_TAGS[product.id] || [];
            return (
              <div
                key={product.id}
                className={`group relative flex flex-col bg-white dark:bg-[#17264A] rounded-[18px] border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 p-4 sm:p-5 ${
                  product.ctaGradient
                    ? 'border-[#089EC2]/50 dark:border-[#2DD4F0]/40 shadow-[0_2px_12px_rgba(8,158,194,0.12)]'
                    : 'border-[#DCE8F5] dark:border-[#24355A] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/30'
                }`}
              >
                {/* 1. Platform name */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#14213D] dark:text-[#F8FAFC] tracking-tight leading-tight">
                  {product.name}
                </h3>

                {/* 2. Subtitle */}
                <p className="text-[11px] font-semibold text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wide mt-0.5 mb-2">
                  {product.subtitle}
                </p>

                {/* 3. Platform description */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#52627C] dark:text-[#AAB6D0] mb-3">
                  {product.shortDescription}
                </p>

                {/* 4. Hardware Image */}
                <div
                  className="w-full h-36 sm:h-40 flex items-center justify-center bg-white dark:bg-[#17264A] mb-4 overflow-hidden cursor-pointer"
                  onClick={() => setActiveDatasheet(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveDatasheet(product);
                    }
                  }}
                  aria-label={`View ${product.name} specs`}
                >
                  {product.image ? (
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
                    onClick={() => setActiveDatasheet(product)}
                    className="explore-btn"
                  >
                    Explore Platform
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
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

      {/* ══ Datasheet Modal ══════════════════════════════════════════════════ */}
      {activeDatasheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-[#14213D] dark:text-[#F8FAFC]">
            <button
              onClick={() => setActiveDatasheet(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 dark:text-white/60 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] mb-2 uppercase font-semibold">
              <FileText className="w-4 h-4" />
              <span>Official Hardware Technical Specification</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14213D] dark:text-[#F8FAFC] mb-1">
              {activeDatasheet.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-white/50 mb-3">
              {activeDatasheet.fullName}
            </p>
            <p className="text-sm text-[#52627C] dark:text-[#AAB6D0] mb-6">
              {activeDatasheet.headline}
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-[#EDF2F7] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A]">
                <h4 className="font-bold mb-3 uppercase tracking-wider text-[11px] text-[#089EC2] dark:text-[#2DD4F0]">
                  Key Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDatasheet.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-white/50">{spec.label}</span>
                      <span className="font-semibold text-slate-800 dark:text-white/90">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EDF2F7] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A]">
                <h4 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-[#089EC2] dark:text-[#2DD4F0]">
                  Overview & Architecture
                </h4>
                <p className="text-[#52627C] dark:text-[#AAB6D0] leading-relaxed">
                  {activeDatasheet.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-between">
              <button
                onClick={() => {
                  alert(`Downloading technical documentation package for ${activeDatasheet.name}...`);
                  setActiveDatasheet(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#089EC2] to-[#3285FF] hover:opacity-95 shadow-md shadow-[#089EC2]/20 flex items-center gap-2 font-mono cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Spec Sheet (PDF)</span>
              </button>
              <button
                onClick={() => setActiveDatasheet(null)}
                className="text-xs text-slate-500 dark:text-white/60 hover:text-slate-800 dark:hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
