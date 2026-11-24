import React from 'react';
import { Layers } from 'lucide-react';

export default function SubSolutionSpecs({ specifications = [], technologyOverview = null }) {
  if ((!specifications || specifications.length === 0) && (!technologyOverview || technologyOverview.length === 0)) {
    return null;
  }

  if (technologyOverview && technologyOverview.length > 0) {
    return (
      <div className="bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Section Title with Cyan Bar */}
          <div className="lg:col-span-3 xl:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
              Technology <span className="text-[#089EC2] dark:text-[#2DD4F0]">Overview</span>
            </h2>
            <div className="w-8 h-1 bg-[#089EC2] dark:bg-[#2DD4F0] rounded-full mt-2" />
          </div>

          {/* Right Column: Technology Overview Items */}
          <div className="lg:col-span-9 xl:col-span-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="hidden lg:block w-px self-stretch bg-slate-200 dark:bg-white/10 mx-1" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 lg:divide-x divide-slate-200 dark:divide-white/10">
              {technologyOverview.map((item, idx) => {
                const IconComponent = item.icon || Layers;
                return (
                  <div key={idx} className="flex items-center gap-3.5 lg:px-6 first:pl-0 last:pr-0">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F6FE] dark:bg-[#132247] border border-[#CDE1F5] dark:border-[#244277] flex items-center justify-center shrink-0 text-[#089EC2] dark:text-[#2DD4F0] shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#14213D] dark:text-white leading-snug">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Section Title with Cyan Bar */}
        <div className="lg:col-span-3 xl:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
            Specifications
          </h2>
          <div className="w-8 h-1 bg-[#089EC2] dark:bg-[#2DD4F0] rounded-full mt-2" />
        </div>

        {/* Right Column: Specifications Table */}
        <div className="lg:col-span-9 xl:col-span-10">
          <div className="rounded-xl border border-[#DCE8F5] dark:border-white/10 overflow-hidden shadow-2xs bg-white dark:bg-[#101936]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F0F6FE] dark:bg-[#132247] border-b border-[#DCE8F5] dark:border-white/10 text-[#089EC2] dark:text-[#2DD4F0] text-xs font-mono font-bold tracking-wider uppercase">
                    <th scope="col" className="py-3.5 px-5 sm:px-6 w-1/3">
                      Parameter
                    </th>
                    <th scope="col" className="py-3.5 px-5 sm:px-6 w-2/3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5EEF8] dark:divide-white/5 text-xs sm:text-sm">
                  {specifications.map((spec, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <tr
                        key={idx}
                        className={isEven ? 'bg-white dark:bg-[#101936]' : 'bg-[#F8FAFD]/90 dark:bg-[#152144]/40'}
                      >
                        <td className="py-3.5 px-5 sm:px-6 font-bold text-[#14213D] dark:text-white align-top">
                          {spec.label}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-slate-700 dark:text-slate-300 leading-relaxed font-medium align-top">
                          {spec.value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
