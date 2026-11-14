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
 * RZ/V2H Product Detail Page (dynamic for SBC, SoM, Development Kit)
 * Matches the visual design of RZ/G2L product pages.
 */
export default function RZV2HProduct({ productSlug = 'sbc' }) {
  const product = RZV2H_PRODUCT_DETAILS[productSlug] || RZV2H_PRODUCT_DETAILS['sbc'];
  const [activeTab, setActiveTab] = useState('specifications');
  const tabContentRef = useRef(null);
  const [enquiryModal, setEnquiryModal] = useState({ isOpen: false, type: 'Request Quote', documentName: null });

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
        {/* Breadcrumb */}
        <div className="section-container relative">
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
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-5 flex flex-col justify-center min-w-0 w-full">
              <ProductGallery images={product.gallery} badge={product.badge || 'Hardware'} productName={product.title} />
            </div>
            {/* Right Column: Info */}
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
              {/* Highlights */}
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
                      <span className="text-xs font-semibold text-[#14213D] dark:text-[#F8FAFC] truncate">{hl.label}</span>
                    </div>
                  );
                })}
              </div>
              {/* CTA Buttons */}
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
              {/* Specs Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 mt-6 border-t border-[#DCE8F5] dark:border-[#24355A] w-full max-w-2xl">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">Processor</div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">Renesas RZ/V2H</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">AI Performance</div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">10 TOPS DRP-AI</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">Multi-Camera</div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">Up to 8 Streams</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#52627C] dark:text-[#AAB6D0]">Longevity</div>
                  <div className="text-xs sm:text-sm font-bold text-[#14213D] dark:text-[#F8FAFC] mt-0.5 truncate">10+ Year SLTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Tabs */}
      <ProductTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* SECTION 3: Tab Content */}
      <div id="product-tabs-section" ref={tabContentRef} className="scroll-mt-24">
        {activeTab === 'specifications' && (
          <section className="py-8 sm:py-12 bg-[#F5F8FC] dark:bg-[#0D1733] transition-colors duration-300">
            <div className="section-container">
              <TechnicalInfoTable data={product.technicalInfo} />
            </div>
          </section>
        )}
        {activeTab === 'applications' && (
          <TypicalApplicationsCarousel applications={RZV2H_APPLICATIONS} description={product.applicationsDescription} />
        )}
        {activeTab === 'documents' && (
          <ProductDocuments documents={product.documents} openModal={openModal} />
        )}
      </div>

      {/* Enquiry Modal */}
      <ProductEnquiryModal isOpen={enquiryModal.isOpen} onClose={() => setEnquiryModal({ isOpen: false, type: 'Request Quote' })} type={enquiryModal.type} productName={product.title} documentName={enquiryModal.documentName} />
      <ProductEnquiry productName={product.title} onRequestQuote={() => setEnquiryModal({ isOpen: true, type: 'Request Quote' })} onRequestDatasheet={() => setEnquiryModal({ isOpen: true, type: 'Download Datasheet' })} />
    </div>
  );
}

