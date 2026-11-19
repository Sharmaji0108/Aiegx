import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Building2,
  Target,
  Sparkles,
  MessageSquare,
  Clock,
  Terminal,
  CircuitBoard,
  Camera,
  BrainCircuit,
  Award,
  Globe2,
  Lock
} from 'lucide-react';
import ProductBreadcrumb from '../components/products/ProductBreadcrumb';
import SectionHeadingContainer from '../components/common/SectionHeadingContainer';
import { ProductEnquiryModal } from '../components/products/ProductEnquiry';
import { navigateTo } from '../utils/navigation';

export default function AboutUsPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us' }
  ];

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const coreMetrics = [
    { label: 'Supply Longevity', value: '10+ Years', desc: 'Guaranteed supply lifecycle with CIP Linux SLTS' },
    { label: 'Neural Inferencing', value: 'Sub-15ms', desc: 'Hardware DRP-AI neural acceleration on-device' },
    { label: 'Operating Range', value: '-40°C to +105°C', desc: 'AEC-Q100 and EN 50155 industrial silicon qualification' },
    { label: 'Architecture', value: '100% Edge', desc: 'Deterministic local execution with zero cloud dependency' }
  ];

  const whyPillars = [
    {
      icon: ShieldCheck,
      title: 'Industrial & Automotive Grade',
      desc: 'Architected for rigorous operating envelopes, thermal shock, mechanical vibration, and continuous 24/7 mission-critical uptime.'
    },
    {
      icon: Cpu,
      title: 'Renesas RZ Series Mastery',
      desc: 'Deep silicon expertise in Renesas RZ/V2H, RZ/V2L, RZ/G2L, and RZ/G2N platforms with hardware DRP-AI neural co-processors.'
    },
    {
      icon: Clock,
      title: 'Guaranteed 10+ Year Availability',
      desc: 'Protected hardware roadmaps backed by long-term silicon longevity commitments, preventing disruptive obsolescence redesigns.'
    },
    {
      icon: Lock,
      title: 'Deterministic Local Privacy',
      desc: 'All neural networks, video processing, and telemetry execute locally on-device, satisfying strict data privacy and security mandates.'
    }
  ];

  const expertiseDomains = [
    {
      icon: CircuitBoard,
      title: 'Hardware & Custom Carrier Design',
      desc: 'High-speed multi-layer PCB layout, impedance matching, power sequencing, and rugged thermal conduction solutions for custom carrier boards.'
    },
    {
      icon: Terminal,
      title: 'Linux / Yocto BSP Drivers',
      desc: 'Board Support Package tailoring, CIP Super Long Term Support (SLTS) Linux kernels, real-time PREEMPT_RT patches, and peripheral driver bring-up.'
    },
    {
      icon: Camera,
      title: 'Camera & Multimedia Integration',
      desc: 'Multi-camera MIPI CSI-2, GMSL2, and FPD-Link III deserializer integration with hardware ISP sensor tuning for low-light vision.'
    },
    {
      icon: BrainCircuit,
      title: 'Edge AI Application Development',
      desc: 'Model pruning, INT8 quantization, and hardware pipeline optimization utilizing Renesas DRP-AI Translator toolchains for real-time inference.'
    }
  ];

  const developmentSteps = [
    {
      step: '01',
      title: 'Architecture Advisory',
      desc: 'Work with our embedded architects to analyze throughput, power budgets, thermal constraints, and neural model requirements.'
    },
    {
      step: '02',
      title: 'Carrier & System Engineering',
      desc: 'Rapid prototype carrier board layout and reference design validation using production-ready AIEGX SMARC modules and SBCs.'
    },
    {
      step: '03',
      title: 'BSP & Camera Optimization',
      desc: 'Tailor custom Yocto Linux images, bring up sensor interfaces, and optimize hardware ISP pipelines for field deployment.'
    },
    {
      step: '04',
      title: 'Volume Lifecycle Production',
      desc: 'Transition to certified volume manufacturing backed by guaranteed multi-year silicon supply and enterprise engineering support.'
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">

      {/* ── 1. Hero Section ── */}
      <section className="relative pt-[96px] pb-12 sm:pt-[108px] sm:pb-16 lg:pt-[124px] lg:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-white/10 isolate">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="section-container relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-3">
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
                  PIONEERING EMBEDDED &amp; EDGE AI INNOVATION
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-white leading-tight">
                Pioneering Deterministic Edge Intelligence
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                AIEGX designs and manufactures high-reliability embedded computing platforms, production-ready System on Modules, and industrial edge AI hardware. We empower forward-thinking innovators across automotive, video surveillance, factory automation, and defense.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={handleOpenEnquiry}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Your Project</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('expertise')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 shadow-xs transition-all duration-200 cursor-pointer group"
                >
                  <Layers className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>Our Engineering Capabilities</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Quick Spec Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>10+ Year Longevity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>AEC-Q100 Silicon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>100% Deterministic Edge</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-white/60 dark:bg-[#101936]/60 backdrop-blur-md shadow-2xl p-2.5 sm:p-3 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src="/images/Automated Gear Inspection Line.png"
                    alt="AIEGX Embedded Hardware Excellence"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2.5 py-1 rounded text-white font-semibold">
                      Production Hardware Standards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Company Overview & Metrics ── */}
      <section id="engineering-capabilities" className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div id="company-overview" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="COMPANY OVERVIEW"
            heading={
              <>
                Engineering{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Excellence in Silicon &amp; Systems
                </span>
              </>
            }
            description="From specialized Renesas RZ Series microprocessors to custom carrier board integration, AIEGX turns cutting-edge silicon into deployment-ready embedded systems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            {coreMetrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="bg-slate-50 dark:bg-[#152144]/60 rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0] block mb-2">
                    {metric.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14213D] dark:text-white tracking-tight mb-2">
                    {metric.value}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why AIEGX ── */}
      <section id="why-aiegx" className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="WHY AIEGX"
            heading={
              <>
                Architected for{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Extreme Reliability &amp; Control
                </span>
              </>
            }
            description="Our hardware engineering foundation is built around deterministic edge compute, long-term supply stability, and real-time vision pipelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-10">
            {whyPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="bg-white dark:bg-[#101936] rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F4FD] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#C5DDF5] dark:border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#14213D] dark:text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Our Expertise ── */}
      <section id="expertise" className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="OUR EXPERTISE"
            heading={
              <>
                Full-Stack{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Embedded Vision Capabilities
                </span>
              </>
            }
            description="From initial high-speed schematic design through Yocto BSP customization, ISP tuning, and neural network quantization."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 items-stretch">
            {expertiseDomains.map((exp, eIdx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={eIdx}
                  className="bg-slate-50 dark:bg-[#152144]/60 rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#14213D] dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Our Approach ── */}
      <section id="our-approach" className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="OUR APPROACH"
            heading={
              <>
                From Concept to{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Certified Production
                </span>
              </>
            }
            description="A structured, agile hardware development model ensuring faster time-to-market and minimized risk for complex edge AI devices."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            {developmentSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-white dark:bg-[#101936] rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-lg bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center text-xs font-mono font-bold mb-3.5">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-[#14213D] dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Bottom Contact CTA ── */}
      <section className="py-14 sm:py-20 relative bg-gradient-to-b from-[#F5F8FC] to-blue-50/50 dark:from-[#0D1733] dark:to-[#081026] text-center">
        <div className="section-container max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4 shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14213D] dark:text-white tracking-tight">
            Ready to Build Your Embedded Edge Solution?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Collaborate with our senior embedded hardware and software engineering teams for custom carrier design, camera tuning, and production volume pricing.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleOpenEnquiry}
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
          productName="AIEGX Engineering Partnership & Custom Design"
          type="Request Embedded Architecture Consultation"
        />
      )}

    </div>
  );
}
