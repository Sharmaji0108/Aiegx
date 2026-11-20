import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * KeyCapabilities Component
 * Reusable capability showcase positioned immediately after the Solution Hero section.
 * Features:
 * - Single horizontal row on desktop & tablet with thin vertical separators
 * - Prominent blue/cyan Lucide icons
 * - Compact, readable capability labels directly below icons
 * - Clean subtle background matching original website theme, rounded corners, subtle border
 * - Horizontally scrollable row on mobile with vertical dividers, preventing text overlap
 */
export default function KeyCapabilities({ capabilities = [] }) {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="py-10 sm:py-12 bg-transparent border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="section-container">
        {/* Section Heading Container */}
        <SectionHeadingContainer
          subheading="SYSTEM CAPABILITIES & ARCHITECTURE"
          heading="Key Capabilities"
          description="Core functional capabilities engineered into this platform architecture for demanding real-time operational environments."
        />

        {/* Key Capabilities Panel (Transparent Background) */}
        <div className="mt-6 sm:mt-8 rounded-2xl border border-[#D0E3F7] dark:border-white/10 bg-transparent shadow-xs overflow-hidden">
          {/* Desktop & Tablet: Single Horizontal Row with Thin Vertical Separators */}
          <div className="hidden sm:grid sm:grid-cols-5 divide-x divide-[#D0E3F7] dark:divide-white/10">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center px-3 py-6 lg:py-7"
                >
                  {/* Prominent Blue/Cyan Icon Badge */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#CDE1F5] dark:border-white/10 shadow-xs flex items-center justify-center mb-3.5 shrink-0">
                    {Icon ? <Icon className="w-6 h-6 lg:w-7 lg:h-7" /> : null}
                  </div>

                  {/* Capability Label Directly Below Icon */}
                  <span className="text-xs sm:text-[13px] lg:text-sm font-bold text-[#14213D] dark:text-white leading-tight tracking-tight max-w-[145px]">
                    {cap.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile: Horizontally Scrollable Row with Vertical Dividers */}
          <div className="sm:hidden flex items-stretch divide-x divide-[#D0E3F7] dark:divide-white/10 overflow-x-auto py-2 px-1 scrollbar-none">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center px-4 py-5 shrink-0 w-[140px]"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#CDE1F5] dark:border-white/10 shadow-xs flex items-center justify-center mb-2.5 shrink-0">
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </div>
                  <span className="text-xs font-bold text-[#14213D] dark:text-white leading-snug tracking-tight">
                    {cap.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
