import React from 'react';
import { Cpu, Info } from 'lucide-react';

export default function SubSolutionOverview({ overview, title }) {
  if (!overview) return null;

  const hasPlatformDetails = Boolean(
    overview.platform || overview.aiAccelerator || overview.aiProcessing
  );

  return (
    <div className="bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Section Title with Cyan Bar */}
        <div className="lg:col-span-3 xl:col-span-2">
          {overview.eyebrow && (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0] mb-2">
              <Info className="w-3.5 h-3.5" />
              <span>{overview.eyebrow}</span>
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
            {overview.heading || 'Overview'}
          </h2>
          <div className="w-8 h-1 bg-[#089EC2] dark:bg-[#2DD4F0] rounded-full mt-2" />
        </div>

        {/* Right Column: Overview Text & Platform Box */}
        <div className="lg:col-span-9 xl:col-span-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className={`text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal flex-1 ${hasPlatformDetails ? 'max-w-2xl' : 'w-full'}`}>
            {overview.summary}
          </p>

          {/* Platform Details Box */}
          {hasPlatformDetails && (
            <div className="rounded-xl bg-[#F0F6FE] dark:bg-[#132247]/90 border border-[#D0E3F7] dark:border-[#244277] p-3.5 sm:p-4 flex items-center gap-3.5 shrink-0 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-[#EBF5FD] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm">
                {overview.platform && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#14213D] dark:text-white">Platform</span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{overview.platform}</span>
                  </div>
                )}
                {overview.aiAccelerator && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#14213D] dark:text-white">AI Accelerator</span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{overview.aiAccelerator}</span>
                  </div>
                )}
                {overview.aiProcessing && (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#14213D] dark:text-white">AI Processing</span>
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{overview.aiProcessing}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Fallback for solutions with aiegxRole */}
          {!overview.platform && overview.aiegxRole && (
            <div className="rounded-xl bg-[#F0F6FE] dark:bg-[#132247]/90 border border-[#D0E3F7] dark:border-[#244277] p-3.5 sm:p-4 flex items-center gap-3 shrink-0 shadow-2xs">
              <Cpu className="w-5 h-5 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <strong className="text-[#14213D] dark:text-white font-semibold">AIEGX Engineering: </strong>
                {overview.aiegxRole}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Purpose & Problem Card (if present) */}
      {(overview.purpose || overview.problem) && (
        <div className="mt-6 pt-6 border-t border-[#DCE8F5]/80 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {overview.purpose && (
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8FAFD] to-[#F1F6FC] dark:from-[#132247]/70 dark:to-[#0f1a38]/80 border border-[#DCE8F5] dark:border-white/10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] mb-1.5">
                Main Purpose
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {overview.purpose}
              </p>
            </div>
          )}
          {overview.problem && (
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#F8FAFD] to-[#F1F6FC] dark:from-[#132247]/70 dark:to-[#0f1a38]/80 border border-[#DCE8F5] dark:border-white/10">
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
    </div>
  );
}
