import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  ChevronRight,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Shield,
  Clock,
  Activity,
  Layers3,
  Sliders
} from 'lucide-react';
import ProductBreadcrumb from '../products/ProductBreadcrumb';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import KeyCapabilities from './KeyCapabilities';
import OurSolutions from './OurSolutions';
import { ProductEnquiryModal } from '../products/ProductEnquiry';
import { navigateTo } from '../../utils/navigation';

export default function SolutionCategoryTemplate({ data }) {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState('');

  if (!data) return null;

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/#integrated-solutions' },
    { label: data.title }
  ];

  const handleOpenEnquiry = (contextTitle) => {
    setEnquiryContext(contextTitle || data.title);
    setEnquiryModalOpen(true);
  };

  const scrollToSubtopics = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const el = document.getElementById('our-solutions') || document.getElementById('subtopics');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">

      {/* ── 1. Hero Section ── */}
      <section className="relative pt-[96px] pb-10 sm:pt-[108px] sm:pb-14 lg:pt-[124px] lg:pb-18 overflow-hidden border-b border-slate-200/80 dark:border-white/10 isolate">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="section-container relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-3">

            {/* Left Column: Solution Brief & CTA */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
                  {data.badge || 'AIEGX INTEGRATED SOLUTION'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-white leading-tight">
                {data.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                {data.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => handleOpenEnquiry(data.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Your Project</span>
                </button>

                <button
                  type="button"
                  onClick={scrollToSubtopics}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>Explore Subtopics</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                {(data.featureHighlights || [
                  'Renesas RZ Silicon',
                  '10+ Year Longevity',
                  'Industrial Temperature'
                ]).map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: High-Res Application Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-white/60 dark:bg-[#101936]/60 backdrop-blur-md shadow-2xl p-2.5 sm:p-3 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src={data.heroImage}
                    alt={data.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2.5 py-1 rounded text-white font-semibold">
                      Production-Proven Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Key Capabilities Section ── */}
      <KeyCapabilities capabilities={data.keyCapabilities} />

      {/* ── 3. Our Solutions Section ── */}
      <OurSolutions categoryId={data.id} data={data} />

      {/* ── 4. Contact Us / Discuss Your Project CTA ── */}
      <section className="py-14 sm:py-20 relative bg-gradient-to-b from-[#F5F8FC] to-blue-50/50 dark:from-[#0D1733] dark:to-[#081026] text-center">
        <div className="section-container max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4 shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14213D] dark:text-white tracking-tight">
            Ready to Accelerate Your {data.title}?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Connect with our embedded hardware and vision engineering specialists for custom carrier board design, camera tuning, BSP tailoring, and volume pricing.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenEnquiry(data.title)}
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 cursor-pointer active:scale-95 transition-all"
            >
              Discuss Your Project
            </button>
            <a
              href="#contact"
              onClick={(e) => navigateTo('#contact', e)}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 cursor-pointer transition-colors"
            >
              Contact Engineering Team
            </a>
          </div>
        </div>
      </section>

      {/* Product Enquiry Modal */}
      {enquiryModalOpen && (
        <ProductEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          productName={`AIEGX Solution: ${enquiryContext || data.title}`}
          type="Request Solution Architecture"
        />
      )}

    </div>
  );
}
