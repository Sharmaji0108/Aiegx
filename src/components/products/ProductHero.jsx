import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import ProductBreadcrumb from './ProductBreadcrumb';

/**
 * Product Platform Hero section matching Aiegx homepage hero theme and layout.
 */
export default function ProductHero({
  breadcrumb,
  hero,
  onExploreHardware,
  onRequestQuote,
}) {
  return (
    <section className="relative pt-[92px] pb-8 sm:pt-[108px] sm:pb-10 lg:pt-[122px] lg:pb-12 overflow-hidden bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300 isolate">
      {/* Subtle geometric circuit grid matching Homepage Hero */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-30 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="platform-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2DD4F0" strokeOpacity="0.08" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#platform-circuit-grid)" />
        <path d="M 60 160 L 240 160 L 300 220 L 620 220" fill="none" stroke="#2DD4F0" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="6 4" />
        <circle cx="60" cy="160" r="3" fill="#2DD4F0" fillOpacity="0.65" />
        <circle cx="620" cy="220" r="3" fill="#2DD4F0" fillOpacity="0.65" />
        <path d="M 560 90 L 740 90 L 800 150 L 1160 150" fill="none" stroke="#3285FF" strokeOpacity="0.35" strokeWidth="1.2" />
        <circle cx="800" cy="150" r="2.5" fill="#3285FF" fillOpacity="0.7" />
      </svg>

      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-[#3285FF]/15 via-[#2DD4F0]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 sm:right-10 w-[280px] sm:w-[440px] h-[280px] sm:h-[420px] bg-gradient-to-bl from-[#2DD4F0]/15 via-[#3285FF]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container relative">
        <ProductBreadcrumb items={breadcrumb} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Platform Heading, Subtitle, Description, Highlights & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
              <span>{hero.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-[1.15] mb-2">
              {hero.title}
            </h1>

            <div className="mb-4">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#089EC2] to-[#3285FF] dark:from-[#2DD4F0] dark:to-[#38BDF8] bg-clip-text text-transparent">
                {hero.subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base lg:text-[17px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl mb-5">
              {hero.description}
            </p>

            {hero.highlights && hero.highlights.length > 0 && (
              <ul className="space-y-2 mb-6">
                {hero.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#14213D] dark:text-[#E2E8F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreHardware}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 hover:shadow-[#2DD4F0]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Available Hardware</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-[#089EC2] dark:text-[#2DD4F0] bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Quote</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Processor / Board Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-none rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] p-5 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] relative overflow-hidden">
              <div className="aspect-[4/3] w-full rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#E2EAF4] dark:border-[#24355A] flex items-center justify-center p-4 sm:p-6">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  onError={(e) => {
                    if (hero.fallbackImage && e.currentTarget.src !== hero.fallbackImage) {
                      e.currentTarget.src = hero.fallbackImage;
                    }
                  }}
                  className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 pt-3.5 border-t border-[#E2E8F0] dark:border-[#24355A] flex items-center justify-between text-xs">
                <span className="font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                  {hero.family || 'Renesas RZ/G2L Family'}
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#089EC2] dark:text-[#2DD4F0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
                  Production Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

