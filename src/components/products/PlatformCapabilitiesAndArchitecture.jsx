import React from 'react';
import { Plus, Equal, CircuitBoard } from 'lucide-react';

/**
 * Side-by-side Platform Capabilities (55%) and Hardware Architecture (45%) Section.
 * Desktop: Two independent rounded containers side by side with 55:45 width ratio.
 * Tablet / Mobile: Responsive stacking with clean spacing and no horizontal overflow.
 */
export default function PlatformCapabilitiesAndArchitecture({
  capabilities = [],
  architectureBlocks = [],
  statement,
  statementTitle,
  statementDescription,
  capabilitiesSubheading = 'KEY PLATFORM CAPABILITIES',
  capabilitiesTitle = 'Platform',
  capabilitiesTitleGradient = 'Capabilities',
  capabilitiesDescription = 'Balanced 64-bit Arm performance, 3D graphics, industrial I/O, and long-term Yocto Linux support.',
  architectureSubheading = 'MODULAR ARCHITECTURE',
  architectureTitle = 'Hardware',
  architectureTitleGradient = 'Architecture',
  architectureDescription,
}) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch">
          {/* ── Left Column: Platform Capabilities (55%) ── */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="h-full rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] p-5 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between transition-colors duration-300">
              {/* Heading & Subtitle */}
              <div className="mb-4 sm:mb-5">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] font-bold block mb-1">
                  {capabilitiesSubheading}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-tight mb-2">
                  {capabilitiesTitle}{' '}
                  <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] dark:from-[#2DD4F0] dark:to-[#38BDF8] bg-clip-text text-transparent">
                    {capabilitiesTitleGradient}
                  </span>
                </h2>
                <p className="text-xs sm:text-[13px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed">
                  {capabilitiesDescription}
                </p>
              </div>

              {/* 5 Capability Cards in a Compact Grid: 3 in Row 1, 2 in Row 2 */}
              <div className="flex-1 flex flex-col justify-between gap-2.5 sm:gap-3">
                {/* Row 1: 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {capabilities.slice(0, 3).map((item, idx) => {
                    const Icon = item.icon;
                    const label = item.title || item.label;
                    return (
                      <div
                        key={item.id || `${label}-${idx}`}
                        className="group rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-xs min-h-[105px] sm:min-h-[115px]"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] mb-2 group-hover:scale-105 transition-transform duration-300">
                            {Icon && <Icon className="w-4 h-4" />}
                          </div>
                          <h3 className="text-xs sm:text-[12.5px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                            {label}
                          </h3>
                        </div>
                        {item.description && (
                          <p className="text-[11px] sm:text-[11.5px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-1.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Row 2: 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {capabilities.slice(3, 5).map((item, idx) => {
                    const Icon = item.icon;
                    const label = item.title || item.label;
                    return (
                      <div
                        key={item.id || `${label}-${idx + 3}`}
                        className="group rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-xs min-h-[105px] sm:min-h-[115px]"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] mb-2 group-hover:scale-105 transition-transform duration-300">
                            {Icon && <Icon className="w-4 h-4" />}
                          </div>
                          <h3 className="text-xs sm:text-[12.5px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                            {label}
                          </h3>
                        </div>
                        {item.description && (
                          <p className="text-[11px] sm:text-[11.5px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-1.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Hardware Architecture (45%) ── */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="h-full rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] p-5 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between transition-colors duration-300">
              {/* Heading & Subtitle */}
              <div className="mb-4 sm:mb-5">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] font-bold block mb-1">
                  {architectureSubheading}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-tight mb-2">
                  {architectureTitle}{' '}
                  <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] dark:from-[#2DD4F0] dark:to-[#38BDF8] bg-clip-text text-transparent">
                    {architectureTitleGradient}
                  </span>
                </h2>
                {architectureDescription && (
                  <p className="text-xs sm:text-[13px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed">
                    {architectureDescription}
                  </p>
                )}
              </div>

              {/* Statement Architecture or 3 Hardware components arranged horizontally with + and = */}
              {statement || statementTitle ? (
                <div className="flex-1 flex flex-col justify-center">
                  <div className="rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#DBE4F0] dark:border-[#24355A] p-5 sm:p-6 flex items-center gap-4 shadow-2xs">
                    <div className="w-12 h-12 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0">
                      <CircuitBoard className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-[#F8FAFC] leading-relaxed">
                        {statementTitle || statement}
                      </h3>
                      <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-1">
                        {statementDescription || 'Engineered for optimal signal integrity, high thermal dissipation, and industrial reliability.'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : architectureBlocks.length > 0 ? (
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 w-full">
                  {architectureBlocks.map((block, index) => {
                    const isResult = index === architectureBlocks.length - 1;

                    return (
                      <React.Fragment key={block.id || index}>
                        {/* Individual Hardware Component Card */}
                        <div
                          className={`flex-1 min-w-0 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border p-2.5 sm:p-3 flex flex-col items-center text-center transition-all duration-300 ${
                            isResult
                              ? 'border-[#089EC2]/50 dark:border-[#2DD4F0]/45 shadow-[0_2px_14px_rgba(8,158,194,0.10)]'
                              : 'border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/45 dark:hover:border-[#2DD4F0]/40'
                          }`}
                        >
                          {/* Image Container with Original Aspect Ratio */}
                          <div className="w-full h-20 sm:h-24 rounded-lg bg-white dark:bg-[#17264A] border border-[#E2EAF4] dark:border-[#24355A] flex items-center justify-center p-2 mb-2 overflow-hidden">
                            <img
                              src={block.image}
                              alt={block.imageAlt || block.title}
                              onError={(e) => {
                                if (block.fallbackImage && e.currentTarget.src !== block.fallbackImage) {
                                  e.currentTarget.src = block.fallbackImage;
                                }
                              }}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                            />
                          </div>

                          {/* Product Label & Subtitle */}
                          <h3 className="text-xs sm:text-[12.5px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">
                            {block.title}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-[#52627C] dark:text-[#AAB6D0] leading-tight mt-1 line-clamp-2">
                            {block.subtitle}
                          </p>
                        </div>

                        {/* Plus (+) & Equals (=) Operators */}
                        {index < architectureBlocks.length - 1 && (
                          <div className="flex items-center justify-center shrink-0 self-center">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                              {index === 0 ? (
                                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              ) : (
                                <Equal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              )}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

