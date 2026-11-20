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
  Server,
  BrainCircuit,
  Award,
  Search,
  PenTool,
  Code2,
  Check,
  ChevronRight,
  Sliders
} from 'lucide-react';
import ProductBreadcrumb from '../components/products/ProductBreadcrumb';
import SectionHeadingContainer from '../components/common/SectionHeadingContainer';
import { ProductEnquiryModal } from '../components/products/ProductEnquiry';
import { navigateTo } from '../utils/navigation';

export default function AboutUsPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState('');

  // Handle direct hash scroll on initial mount and when hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    // Delay slightly to ensure complete DOM rendering
    const timer = setTimeout(scrollToHash, 120);

    window.addEventListener('hashchange', scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us' }
  ];

  const handleOpenEnquiry = (contextTitle) => {
    setEnquiryContext(contextTitle || 'AIEGX Embedded Computing Solutions');
    setEnquiryModalOpen(true);
  };

  const scrollToSection = (id, e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.history.pushState({}, '', `/about-us#${id}`);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. Why AIEGX Data (6 key strengths)
  const whyChoosePoints = [
    {
      title: 'Reliable Embedded Platforms',
      desc: 'Architected for rigorous operating envelopes, wide thermal ranges (-40°C to +85°C/+105°C), high vibration, and continuous 24/7 industrial uptime.',
      icon: ShieldCheck,
    },
    {
      title: 'Production-Ready Hardware',
      desc: 'Fully verified reference carrier designs and off-the-shelf single board computers that shorten engineering validation and accelerate time-to-market.',
      icon: CheckCircle2,
    },
    {
      title: 'Engineering Expertise',
      desc: 'Direct collaboration with embedded hardware designers, Linux kernel maintainers, and camera sensor tuning engineers from concept to volume production.',
      icon: Award,
    },
    {
      title: 'Long-Term Product Support',
      desc: 'Guaranteed 10+ year availability roadmaps backed by long-term silicon commitments, protecting your hardware investments against premature obsolescence.',
      icon: Clock,
    },
    {
      title: 'Scalable Computing Solutions',
      desc: 'Modular pin-compatible System on Modules and flexible hardware configurations enable seamless performance upgrades as compute requirements grow.',
      icon: Zap,
    },
    {
      title: 'Industrial-Grade Performance',
      desc: 'Deterministic local compute, low-latency vision inference, and hardware-accelerated ISP pipelines with zero dependency on external cloud networks.',
      icon: Cpu,
    },
  ];

  // 2. Our Expertise Data (6 technical capabilities)
  const expertiseItems = [
    {
      title: 'Embedded Hardware Design',
      desc: 'High-speed multi-layer PCB layout, controlled impedance routing, power sequencing, rugged thermal dissipation, and industrial EMC/EMI compliance.',
      icon: CircuitBoard,
    },
    {
      title: 'System on Modules (SoM)',
      desc: 'Compact, high-density computing modules adhering to industry-standard SMARC and proprietary form factors with 10+ year guaranteed supply lifecycles.',
      icon: Cpu,
    },
    {
      title: 'Single Board Computers (SBC)',
      desc: 'Production-ready, turn-key single-board computers featuring rich peripheral I/O, display interfaces, dual Gigabit Ethernet, and camera inputs.',
      icon: Server,
    },
    {
      title: 'Embedded Linux & BSP Development',
      desc: 'Custom Yocto Project recipes, CIP Super Long Term Support (SLTS) kernels, real-time PREEMPT_RT patches, peripheral drivers, and camera ISP tuning.',
      icon: Terminal,
    },
    {
      title: 'Hardware and Software Integration',
      desc: 'Seamless co-design uniting carrier boards, sensor interfaces (MIPI CSI-2, GMSL2), hardware ISP pipelines, and industrial communication protocols.',
      icon: Layers,
    },
    {
      title: 'Edge AI Implementation',
      desc: 'Hardware-accelerated neural inferencing platforms with dedicated neural co-processors (DRP-AI) for real-time on-device computer vision.',
      icon: BrainCircuit,
    },
  ];

  // 3. Our Approach Data (5 development stages)
  const approachStages = [
    {
      step: '01',
      title: 'Understand Requirements',
      desc: 'Deep-dive architectural consultation analyzing compute throughput, neural network models, thermal envelopes, I/O interfaces, and longevity goals.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Engineering & Design',
      desc: 'Schematic capture, high-speed multi-layer PCB layout, thermal simulation modeling, power sequencing, and preliminary BSP planning.',
      icon: PenTool,
    },
    {
      step: '03',
      title: 'Development & Integration',
      desc: 'Rapid prototyping, carrier board bring-up, custom Yocto Linux image tailoring, camera ISP sensor tuning, and neural network compilation.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Testing & Validation',
      desc: 'Signal integrity verification, thermal shock chamber stress testing, industrial EMI/EMC pre-compliance, and 24/7 continuous operational benchmarking.',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Deployment & Support',
      desc: 'Seamless transition to certified volume manufacturing, hardware revision control, CIP Linux security updates, and dedicated engineering support.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">

      {/* ──────────────────────────────────────────────────────────
          Hero Section
      ────────────────────────────────────────────────────────── */}
      <section className="relative pt-[96px] pb-12 sm:pt-[108px] sm:pb-16 lg:pt-[124px] lg:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-white/10 isolate">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="section-container relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-3">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
                  ABOUT AIEGX
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14213D] dark:text-white leading-tight">
                Engineering the Future of{' '}
                <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                  Embedded &amp; Edge AI
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                AIEGX is a specialized technology company pioneering high-reliability embedded computing platforms, System on Modules (SoM), industrial single-board computers, and production-grade edge AI solutions. We empower global innovators to deploy deterministic intelligence across mission-critical systems.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={(e) => scrollToSection('our-expertise', e)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenEnquiry('Hero Consultation')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 shadow-xs transition-all duration-200 cursor-pointer group"
                >
                  <MessageSquare className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>Contact Our Team</span>
                </button>
              </div>

              {/* Feature Highlights Row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>10+ Year Longevity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>Production-Ready Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                  <span>Industrial-Grade Silicon</span>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-white/60 dark:bg-[#101936]/60 backdrop-blur-md shadow-2xl p-2.5 sm:p-3 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src="/images/aiegx-hardware-som-hd.jpg"
                    alt="AIEGX Embedded Computing Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2.5 py-1 rounded text-white font-semibold">
                      Embedded Hardware Platform
                    </span>
                    <span className="text-[11px] font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded">
                      Production Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          Section 1: Company Overview
      ────────────────────────────────────────────────────────── */}
      <section
        id="company-overview"
        className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-300"
      >
        <div id="who-we-are" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="ABOUT AIEGX"
            heading="Company Overview"
            description="Specialized engineering in embedded computing platforms, System on Modules, and deterministic Edge AI."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-10">
            {/* Left: Company Description */}
            <div className="lg:col-span-7 flex flex-col space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong className="text-[#14213D] dark:text-white font-semibold">AIEGX</strong> is an advanced embedded technology company dedicated to engineering high-performance embedded computing hardware, System on Modules (SoM), and industrial Edge AI solutions. We bridge the critical gap between complex semiconductor architectures and deployment-ready industrial systems.
              </p>
              <p>
                Our core engineering focus spans modular System on Modules, turn-key Single Board Computers (SBC), ruggedized industrial computing platforms, and hardware-accelerated Edge AI inferencing. By uniting high-speed carrier design with hardened Linux board support packages (BSP), AIEGX empowers technology innovators across industrial automation, intelligent mobility, smart surveillance, and defense.
              </p>

              {/* Key Focus Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#152144]/60 border border-slate-200/80 dark:border-white/10">
                  <div className="w-5 h-5 rounded-md bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D] dark:text-white">Embedded Hardware &amp; SoMs</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Modular, long-lifecycle System on Modules and verified carrier platforms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#152144]/60 border border-slate-200/80 dark:border-white/10">
                  <div className="w-5 h-5 rounded-md bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D] dark:text-white">Industrial Computing &amp; Edge AI</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Hardware DRP-AI inferencing and deterministic real-time Linux execution.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Company Hardware Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-slate-50 dark:bg-[#101936] shadow-xl p-2.5 sm:p-3 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src="/images/industrial-computing-hd.jpg"
                    alt="AIEGX Industrial Embedded Computing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2.5 py-1 rounded text-white font-semibold">
                      Industrial Hardware
                    </span>
                    <span className="text-[11px] font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded">
                      Production Grade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          Section 2: Why AIEGX
      ────────────────────────────────────────────────────────── */}
      <section
        id="why-aiegx"
        className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-300"
      >
        <div className="section-container">
          <SectionHeadingContainer
            subheading="OUR VALUE PROPOSITION"
            heading="Why AIEGX"
            description="Why leading technology companies and system integrators choose AIEGX as their embedded hardware partner."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
            {whyChoosePoints.map((point, pIdx) => {
              const Icon = point.icon;
              return (
                <div
                  key={pIdx}
                  className="bg-white dark:bg-[#101936] rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-blue-200/60 dark:border-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#14213D] dark:text-white mb-2">
                      {point.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          Section 3: Our Expertise
      ────────────────────────────────────────────────────────── */}
      <section
        id="our-expertise"
        className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-300"
      >
        <div id="what-we-do" className="sr-only" />
        <div id="expertise" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="TECHNICAL CAPABILITIES"
            heading="Our Expertise"
            description="End-to-end technical capabilities across silicon architecture, carrier hardware, embedded Linux, and real-time AI."
          />

          {/* 6 Capabilities Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
            {expertiseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-[#152144]/60 rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#089EC2] group-hover:text-white dark:group-hover:bg-[#2DD4F0] dark:group-hover:text-[#0D1733] transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#14213D] dark:text-white mb-2 group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hardware & Technology Visual Showcase */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 to-slate-50 dark:from-[#132042] dark:to-[#101936] border border-slate-200/90 dark:border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0]">
                HARDWARE INTEGRATION STANDARDS
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#14213D] dark:text-white">
                Engineered for High-Density Signal Integrity &amp; Extended Lifecycles
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Our board layouts undergo rigorous simulation for impedance matching, thermal dissipation, and industrial EMC/EMI compliance to guarantee continuous field reliability.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleOpenEnquiry('Expertise Architecture Consultation')}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#089EC2] hover:bg-[#0aa8cf] shadow-sm transition-colors cursor-pointer"
              >
                Discuss Technical Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          Section 4: Our Approach
      ────────────────────────────────────────────────────────── */}
      <section
        id="our-approach"
        className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-24 sm:scroll-mt-28 transition-colors duration-300"
      >
        <div id="engineering-capabilities" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="DEVELOPMENT WORKFLOW"
            heading="Our Approach"
            description="A structured, agile development process guiding your embedded project from initial concept to certified volume production."
          />

          {/* Desktop Timeline (Horizontal Process) */}
          <div className="hidden md:block mt-12 relative">
            {/* Connecting Horizontal Line across steps */}
            <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#089EC2]/30 via-[#3285FF]/40 to-[#089EC2]/30 dark:from-[#2DD4F0]/20 dark:via-[#3285FF]/30 dark:to-[#2DD4F0]/20 pointer-events-none" />

            <div className="grid grid-cols-5 gap-4 relative z-10">
              {approachStages.map((stage, sIdx) => {
                const Icon = stage.icon;
                return (
                  <div key={sIdx} className="flex flex-col items-center text-center group">
                    {/* Circle Node with Step Badge */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#101936] border-2 border-slate-200 dark:border-white/15 shadow-sm group-hover:border-[#089EC2] dark:group-hover:border-[#2DD4F0] flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                        <Icon className="w-6 h-6 text-[#089EC2] dark:text-[#2DD4F0]" />
                      </div>
                      <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#089EC2] text-white shadow-xs">
                        {stage.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="p-4 rounded-xl bg-white/70 dark:bg-[#101936]/70 border border-slate-200/80 dark:border-white/10 flex-1 w-full flex flex-col justify-start shadow-xs">
                      <h4 className="text-sm font-bold text-[#14213D] dark:text-white mb-1.5 group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors">
                        {stage.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline (Vertical Process) */}
          <div className="md:hidden mt-8 relative pl-6">
            {/* Connecting Vertical Line */}
            <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#089EC2] via-[#3285FF] to-[#089EC2]/40" />

            <div className="space-y-6">
              {approachStages.map((stage, sIdx) => {
                const Icon = stage.icon;
                return (
                  <div key={sIdx} className="relative flex items-start gap-4">
                    {/* Node Dot / Badge */}
                    <div className="absolute -left-[23px] top-1 w-7 h-7 rounded-full bg-white dark:bg-[#101936] border-2 border-[#089EC2] dark:border-[#2DD4F0] flex items-center justify-center text-[10px] font-mono font-bold text-[#089EC2] dark:text-[#2DD4F0] shadow-xs">
                      {stage.step}
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 p-4 rounded-xl bg-white dark:bg-[#101936] border border-slate-200 dark:border-white/10 shadow-xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                        <h4 className="text-sm font-bold text-[#14213D] dark:text-white">
                          {stage.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          Final CTA Section
      ────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-14 sm:py-20 relative bg-gradient-to-b from-white to-blue-50/60 dark:from-[#0e1630] dark:to-[#081026] text-center border-t border-slate-200/80 dark:border-white/10 scroll-mt-24 sm:scroll-mt-28"
      >
        <div className="section-container max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center mb-4 shadow-sm border border-blue-200/60 dark:border-white/10">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14213D] dark:text-white tracking-tight">
            Let's Build Something Innovative Together
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Looking for reliable embedded computing and edge AI solutions? Connect with our engineering team to discuss your next project.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleOpenEnquiry('Final CTA Contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 cursor-pointer active:scale-95 transition-all"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={(e) => scrollToSection('company-overview', e)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 cursor-pointer transition-colors"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </section>

      {/* Product Enquiry Modal */}
      {enquiryModalOpen && (
        <ProductEnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          productName={`AIEGX Embedded Engineering (${enquiryContext})`}
          type="Request Embedded Architecture Consultation"
        />
      )}

    </div>
  );
}
