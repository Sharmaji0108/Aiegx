import React, { useState } from 'react';
import { MessageSquare, FlaskConical, ArrowLeft } from 'lucide-react';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import ProductBreadcrumb from '../../components/products/ProductBreadcrumb';
import ProductGallery from '../../components/products/ProductGallery';
import ProductSpecifications from '../../components/products/ProductSpecifications';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZV2L_PRODUCT_DETAILS } from '../../data/rzv2lData';
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
  { feature: 'Processor', details: 'Renesas RZ/V2L' },
  { feature: 'CPU', details: 'Up to dual-core Arm Cortex-A55 @ 1.2 GHz + Cortex-M33 @ 200 MHz' },
  { feature: 'RAM', details: 'Up to 2 GB DDR4' },
  { feature: 'eMMC', details: 'Default: 8 GB, configurable capacity' },
  { feature: 'GPU', details: 'Arm Mali-G31' },
  { feature: 'AI Accelerator', details: 'Integrated DRP-AI (0.5 TOPS)' },
  { feature: 'Video Codec', details: 'H.264 encoding and decoding, up to Full HD (1920 × 1080) @ 30 fps' },
  { feature: 'Display Interface', details: 'MIPI DSI' },
  { feature: 'Camera Interface', details: 'MIPI CSI-2' },
  { feature: 'Ethernet', details: 'Dual Gigabit Ethernet' },
  { feature: 'USB', details: 'USB 2.0' },
  { feature: 'Serial Interfaces', details: 'UART, SPI, I²C' },
  { feature: 'Form Factor', details: 'SMARC SoM' },
  { feature: 'Software Support', details: 'Renesas RZ/V Verified Linux Package' },
];

const RZV2L_CARRIER_BOARD_SPECIFICATIONS = [
  { feature: 'Supported SoM', details: 'RZ/V2L SoM' },
  { feature: 'Onboard Storage (SoM)', details: 'eMMC (on SMARC SoM)' },
  { feature: 'Ethernet', details: '2 × Gigabit Ethernet (1 Gbps, RJ45)' },
  { feature: 'USB 0', details: 'USB 2.0 Type-A' },
  { feature: 'USB 1', details: 'Micro-USB' },
  { feature: 'External Storage', details: 'SD card slot (microSD)' },
  { feature: 'Camera Interface', details: 'MIPI CSI-2 (4-lane) connector' },
  { feature: 'Display Interface', details: 'MIPI DSI (4-lane) connector' },
  { feature: 'PMOD Connectors', details: 'GPIO, I²C and SPI' },
  { feature: 'Serial Expansion', details: 'UART (via dedicated connector)' },
  { feature: 'Debug Interface', details: 'Debug UART (console)' },
  { feature: 'PWM / Backlight', details: 'PWM and Backlight GPIOs (via connector)' },
  { feature: 'Audio Interface', details: 'Speaker and Mic' },
  { feature: 'Reset', details: 'Reset button (system reset)' },
  { feature: 'Real-Time Clock (RTC)', details: 'Onboard RTC' },
];

const RZV2L_SBC_SPECIFICATIONS = RZV2L_CARRIER_BOARD_SPECIFICATIONS;

/**
 * RZ/V2L Product Detail Page
 * Supports RZ/V2L SoM, RZ/V2L SBC, and RZ/V2L Development Kit routes dynamically.
 * Matching the exact visual design language, structure, and tabular technical layout of RZ/G2L.
 */
export default function RZV2LSBC({ productSlug = 'sbc' }) {
  const rawProduct = RZV2L_PRODUCT_DETAILS[productSlug] || RZV2L_PRODUCT_DETAILS['sbc'];
  const product = productSlug === 'sbc' ? { ...rawProduct, title: 'RZ/V2L Carrier Board' } : rawProduct;
  const isDevKit = productSlug === 'dev-kit';
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    type: 'Request Quote',
    documentName: null,
  });

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
          <div className="hidden md:flex items-center justify-between gap-4 mb-4">
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
            <div className="order-1 lg:order-1 lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} badge={product.badge || 'Hardware'} productName={product.title} />
            </div>

            {/* Right Column: Product Information & CTAs */}
            <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col items-start min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] text-xs font-mono text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider mb-3.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
                <span>{product.category}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-[1.2] mb-3">
                {product.title === 'RZ/V2L SMARC SoM' ? (
                  <>
                    RZ/V2L{' '}
                    <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                      SMARC SoM
                    </span>
                  </>
                ) : (
                  product.title
                )}
              </h1>

              {product.subtitle && (
                <p className="text-sm sm:text-base font-semibold text-[#52627C] dark:text-[#AAB6D0] mb-4">
                  {product.subtitle}
                </p>
              )}

              {/* Product Short Description */}
              {product.shortDescription && (
                <p className="text-sm sm:text-base text-[#52627C] dark:text-[#AAB6D0] leading-relaxed max-w-2xl mb-5">
                  {product.shortDescription}
                </p>
              )}

              {/* Bullet Features or Paragraph Description */}
              {productSlug !== 'som' && ((product.featuresList && product.featuresList.length > 0) || productSlug === 'sbc') && (
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
              )}

              {/* Hardware Highlights Checklist */}
              {product.heroHighlights && product.heroHighlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-6">
                  {product.heroHighlights.map((hl) => {
                    const Icon = hl.icon;
                    return (
                      <div
                        key={hl.heading || hl.label}
                        className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-xs min-w-0"
                      >
                        {Icon && (
                          <div className="w-8 h-8 rounded-lg bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">
                            {hl.heading || hl.label}
                          </h4>
                          {hl.description && (
                            <p className="text-[11px] text-[#52627C] dark:text-[#AAB6D0] leading-snug mt-0.5">
                              {hl.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

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

      {/* Technical Specifications */}
      <ProductSpecifications
        specifications={
          productSlug === 'sbc' || productSlug === 'carrier-board'
            ? (product.specifications || RZV2L_CARRIER_BOARD_SPECIFICATIONS)
            : productSlug === 'som'
            ? RZV2L_SOM_SPECIFICATIONS
            : (product.specifications || [])
        }
        productName={product.title}
        featureHeader="FEATURE"
        detailsHeader="DETAILS"
        description={
          productSlug === 'som'
            ? 'Detailed hardware parameters and interface support for the RZ/V2L SMARC SoM.'
            : productSlug === 'sbc' || productSlug === 'carrier-board'
            ? 'Interfaces, connectors and expansion features for the RZ/V2L SoM.'
            : undefined
        }
      />

      {/* SECTION 4: Bottom Technical / Commercial Enquiry Strip */}
      <ProductEnquiry
        productName={product.title}
        description={
          productSlug === 'som'
            ? 'Discuss RZ/V2L SMARC SoM selection, carrier board integration and embedded Linux support with our engineering team.'
            : undefined
        }
        bottomMessage={
          productSlug === 'som'
            ? 'Contact our team for RZ/V2L SoM evaluation, custom carrier board development, BSP customization and product enquiries.'
            : undefined
        }
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
