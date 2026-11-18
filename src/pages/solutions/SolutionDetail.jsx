import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  Server,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import ProductBreadcrumb from '../../components/products/ProductBreadcrumb';
import SectionHeadingContainer from '../../components/common/SectionHeadingContainer';
import { ProductEnquiryModal } from '../../components/products/ProductEnquiry';
import { SOLUTIONS_MAP } from '../../data/solutionsData';
import { navigateTo } from '../../utils/navigation';

export default function SolutionDetail({ slug }) {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Fallback to first solution if slug not found
  const solution = SOLUTIONS_MAP[slug] || Object.values(SOLUTIONS_MAP)[0];

  const categoryPathMap = {
    'Vehicle & Mobility Solutions': '/solutions/driver-monitoring-system',
    'Video & Surveillance Solutions': '/solutions/nvr-systems',
    'Industrial & Machine Vision Solutions': '/solutions/industrial-railway-hmi',
    'Defence & Advanced Vision Solutions': '/solutions/seeker-systems',
    'Embedded Computing & HMI': '/solutions/industrial-railway-hmi',
    'Edge AI & Smart Vision': '/solutions/ai-video-analytics',
    'Industrial Vision & Automation': '/solutions/ai-visual-inspection',
    'Robotics & Autonomous Systems': '/solutions/vehicle-detection-camera',
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/#solutions' },
    { label: solution.category, path: categoryPathMap[solution.category] || '/#solutions' },
    { label: solution.title }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative pt-[92px] pb-10 sm:pt-[108px] sm:pb-14 lg:pt-[122px] lg:pb-18 overflow-hidden border-b border-slate-200/80 dark:border-white/10">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-2">
            
            {/* Left Column: Solution Brief & CTA */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
                  {solution.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-white leading-tight">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {solution.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setEnquiryModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Solution Architecture</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('recommended-hardware')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <Cpu className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>Explore Renesas Processors</span>
                </button>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>Renesas RZ Silicon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>10+ Year Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>Industrial Temperature</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res Application Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-white/60 dark:bg-[#101936]/60 backdrop-blur-md shadow-2xl p-2.5 sm:p-3 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src={solution.heroImage}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2 py-0.5 rounded text-white font-semibold">
                      Field-Proven Deployment
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Overview & Technical Foundation */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="SYSTEM OVERVIEW"
            heading={
              <>
                Application{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Engineering & Design
                </span>
              </>
            }
            description="Deep technical integration of Renesas processors, deterministic Linux kernels, and edge hardware modules."
          />

          <div className="max-w-4xl mx-auto space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {solution.overview.map((paragraph, pIdx) => (
              <p key={pIdx} className="bg-slate-50/70 dark:bg-[#152144]/40 p-4 sm:p-5 rounded-xl border border-slate-200/70 dark:border-white/5">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="py-12 sm:py-16 relative bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="KEY PLATFORM CAPABILITIES"
            heading={
              <>
                Key{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Features & Advantages
                </span>
              </>
            }
            description="Engineered to meet the stringent performance, latency, and environmental requirements of industrial applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8">
            {solution.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="bg-white dark:bg-[#101936] rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#17264D] border border-blue-100 dark:border-white/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Recommended Renesas Processor Platforms */}
      <section id="recommended-hardware" className="py-12 sm:py-16 relative bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="SILICON SELECTION"
            heading={
              <>
                Recommended{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Renesas Processors
                </span>
              </>
            }
            description="Purpose-selected Renesas RZ Series microprocessors certified for industrial lifecycle longevity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            {solution.recommendedProcessors.map((proc, pIdx) => (
              <div
                key={pIdx}
                className="bg-white dark:bg-[#101936] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-lg font-extrabold text-[#089EC2] dark:text-[#2DD4F0] font-mono">
                      Renesas {proc.name}
                    </span>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-blue-50 dark:bg-[#17264A] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-medium">
                      {proc.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {proc.desc}
                  </p>
                </div>

                <a
                  href={proc.href}
                  onClick={(e) => navigateTo(proc.href, e)}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#089EC2] dark:text-[#2DD4F0] bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 hover:bg-[#089EC2]/20 dark:hover:bg-[#2DD4F0]/20 transition-colors cursor-pointer group"
                >
                  <span>View {proc.name} Platform Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related AIEGX Products */}
      <section className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="EVALUATION & PRODUCTION HARDWARE"
            heading={
              <>
                Related{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  AIEGX Platforms
                </span>
              </>
            }
            description="Off-the-shelf development SBCs and production-grade SMARC System on Modules ready for deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8">
            {solution.relatedProducts.map((prod, prodIdx) => (
              <div
                key={prodIdx}
                className="bg-slate-50 dark:bg-[#152144]/60 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200"
              >
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-100/70 dark:bg-white/10 text-[#089EC2] dark:text-[#2DD4F0]">
                    {prod.type}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 mb-1.5">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                    {prod.specs}
                  </p>
                </div>

                <a
                  href={prod.href}
                  onClick={(e) => navigateTo(prod.href, e)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#089EC2] dark:text-[#2DD4F0] hover:underline cursor-pointer group"
                >
                  <span>Explore Product Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Solution Consultation / Enquiry CTA */}
      <section className="py-14 sm:py-20 relative bg-gradient-to-b from-[#F5F8FC] to-blue-50/50 dark:from-[#0D1733] dark:to-[#081026] text-center">
        <div className="section-container max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14213D] dark:text-white tracking-tight">
            Ready to Accelerate Your {solution.title}?
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
              Request Engineering Consultation
            </button>
            <a
              href="#contact"
              onClick={(e) => navigateTo('#contact', e)}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 cursor-pointer transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {enquiryModalOpen && (
        <ProductEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          productName={`AIEGX Solution: ${solution.title}`}
          type="Request Architecture Review"
        />
      )}

    </div>
  );
}
