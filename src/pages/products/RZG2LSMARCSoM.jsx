import React, { useState, useRef } from 'react';
import { MessageSquare, FlaskConical, ArrowLeft } from 'lucide-react';
import ProductBreadcrumb from '../../components/products/ProductBreadcrumb';
import ProductGallery from '../../components/products/ProductGallery';
import ProductTabs from '../../components/products/ProductTabs';
import ProductSpecifications from '../../components/products/ProductSpecifications';
import TechnicalInfoTable from '../../components/products/TechnicalInfoTable';
import ProductApplications from '../../components/products/ProductApplications';
import ProductDocuments from '../../components/products/ProductDocuments';
import ProductEnquiry, { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { RZG2L_PRODUCT_DETAILS, RZG2L_APPLICATIONS } from '../../data/rzg2lData';
import { navigateTo } from '../../utils/navigation';

/**
 * Page 2 — RZ/G2L SMARC SoM Product Detail Page
 * Supports SMARC SoM (primary detail view) as well as RZ/G2L Carrier Board & SBC detail routes.
 */
export default function RZG2LSMARCSoM({ productSlug = 'smarc-som' }) {
  const product = RZG2L_PRODUCT_DETAILS[productSlug] || RZG2L_PRODUCT_DETAILS['smarc-som'];
  const [prevSlug, setPrevSlug] = useState(productSlug);
  const [activeTab, setActiveTab] = useState('overview');
  const tabContentRef = useRef(null);

  if (productSlug !== prevSlug) {
    setPrevSlug(productSlug);
    setActiveTab('overview');
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

          {/* Two-Column Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Product Gallery */}
            <div className="lg:col-span-6 min-w-0">
              <ProductGallery images={product.gallery} productName={product.title} />
            </div>

            {/* RIGHT COLUMN: Category, Title, Descriptions & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start min-w-0 pt-1">
              {/* Small Category Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#17264A] border border-[#C5DDF5] dark:border-[#244277] text-xs font-mono font-bold text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
                <span>{product.category}</span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#14213D] dark:text-[#F8FAFC] leading-[1.15] mb-3">
                {product.title}
              </h1>

              {/* Short Product Description */}
              <p className="text-sm sm:text-base font-semibold text-[#14213D] dark:text-[#E2E8F0] leading-relaxed mb-4">
                {product.shortDescription}
              </p>

              {/* Detailed Introductory Paragraph */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-[#52627C] dark:text-[#AAB6D0] leading-relaxed mb-6">
                {product.introParagraph}
              </p>

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
        {/* TAB 1: Unified Overview + Key Features (40:60 Two-Column Layout) */}
        {activeTab === 'overview' && (
          <section
            id="overview"
            className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300"
          >
            <div className="section-container relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* LEFT COLUMN (~40%): Overview */}
                <div className="md:col-span-5 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-[#F8FAFC] tracking-tight mb-3.5">
                    Overview
                  </h2>
                  <div className="rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] p-5 sm:p-6 shadow-xs space-y-3.5">
                    {product.overviewSummary && (
                      <p className="text-sm sm:text-[15px] font-medium text-[#14213D] dark:text-[#F8FAFC] leading-relaxed">
                        {product.overviewSummary}
                      </p>
                    )}
                    {product.overviewParagraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-xs sm:text-sm text-[#52627C] dark:text-[#CBD5E1] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN (~60%): Key Features (2-col grid on desktop, auto-scrolling carousel on mobile) */}
                <div id="key-features" className="md:col-span-7 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D] dark:text-[#F8FAFC] tracking-tight mb-3.5">
                    Key Features
                  </h2>

                  <div className="capability-carousel-viewport overflow-x-auto no-scrollbar">
                    <div className="capability-marquee-track">
                      <div className="flex lg:grid lg:grid-cols-2 gap-3 sm:gap-3.5">
                        {product.keyFeatures.map((feat) => {
                          const Icon = feat.icon;
                          return (
                            <div
                              key={feat.title}
                              className="group w-[220px] sm:w-[235px] lg:w-auto shrink-0 whitespace-normal rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 p-4 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#2DD4F0] group-hover:to-[#3285FF] group-hover:text-[#0D1733] group-hover:border-transparent transition-all duration-300">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                                  {feat.title}
                                </h3>
                                {feat.subtitle && (
                                  <p className="text-[11px] sm:text-xs text-[#52627C] dark:text-[#AAB6D0] leading-snug mt-0.5">
                                    {feat.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Cloned sequence for seamless mobile horizontal marquee loop */}
                      <div className="carousel-clone-track flex gap-3 sm:gap-3.5 ml-3 sm:ml-3.5" aria-hidden="true">
                        {product.keyFeatures.map((feat) => {
                          const Icon = feat.icon;
                          return (
                            <div
                              key={`clone-${feat.title}`}
                              className="w-[220px] sm:w-[235px] shrink-0 whitespace-normal rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] p-4 flex items-start gap-3.5 shadow-xs"
                            >
                              <div className="w-10 h-10 rounded-xl bg-[#E2EEFB] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shrink-0">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] leading-snug">
                                  {feat.title}
                                </h3>
                                {feat.subtitle && (
                                  <p className="text-[11px] sm:text-xs text-[#52627C] dark:text-[#AAB6D0] leading-snug mt-0.5">
                                    {feat.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: Specifications */}
        {activeTab === 'specifications' && (
          <ProductSpecifications
            specifications={product.specifications}
            productName={product.title}
          />
        )}

        {/* TAB 4: Interfaces */}
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

        {/* TAB 5: Software Support */}
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

        {/* TAB 6: Applications */}
        {activeTab === 'applications' && (
          <ProductApplications
            id="applications"
            applications={RZG2L_APPLICATIONS}
            subheading="TARGET APPLICATIONS"
            headingPrefix="Target"
            headingHighlight="Applications"
            description={`Real-world industrial, transportation, and embedded deployments enabled by the ${product.title}.`}
          />
        )}

        {/* TAB 7: Documents */}
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

