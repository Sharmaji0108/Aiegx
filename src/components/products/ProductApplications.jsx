import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';

/**
 * Shared Typical Applications section used on Platform & Product Detail pages.
 * Image-focused cards with minimal text matching Aiegx visual style.
 */
export default function ProductApplications({
  id = 'applications',
  applications = [],
  subheading = 'TYPICAL APPLICATIONS',
  headingPrefix = 'Typical',
  headingHighlight = 'Applications',
  description = 'Designed for mission-critical graphical interfaces, telemetry controllers, and industrial edge systems.',
}) {
  return (
    <section
      id={id}
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
    >
      <div className="section-container relative">
        <SectionHeadingContainer
          subheading={subheading}
          heading={
            <>
              {headingPrefix}{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            </>
          }
          description={description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className="group relative rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                {/* Application Visual */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#EDF2F7] dark:bg-[#101936]">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1733]/55 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/95 dark:bg-[#101936]/90 border border-[#DBE4F0] dark:border-[#24355A] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimal Card Label */}
                <div className="p-3.5 sm:p-4 text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors leading-snug">
                    {app.title}
                  </h3>
                  {app.subtitle && (
                    <p className="text-[11px] text-[#52627C] dark:text-[#AAB6D0] mt-1 leading-snug">
                      {app.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

