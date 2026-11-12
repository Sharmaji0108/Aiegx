import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Interfaces section displaying supported module connectivity buses & display interfaces.
 */
export default function ProductInterfaces({ interfaces = [] }) {
  return (
    <section
      id="interfaces"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
    >
      <div className="section-container relative">
        <SectionHeadingContainer
          subheading="CONNECTIVITY & I/O"
          heading={
            <>
              Hardware{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Interfaces
              </span>
            </>
          }
          description="Comprehensive high-speed networking, industrial fieldbuses, and display pipelines routed for reliable peripheral integration."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {interfaces.map((iface) => {
            const Icon = iface.icon;
            return (
              <div
                key={iface.name}
                className="group rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 p-4 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] mb-3 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                  {iface.name}
                </h3>

                {iface.detail && (
                  <p className="text-[11px] sm:text-xs text-[#52627C] dark:text-[#AAB6D0] mt-1 leading-snug">
                    {iface.detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

