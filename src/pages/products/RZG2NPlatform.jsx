import React, { useState } from 'react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductHero from '../../components/products/ProductHero';
import PlatformFeatures from '../../components/products/PlatformFeatures';
import HardwareArchitecture from '../../components/products/HardwareArchitecture';
import PlatformCapabilitiesAndArchitecture from '../../components/products/PlatformCapabilitiesAndArchitecture';
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

      {/* Desktop Web Application Only: Side-by-Side 55:45 Layout (hidden on mobile, visible on lg+) */}
      <div className="hidden lg:block">
        <PlatformCapabilitiesAndArchitecture
          capabilities={RZG2N_PLATFORM_DATA.capabilities}
          capabilitiesDescription="Arm processing, 4K video, 3D graphics, connectivity and embedded Linux support."
          architectureSubheading={RZG2N_PLATFORM_DATA.architecture.subheading || 'INTEGRATED BOARD ARCHITECTURE'}
          title={RZG2N_PLATFORM_DATA.architecture.title}
          titleGradient={RZG2N_PLATFORM_DATA.architecture.titleGradient}
          statement={RZG2N_PLATFORM_DATA.architecture.statement}
          statementTitle={RZG2N_PLATFORM_DATA.architecture.statementTitle}
          statementDescription={RZG2N_PLATFORM_DATA.architecture.statementDescription}
          architectureDescription={RZG2N_PLATFORM_DATA.architecture.description}
        />
      </div>

      {/* Mobile Web Application: Original Standalone Stacked Sections (visible on mobile, hidden on lg+) */}
      <div className="block lg:hidden">
        {/* Section C: Key Platform Capabilities */}
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
              description="Arm processing, 4K video, 3D graphics, connectivity and embedded Linux support."
            />

            <PlatformFeatures items={RZG2N_PLATFORM_DATA.capabilities} columns={5} />
          </div>
        </section>

        {/* Section D: Hardware Architecture */}
        <HardwareArchitecture
          subheading={RZG2N_PLATFORM_DATA.architecture.subheading || 'INTEGRATED BOARD ARCHITECTURE'}
          title={RZG2N_PLATFORM_DATA.architecture.title}
          titleGradient={RZG2N_PLATFORM_DATA.architecture.titleGradient}
          description={RZG2N_PLATFORM_DATA.architecture.description}
          statement={RZG2N_PLATFORM_DATA.architecture.statement}
          statementTitle={RZG2N_PLATFORM_DATA.architecture.statementTitle}
          statementDescription={RZG2N_PLATFORM_DATA.architecture.statementDescription}
        />
      </div>

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
        description="Explore our RZ/G2N-based single-board computer for multimedia, display and embedded computing applications."
      />

      {/* Section F: Typical Applications (Single horizontal row with continuous automatic right-to-left marquee) */}
      <TypicalApplicationsCarousel
        applications={RZG2N_APPLICATIONS}
        description="Embedded computing applications for industrial control, building automation, video monitoring, transportation and information display systems."
      />

      {/* Bottom Enquiry CTA */}
      <ProductEnquiry
        productName="RZ/G2N Platform"
        description="Discuss RZ/G2N SBC selection, system integration and embedded Linux support with our engineering team."
        bottomMessage="Speak with our team about your application requirements, hardware interfaces and customization options for the RZ/G2N SBC."
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

