import React, { useState } from 'react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductHero from '../../components/products/ProductHero';
import PlatformFeatures from '../../components/products/PlatformFeatures';
import HardwareArchitecture from '../../components/products/HardwareArchitecture';
import PlatformCapabilitiesAndArchitecture from '../../components/products/PlatformCapabilitiesAndArchitecture';
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

      {/* Desktop Web Application Only: Side-by-Side 55:45 Layout (hidden on mobile, visible on lg+) */}
      <div className="hidden lg:block">
        <PlatformCapabilitiesAndArchitecture
          capabilities={RZV2L_PLATFORM_DATA.capabilities}
          capabilitiesDescription="Arm processing, AI acceleration, camera interfaces, multimedia capabilities and embedded Linux support."
          architectureBlocks={RZV2L_PLATFORM_DATA.architecture}
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
              description="Arm processing, AI acceleration, camera interfaces, multimedia capabilities and embedded Linux support."
            />

            <PlatformFeatures items={RZV2L_PLATFORM_DATA.capabilities} columns={5} />
          </div>
        </section>

        {/* Section D: Hardware Architecture */}
        <HardwareArchitecture
          blocks={RZV2L_PLATFORM_DATA.architecture}
          subheading="MODULAR ARCHITECTURE"
          title="Hardware"
          titleGradient="Architecture"
          description="The RZ/V2L platform supports a modular architecture. SoM provides the core computing module, Carrier Board provides application interfaces, and together they form a complete Development Kit."
          stackOnMobile={true}
        />
      </div>

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
        description="Explore our RZ/V2L-based hardware, including SMARC modules, carrier boards and complete computing platforms for embedded AI and vision applications."
      />

      {/* Section F: Typical Applications (Single horizontal row with continuous automatic right-to-left marquee on mobile, static grid on desktop) */}
      <TypicalApplicationsCarousel
        applications={RZV2L_APPLICATIONS}
        description="Vision AI applications for driver monitoring, smart cameras, industrial inspection, intelligent interfaces and robotics."
      />

      {/* Section H: Technical & Commercial Enquiry */}
      <ProductEnquiry
        productName="RZ/V2L Platform"
        description="Explore RZ/V2L-based hardware, custom board development, and embedded software support with our engineering team."
        bottomMessage="Discuss your hardware requirements, system integration and embedded AI development with our team."
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
        productName="RZ/V2L Platform"
      />
    </div>
  );
}

