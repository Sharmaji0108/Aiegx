import React from 'react';
import {
  CheckCircle2,
  Layers,
  Eye,
  ScanFace,
  Smartphone,
  Smile
} from 'lucide-react';

function getFeatureIcon(title = '') {
  const lower = title.toLowerCase();
  if (lower.includes('eye') || lower.includes('drowsiness') || lower.includes('closure')) {
    return Eye;
  }
  if (lower.includes('head') || lower.includes('pose') || lower.includes('face')) {
    return ScanFace;
  }
  if (lower.includes('phone') || lower.includes('mobile')) {
    return Smartphone;
  }
  if (lower.includes('yawn') || lower.includes('fatigue')) {
    return Smile;
  }
  return CheckCircle2;
}

export default function SubSolutionFeatures({ features = [] }) {
  if (!features || features.length === 0) return null;

  return (
    <div className="bg-white/80 dark:bg-[#101936]/80 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300">
      <div>
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FD] dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit mb-4">
          <Layers className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
            PLATFORM CAPABILITIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#14213D] dark:text-white tracking-tight mb-2">
          Key Features
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Core technical features and architectural advantages engineered into this solution to ensure low latency, deterministic safety, and field reliability.
        </p>

        {/* Feature Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feat, idx) => {
            const IconComponent = getFeatureIcon(feat.title);
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-[#F8FAFD] to-[#F1F6FC] dark:from-[#132247]/70 dark:to-[#0f1a38]/80 border border-[#DCE8F5] dark:border-white/10 shadow-2xs hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#17264D] border border-[#CDE1F5] dark:border-[#244277] flex items-center justify-center shrink-0 text-[#089EC2] dark:text-[#2DD4F0] shadow-2xs">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#14213D] dark:text-white leading-snug">
                    {feat.title}
                  </h3>
                  {feat.desc && (
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                      {feat.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
