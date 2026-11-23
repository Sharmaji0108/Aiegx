import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';
import ProductBreadcrumb from '../../products/ProductBreadcrumb';
import SubSolutionTabs from './SubSolutionTabs';
import SubSolutionOverview from './SubSolutionOverview';
import SubSolutionFeatures from './SubSolutionFeatures';
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

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-white leading-tight">
                {data.title}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2 py-0.5 rounded text-white font-semibold">
                      Production Architecture
                    </span>
                  </div>
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

          {/* 2. Key Features Section */}
          {data.features && data.features.length > 0 && (
            <section id="key-features" className="scroll-mt-32 sm:scroll-mt-36">
              <SubSolutionFeatures features={data.features} />
            </section>
          )}

          {/* 3. Specifications Section */}
          {data.specifications && data.specifications.length > 0 && (
            <section id="specifications" className="scroll-mt-32 sm:scroll-mt-36">
              <SubSolutionSpecs specifications={data.specifications} />
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

      {/* ── Consultation / Solution Enquiry CTA ── */}
      <section className="py-14 sm:py-20 relative bg-gradient-to-b from-[#F5F8FC] to-blue-50/50 dark:from-[#0D1733] dark:to-[#081026] text-center">
        <div className="section-container max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4 shadow-xs">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14213D] dark:text-white tracking-tight">
            Ready to Accelerate Your {data.title}?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Connect with our embedded hardware and AI engineering specialists for custom carrier board design, BSP tailoring, and volume pricing.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 cursor-pointer active:scale-95 transition-all"
            >
              Request Architecture Consultation
            </button>
            <a
              href="#contact"
              onClick={(e) => navigateTo('#contact', e)}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 cursor-pointer transition-colors"
            >
              Contact Sales Team
            </a>
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
