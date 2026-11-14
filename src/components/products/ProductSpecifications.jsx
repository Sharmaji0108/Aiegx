import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Technical Specifications table with subtle row separators and responsive overflow container.
 */
const renderCellContent = (content) => {
  if (Array.isArray(content)) {
    return (
      <div className="space-y-1 sm:space-y-1.5 text-left">
        {content.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {renderCellContent(line)}
          </div>
        ))}
      </div>
    );
  }
  if (typeof content === 'string') {
    if (content.includes('\n')) {
      return (
        <div className="space-y-1 sm:space-y-1.5 text-left">
          {content.split('\n').map((line, i) => (
            <div key={i} className="leading-relaxed">
              {renderCellContent(line)}
            </div>
          ))}
        </div>
      );
    }
    if (content.startsWith('**') && content.endsWith('**')) {
      return (
        <span className="font-bold text-[#14213D] dark:text-[#F8FAFC]">
          {content.slice(2, -2)}
        </span>
      );
    }
  }
  return content;
};

export default function ProductSpecifications({
  specifications = [],
  productName = 'RZ/G2L SMARC SoM',
  featureHeader = 'FEATURES',
  detailsHeader = 'DETAILS',
}) {
  const specList = Array.isArray(specifications) ? specifications : [];

  return (
    <section
      id="specifications"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
    >
      <div className="section-container relative">
        <SectionHeadingContainer
          subheading="TECHNICAL SPECIFICATIONS"
          heading={
            <>
              Technical{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Specifications
              </span>
            </>
          }
          description={`Detailed hardware parameters and interface support for the ${productName}.`}
        />

        <div className="rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EDF2F7] dark:bg-[#101936] border-b border-[#DBE4F0] dark:border-[#24355A]">
                  <th
                    scope="col"
                    className="py-3.5 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] w-2/5 sm:w-1/3"
                  >
                    {featureHeader}
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0]"
                  >
                    {detailsHeader}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#24355A]">
                {specList.map((row, idx) => {
                  const param = row.feature ?? row.parameter ?? row.param ?? row.name ?? row.label ?? '';
                  const spec = row.details ?? row.specification ?? row.value ?? row.detail ?? row.description ?? '';
                  return (
                    <tr
                      key={param || idx}
                      className={`transition-colors hover:bg-[#F8FAFD] dark:hover:bg-[#1E315E]/50 ${
                        idx % 2 === 1 ? 'bg-[#FAFBFD] dark:bg-[#142244]/50' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] align-middle">
                        {param}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-medium text-[#52627C] dark:text-[#CBD5E1] align-middle text-left">
                        {renderCellContent(spec)}
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
