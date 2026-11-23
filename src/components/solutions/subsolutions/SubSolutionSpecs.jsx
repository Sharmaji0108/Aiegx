import React from 'react';
import { Sliders } from 'lucide-react';

export default function SubSolutionSpecs({ specifications = [] }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="bg-white dark:bg-[#101936] rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300">
      <div>
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit mb-4">
          <Sliders className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
            TECHNICAL PARAMETERS & PLATFORMS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#14213D] dark:text-white tracking-tight mb-2">
          Specifications
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Detailed hardware interface parameters, neural inference throughput, and recommended Renesas processor platforms.
        </p>

        {/* Compact Specifications Table */}
        <div className="rounded-xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-xs bg-white dark:bg-[#101936]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F0F6FE] dark:bg-[#132247] border-b border-slate-200 dark:border-white/10 text-[#089EC2] dark:text-[#2DD4F0] text-xs font-mono font-bold tracking-wider uppercase">
                  <th scope="col" className="py-3.5 px-5 sm:px-6 w-1/3">
                    Parameter
                  </th>
                  <th scope="col" className="py-3.5 px-5 sm:px-6 w-2/3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/5 text-xs sm:text-sm">
                {specifications.map((spec, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={idx}
                      className={isEven ? 'bg-white dark:bg-[#101936]' : 'bg-[#F8FAFD]/70 dark:bg-[#152144]/40'}
                    >
                      <td className="py-3.5 px-5 sm:px-6 font-bold text-[#14213D] dark:text-white align-top">
                        {spec.label || spec.parameter}
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-slate-700 dark:text-slate-300 leading-relaxed font-medium align-top">
                        {spec.value || spec.details}
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
  );
}
