import React from 'react';
import { Sparkles, Cpu } from 'lucide-react';

export default function SubSolutionOverview({ overview, title }) {
  if (!overview) return null;

  return (
    <div className="bg-white dark:bg-[#101936] rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300">
      <div>
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
            SOLUTION OVERVIEW
          </span>
        </div>

        {/* Sub-Solution Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#14213D] dark:text-white tracking-tight mb-3">
          {overview.heading || title}
        </h2>

        {/* Short Explanation */}
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium mb-6">
          {overview.summary}
        </p>

        {/* Purpose & Problem Card */}
        {(overview.purpose || overview.problem) && (
          <div className="space-y-4 bg-gradient-to-br from-[#F8FAFD] to-[#F1F6FC] dark:from-[#132247]/70 dark:to-[#0f1a38]/80 p-5 sm:p-6 rounded-xl border border-[#DCE6F3] dark:border-white/10 mb-6">
            {overview.purpose && (
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] mb-1.5">
                  Main Purpose
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {overview.purpose}
                </p>
              </div>
            )}

            {overview.problem && (
              <div className="pt-3 border-t border-slate-200/70 dark:border-white/10">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  The Challenge It Solves
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {overview.problem}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Platform Details / Technology */}
        {(overview.platform || overview.aiAccelerator) ? (
          <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-xl bg-blue-50/60 dark:bg-[#17264D]/50 border border-[#089EC2]/20 dark:border-[#2DD4F0]/20">
            <Cpu className="w-5 h-5 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <div>
                <span className="font-semibold text-[#14213D] dark:text-white">Platform: </span>
                <span className="font-medium text-slate-600 dark:text-slate-300">{overview.platform}</span>
              </div>
              <div className="hidden sm:block text-slate-300 dark:text-slate-600">|</div>
              <div>
                <span className="font-semibold text-[#14213D] dark:text-white">AI Accelerator: </span>
                <span className="font-medium text-slate-600 dark:text-slate-300">{overview.aiAccelerator}</span>
              </div>
            </div>
          </div>
        ) : overview.aiegxRole ? (
          <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-blue-50/60 dark:bg-[#17264D]/50 border border-[#089EC2]/20 dark:border-[#2DD4F0]/20">
            <Cpu className="w-5 h-5 text-[#089EC2] dark:text-[#2DD4F0] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              <strong className="text-[#14213D] dark:text-white font-semibold">AIEGX Engineering: </strong>
              {overview.aiegxRole}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
