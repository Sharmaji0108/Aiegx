import React from 'react';
import { Plus, Equal } from 'lucide-react';

/**
 * Compact Hardware Architecture section.
 * Desktop: Left heading & description, right horizontal 3-stage product diagram (SoM + Carrier = Complete SBC).
 * Tablet: Horizontal 3-stage arrangement with adjusted spacing.
 * Mobile: Description stacked above horizontally scrollable 3-stage diagram.
 */
export default function HardwareArchitecture({
  blocks = [],
  title = 'Hardware',
  titleGradient = 'Architecture',
  description = 'The RZ/G2L platform supports a modular architecture. SMARC SoM provides the core computing module, Carrier Board provides application interfaces, and together they form a complete SBC / Development Platform.',
  statement,
}) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
      <div className="section-container relative">
        <div className="rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] p-5 sm:p-6 lg:p-8 shadow-xs">
          {statement ? (
            <div className="max-w-3xl">
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-tight mb-2.5">
                {title}{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] dark:from-[#2DD4F0] dark:to-[#38BDF8] bg-clip-text text-transparent">
                  {titleGradient}
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] font-medium text-[#52627C] dark:text-[#AAB6D0] leading-relaxed">
                {statement}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Compact Heading & Description */}
              <div className="lg:col-span-4 min-w-0">
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-tight mb-2.5">
                  {title}{' '}
                  <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] dark:from-[#2DD4F0] dark:to-[#38BDF8] bg-clip-text text-transparent">
                    {titleGradient}
                  </span>
                </h2>
                <p className="text-xs sm:text-[13.5px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Right Column: Horizontal 3-Stage Hardware Diagram */}
              <div className="lg:col-span-8 min-w-0">
                <div className="w-full overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                  <div className="flex items-stretch gap-2 sm:gap-3 min-w-[540px] sm:min-w-0">
                  {blocks.map((block, index) => {
                    const isResult = index === blocks.length - 1;

                    return (
                      <React.Fragment key={block.id}>
                        {/* Individual Hardware Component Card */}
                        <div
                          className={`flex-1 min-w-0 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border p-3 sm:p-3.5 flex flex-col items-center text-center transition-all duration-300 ${
                            isResult
                              ? 'border-[#089EC2]/50 dark:border-[#2DD4F0]/45 shadow-[0_2px_14px_rgba(8,158,194,0.10)]'
                              : 'border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/45 dark:hover:border-[#2DD4F0]/40'
                          }`}
                        >
                          {/* Uniform Product Image Container */}
                          <div className="w-full h-24 sm:h-28 rounded-lg bg-white dark:bg-[#17264A] border border-[#E2EAF4] dark:border-[#24355A] flex items-center justify-center p-2 mb-2.5 overflow-hidden">
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

                          {/* Product Name & Subtitle Directly Below Image */}
                          <h3 className="text-xs sm:text-[13px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">
                            {block.title}
                          </h3>
                          <p className="text-[11px] text-[#52627C] dark:text-[#AAB6D0] leading-snug mt-1">
                            {block.subtitle}
                          </p>
                        </div>

                        {/* Plus (+) & Equals (=) Operators Between Components */}
                        {index < blocks.length - 1 && (
                          <div className="flex items-center justify-center shrink-0 self-center">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                              {index === 0 ? (
                                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              ) : (
                                <Equal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              )}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
