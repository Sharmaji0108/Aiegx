import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductHero from '../../components/products/ProductHero';
import PlatformFeatures from '../../components/products/PlatformFeatures';
import HardwareArchitecture from '../../components/products/HardwareArchitecture';
import AvailableHardware from '../../components/products/AvailableHardware';
import TypicalApplicationsCarousel from '../../components/products/TypicalApplicationsCarousel';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZV2L_PLATFORM_DATA, RZV2L_APPLICATIONS } from '../../data/rzv2lData';

/**
 * RZ/V2L Platform Page
 * Matching the exact layout, design language, and responsive functionality of the RZ/G2L Platform page.
 */
export default function RZV2LPlatform() {
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    type: 'Request Quote',
  });

  const scrollToAvailableHardware = () => {
    const el = document.getElementById('available-hardware');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">
      {/* Section A & B: Breadcrumb + Platform Hero */}
      <ProductHero
        breadcrumb={RZV2L_PLATFORM_DATA.breadcrumb}
        hero={RZV2L_PLATFORM_DATA.hero}
        onExploreHardware={scrollToAvailableHardware}
        onRequestQuote={() =>
          setEnquiryModal({ isOpen: true, type: 'Request Quote' })
        }
      />

      {/* Section C: Key Platform Capabilities (5 compact items in a horizontal row) */}
      <section className="py-6 sm:py-8 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
        <div className="section-container relative">
          <SectionHeadingContainer
            subheading="KEY PLATFORM CAPABILITIES"
            heading={
              <>
                Platform{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Capabilities
                </span>
              </>
            }
            description="Dedicated DRP-AI neural accelerator, dual Cortex-A55 cores, on-chip ISP, sub-4W fanless operation, and long-term Linux support."
          />

          <PlatformFeatures items={RZV2L_PLATFORM_DATA.capabilities} columns={5} />
        </div>
      </section>

      {/* Section D: Hardware Architecture */}
      <HardwareArchitecture
        title={RZV2L_PLATFORM_DATA.architecture.title}
        titleGradient={RZV2L_PLATFORM_DATA.architecture.titleGradient}
        statement={RZV2L_PLATFORM_DATA.architecture.statement}
      />

      {/* Section E: Available Hardware (Three Elegant Hardware Options) */}
      <AvailableHardware
        products={RZV2L_PLATFORM_DATA.availableHardware}
        subheading="AVAILABLE HARDWARE"
        heading={
          <>
            Available{' '}
            <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
              Hardware
            </span>
          </>
        }
        description="Scalable Renesas RZ/V2L hardware options spanning compact SMARC modules, single-board computers, and complete development platforms."
      />

      {/* Section F: Typical Applications (Single horizontal row with continuous automatic right-to-left marquee on mobile, static grid on desktop) */}
      <TypicalApplicationsCarousel
        applications={RZV2L_APPLICATIONS}
        description="Engineered for intelligent vision cameras, automated optical inspection, smart terminals, and compact robotics."
      />

      {/* Section G: Why RZ/V2L? */}
      <section className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
        <div className="section-container relative">
          <SectionHeadingContainer
            subheading="PLATFORM ADVANTAGES"
            heading={
              <>
                Why{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  RZ/V2L?
                </span>
              </>
            }
            description="Purpose-built for power-efficient AI vision inference at the industrial edge without active thermal management."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {RZV2L_PLATFORM_DATA.whyPoints.map((point) => (
              <div
                key={point.title}
                className="group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug pt-1">
                    {point.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#52627C] dark:text-[#AAB6D0] leading-relaxed pl-11">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section H: Technical & Commercial Enquiry */}
      <ProductEnquiry
        productName="RZ/V2L Embedded AI Vision Platform"
        onRequestQuote={() =>
          setEnquiryModal({ isOpen: true, type: 'Request Quote' })
        }
        onRequestDatasheet={() =>
          setEnquiryModal({ isOpen: true, type: 'Download Datasheet' })
        }
      />

      {/* Modal for Enquiry / Quote */}
      <ProductEnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={() => setEnquiryModal({ isOpen: false, type: 'Request Quote' })}
        type={enquiryModal.type}
        productName="RZ/V2L Platform"
      />
    </div>
  );
}

