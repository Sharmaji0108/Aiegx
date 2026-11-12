import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import { navigateTo } from '../../utils/navigation';

/**
 * Available Hardware section displaying RZ/G2L SMARC SoM, Carrier Board, and SBC.
 */
export default function AvailableHardware({ products = [] }) {
  return (
    <section
      id="available-hardware"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-24 transition-colors duration-300"
    >
      <div className="section-container relative">
        <SectionHeadingContainer
          subheading="AVAILABLE HARDWARE"
          heading={
            <>
              Available{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Hardware
              </span>
            </>
          }
          description="Scalable Renesas RZ/G2L hardware options spanning compact SMARC modules, carrier baseboards, and complete development platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative flex flex-col h-full bg-white dark:bg-[#17264A] rounded-[18px] border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 p-4 sm:p-5 ${
                product.featured
                  ? 'border-[#089EC2]/50 dark:border-[#2DD4F0]/45 shadow-[0_2px_14px_rgba(8,158,194,0.12)]'
                  : 'border-[#DCE8F5] dark:border-[#24355A] hover:border-[#089EC2]/45 dark:hover:border-[#2DD4F0]/35'
              }`}
            >
              {/* Top Category Badge, Title & Description */}
              <div className="mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold uppercase tracking-wider bg-[#E2EEFB] dark:bg-[#1A2C52] text-[#089EC2] dark:text-[#2DD4F0] border border-[#C5DDF5] dark:border-[#244277] mb-1.5">
                  {product.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#14213D] dark:text-[#F8FAFC] tracking-tight leading-snug md:min-h-[5.25rem] lg:min-h-[3.5rem] xl:min-h-[1.75rem]">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#52627C] dark:text-[#AAB6D0] mt-1 md:min-h-[5.5rem] lg:min-h-[4.25rem] xl:min-h-[2.75rem]">
                  {product.description}
                </p>
              </div>

              {/* Large Hardware Image Frame */}
              <div
                onClick={(e) => navigateTo(product.route, e)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigateTo(product.route, e);
                  }
                }}
                aria-label={`View ${product.name} product details`}
                className="w-full h-44 sm:h-48 shrink-0 rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#E2EAF4] dark:border-[#24355A] flex items-center justify-center p-2.5 sm:p-3 mb-3.5 overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  onError={(e) => {
                    if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                      e.currentTarget.src = product.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Compact Feature List */}
              <ul className="space-y-2 mb-5 flex-1">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs sm:text-[13px] font-medium leading-snug text-[#14213D] dark:text-[#D4E3F5]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View Product CTA Button */}
              <div className="mt-auto pt-2">
                <a
                  href={product.route}
                  onClick={(e) => navigateTo(product.route, e)}
                  className="explore-btn"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

