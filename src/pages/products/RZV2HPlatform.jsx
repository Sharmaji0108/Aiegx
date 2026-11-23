import React, { useState } from 'react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductHero from '../../components/products/ProductHero';
import PlatformFeatures from '../../components/products/PlatformFeatures';
import HardwareArchitecture from '../../components/products/HardwareArchitecture';
import PlatformCapabilitiesAndArchitecture from '../../components/products/PlatformCapabilitiesAndArchitecture';
import AvailableHardware from '../../components/products/AvailableHardware';
import TypicalApplicationsCarousel from '../../components/products/TypicalApplicationsCarousel';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZV2H_PLATFORM_DATA, RZV2H_APPLICATIONS } from '../../data/rzv2hData';

/**
 * RZ/V2H Platform Page
 * Matching the exact layout, design language, and responsive functionality of the RZ/G2L Platform page.
 */
export default function RZV2HPlatform() {
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
        breadcrumb={RZV2H_PLATFORM_DATA.breadcrumb}
        hero={RZV2H_PLATFORM_DATA.hero}
        onExploreHardware={scrollToAvailableHardware}
        onRequestQuote={() =>
          setEnquiryModal({ isOpen: true, type: 'Contact Engineering Team' })
        }
      />

      {/* Desktop Web Application Only: Side-by-Side 55:45 Layout (hidden on mobile, visible on lg+) */}
      <div className="hidden lg:block">
        <PlatformCapabilitiesAndArchitecture
          capabilities={RZV2H_PLATFORM_DATA.capabilities}
          capabilitiesSubheading="PLATFORM CAPABILITIES"
          capabilitiesDescription="Key capabilities of the Renesas RZ/V2H processor platform for embedded vision and edge AI applications."
          architectureSubheading={RZV2H_PLATFORM_DATA.architecture.subheading || 'PLATFORM OVERVIEW'}
          title={RZV2H_PLATFORM_DATA.architecture.title}
          titleGradient={RZV2H_PLATFORM_DATA.architecture.titleGradient}
          statement={RZV2H_PLATFORM_DATA.architecture.statement}
          statementTitle={RZV2H_PLATFORM_DATA.architecture.statementTitle}
          statementDescription={RZV2H_PLATFORM_DATA.architecture.statementDescription}
          architectureDescription={RZV2H_PLATFORM_DATA.architecture.description}
        />
      </div>

      {/* Mobile Web Application: Original Standalone Stacked Sections (visible on mobile, hidden on lg+) */}
      <div className="block lg:hidden">
        {/* Section C: Key Platform Capabilities */}
        <section className="py-6 sm:py-8 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
          <div className="section-container relative">
            <SectionHeadingContainer
              subheading="PLATFORM CAPABILITIES"
              heading={
                <>
                  Platform{' '}
                  <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                    Capabilities
                  </span>
                </>
              }
              description="Key capabilities of the Renesas RZ/V2H processor platform for embedded vision and edge AI applications."
            />

            <PlatformFeatures items={RZV2H_PLATFORM_DATA.capabilities} columns={5} />
          </div>
        </section>

        {/* Section D: Hardware Architecture */}
        <HardwareArchitecture
          subheading={RZV2H_PLATFORM_DATA.architecture.subheading || 'PLATFORM OVERVIEW'}
          title={RZV2H_PLATFORM_DATA.architecture.title}
          titleGradient={RZV2H_PLATFORM_DATA.architecture.titleGradient}
          description={RZV2H_PLATFORM_DATA.architecture.description}
          statement={RZV2H_PLATFORM_DATA.architecture.statement}
          statementTitle={RZV2H_PLATFORM_DATA.architecture.statementTitle}
          statementDescription={RZV2H_PLATFORM_DATA.architecture.statementDescription}
        />
      </div>

      {/* Section E: Available Hardware (Single Elegant SBC Card) */}
      <AvailableHardware
        products={RZV2H_PLATFORM_DATA.availableHardware}
        subheading="AVAILABLE HARDWARE"
        heading={
          <>
            Available{' '}
            <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
              Hardware
            </span>
          </>
        }
        description="High-performance edge AI single-board computer development platform powered by the Renesas RZ/V2H processor."
      />

      {/* Section F: Typical Applications (Single horizontal row with continuous automatic right-to-left marquee on mobile, static grid on desktop) */}
      <TypicalApplicationsCarousel
        applications={RZV2H_APPLICATIONS}
        description="Engineered for autonomous mobile robotics, 8-channel smart city tracking, factory AOI, and high-speed edge AI."
      />

      {/* Section H: Technical & Commercial Enquiry */}
      <ProductEnquiry
        productName="RZ/V2H Platform"
        description="Explore RZ/V2H-based hardware, custom board development, and embedded software integration with our engineering team."
        bottomMessage="Discuss your hardware requirements, custom board design, or embedded Linux development with our engineers."
        onRequestQuote={() =>
          setEnquiryModal({ isOpen: true, type: 'Request Quote' })
        }
        onContactTeam={() =>
          setEnquiryModal({ isOpen: true, type: 'Contact Engineering Team' })
        }
      />

      {/* Modal for Enquiry / Quote */}
      <ProductEnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={() => setEnquiryModal({ isOpen: false, type: 'Request Quote' })}
        type={enquiryModal.type}
        productName="RZ/V2H Platform"
      />
    </div>
  );
}

