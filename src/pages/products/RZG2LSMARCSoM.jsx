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
import { RZG2L_PRODUCT_DETAILS, RZG2L_APPLICATIONS } from '../../data/rzg2lData';
import { navigateTo } from '../../utils/navigation';

const SOM_SUBTITLE = 'Up to 2 x Arm Cortex-A55, 1 x Cortex-M33';

const SOM_SPECIFICATIONS = [
  { feature: 'CPU', details: 'Renesas RZ/G2L 2x Arm® Cortex®-A55 @ Up to 1.2 GHz 1x Cortex®-M33' },
  { feature: 'RAM', details: 'Default: 1 GB DDR4, Up to 2 GB DDR4' },
  { feature: 'eMMC', details: 'Default: 8GB, up to 64GB' },
  { feature: 'Ethernet', details: 'Up to 2 X 10/100/1000 Mbps phy on board' },
  { feature: 'Wireless', details: '802.11 b/g/n/ac + BT 5.0' },
  { feature: 'GPU', details: 'Arm Mali-G31' },
  { feature: '3D GPU Support', details: 'OpenGL ES1.1 / 2.0 / 3.0 / 3.1 and 3.2 Supported; OpenCL 2.0 Full Profile Supported' },
  { feature: 'USB', details: '2X USB2.0' },
  { feature: 'I/O Interfaces', details: '3x UART, 3x I2C, 2x SPI, GPIO, PWM, 2x SD/MMC' },
  { feature: 'CAN', details: '2x CAN FD' },
  { feature: 'Display Interface', details: '1x MIPI DSI, RGB' },
  { feature: 'Camera Interface', details: '1x MIPI CSI-2 support 5MP, 30 fps' },
  { feature: 'B2B Connectors', details: '3x Hirose DF40 connectors' },
  { feature: 'External Storage Support', details: 'SD' },
  { feature: 'Supply Voltage', details: '5V' },
  { feature: 'I/O Voltage', details: '3.3V' },
  { feature: 'Power Consumption', details: '<5W' },
  { feature: 'Temperature', details: 'Commercial: 0°C to 70°C; Industrial: -40°C to 85°C' },
  { feature: 'Product Longevity', details: '2032' },
  { feature: 'Supported OS', details: 'Embedded Linux (Yocto/Debian Distribution)' },
  { feature: 'Form Factor', details: 'Mezzanine, size 47 x 30 mm' },
];

const SOM_FEATURES = [
  'Dual core Arm Cortex A55 up to 1.2GHz + Cortex M33',
  'MIPI-DSI interface for HMI applications',
  'Onboard Certified Dual Band WiFi 802.11 a/b/g/n/ac with Bluetooth 5.0',
  'Pin to Pin compatible with RZ/V2L SOM',
  'The CIP (Civil Infrastructure Platform) Linux ensures robust, sustainable infrastructural systems',
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
  const product = productSlug === 'carrier-board' ? { ...rawProduct, title: 'RZ/G2L SBC' } : rawProduct;
  const [prevSlug, setPrevSlug] = useState(productSlug);
  const [activeTab, setActiveTab] = useState('specifications');
  const tabContentRef = useRef(null);

  if (productSlug !== prevSlug) {
    setPrevSlug(productSlug);
    setActiveTab('specifications');
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
          <div className="flex flex-wrap items-center justify-between gap-2">
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
            <div className="lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} productName={product.title} badge={product.badge || 'SMARC 2.1'} />
            </div>

            {/* RIGHT COLUMN: Category, Title, Descriptions, Highlights & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start min-w-0">
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
      <ProductTabs activeTab={activeTab} onTabChange={handleTabChange} />

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
        {/* TAB 1: Specifications */}
        {activeTab === 'specifications' && (
          <ProductSpecifications
            specifications={
              productSlug === 'smarc-som'
                ? (product.specifications && product.specifications.length >= 20 ? product.specifications : SOM_SPECIFICATIONS)
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
            id="applications"
            applications={RZG2L_APPLICATIONS}
            subheading="TARGET APPLICATIONS"
            headingPrefix="Target"
            headingHighlight="Applications"
            description={`Real-world industrial, transportation, and embedded deployments enabled by the ${product.title}.`}
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

