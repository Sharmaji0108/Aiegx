import React from 'react';
import SectionHeadingContainer from '../../common/SectionHeadingContainer';

export default function SubSolutionSpecs({ specifications = [], title = '' }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <section
      id="specifications"
      className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-24 transition-colors duration-300"
    >
      <div className="section-container">
        {/* Section Heading Banner matching Image 2 */}
        <SectionHeadingContainer
          subheading="TECHNICAL SPECIFICATIONS"
          heading="Technical Specifications"
          description={
            title
              ? `Detailed hardware parameters and interface support for the ${title}.`
              : 'Detailed hardware parameters, interface support, and silicon specifications.'
          }
        />

        {/* Two-Column Specifications Table matching Image 2 */}
        <div className="mt-8 max-w-5xl mx-auto rounded-2xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-xs bg-white dark:bg-[#101936]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F0F6FE] dark:bg-[#132247] border-b border-slate-200 dark:border-white/10 text-[#089EC2] dark:text-[#2DD4F0] text-xs font-mono font-bold tracking-wider uppercase">
                  <th scope="col" className="py-3.5 px-5 sm:px-6 w-1/4 sm:w-1/5">
                    FEATURE
                  </th>
                  <th scope="col" className="py-3.5 px-5 sm:px-6 w-3/4 sm:w-4/5">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/5 text-xs sm:text-sm">
                {specifications.map((spec, idx) => {
                  const featureName = spec.feature || spec.label || spec.name;
                  const detailsValue = spec.details || spec.value || spec.desc;
                  const isEven = idx % 2 === 0;

                  return (
                    <tr
                      key={idx}
                      className={
                        isEven
                          ? 'bg-white dark:bg-[#101936]'
                          : 'bg-[#F8FAFD]/70 dark:bg-[#152144]/40'
                      }
                    >
                      <td className="py-3.5 px-5 sm:px-6 font-bold text-[#14213D] dark:text-white align-top whitespace-nowrap sm:whitespace-normal">
                        {featureName}
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-slate-700 dark:text-slate-300 leading-relaxed font-medium align-top">
                        {detailsValue}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
