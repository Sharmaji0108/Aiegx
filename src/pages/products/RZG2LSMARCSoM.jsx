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
import { RZG2L_PRODUCT_DETAILS, RZG2L_APPLICATIONS } from '../../data/rzg2lData';
import { navigateTo } from '../../utils/navigation';

const SOM_SUBTITLE = 'Embedded Computing Module for HMI & Control';

const SOM_SPECIFICATIONS = [
  { feature: 'Processor', details: 'Renesas RZ/G2L' },
  { feature: 'CPU', details: 'Up to dual-core Arm Cortex-A55 @ 1.2 GHz + Cortex-M33 @ 200 MHz' },
  { feature: 'RAM', details: 'Up to 2 GB DDR4' },
  { feature: 'eMMC', details: '8 GB' },
  { feature: 'GPU', details: 'Arm Mali-G31' },
  { feature: 'Video Codec', details: 'H.264 encoding and decoding, up to Full HD (1920 × 1080) @ 30 fps' },
  { feature: 'Display Interface', details: 'MIPI DSI, up to Full HD (1920 × 1080) @ 60 Hz' },
  { feature: 'Camera Interface', details: 'MIPI CSI-2, up to 5 MP @ 30 fps (RAW12)' },
  { feature: 'Ethernet', details: 'Dual Gigabit Ethernet' },
  { feature: 'USB', details: 'USB 2.0' },
  { feature: 'Serial Interfaces', details: 'UART, SPI, I²C' },
  { feature: 'Form Factor', details: 'SMARC SoM' },
  { feature: 'Software Support', details: 'Renesas RZ/G Verified Linux Package' },
];

const SOM_FEATURES = [
  'Arm Cortex-A55 and Cortex-M33 processing',
  'MIPI DSI display interface support',
  'SMARC-based modular hardware design',
  'Embedded Linux support using Renesas software packages',
];

const RZG2L_SBC_TABS = [
  { id: 'features', label: 'Features' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'interfaces', label: 'Interfaces' },
  { id: 'software-support', label: 'Software Support' },
  { id: 'applications', label: 'Applications' },
  { id: 'documents', label: 'Documents' },
];

const RZG2L_DEFAULT_TABS = [
  { id: 'specifications', label: 'Specifications' },
  { id: 'interfaces', label: 'Interfaces' },
  { id: 'software-support', label: 'Software Support' },
  { id: 'documents', label: 'Documents' },
];

const G2L_FEATURES = [
  { text: 'Cortex-A55 (dual or single)' },
  { text: 'Cortex-M33' },
  { text: '3D graphics engine (Arm Mali-G31)' },
  { text: 'Video codec (H.264)' },
  { text: 'Camera interface (MIPI-CSI or Parallel-IF)' },
  { text: 'Display interface (MIPI-DSI or Parallel-IF)' },
  { text: 'USB 2.0 interface 2ch, SD interface 2ch' },
  { text: 'CAN interface (CAN FD)' },
  { text: 'Gigabit Ethernet 2ch' },
  { text: 'Memory error detection/correction (ECC)' },
  { text: 'DDR4 or DDR3L memory interface' },
  { text: 'BGA package (15mm x 15mm, 21mm x 21mm)' },
  {
    isLink: true,
    prefix: 'Explore Renesas-validated',
    linkText: 'DRAM Compatibility List',
    linkUrl: 'https://www.renesas.com/products/rzg2l',
  },
];

const RZG2L_SBC_FEATURES = [
  'Renesas RZ/G2L MPU with 64-bit ARM®v8.2A, ARM®v8-M & 3D-Graphics Engine with Arm®Mali™ Architecture',
  '2GB DDR4 (Expandable)',
  '16GB eMMC Flash (Expandable)',
  'All Power required for the SoC generated using DA9062 PMIC',
  '1 x Gigabit Ethernet Jack',
  'MIPI CSI & MIPI DSI support',
];

