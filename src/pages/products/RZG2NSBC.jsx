import React, { useState, useRef } from 'react';
import { MessageSquare, FlaskConical, ArrowLeft, ExternalLink } from 'lucide-react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductBreadcrumb from '../../components/products/ProductBreadcrumb';
import ProductGallery from '../../components/products/ProductGallery';
import ProductTabs from '../../components/products/ProductTabs';
import ProductSpecifications from '../../components/products/ProductSpecifications';
import TechnicalInfoTable from '../../components/products/TechnicalInfoTable';
import TypicalApplicationsCarousel from '../../components/products/TypicalApplicationsCarousel';
import ProductDocuments from '../../components/products/ProductDocuments';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZG2N_PRODUCT_DETAILS, RZG2N_APPLICATIONS } from '../../data/rzg2nData';
import { navigateTo } from '../../utils/navigation';

const RZG2N_TABS = [
  { id: 'features', label: 'Features' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'interfaces', label: 'Interfaces' },
  { id: 'software-support', label: 'Software Support' },
  { id: 'documents', label: 'Documents' },
];

const G2N_FEATURES = [
  {
    text: 'Highest level of computing performance',
    subText: 'Calculation performance of about 12.3 thousand DMIPS',
  },
  {
    text: "ECC function indispensable for the system's high reliability",
    subText: 'ECC support for both L1/L2cache, DDR/IF',
  },
  { text: '384KB System RAM' },
  { text: 'Built-in high-speed interface (USB 3.0, PCIe, Gbit-Ether)' },
  { text: '4K compatible H.265 decoder, H.264 decoder/encoder installed' },
  { text: 'Equipped with 3DGfx engine Power VR ideal for embedded devices' },
  { text: 'Security function for communication, data, and program protection' },
  {
    isLink: true,
    prefix: 'Explore Renesas-validated',
    linkText: 'DRAM Compatibility List',
    linkUrl: 'https://www.renesas.com/products/rzg2n',
  },
];

/**
 * RZ/G2N SBC (Development Platform) Product Detail Page
 * Matching the exact visual design language, structure, and tabular technical layout of RZ/G2L.
 */
export default function RZG2NSBC() {
  const product = RZG2N_PRODUCT_DETAILS['sbc'];
  const [activeTab, setActiveTab] = useState('features');
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
            <pattern id="g2n-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2DD4F0" strokeOpacity="0.08" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g2n-circuit-grid)" />
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
              onClick={(e) => navigateTo('/products/rz-g2n', e)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52627C] dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors -mt-6 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to RZ/G2N Platform</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Product Hardware Image / Gallery */}
            <div className="order-1 lg:order-1 lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery
                images={product.gallery}
                productName={product.title}
                badge={product.badge || 'Production Ready'}
              />
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
              {product.heroHighlights && product.heroHighlights.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-6">
                  {product.heroHighlights.map((hl) => {
                    const Icon = hl.icon;
                    return (
                      <div
                        key={hl.label}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs min-w-0"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#14213D] dark:text-[#E2E8F0] leading-snug truncate">
                          {hl.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

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
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 hover:shadow-[#2DD4F0]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setEnquiryModal({
                      isOpen: true,
                      type: 'Request Evaluation Board',
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-[#089EC2] dark:text-[#2DD4F0] bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Request Evaluation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sticky Tab Navigation Bar */}
      <div id="product-tabs-section">
        <ProductTabs
          tabs={RZG2N_TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      {/* SECTION 3: Tab Content Panels */}
      <div
        ref={tabContentRef}
        key={activeTab}
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="scroll-mt-32 transition-opacity duration-200"
      >
        {/* TAB 0: Features (RZ/G2N SBC) */}
        {activeTab === 'features' && (
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
                description="High-performance dual Cortex-A57 compute, PowerVR 3D graphics, 4K video engine, and high-speed industrial interfaces."
              />

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
                      {G2N_FEATURES.map((item, idx) => (
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
                              <div>
                                <div>{item.text}</div>
                                {item.subText && (
                                  <div className="mt-1.5 ml-4 sm:ml-5 flex items-start gap-2 text-xs sm:text-[13px] text-[#52627C] dark:text-[#94A3B8]">
                                    <span className="w-1.5 h-1.5 rounded-full border border-[#089EC2] dark:border-[#2DD4F0] bg-transparent mt-1.5 shrink-0" />
                                    <span>{item.subText}</span>
                                  </div>
                                )}
                              </div>
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
        )}

        {/* TAB 1: Specifications */}
        {activeTab === 'specifications' && (
          <ProductSpecifications
            specifications={product.specifications}
            productName={product.title}
          />
        )}

        {/* TAB 3: Interfaces */}
        {activeTab === 'interfaces' && (
          <TechnicalInfoTable
            id="interfaces"
            subheading="CONNECTIVITY & I/O"
            heading={
              <>
                Hardware{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Interfaces
                </span>
              </>
            }
            description="Industrial bus routing, display outputs, camera ports, and expansion headers available on the board."
            columns={['Interface', 'Description']}
            rows={product.interfaces}
          />
        )}

        {/* TAB 4: Software Support */}
        {activeTab === 'software-support' && (
          <TechnicalInfoTable
            id="software-support"
            subheading="OPERATING SYSTEMS & BSP"
            heading={
              <>
                Software{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Support
                </span>
              </>
            }
            description="Production-grade Linux distributions, verified driver stacks, and long-term security maintenance."
            columns={['Software Support', 'Description']}
            rows={product.softwareSupport}
          />
        )}

        {/* TAB 5: Documents */}
        {activeTab === 'documents' && (
          <ProductDocuments
            documents={product.documents}
            onRequestDocument={(doc) =>
              setEnquiryModal({
                isOpen: true,
                type: `Request Document: ${doc.title}`,
              })
            }
          />
        )}
      </div>

      {/* SECTION 4: Bottom Engineering Enquiry CTA */}
      <ProductEnquiry
        productName="RZ/G2N SBC (Development Platform)"
        onRequestQuote={() =>
          setEnquiryModal({
            isOpen: true,
            type: 'Request Quote',
          })
        }
        onContactTeam={() =>
          setEnquiryModal({
            isOpen: true,
            type: 'Contact Engineering Team',
          })
        }
      />

      {/* Interactive Modal */}
      <ProductEnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={() => setEnquiryModal((prev) => ({ ...prev, isOpen: false }))}
        initialType={enquiryModal.type}
        productName="RZ/G2N SBC (Development Platform)"
      />
    </div>
  );
}

