import React from 'react';

export default function SubSolutionSpecs({ specifications = [] }) {
  if (!specifications || specifications.length === 0) return null;

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
