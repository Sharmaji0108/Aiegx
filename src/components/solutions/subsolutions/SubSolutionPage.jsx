import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Rocket,
  ArrowRight
} from 'lucide-react';
import ProductBreadcrumb from '../../products/ProductBreadcrumb';
import SubSolutionTabs from './SubSolutionTabs';
import SubSolutionOverview from './SubSolutionOverview';
import SubSolutionFeatures, { getFeatureIcon } from './SubSolutionFeatures';
import SubSolutionArchitecture from './SubSolutionArchitecture';
import SubSolutionSpecs from './SubSolutionSpecs';
import { ProductEnquiryModal } from '../../products/ProductEnquiry';
import { SUBSOLUTIONS_DATA } from '../../../data/subSolutionsData';
import { navigateTo } from '../../../utils/navigation';

export default function SubSolutionPage({ slug, data: propData }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Resolve sub-solution data from props or centralized configuration
  const data = propData || SUBSOLUTIONS_DATA[slug] || SUBSOLUTIONS_DATA['driver-monitoring-system'];

  const categoryPathMap = {
    'Vehicle & Mobility Solutions': '/vehicle-mobility',
    'Video & Surveillance Solutions': '/solutions/video-surveillance',
    'Industrial & Machine Vision Solutions': '/solutions/industrial-machine-vision',
    'Defence & Advanced Vision Solutions': '/solutions/defence-advanced-vision',
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/#integrated-solutions' },
    { label: data.category, path: categoryPathMap[data.category] || '/#integrated-solutions' },
    { label: data.title }
  ];

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll-based active tab detection using Intersection Observer
  useEffect(() => {
    const tabsList = data.tabs || [
      { id: 'overview' },
      { id: 'key-features' },
      { id: 'specifications' },
    ];
    const sectionIds = tabsList.map((t) => t.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveTab(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-135px 0px -55% 0px',
        threshold: [0, 0.25],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollTop = () => {
      if (window.scrollY < 200 && sectionIds.length > 0) {
        setActiveTab(sectionIds[0]);
      }
    };
    window.addEventListener('scroll', handleScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, [data.tabs]);

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">

      {/* ── Hero Section ── */}
      <section className="relative pt-[92px] pb-10 sm:pt-[108px] sm:pb-14 lg:pt-[122px] lg:pb-18 overflow-hidden border-b border-slate-200/80 dark:border-white/10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-2">

            {/* Left Column: Brief & Primary CTA */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
                  {data.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-white leading-tight flex flex-wrap items-center gap-3">
                <span>{data.title}</span>
                {data.status && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 tracking-normal shadow-2xs">
                    {data.status}
                  </span>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setEnquiryModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{data.primaryButtonText || 'Contact Our Team'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection(data.secondaryTab || 'key-features')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>{data.secondaryButtonText || 'Explore Features'}</span>
                </button>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                {(data.highlights || [
                  'Renesas RZ Silicon',
                  '10+ Year Longevity',
                  'Deterministic Edge AI'
                ]).map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-white/60 dark:bg-[#101936]/60 backdrop-blur-md shadow-2xl p-2.5 sm:p-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src={data.heroImage || '/images/integrated-solution-hd.jpg'}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {data.imageConceptLabel && (
                    <div className="absolute bottom-3.5 right-3.5 z-10 pointer-events-none">
                      <span
                        className="image-concept-pill inline-flex items-center text-xs sm:text-[13px] font-medium tracking-normal px-4 py-1.5 rounded-full border border-white/25 shadow-md bg-black/85 backdrop-blur-xs"
                        style={{ color: '#FFFFFF' }}
                      >
                        {data.imageConceptLabel}
                      </span>
                    </div>
                  )}
                  {data.imageOverlayLabel && (
                    <div className="absolute bottom-3 left-3 flex items-center text-white pointer-events-none">
                      <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2 py-0.5 rounded text-white font-semibold">
                        {data.imageOverlayLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Top Navigation Tabs (Dynamic Section Shortcuts) ── */}
      <SubSolutionTabs tabs={data.tabs} activeTab={activeTab} onSelectTab={scrollToSection} />

      {/* ── Continuous Content Sections (Overview, Key Features, Specifications) ── */}
      <div className="relative py-10 sm:py-16 bg-gradient-to-b from-[#F5F8FC] via-white to-[#F5F8FC] dark:from-[#0D1733] dark:via-[#0F1C3F] dark:to-[#0D1733] border-b border-[#DCE8F5] dark:border-white/10 transition-colors duration-300 overflow-hidden">
        {/* Subtle ambient lighting glows */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#089EC2]/5 dark:bg-[#2DD4F0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10 space-y-10 sm:space-y-12">
          {/* 1. Overview Section */}
          <section id="overview" className="scroll-mt-32 sm:scroll-mt-36">
            <SubSolutionOverview overview={data.overview} title={data.title} />
          </section>

          {/* 2. Key Features & Analytics/Highlights */}
          {(data.analytics || data.highlightsList) ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Key Features */}
              <section id="key-features" className="lg:col-span-7 xl:col-span-7 scroll-mt-32 sm:scroll-mt-36 bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-7 transition-colors duration-300">
                <div className="mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
                    Key Features
                  </h2>
                  <div className="w-8 h-1 bg-[#089EC2] dark:bg-[#2DD4F0] rounded-full mt-2" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {data.features.map((feat, idx) => {
                    const IconComponent = feat.icon || getFeatureIcon(feat.title);
                    return (
                      <div
                        key={idx}
                        className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#F8FAFD] to-[#F1F6FC] dark:from-[#132247]/70 dark:to-[#0f1a38]/80 border border-[#DCE8F5] dark:border-white/10 shadow-2xs hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#17264D] border border-[#CDE1F5] dark:border-[#244277] flex items-center justify-center shrink-0 text-[#089EC2] dark:text-[#2DD4F0] shadow-2xs mb-3">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-[#14213D] dark:text-white leading-snug mb-1.5">
                          {feat.title}
                        </h3>
                        {feat.desc && (
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                            {feat.desc}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Right Column: AI Video Analytics & Highlights */}
              <div className="lg:col-span-5 xl:col-span-5 space-y-6">
                {/* AI Video Analytics Card */}
                {data.analytics && (
                  <section id="ai-analytics" className="bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-7 transition-colors duration-300">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
                      {data.analytics.title || 'AI Video Analytics'}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
                      {data.analytics.desc}
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                      {data.analytics.items.map((item, aIdx) => {
                        const ItemIcon = item.icon || Cpu;
                        return (
                          <div key={aIdx} className="flex flex-col items-center text-center group">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#17264D] border border-[#CDE1F5] dark:border-[#244277] flex items-center justify-center text-[#089EC2] dark:text-[#2DD4F0] shadow-2xs mb-2 group-hover:border-[#089EC2] transition-colors">
                              <ItemIcon className="w-5 h-5" />
                            </div>
                            <span className="text-[11px] font-semibold text-[#14213D] dark:text-slate-200 leading-tight">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Highlights Card */}
                {data.highlightsList && (
                  <section id="highlights" className="bg-white/90 dark:bg-[#101936]/90 backdrop-blur-xs rounded-2xl border border-[#DCE8F5] dark:border-white/10 shadow-xs p-6 sm:p-7 transition-colors duration-300">
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight">
                        Highlights
                      </h2>
                      <div className="w-8 h-1 bg-[#089EC2] dark:bg-[#2DD4F0] rounded-full mt-2" />
                    </div>
                    <ul className="space-y-3">
                      {data.highlightsList.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0066FF] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Default Key Features Section */}
              {data.features && data.features.length > 0 && (
                <section id="key-features" className="scroll-mt-32 sm:scroll-mt-36">
                  <SubSolutionFeatures features={data.features} />
                </section>
              )}
            </>
          )}

          {/* 3. Specifications / Technology Overview Section */}
          {((data.specifications && data.specifications.length > 0) || (data.technologyOverview && data.technologyOverview.length > 0)) && (
            <section id="specifications" className="scroll-mt-32 sm:scroll-mt-36">
              <SubSolutionSpecs
                specifications={data.specifications}
                technologyOverview={data.technologyOverview}
              />
            </section>
          )}

          {/* 4. System Architecture Section (if present for other solutions) */}
          {data.architecture && data.architecture.length > 0 && (
            <section id="system-architecture" className="scroll-mt-32 sm:scroll-mt-36">
              <SubSolutionArchitecture architecture={data.architecture} />
            </section>
          )}
        </div>
      </div>

      {/* ── Consultation / Solution Enquiry CTA Banner ── */}
      <section className="relative py-7 sm:py-9 bg-gradient-to-r from-[#F0F7FF] via-[#E8F3FE] to-[#F1F7FF] dark:from-[#0B142D] dark:via-[#0F1C3F] dark:to-[#0B142D] border-t border-[#DCE8F5] dark:border-white/10 overflow-hidden transition-colors duration-300">
        {/* Subtle curved / diagonal decorative background elements */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-blue-200/30 to-transparent dark:from-blue-600/10 pointer-events-none rounded-l-full blur-2xl" />
        <div className="absolute right-1/4 -top-24 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="section-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Left: Rocket Icon, Divider & Text */}
          <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#15234A] border border-blue-100/90 dark:border-white/10 shadow-xs flex items-center justify-center shrink-0">
              <Rocket className="w-6 h-6 text-[#0066FF] dark:text-[#38BDF8]" />
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-300/70 dark:bg-white/15" />

            <div className="flex flex-col">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#14213D] dark:text-white tracking-tight">
                {data.ctaHeading || `Interested in our ${data.title}?`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal mt-0.5">
                {data.ctaDescription || 'Get in touch with our team to discuss your requirements.'}
              </p>
            </div>
          </div>

          {/* Right: Single Blue CTA Button */}
          <div className="w-full md:w-auto flex justify-start md:justify-end shrink-0">
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#0066FF] hover:bg-[#0052cc] shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
            >
              <span>{data.ctaButtonText || 'Contact Our Team'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {enquiryModalOpen && (
        <ProductEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          productName={`AIEGX Solution: ${data.title}`}
          type="Request Architecture Review"
        />
      )}

    </div>
  );
}
