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
import { RZV2L_PRODUCT_DETAILS, RZV2L_APPLICATIONS } from '../../data/rzv2lData';
import { navigateTo } from '../../utils/navigation';

const RZV2L_SBC_FEATURES = [
  'Renesas RZ/V2L MPU with 64-bit ARM®v8.2A, ARM®v8-M & 3D-Graphics Engine with Arm®Mali™ Architecture',
  'Supports dual Cortex-A55 & Single Cortex-M33',
  'Supports original DRP-AI for accelerating AI processing',
  'Up to 2GB DDR4 Memory',
  'Supports 1 × 1Gb Ethernet',
  '16GB eMMC Flash (Expandable)',
];

const RZV2L_SOM_SPECIFICATIONS = [
  {
    feature: 'CPU',
    details: 'RZ/V2L: 2 x Cortex-A55 @1.2GHz, 1 x M33 core @200MHz, DRP-AI Accelerator',
  },
  {
    feature: 'Memory & Storage',
    details: [
      'DDR4 – 2GB (Expandable)',
      '16GB eMMC (Expandable)',
      'QSPI Flash -16Mb',
      'EEPROM -32K bit',
      'Octa SPI*',
      'Micro SD Slot*',
    ],
  },
  {
    feature: 'Network & Communication',
    details: [
      'Gigabit Ethernet PHY Transceiver x 2',
      'USB 2.0 High-Speed 4-Port Hub',
    ],
  },
  {
    feature: 'Other',
    details: [
      'RGB Connector (24 Bit RGB)*',
      'MIPI DSI to LVDS/HDMI Bridge*',
      'TPM 2.0*',
      'JTAG Header*',
      'Debug UART Header*',
      'Expansion Connector*',
    ],
  },
  {
    feature: 'Edge Connector Features',
    details: [
      'Gigabit Ethernet x 2 Port (through ON-SOM Gigabit Ethernet PHY Transceiver)',
      'USB2.0 Host x 4 Ports (through On-SOM USB Hub)',
      'USB2.0 OTG x 1 Port',
      'SD (4 bit) x 1 Port',
      'HDMI TX x 1*',
      '4 Lane LVDS x 1*',
      '4 lane MIPI CSI x 1',
      'CAN x 2',
      'SPI x 2',
      'I2C x 4 (Power Management I2C is optional)',
      'I2S x 2',
      'PWM x 2',
      'UART x 4',
      'SMARC GPIOs',
      '4 lane MIPI DSI x1',
    ],
  },
  {
    feature: 'OS Support',
    details: 'Linux 5.10.175',
  },
  {
    feature: 'General Features',
    details: [
      'Power Input: 5V, 2.5A through SMARC EDGE Connector',
      'Form Factor: 82mm x 50mm',
      'Operating Temperature: -40°C to +85°C (Industrial)',
      'Environment Specification: RoHS3 & REACH Compliant',
    ],
  },
];

const RZV2L_SBC_SPECIFICATIONS = [
  {
    feature: 'CPU',
    details: [
      '**RZ/V2L:**',
      '- 2 x Arm® Cortex-A55 @1.2GHz',
      '- 1 x Arm® Cortex-M33 @200MHz',
      '- 1 x Arm® Mali™-G31 @500MHz',
      '- DRP-AI Accelerator',
    ],
  },
  {
    feature: 'Memory & Storage',
    details: [
      'DDR4 – 2GB (Expandable)',
      'eMMC NAND Flash – 16GB (Expandable)',
      'QSPI Flash – 256Mb / Octa-SPI Flash – 512Mb (Optional)',
      'Micro SD slot',
      'EEPROM – 32Kb',
    ],
  },
  {
    feature: 'Network & Communication',
    details: [
      'Gigabit Ethernet x 1 (Single RJ45 Mag-jack Connector)',
      'USB 2.0 OTG (micro-AB Receptacle Connector)',
      'USB 2.0 Header x 1',
    ],
  },
  {
    feature: 'Video Features',
    details: [
      'MIPI CSI Interface (4 Lane) x 1',
      'RGB Display Interface (18-bit) x 1',
    ],
  },
  {
    feature: 'Miscellaneous Interfaces',
    details: [
      'Debug UART Connector',
      'RTC Connector',
    ],
  },
  {
    feature: 'Expansion Connector Features',
    details: [
      'RGMII x 1',
      'UART x 2 (without flow control)',
      'UART x 2 (with flow control)',
      'CAN x 2',
      'SPI x 2',
      'I2C x 1',
      'PWM x 1',
      'ADC x 2',
      'JTAG x 1',
      'MIPI DSI (4-lane) x 1',
      'GPIOs',
    ],
  },
  {
    feature: 'OS Support',
    details: 'Linux 5.10.201 (or higher)',
  },
  {
    feature: 'General Features',
    details: [
      'Power Input: 12V',
      'Form Factor: 85mm x 56mm',
      'Operating Temperature: -40°C to +85°C (Industrial)',
      'Environment Specification: RoHS3 & REACH Compliant',
    ],
  },
];

/**
 * RZ/V2L Product Detail Page
 * Supports RZ/V2L SoM, RZ/V2L SBC, and RZ/V2L Development Kit routes dynamically.
 * Matching the exact visual design language, structure, and tabular technical layout of RZ/G2L.
 */
