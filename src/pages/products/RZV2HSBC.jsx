import React, { useState, useRef } from 'react';
import { MessageSquare, FlaskConical, ArrowLeft } from 'lucide-react';
import ProductBreadcrumb from '../../components/products/ProductBreadcrumb';
import ProductGallery from '../../components/products/ProductGallery';
import ProductTabs from '../../components/products/ProductTabs';
import ProductSpecifications from '../../components/products/ProductSpecifications';
import TechnicalInfoTable from '../../components/products/TechnicalInfoTable';
import TypicalApplicationsCarousel from '../../components/products/TypicalApplicationsCarousel';
import ProductDocuments from '../../components/products/ProductDocuments';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZV2H_PRODUCT_DETAILS, RZV2H_APPLICATIONS } from '../../data/rzv2hData';
import { navigateTo } from '../../utils/navigation';

/**
 * RZ/V2H SBC (Development Platform) Product Detail Page
 * Matching the exact visual design language, structure, and tabular technical layout of RZ/G2L.
 */
export default function RZV2HSBC() {
  const product = RZV2H_PRODUCT_DETAILS['sbc'];
  const [activeTab, setActiveTab] = useState('specifications');
  const tabContentRef = useRef(null);
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    type: 'Request Quote',
  });

  const handleTabChange = (nextTab) => {
    setActiveTab(nextTab);
    setTimeout(() => {
      const tabTarget = document.getElementById('product-tabs-section');
      if (tabTarget) {
        tabTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

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
          <div className="flex items-center justify-between gap-4 mb-4">
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
            <div className="lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} badge="SBC" productName={product.title} />
            </div>

            {/* Right Column: Product Information & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start min-w-0">
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

      {/* SECTION 2: Sticky Tab Navigation */}
      <ProductTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* SECTION 3: Tab Content Area */}
      <div id="product-tabs-section" ref={tabContentRef} className="scroll-mt-24">
        {/* Tab 1: Specifications */}
        {activeTab === 'specifications' && (
          <section className="py-8 sm:py-12 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
            <div className="section-container">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] block mb-1">
                  TECHNICAL DATASHEET
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-[#F8FAFC]">
                  Comprehensive Specifications
                </h2>
                <p className="text-xs sm:text-sm text-[#52627C] dark:text-[#AAB6D0] mt-1 max-w-2xl">
                  Detailed parameter-by-parameter hardware specifications for the RZ/V2H SBC development platform.
                </p>
              </div>

              <ProductSpecifications specifications={product.specifications} />
            </div>
          </section>
        )}

        {/* Tab 3: Interfaces */}
        {activeTab === 'interfaces' && (
          <section className="py-8 sm:py-12 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
            <div className="section-container">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] block mb-1">
                  CONNECTIVITY & I/O
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-[#F8FAFC]">
                  Hardware Interfaces
                </h2>
                <p className="text-xs sm:text-sm text-[#52627C] dark:text-[#AAB6D0] mt-1 max-w-2xl">
                  Integrated high-speed PCIe Gen3, multi-camera MIPI CSI-2, USB 3.2 Gen2, and real-time motion I/O interfaces.
                </p>
              </div>

              <TechnicalInfoTable
                data={product.interfaces}
                featureHeader="Interface"
                descriptionHeader="Details & Pinout Specification"
                featureColWidth="28%"
                descColWidth="72%"
              />
            </div>
          </section>
        )}

        {/* Tab 4: Software Support */}
        {activeTab === 'software-support' && (
          <section className="py-8 sm:py-12 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
            <div className="section-container">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] block mb-1">
                  BOARD SUPPORT PACKAGE & OS
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-[#F8FAFC]">
                  Software Support & Toolchains
                </h2>
                <p className="text-xs sm:text-sm text-[#52627C] dark:text-[#AAB6D0] mt-1 max-w-2xl">
                  Production-grade Linux BSP, 2nd Gen DRP-AI compiler toolkit, ROS 2 Humble runtime, and dual Cortex-R8 real-time stack.
                </p>
              </div>

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

        {/* Tab 5: Applications (Typical Applications Carousel) */}
        {activeTab === 'applications' && (
          <TypicalApplicationsCarousel
            applications={RZV2H_APPLICATIONS}
            subheading="TARGET APPLICATIONS"
            heading={
              <>
                Ideal Use Cases for{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  RZ/V2H SBC
                </span>
              </>
            }
            description="Proven across autonomous mobile robotics, 8-channel smart city tracking, factory AOI, and high-speed edge AI."
          />
        )}

        {/* Tab 6: Documents */}
        {activeTab === 'documents' && (
          <section className="py-8 sm:py-12 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
            <div className="section-container">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#089EC2] dark:text-[#2DD4F0] block mb-1">
                  TECHNICAL COLLATERAL
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-[#F8FAFC]">
                  Downloads & Documentation
                </h2>
                <p className="text-xs sm:text-sm text-[#52627C] dark:text-[#AAB6D0] mt-1 max-w-2xl">
                  Datasheets, hardware user guides, multi-camera schematics, and mechanical 3D models.
                </p>
              </div>

              <ProductDocuments
                documents={product.documents}
                onRequestDoc={(doc) =>
                  setEnquiryModal({
                    isOpen: true,
                    type: `Request ${doc.title}`,
                  })
                }
              />
            </div>
          </section>
        )}
      </div>

      {/* SECTION 4: Bottom Technical / Commercial Enquiry Strip */}
      <ProductEnquiry
        productName="RZ/V2H SBC (Development Platform)"
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
        productName="RZ/V2H SBC"
      />
    </div>
  );
}

