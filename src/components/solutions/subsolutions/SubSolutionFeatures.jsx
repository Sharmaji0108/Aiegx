import React from 'react';
import {
  CheckCircle2,
  Eye,
  ScanFace,
  Smartphone,
  Smile,
  Video,
  Scan,
  Car,
  Shield,
  Gauge,
  Cpu
} from 'lucide-react';

export function getFeatureIcon(title = '') {
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
  if (lower.includes('camera') || lower.includes('stream') || lower.includes('multi-camera')) {
    return Video;
  }
  if (lower.includes('plate') || lower.includes('number plate') || lower.includes('registration') || lower.includes('zone') || lower.includes('occupancy')) {
    return Scan;
  }
  if (lower.includes('classification') || lower.includes('vehicle category')) {
    return Car;
  }
  if (lower.includes('logo') || lower.includes('manufacturer')) {
    return Shield;
  }
  if (lower.includes('speed') || lower.includes('estimation')) {
    return Gauge;
  }
  if (lower.includes('embedded') || lower.includes('ai processing') || lower.includes('hardware')) {
    return Cpu;
  }
  return CheckCircle2;
}

export default function SubSolutionFeatures({ features = [] }) {
  if (!features || features.length === 0) return null;

  const isSixCards = features.length === 6;

  return (
    <div className="bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Section Title with Cyan Bar */}
        <div className="lg:col-span-3 xl:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
            Key Features
          </h2>
          <div className="w-8 h-1 bg-[#089EC2] dark:bg-[#2DD4F0] rounded-full mt-2" />
        </div>

        {/* Right Column: Feature Cards Grid */}
        <div className="lg:col-span-9 xl:col-span-10">
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${isSixCards ? 'md:grid-cols-3 xl:grid-cols-6' : 'lg:grid-cols-4'} gap-3.5 sm:gap-4`}>
            {features.map((feat, idx) => {
              const IconComponent = feat.icon || getFeatureIcon(feat.title);
              return (
                <div
                  key={idx}
                  className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#F8FAFD] to-[#F1F6FC] dark:from-[#132247]/70 dark:to-[#0f1a38]/80 border border-[#DCE8F5] dark:border-white/10 shadow-2xs hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#17264D] border border-[#CDE1F5] dark:border-[#244277] flex items-center justify-center shrink-0 text-[#089EC2] dark:text-[#2DD4F0] shadow-2xs mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#14213D] dark:text-white leading-snug mb-1.5">
                    {feat.title}
                  </h3>
                  {feat.desc && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
