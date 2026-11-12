import React from 'react';

/**
 * Reusable Horizontal Feature Strip.
 * Supports 5-column Key Platform Capabilities (Platform Page)
 * and 4-column Feature Highlights (Product Detail Page).
 */
export default function PlatformFeatures({ items = [], columns = 5, compact = false }) {
  const gridClass =
    columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5';

  return (
    <div className={`grid ${gridClass} gap-3 sm:gap-4`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        const label = item.title || item.label;

        return (
          <div
            key={`${label}-${idx}`}
            className={`group rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
              compact ? 'px-4 py-3.5 flex items-center gap-3' : 'p-4 sm:p-5 flex flex-col items-start'
            }`}
          >
            <div
              className={`shrink-0 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent transition-all duration-300 ${
                compact ? 'w-9 h-9' : 'w-10 h-10 mb-3'
              }`}
            >
              <Icon className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
            </div>

            <div className="min-w-0">
              <h3 className="text-xs sm:text-[13.5px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                {label}
              </h3>
              {item.description && !compact && (
                <p className="text-[11.5px] sm:text-xs text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-1">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

