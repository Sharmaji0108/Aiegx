import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductHero from '../../components/products/ProductHero';
import PlatformFeatures from '../../components/products/PlatformFeatures';
import HardwareArchitecture from '../../components/products/HardwareArchitecture';
import AvailableHardware from '../../components/products/AvailableHardware';
import ProductApplications from '../../components/products/ProductApplications';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZG2L_PLATFORM_DATA, RZG2L_APPLICATIONS } from '../../data/rzg2lData';

/**
 * Page 1 — RZ/G2L Platform Page
 * Integrated with Aiegx homepage visual language, color system, and dark/light theme.
 */
export default function RZG2LPlatform() {
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
        breadcrumb={RZG2L_PLATFORM_DATA.breadcrumb}
        hero={RZG2L_PLATFORM_DATA.hero}
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
            description="Balanced 64-bit Arm performance, 3D graphics, industrial I/O, and long-term Yocto Linux support."
          />

          <PlatformFeatures items={RZG2L_PLATFORM_DATA.capabilities} columns={5} />
        </div>
      </section>

      {/* Section D: Hardware Architecture (SMARC SoM + Carrier Board -> Complete SBC) */}
      <HardwareArchitecture blocks={RZG2L_PLATFORM_DATA.architecture} />

      {/* Section E: Available Hardware (3 Product Cards) */}
      <AvailableHardware products={RZG2L_PLATFORM_DATA.availableHardware} />

      {/* Section F: Typical Applications (5 image-focused cards) */}
      <ProductApplications applications={RZG2L_APPLICATIONS} />

      {/* Section G: Why RZ/G2L? */}
      <section className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
        <div className="section-container relative">
          <SectionHeadingContainer
            subheading="PLATFORM ADVANTAGES"
            heading={
              <>
                Why{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  RZ/G2L?
                </span>
              </>
            }
            description="Purpose-built silicon and modular hardware designed for longevity, determinism, and graphical responsiveness."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {RZG2L_PLATFORM_DATA.whyPoints.map((point) => (
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
        productName="RZ/G2L Platform"
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
        productName="RZ/G2L Embedded Control & HMI Platform"
      />
    </div>
  );
}

