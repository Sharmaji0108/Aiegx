import React, { useState } from 'react';
import {
  MessageSquare,
  FlaskConical,
  ArrowLeft,
  ExternalLink,
  Cpu,
  BrainCircuit,
  Camera,
  Network,
} from 'lucide-react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductBreadcrumb from '../../components/products/ProductBreadcrumb';
import ProductGallery from '../../components/products/ProductGallery';
import ProductSpecifications from '../../components/products/ProductSpecifications';
import TechnicalInfoTable from '../../components/products/TechnicalInfoTable';
import ProductDocuments from '../../components/products/ProductDocuments';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZV2H_PRODUCT_DETAILS } from '../../data/rzv2hData';
import { navigateTo } from '../../utils/navigation';

const V2H_KEY_HIGHLIGHTS = [
  {
    icon: Cpu,
    title: 'High-Performance Processing',
    description: 'Quad Cortex-A55 @ 1.8GHz + Dual Cortex-R8.',
  },
  {
    icon: BrainCircuit,
    title: 'Advanced AI Acceleration',
    description: 'DRP-AI3 with 8 TOPS Dense / 80 TOPS Sparse.',
  },
  {
    icon: Camera,
    title: 'Multi-Camera Vision',
    description: 'Up to 4-channel MIPI CSI-2 camera interface.',
  },
  {
    icon: Network,
    title: 'High-Speed Connectivity',
    description: 'PCIe Gen3, USB 3.2 Gen2 and Dual Gigabit Ethernet.',
  },
];

const V2H_FEATURES = [
  { text: 'Cortex-A55 (1.8GHz) x 4 cores' },
  { text: 'Cortex-R8 (800MHz) x 2 cores' },
  { text: 'Cortex-M33 (200MHz) x 1 core' },
  { text: 'AI Accelerator DRP-AI3 (8TOPS/dense, 80TOPS/sparse)' },
  { text: 'Dynamically reconfigurable processor (DRP)' },
  { text: 'Arm® Mali™-C55 ISP (option)' },
  { text: '6MB on-chip SRAM' },
  { text: 'LPDDR4/LPDDR4X memory interface' },
  { text: 'Gigabit Ethernet 2ch' },
  { text: 'USB 2.0 interface 2ch (On-the-Go (OTG) x 1ch, Host x 1ch)' },
  { text: 'USB 3.2 (Gen2) interface 2ch (Host only)' },
  { text: 'PCIe® interface (Gen3/4-lane) 1ch' },
  { text: 'MIPI® CSI-2® camera interface 4ch' },
  { text: 'CAN interface (CAN FD) 6ch' },
  { text: 'Package: BGA, 19mm x 19mm 1368-pin 0.5mm pitch' },
  {
    isLink: true,
    prefix: 'Explore Renesas-validated',
    linkText: 'DRAM Compatibility List',
    linkUrl: 'https://www.renesas.com/products/rzv2h',
  },
];

/**
 * RZ/V2H Embedded Computing Platform Product Detail Page
 * Matching the exact visual design language, structure, and tabular technical layout of RZ/G2L.
 */
