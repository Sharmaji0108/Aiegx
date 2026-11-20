import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import SectionHeadingContainer from '../../common/SectionHeadingContainer';

export default function SubSolutionArchitecture({ architecture = [] }) {
  if (!architecture || architecture.length === 0) return null;

  return (
    <section
      id="system-architecture"
      className="py-12 sm:py-16 bg-[#F8FAFD] dark:bg-[#0c142c] border-b border-slate-200/80 dark:border-white/10 scroll-mt-24 transition-colors duration-300"
    >
      <div className="section-container">
        {/* Section Heading Banner */}
        <SectionHeadingContainer
          subheading="PROCESSING PIPELINE & FLOW"
          heading="System Architecture"
          description="End-to-end data processing workflow depicting optical ingestion, embedded neural inference, feature logic, and telemetry output."
        />

        {/* Visual Flow Architecture Pipeline */}
        <div className="mt-8 relative">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
            {architecture.map((node, idx) => {
              const Icon = node.icon;
              const isLast = idx === architecture.length - 1;

              return (
                <React.Fragment key={idx}>
                  {/* Step Card */}
                  <div className="flex-1 bg-white dark:bg-[#101936] rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 shadow-xs flex flex-col justify-between h-full min-w-0 transition-all hover:border-[#089EC2]/50 dark:hover:border-[#2DD4F0]/50">
                    <div>
                      {/* Step Header with Step Number & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#089EC2]/20 dark:border-[#2DD4F0]/20 flex items-center justify-center font-mono font-bold text-xs">
                          {node.step || `0${idx + 1}`}
                        </span>

                        {Icon && (
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-[#EBF6FC] dark:from-[#17264D] dark:to-[#132247] text-[#089EC2] dark:text-[#2DD4F0] border border-[#CDE1F5] dark:border-white/10 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      {/* Component Label */}
                      <h3 className="text-sm font-bold text-[#14213D] dark:text-white leading-snug mb-1.5">
                        {node.title}
                      </h3>

                      {/* Short Role / Technical Explanation */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {node.desc}
                      </p>
                    </div>
                  </div>

                  {/* Flow Indicator Arrow */}
                  {!isLast && (
                    <div className="flex items-center justify-center py-1 lg:py-0 shrink-0">
                      {/* Desktop Arrow */}
                      <div className="hidden lg:flex w-8 h-8 rounded-full bg-blue-50 dark:bg-[#17264D] border border-[#089EC2]/20 dark:border-[#2DD4F0]/20 items-center justify-center text-[#089EC2] dark:text-[#2DD4F0]">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      {/* Mobile Arrow */}
                      <div className="lg:hidden flex w-7 h-7 rounded-full bg-blue-50 dark:bg-[#17264D] border border-[#089EC2]/20 dark:border-[#2DD4F0]/20 items-center justify-center text-[#089EC2] dark:text-[#2DD4F0]">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
