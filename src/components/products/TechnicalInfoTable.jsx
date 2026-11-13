import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Reusable two-column technical table matching the ProductSpecifications design system.
 * Used for Key Features, Hardware Interfaces, and Software Support sections on product detail pages.
 */
export default function TechnicalInfoTable({
  id,
  subheading,
  heading,
  description,
  columns = ['Item', 'Description'],
  rows = [],
  data = [],
  featureHeader,
  descriptionHeader,
  featureColWidth,
  descColWidth,
  colWidths = ['w-[38%] sm:w-[34%] md:w-[30%]', 'w-[62%] sm:w-[66%] md:w-[70%]'],
}) {
  const tableRows = (rows && rows.length > 0) ? rows : (Array.isArray(data) ? data : []);
  const col1 = (columns && columns[0]) || featureHeader || 'Item';
  const col2 = (columns && columns[1]) || descriptionHeader || 'Description';
  const hasHeading = Boolean(subheading || heading || description);

  return (
    <section
      id={id}
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
    >
      <div className="section-container relative">
        {hasHeading && (
          <SectionHeadingContainer
            subheading={subheading}
            heading={heading}
            description={description}
          />
        )}

        <div className="rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EDF2F7] dark:bg-[#101936] border-b border-[#DBE4F0] dark:border-[#24355A]">
                  <th
                    scope="col"
                    className={`py-3.5 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] ${colWidths[0]}`}
                    style={featureColWidth ? { width: featureColWidth } : undefined}
                  >
                    {col1}
                  </th>
                  <th
                    scope="col"
                    className={`py-3.5 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] ${colWidths[1]}`}
                    style={descColWidth ? { width: descColWidth } : undefined}
                  >
                    {col2}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#24355A]">
                {tableRows.map((row, idx) => {
                  const label = row.label ?? row.feature ?? row.name ?? row.title ?? row.parameter ?? '';
                  const desc = row.description ?? row.detail ?? row.specification ?? row.subtitle ?? '';
                  return (
                    <tr
                      key={label || idx}
                      className={`transition-colors hover:bg-[#F8FAFD] dark:hover:bg-[#1E315E]/50 ${
                        idx % 2 === 1 ? 'bg-[#FAFBFD] dark:bg-[#142244]/50' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-[#14213D] dark:text-[#F8FAFC] align-top">
                        {label}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-normal text-[#52627C] dark:text-[#CBD5E1] leading-relaxed align-top">
                        {desc}
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
