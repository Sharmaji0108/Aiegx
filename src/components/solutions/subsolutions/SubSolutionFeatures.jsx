import React from 'react';
import { CheckCircle2, Layers } from 'lucide-react';

export default function SubSolutionFeatures({ features = [] }) {
  if (!features || features.length === 0) return null;

  return (
    <div
      id="key-features"
      className="bg-white dark:bg-[#101936] rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xs p-6 sm:p-8 flex flex-col justify-between scroll-mt-32 transition-colors duration-300"
    >
      <div>
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit mb-4">
          <Layers className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
            PLATFORM CAPABILITIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-white tracking-tight mb-5">
          Key Features
        </h2>

        {/* Feature Points List */}
        <div className="space-y-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFD] dark:bg-[#142347]/50 border border-slate-200/80 dark:border-white/5 hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-[#089EC2] dark:text-[#2DD4F0] shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-[#14213D] dark:text-white leading-snug">
                  {feat.title}
                </h3>
                {feat.desc && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                    {feat.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