const RZG2L_SBC_SPECIFICATIONS = [
  {
    feature: 'CPU',
    details: [
      '2 x Arm® Cortex-A55 @1.2GHz',
      '1 x Arm® Cortex-M33 @200MHz',
      '1 x Arm® Mali™-G31 @500MHz',
    ],
  },
  {
    feature: 'Memory & Storage',
    details: [
      'DDR4 – 2GB (Expandable)*',
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
      'Debug UART Header',
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

const formatFeatureItem = (item) => {
  if (typeof item !== 'string') return item;
  if (item.includes('RZ/V2L SOM')) {
    const parts = item.split('RZ/V2L SOM');
    return (
      <>
        {parts[0]}
        <span className="text-[#089EC2] dark:text-[#2DD4F0] font-semibold">RZ/V2L SOM</span>
        {parts[1]}
      </>
    );
  }
  if (item.includes('CIP (Civil Infrastructure Platform)')) {
    const parts = item.split('CIP (Civil Infrastructure Platform)');
    return (
      <>
        {parts[0]}
        <span className="text-[#089EC2] dark:text-[#2DD4F0] font-semibold">CIP (Civil Infrastructure Platform)</span>
        {parts[1]}
      </>
    );
  }
  return item;
};

/**
 * Page 2 — RZ/G2L SMARC SoM Product Detail Page
 * Supports SMARC SoM (primary detail view) as well as RZ/G2L Carrier Board & SBC detail routes.
 */
export default function RZG2LSMARCSoM({ productSlug = 'smarc-som' }) {
  const rawProduct = RZG2L_PRODUCT_DETAILS[productSlug] || RZG2L_PRODUCT_DETAILS['smarc-som'];
  const product = productSlug === 'carrier-board' ? { ...rawProduct, title: 'RZ/G2L Carrier Board' } : rawProduct;
  const isSbc = productSlug === 'sbc';
  const tabs = isSbc ? RZG2L_SBC_TABS : RZG2L_DEFAULT_TABS;
  const [prevSlug, setPrevSlug] = useState(productSlug);
  const [activeTab, setActiveTab] = useState(isSbc ? 'features' : 'specifications');
  const tabContentRef = useRef(null);

  if (productSlug !== prevSlug) {
    setPrevSlug(productSlug);
    setActiveTab(productSlug === 'sbc' ? 'features' : 'specifications');
  }

  const handleTabChange = (nextTab) => {
    setActiveTab(nextTab);
    if (tabContentRef.current) {
      const rect = tabContentRef.current.getBoundingClientRect();
      if (rect.top < 110) {
        tabContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    type: 'Request Quote',
    documentName: null,
  });

  const openModal = (type, documentName = null) => {
    setEnquiryModal({ isOpen: true, type, documentName });
  };

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-clip bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">
      {/* =====================================================================
          Section A & B: Breadcrumb + Two-Column Product Hero + 4 Highlights
         ===================================================================== */}
      <section className="relative pt-[92px] pb-8 sm:pt-[108px] sm:pb-10 lg:pt-[122px] lg:pb-12 overflow-hidden bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300 isolate">
        {/* Subtle circuit grid overlay matching Aiegx homepage hero */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-30 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="detail-circuit-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2DD4F0" strokeOpacity="0.08" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#detail-circuit-grid)" />
        </svg>

        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-[#3285FF]/12 via-[#2DD4F0]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="section-container relative">
          <div className="hidden md:flex flex-wrap items-center justify-between gap-2">
            <ProductBreadcrumb items={product.breadcrumb} />

            <a
              href="/products/rz-g2l"
              onClick={(e) => navigateTo('/products/rz-g2l', e)}
              className="mb-6 sm:mb-8 inline-flex items-center gap-1.5 text-xs font-semibold text-[#52627C] dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to RZ/G2L Platform</span>
            </a>
          </div>

          {/* Two-Column Hero: Left Gallery, Right Product Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Product Hardware Image / Gallery */}
            <div className="order-1 lg:order-1 lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} productName={product.title} badge={product.badge || 'SMARC 2.1'} />
            </div>

            {/* RIGHT COLUMN: Category, Title, Descriptions, Highlights & Actions */}
            <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col items-start min-w-0">
              {/* Small Category Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] text-xs font-mono font-bold text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
                <span>{product.category}</span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-[1.15] mb-2 sm:mb-2.5">
                {product.title}
              </h1>

              {/* Subtitle / Core Architecture */}
              {(product.subtitle || (productSlug === 'smarc-som' && SOM_SUBTITLE)) && (
                <p className="text-sm sm:text-base font-semibold text-[#52627C] dark:text-[#AAB6D0] mb-4">
                  {product.subtitle || SOM_SUBTITLE}
                </p>
              )}

              {/* Bullet Features or Paragraph Description */}
              {((product.featuresList && product.featuresList.length > 0) || productSlug === 'smarc-som' || productSlug === 'carrier-board' || productSlug === 'sbc') ? (
                <ul className="space-y-2.5 sm:space-y-3 mb-6 max-w-2xl">
                  {((product.featuresList && product.featuresList.length > 0)
                    ? product.featuresList
                    : (productSlug === 'smarc-som' ? SOM_FEATURES : RZG2L_SBC_FEATURES)
                  ).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-[14.5px] font-medium text-[#14213D] dark:text-[#E2E8F0] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] mt-2 shrink-0" />
                      <span>{formatFeatureItem(item)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  {product.shortDescription && (
                    <p className="text-sm sm:text-base font-semibold text-[#14213D] dark:text-[#E2E8F0] leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                  )}
                  {product.introParagraph && (
                    <p className="text-xs sm:text-sm lg:text-[15px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mb-5">
                      {product.introParagraph}
                    </p>
                  )}
                </>
              )}

              {/* Hardware Highlights Checklist */}
              {product.heroHighlights && product.heroHighlights.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-6">
                  {product.heroHighlights.map((hl) => {
                    const Icon = hl.icon;
                    return (
                      <div
                        key={hl.label}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 dark:bg-[#17264A]/80 border border-[#DCE8F5] dark:border-[#24355A] shadow-xs backdrop-blur-xs min-w-0"
                      >
                        {Icon && (
                          <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0]">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span className="text-xs font-semibold text-[#14213D] dark:text-[#F8FAFC] truncate">
                          {hl.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Action Buttons: Request Quote + Request Evaluation */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => openModal('Request Quote')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-[#0D1733] bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] hover:from-[#4be0f7] hover:to-[#4392ff] shadow-lg shadow-[#3285FF]/25 hover:shadow-[#2DD4F0]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal('Request Evaluation')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-[#089EC2] dark:text-[#2DD4F0] bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] hover:border-[#089EC2] dark:hover:border-[#2DD4F0] shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Request Evaluation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          Section C: Sticky Product Navigation Tabs
         ===================================================================== */}
      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* =====================================================================
          Exclusive Tab Panel Content (Displays only the active tab)
         ===================================================================== */}
      <div
        ref={tabContentRef}
        key={activeTab}
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="scroll-mt-32 transition-opacity duration-200"
      >
        {/* TAB 0: Features (RZ/G2L SBC) */}
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
                description="Dual Cortex-A55 compute, real-time Cortex-M33 core, Arm Mali-G31 3D graphics engine, and industrial HMI interfaces."
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
                      {G2L_FEATURES.map((item, idx) => (
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
        )}

        {/* TAB 1: Specifications */}
        {activeTab === 'specifications' && (
          <ProductSpecifications
            specifications={
              productSlug === 'smarc-som'
                ? (product.specifications || SOM_SPECIFICATIONS)
                : (product.specifications && product.specifications.length === 8 && product.specifications[0]?.feature
                    ? product.specifications
                    : RZG2L_SBC_SPECIFICATIONS)
            }
            productName={product.title}
            featureHeader={productSlug === 'smarc-som' ? 'FEATURE' : 'FEATURES'}
            detailsHeader="DETAILS"
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
            description="Comprehensive high-speed networking, industrial fieldbuses, and display pipelines routed for reliable peripheral integration."
            columns={['Interface', 'Description']}
            rows={product.interfaces.map((iface) => ({
              label: iface.name,
              description: iface.detail,
            }))}
          />
        )}

        {/* TAB 4: Software Support */}
        {activeTab === 'software-support' && (
          <TechnicalInfoTable
            id="software-support"
            subheading="SOFTWARE & BSP"
            heading={
              <>
                Software{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Support
                </span>
              </>
            }
            description="Production-ready Linux distribution tooling, kernel support, drivers, and developer resources."
            columns={['Software Support', 'Description']}
            rows={product.softwareSupport.map((item) => ({
              label: item.title,
              description: item.description,
            }))}
          />
        )}

        {/* TAB 5: Applications */}
        {activeTab === 'applications' && (
          <TypicalApplicationsCarousel
            applications={RZG2L_APPLICATIONS}
            subheading="TARGET APPLICATIONS"
            headingPrefix="Typical"
            headingHighlight="Applications"
            description="Designed for graphical HMI, industrial telemetry controllers, medical diagnostics, and connected IoT gateways."
          />
        )}

        {/* TAB 6: Documents */}
        {activeTab === 'documents' && (
          <ProductDocuments
            documents={product.documents}
            onRequestDocument={(docTitle) => openModal('Request Document', docTitle)}
          />
        )}
      </div>

      {/* =====================================================================
          Section K: Contact / Enquiry CTA
         ===================================================================== */}
      <ProductEnquiry
        productName={product.title}
        onRequestQuote={() => openModal('Request Quote')}
        onContactTeam={() => openModal('Contact Engineering Team')}
      />

      {/* Interactive Quote / Evaluation / Document Request Modal */}
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

