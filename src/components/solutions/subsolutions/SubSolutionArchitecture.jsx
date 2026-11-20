import React from 'react';
import { ArrowRight, ArrowDown, GitBranch } from 'lucide-react';

export default function SubSolutionArchitecture({ architecture = [] }) {
  if (!architecture || architecture.length === 0) return null;

  return (
    <div className="bg-white dark:bg-[#101936] rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300">
      <div>
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit mb-4">
          <GitBranch className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
            PROCESSING PIPELINE & FLOW
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#14213D] dark:text-white tracking-tight mb-2">
          System Architecture
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
          End-to-end data processing workflow depicting optical ingestion, embedded neural inference, feature logic, and telemetry output.
        </p>

        {/* Visual Flow Architecture Pipeline */}
        <div className="mt-2 relative">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
            {architecture.map((node, idx) => {
              const Icon = node.icon;
              const isLast = idx === architecture.length - 1;

              return (
                <React.Fragment key={idx}>
                  {/* Step Card */}
                  <div className="flex-1 bg-[#F8FAFD] dark:bg-[#142347]/50 rounded-2xl border border-slate-200/90 dark:border-white/10 p-5 shadow-2xs flex flex-col justify-between h-full min-w-0 transition-all hover:border-[#089EC2]/50 dark:hover:border-[#2DD4F0]/50">
                    <div>
                      {/* Step Header with Step Number & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#089EC2]/20 dark:border-[#2DD4F0]/20 flex items-center justify-center font-mono font-bold text-xs">
                          {node.step || `0${idx + 1}`}
                        </span>

                        {Icon && (
                          <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#CDE1F5] dark:border-white/10 flex items-center justify-center shrink-0 shadow-2xs">
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
    </div>
  );
}