export default function RZV2LSBC({ productSlug = 'sbc' }) {
  const product = RZV2L_PRODUCT_DETAILS[productSlug] || RZV2L_PRODUCT_DETAILS['sbc'];
  const [prevSlug, setPrevSlug] = useState(productSlug);
  const [activeTab, setActiveTab] = useState('specifications');
  const tabContentRef = useRef(null);
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    type: 'Request Quote',
    documentName: null,
  });

  if (productSlug !== prevSlug) {
    setPrevSlug(productSlug);
    setActiveTab('specifications');
  }

  const handleTabChange = (nextTab) => {
    setActiveTab(nextTab);
    setTimeout(() => {
      const tabTarget = document.getElementById('product-tabs-section');
      if (tabTarget) {
        tabTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const openModal = (type, documentName = null) => {
    setEnquiryModal({ isOpen: true, type, documentName });
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
            <pattern id="v2l-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2DD4F0" strokeOpacity="0.08" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#v2l-circuit-grid)" />
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
              onClick={(e) => navigateTo('/products/rzv2l', e)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52627C] dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors -mt-6 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to RZ/V2L Platform</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Product Hardware Image / Gallery */}
            <div className="lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} badge={product.badge || 'Hardware'} productName={product.title} />
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

              {product.subtitle && (
                <p className="text-sm sm:text-base font-semibold text-[#52627C] dark:text-[#AAB6D0] mb-4">
                  {product.subtitle}
                </p>
              )}

              {/* Bullet Features or Paragraph Description */}
              {((product.featuresList && product.featuresList.length > 0) || productSlug === 'sbc') ? (
                <ul className="space-y-2.5 sm:space-y-3 mb-6 max-w-2xl">
                  {((product.featuresList && product.featuresList.length > 0)
                    ? product.featuresList
                    : (productSlug === 'sbc' ? RZV2L_SBC_FEATURES : [])
                  ).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-[14.5px] font-medium text-[#14213D] dark:text-[#E2E8F0] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl mb-5">
                  {product.shortDescription}
                </p>
              )}

              {/* Hardware Highlights Checklist */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-6">
                {(product.heroHighlights || []).map((hl) => {
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
                  onClick={() => openModal('Request Quote')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#089EC2] to-[#3285FF] hover:from-[#078BAA] hover:to-[#256FE0] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Commercial Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal('Evaluation Kit')}
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
                    Renesas RZ/V2L
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                    AI Acceleration
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">
                    DRP-AI (0.5 TOPS/W)
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">
                    Power Profile
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">
                    Sub-4W Fanless
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
      <div
        key={activeTab}
        id="product-tabs-section"
        ref={tabContentRef}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="scroll-mt-32 transition-opacity duration-200"
      >
        {/* Tab 1: Specifications */}
        {activeTab === 'specifications' && (
          <ProductSpecifications
            specifications={
              productSlug === 'sbc'
                ? (product.specifications && product.specifications.length === 8 ? product.specifications : RZV2L_SBC_SPECIFICATIONS)
                : productSlug === 'som'
                ? (product.specifications && product.specifications.length === 7 ? product.specifications : RZV2L_SOM_SPECIFICATIONS)
                : (product.specifications || [])
            }
            productName={product.title}
            featureHeader="FEATURES"
            detailsHeader="DETAILS"
          />
        )}

        {/* Tab 3: Interfaces */}
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
            description="Comprehensive high-speed networking, camera, display outputs, and industrial fieldbus interfaces."
            columns={['Interface', 'Description']}
            rows={
              (product.interfaces &&
                product.interfaces.map((iface) => ({
                  label: iface.label || iface.name,
                  description: iface.description || iface.detail,
                }))) ||
              []
            }
          />
        )}

        {/* Tab 4: Software Support */}
        {activeTab === 'software-support' && (
          <TechnicalInfoTable
            id="software-support"
            subheading="BOARD SUPPORT PACKAGE & OS"
            heading={
              <>
                Software{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Support
                </span>
              </>
            }
            description="Production-grade Linux distribution tooling, DRP-AI Translator compiler, and industrial software stack."
            columns={['Software Support', 'Description']}
            rows={
              (product.softwareSupport &&
                product.softwareSupport.map((item) => ({
                  label: item.label || item.title,
                  description: item.description,
                }))) ||
              []
            }
          />
        )}

        {/* Tab 5: Applications */}
        {activeTab === 'applications' && (
          <TypicalApplicationsCarousel
            id="applications"
            applications={RZV2L_APPLICATIONS}
            subheading="TARGET APPLICATIONS"
            headingPrefix="Target"
            headingHighlight="Applications"
            description={`Real-world vision AI, smart camera, and automated optical inspection deployments enabled by the ${product.title}.`}
          />
        )}

        {/* Tab 6: Documents */}
        {activeTab === 'documents' && (
          <ProductDocuments
            documents={product.documents || []}
            onRequestDocument={(docTitle) => openModal('Request Document', docTitle)}
          />
        )}
      </div>

      {/* SECTION 4: Bottom Technical / Commercial Enquiry Strip */}
      <ProductEnquiry
        productName={product.title}
        onRequestQuote={() => openModal('Request Quote')}
        onContactTeam={() => openModal('Contact Engineering Team')}
      />

      {/* Modal for Enquiry / Quote */}
      <ProductEnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={() => setEnquiryModal((prev) => ({ ...prev, isOpen: false }))}
        initialType={enquiryModal.type}
        productName={product.title}
        documentName={enquiryModal.documentName}
      />
    </div>
  );
}