export default function RZV2HSBC() {
  const product = RZV2H_PRODUCT_DETAILS['sbc'];
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    type: 'Request Quote',
  });

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">
      {/* SECTION 1: Product Hero */}
      <section className="relative pt-[92px] pb-8 sm:pt-[108px] sm:pb-10 lg:pt-[122px] lg:pb-12 overflow-hidden bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300 isolate">
        {/* Subtle geometric circuit grid */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-30 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="v2h-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2DD4F0" strokeOpacity="0.08" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#v2h-circuit-grid)" />
          <path d="M 60 160 L 240 160 L 300 220 L 620 220" fill="none" stroke="#2DD4F0" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="6 4" />
          <circle cx="60" cy="160" r="3" fill="#2DD4F0" fillOpacity="0.65" />
          <circle cx="620" cy="220" r="3" fill="#2DD4F0" fillOpacity="0.65" />
          <path d="M 560 90 L 740 90 L 800 150 L 1160 150" fill="none" stroke="#3285FF" strokeOpacity="0.35" strokeWidth="1.2" />
          <circle cx="800" cy="150" r="2.5" fill="#3285FF" fillOpacity="0.7" />
        </svg>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-[#3285FF]/15 via-[#2DD4F0]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-0 sm:right-10 w-[280px] sm:w-[440px] h-[280px] sm:h-[420px] bg-gradient-to-bl from-[#2DD4F0]/15 via-[#3285FF]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="section-container relative">
          {/* Breadcrumb Navigation */}
          <div className="hidden md:flex items-center justify-between gap-4 mb-4">
            <ProductBreadcrumb items={product.breadcrumb} />
            <button
              type="button"
              onClick={(e) => navigateTo('/products/rzv2h', e)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52627C] dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors -mt-6 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to RZ/V2H Platform</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Product Hardware Image / Gallery */}
            <div className="order-1 lg:order-1 lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} badge="SBC" productName={product.title} />
            </div>

            {/* Right Column: Product Information & CTAs */}
            <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col items-start min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider mb-3.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
                <span>{product.category}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-[1.2] mb-3">
                {product.title}
              </h1>

              <p className="text-sm sm:text-base text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl mb-5">
                {product.shortDescription}
              </p>

              {/* Hardware Highlights Checklist */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-6">
                {product.heroHighlights.map((hl) => {
                  const Icon = hl.icon;
                  return (
                    <div
                      key={hl.label}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 dark:bg-[#17264A]/80 border border-[#DCE8F5] dark:border-[#24355A] shadow-xs backdrop-blur-xs min-w-0"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-[#14213D] dark:text-[#F8FAFC] truncate">
                        {hl.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() =>
                    setEnquiryModal({
                      isOpen: true,
                      type: 'Request Quote',
                    })
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#089EC2] to-[#3285FF] hover:from-[#078BAA] hover:to-[#256FE0] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Commercial Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setEnquiryModal({
                      isOpen: true,
                      type: 'Evaluation Kit',
                    })
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#17264A] hover:bg-[#F0F5FA] dark:hover:bg-[#1E325E] border border-[#DCE8F5] dark:border-[#24355A] text-[#14213D] dark:text-[#F8FAFC] font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  <FlaskConical className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>Technical Evaluation Kit</span>
                </button>
              </div>

              {/* Key Specs Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 mt-6 border-t border-[#DCE8F5] dark:border-[#24355A] w-full max-w-2xl">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                    Processor
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">
                    Renesas RZ/V2H
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                    AI Performance
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">
                    10 TOPS DRP-AI
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                    Multi-Camera
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">
                    Up to 8 Streams
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                    Longevity
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">
                    10+ Year SLTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Technical Features */}
      <section
        id="features"
        className="py-4 sm:py-6 lg:py-8 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-32 transition-colors duration-300"
      >
            <div className="section-container relative">
              <SectionHeadingContainer
                subheading="KEY PLATFORM CAPABILITIES"
                heading={
                  <>
                    Technical{' '}
                    <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                      Features
                    </span>
                  </>
                }
                description="Core microprocessor compute, dual real-time subsystems, DRP-AI3 neural acceleration, and high-speed industrial I/O."
              />

              {/* 4 Key Technical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                {V2H_KEY_HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative rounded-xl sm:rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/50 dark:hover:border-[#2DD4F0]/50 p-4 sm:p-5 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-all duration-200"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] mb-3 group-hover:scale-105 transition-transform duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs overflow-hidden">
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#EDF2F7] dark:bg-[#101936] border-b border-[#DBE4F0] dark:border-[#24355A]">
                        <th
                          scope="col"
                          className="py-3.5 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0]"
                        >
                          DETAILS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#24355A]">
                      {V2H_FEATURES.map((item, idx) => (
                        <tr
                          key={idx}
                          className={`transition-colors hover:bg-[#F8FAFD] dark:hover:bg-[#1E315E]/50 ${
                            idx % 2 === 1 ? 'bg-[#FAFBFD] dark:bg-[#142244]/50' : 'bg-transparent'
                          }`}
                        >
                          <td className="py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-normal text-[#14213D] dark:text-[#CBD5E1] leading-relaxed">
                            {item.isLink ? (
                              <span>
                                {item.prefix}{' '}
                                <a
                                  href={item.linkUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-[#089EC2] dark:text-[#2DD4F0] underline hover:text-[#067A97] dark:hover:text-[#67E8F9] transition-colors inline-flex items-center gap-1"
                                >
                                  <span>{item.linkText}</span>
                                  <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                                </a>
                              </span>
                            ) : (
                              item.text
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

      {/* SECTION 3: Technical Specifications */}
      <ProductSpecifications
        specifications={product.specifications}
        productName={product.title}
      />

      {/* SECTION 4: Hardware Interfaces */}
      {product.interfaces && (
        <section className="py-4 sm:py-6 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
          <div className="section-container">
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
              description="Integrated high-speed PCIe Gen3, multi-camera MIPI CSI-2, USB 3.2 Gen2, and real-time motion I/O interfaces."
              className="mb-2 sm:mb-2.5"
            />

            <TechnicalInfoTable
              data={product.interfaces}
              featureHeader="Item"
              descriptionHeader="Description"
              featureColWidth="28%"
              descColWidth="72%"
            />
          </div>
        </section>
      )}

      {/* SECTION 5: Software Support */}
      {product.softwareSupport && (
        <section className="py-4 sm:py-6 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
          <div className="section-container">
            <SectionHeadingContainer
              subheading="BOARD SUPPORT PACKAGE & OS"
              heading={
                <>
                  Software Support &{' '}
                  <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                    Toolchains
                  </span>
                </>
              }
              description="Production-grade Linux BSP, 2nd Gen DRP-AI compiler toolkit, ROS 2 Humble runtime, and dual Cortex-R8 real-time stack."
              className="mb-2 sm:mb-2.5"
            />

            <TechnicalInfoTable
              data={product.softwareSupport}
              featureHeader="Software Component"
              descriptionHeader="Description & Deliverables"
              featureColWidth="30%"
              descColWidth="70%"
            />
          </div>
        </section>
      )}

      {/* SECTION 6: Documents */}
      {product.documents && product.documents.length > 0 && (
        <ProductDocuments
          documents={product.documents}
          onRequestDoc={(doc) =>
            setEnquiryModal({
              isOpen: true,
              type: `Request ${doc.title}`,
            })
          }
        />
      )}

      {/* SECTION 4: Bottom Technical / Commercial Enquiry Strip */}
      <ProductEnquiry
        productName="RZ/V2H Embedded Computing Platform"
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
        productName="RZ/V2H Embedded Computing Platform"
      />
    </div>
  );
}

