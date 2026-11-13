import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductHero from '../../components/products/ProductHero';
import PlatformFeatures from '../../components/products/PlatformFeatures';
import HardwareArchitecture from '../../components/products/HardwareArchitecture';
import AvailableHardware from '../../components/products/AvailableHardware';
import TypicalApplicationsCarousel from '../../components/products/TypicalApplicationsCarousel';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZG2N_PLATFORM_DATA, RZG2N_APPLICATIONS } from '../../data/rzg2nData';

/**
 * RZ/G2N Platform Page
 * Matching the exact layout, design language, and responsive functionality of the RZ/G2L Platform page.
 */
export default function RZG2NPlatform() {
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
        breadcrumb={RZG2N_PLATFORM_DATA.breadcrumb}
        hero={RZG2N_PLATFORM_DATA.hero}
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
            description="High-compute 64-bit Arm performance, 4K multimedia codecs, high-speed serial buses, and long-term Linux support."
          />

          <PlatformFeatures items={RZG2N_PLATFORM_DATA.capabilities} columns={5} />
        </div>
      </section>

      {/* Section D: Hardware Architecture */}
      <HardwareArchitecture
        title={RZG2N_PLATFORM_DATA.architecture.title}
        titleGradient={RZG2N_PLATFORM_DATA.architecture.titleGradient}
        description={RZG2N_PLATFORM_DATA.architecture.description}
        statement={RZG2N_PLATFORM_DATA.architecture.statement}
      />

      {/* Section E: Available Hardware (Single Elegant SBC Card) */}
      <AvailableHardware
        products={RZG2N_PLATFORM_DATA.availableHardware}
        subheading="AVAILABLE HARDWARE"
        heading={
          <>
            Available{' '}
            <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
              Hardware
            </span>
          </>
        }
        description="Commercial-grade single-board computer development platform powered by the Renesas RZ/G2N processor."
      />

      {/* Section F: Typical Applications (Single horizontal row with continuous automatic right-to-left marquee) */}
      <TypicalApplicationsCarousel
        applications={RZG2N_APPLICATIONS}
        description="Engineered for high-bandwidth video analytics, 4K digital signage, and connected edge gateways."
      />

      {/* Section G: Why RZ/G2N? */}
      <section className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
        <div className="section-container relative">
          <SectionHeadingContainer
            subheading="PLATFORM ADVANTAGES"
            heading={
              <>
                Why{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  RZ/G2N?
                </span>
              </>
            }
            description="Purpose-built silicon and turnkey single-board computer hardware designed for multimedia throughput and determinism."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {RZG2N_PLATFORM_DATA.whyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mt-1.5">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Enquiry CTA */}
      <ProductEnquiry
        productName="RZ/G2N Platform"
        onRequestQuote={() =>
          setEnquiryModal({ isOpen: true, type: 'Request Quote' })
        }
        onContactTeam={() =>
          setEnquiryModal({ isOpen: true, type: 'Contact Engineering Team' })
        }
      />

      {/* Interactive Enquiry Modal */}
      <ProductEnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={() => setEnquiryModal((prev) => ({ ...prev, isOpen: false }))}
        initialType={enquiryModal.type}
        productName="RZ/G2N Multimedia & 4K Video Processing Platform"
      />
    </div>
  );
}

