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
  Globe2,
  Eye,
  Camera,
  Car,
  Factory,
  Shield,
  Sliders,
  Check
} from 'lucide-react';
import ProductBreadcrumb from '../components/products/ProductBreadcrumb';
import SectionHeadingContainer from '../components/common/SectionHeadingContainer';
import { ProductEnquiryModal } from '../components/products/ProductEnquiry';
import { navigateTo } from '../utils/navigation';

export default function AboutUsPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. What We Do cards data
  const whatWeDoItems = [
    {
      title: 'Embedded Computing Platforms',
      desc: 'Ruggedized, application-specific embedded computing architectures engineered for continuous 24/7 industrial, automotive, and outdoor deployments.',
      icon: Cpu,
    },
    {
      title: 'System on Modules (SoM)',
      desc: 'Modular, high-density computing modules adhering to industry-standard SMARC and proprietary form factors with 10+ year guaranteed supply lifecycles.',
      icon: CircuitBoard,
    },
    {
      title: 'Single Board Computers (SBC)',
      desc: 'Production-ready, turn-key single-board computers featuring rich peripheral I/O, display interfaces, dual Gigabit Ethernet, and camera inputs.',
      icon: Server,
    },
    {
      title: 'Industrial Edge AI',
      desc: 'Hardware-accelerated neural inferencing platforms with dedicated neural co-processors (DRP-AI) for real-time on-device computer vision.',
      icon: BrainCircuit,
    },
    {
      title: 'Embedded Software & Integration',
      desc: 'Custom Yocto Linux BSPs, CIP Super Long Term Support (SLTS) kernels, real-time PREEMPT_RT patches, peripheral drivers, and camera ISP tuning.',
      icon: Terminal,
    },
    {
      title: 'Custom Hardware Solutions',
      desc: 'Tailored carrier board layout, thermal conduction engineering, high-speed PCB impedance matching, and rapid prototyping for volume manufacturing.',
      icon: Layers,
    },
  ];

  // 2. Industries We Serve data
  const industries = [
    {
      title: 'Automotive & Mobility',
      category: 'Mobility & Transit',
      desc: 'In-vehicle driver monitoring systems (DMS), commercial fleet telematics, smart transit controllers, and automated number plate recognition (ANPR).',
      image: '/images/industries/electric-bus.png',
      href: '/vehicle-mobility',
    },
    {
      title: 'Industrial Automation',
      category: 'Smart Manufacturing',
      desc: 'Automated optical inspection (AOI), robotic control systems, machine vision sorting lines, and ruggedized industrial display controllers.',
      image: '/images/Automated Gear Inspection Line.png',
      href: '/solutions/industrial-machine-vision',
    },
    {
      title: 'Video Surveillance',
      category: 'Security & Monitoring',
      desc: 'Edge network video recorders (NVR), perimeter surveillance, real-time multi-camera video analytics, and smart city infrastructure.',
      image: '/images/industries/ai-surveillance-camera.png',
      href: '/solutions/video-surveillance',
    },
    {
      title: 'Advanced Vision & Defense',
      category: 'Mission-Critical Systems',
      desc: 'Ruggedized unmanned ground vehicles (UGV), high-reliability electro-optical seeker systems, and tactical edge situational awareness.',
      image: '/images/industries/ugv-defense.png',
      href: '/solutions/defence-advanced-vision',
    },
  ];

  // 3. Why Choose AIEGX key strengths
  const whyChoosePoints = [
    {
      title: 'Reliable Embedded Platforms',
      desc: 'Architected for harsh operating envelopes, wide thermal ranges (-40°C to +85°C/+105°C), high vibration, and continuous 24/7 industrial uptime.',
      icon: ShieldCheck,
    },
    {
      title: 'Production-Ready Hardware',
      desc: 'Fully verified reference carrier designs and off-the-shelf single board computers that shorten engineering validation and accelerate time-to-market.',
      icon: CheckCircle2,
    },
    {
      title: 'Long-Term Product Support',
      desc: 'Guaranteed 10+ year availability roadmaps backed by long-term silicon commitments, protecting your hardware investments against premature obsolescence.',
      icon: Clock,
    },
    {
      title: 'Engineering Expertise',
      desc: 'Direct access to embedded hardware designers, Linux kernel maintainers, and camera sensor tuning engineers from concept through deployment.',
      icon: Award,
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

  // 4. Engineering & Technology capabilities
  const engineeringCapabilities = [
    {
      number: '01',
      title: 'Hardware Design & Integration',
      desc: 'High-speed multi-layer PCB layout, controlled impedance routing, power sequencing, rugged thermal dissipation, and industrial EMC/EMI compliance.',
      icon: CircuitBoard,
    },
    {
      number: '02',
      title: 'Embedded Linux & BSP Development',
      desc: 'Board Support Package tailoring, CIP Super Long Term Support (SLTS) Linux kernels, real-time PREEMPT_RT patches, and custom peripheral drivers.',
      icon: Terminal,
    },
    {
      number: '03',
      title: 'System Integration',
      desc: 'Custom carrier board layout, industrial I/O expansion, MIPI CSI-2 / GMSL2 multi-camera deserializers, and display interface bring-up.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'Edge AI Implementation',
      desc: 'Neural network pruning, INT8/FP16 quantization, DRP-AI Translator compiler pipeline optimization, and zero-copy memory inference architectures.',
      icon: BrainCircuit,
    },
    {
      number: '05',
      title: 'Product Development & Optimization',
      desc: 'Design for Manufacturing (DFM), environmental stress testing, lifecycle obsolescence management, and volume production support.',
      icon: Sliders,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-full min-w-0 overflow-x-hidden bg-[#F5F8FC] dark:bg-[#0D1733] text-[#14213D] dark:text-[#F8FAFC] transition-colors duration-300">

      {/* ──────────────────────────────────────────────────────────
          1. Hero Section
      ────────────────────────────────────────────────────────── */}
      <section className="relative pt-[96px] pb-12 sm:pt-[108px] sm:pb-16 lg:pt-[124px] lg:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-white/10 isolate">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="section-container relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-3">
            {/* Left Content */}
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
                  onClick={(e) => scrollToSection('what-we-do', e)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenEnquiry('About Us Consultation')}
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
                    alt="AIEGX Embedded Computing Hardware Platform"
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
          2. Who We Are Section
      ────────────────────────────────────────────────────────── */}
      <section id="who-we-are" className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div id="company-overview" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="COMPANY OVERVIEW"
            heading="Who We Are"
            description="Dedicated to engineering precision, long-term stability, and transformative edge intelligence."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-10">
            {/* Left: Company Description */}
            <div className="lg:col-span-7 flex flex-col space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong className="text-[#14213D] dark:text-white font-semibold">AIEGX</strong> is an advanced embedded technology company dedicated to the design, engineering, and manufacturing of high-performance computing hardware and intelligent edge systems. We bridge the critical gap between complex semiconductor silicon and deployment-ready industrial appliances.
              </p>
              <p>
                Our multidisciplinary engineering teams specialize in high-density System on Modules (SoM), custom carrier platforms, single-board computers (SBC), and neural processing acceleration. By pairing carrier-grade board layout with hardened Linux and real-time software integration, we enable OEMs and engineering teams worldwide to transition seamlessly from rapid prototyping to certified volume production.
              </p>

              {/* Key Bullet Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#152144]/60 border border-slate-200/80 dark:border-white/10">
                  <div className="w-5 h-5 rounded-md bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D] dark:text-white">Silicon Architecture Mastery</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Deep Renesas RZ Series expertise with on-chip DRP-AI neural co-processors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#152144]/60 border border-slate-200/80 dark:border-white/10">
                  <div className="w-5 h-5 rounded-md bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#14213D] dark:text-white">Hardware &amp; BSP Co-Design</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Yocto Project recipes, CIP SLTS Linux kernels, and camera ISP tuning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hardware Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-slate-50 dark:bg-[#101936] shadow-xl p-2.5 sm:p-3 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src="/images/industrial-computing-hd.jpg"
                    alt="Industrial Electronics & Embedded Systems"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2.5 py-1 rounded text-white font-semibold">
                      Industrial Electronics
                    </span>
                    <span className="text-[11px] font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded">
                      24/7 Reliability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. Our Mission & Vision Section
      ────────────────────────────────────────────────────────── */}
      <section id="mission-vision" className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="PURPOSE & DIRECTION"
            heading="Our Mission & Vision"
            description="Guiding our technology roadmap, engineering standards, and long-term customer partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
            {/* Mission Card */}
            <div className="bg-white dark:bg-[#101936] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/50 dark:hover:border-[#2DD4F0]/50 transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#089EC2]/5 dark:bg-[#2DD4F0]/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F4FD] dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] border border-[#C5DDF5] dark:border-white/10 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0] mb-2">
                  <span>CORE PURPOSE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight mb-4">
                  Our Mission
                </h3>

                <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-6">
                  To develop reliable, scalable, and production-ready embedded computing solutions that help businesses transform innovative ideas into real-world products.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] shrink-0" />
                <span>Shortening design cycles with verified reference architectures</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white dark:bg-[#101936] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#3285FF]/50 dark:hover:border-[#3285FF]/50 transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-600/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#17264D] text-[#3285FF] dark:text-[#2DD4F0] border border-blue-200/70 dark:border-white/10 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#3285FF] dark:text-[#2DD4F0] mb-2">
                  <span>STRATEGIC VISION</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#14213D] dark:text-white tracking-tight mb-4">
                  Our Vision
                </h3>

                <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-6">
                  To become a trusted technology partner in embedded computing and edge intelligence, enabling smarter and more connected industries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#3285FF] dark:text-[#2DD4F0] shrink-0" />
                <span>Advancing on-device deterministic intelligence globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. What We Do Section
      ────────────────────────────────────────────────────────── */}
      <section id="what-we-do" className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div id="expertise" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="CORE AREAS OF EXPERTISE"
            heading="What We Do"
            description="Delivering comprehensive embedded computing hardware, system-level integration, and edge intelligence platforms."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
            {whatWeDoItems.map((item, idx) => {
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
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. Industries We Serve Section
      ────────────────────────────────────────────────────────── */}
      <section id="industries" className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="SECTORS & DEPLOYMENTS"
            heading="Industries We Serve"
            description="Empowering mission-critical systems where reliability, deterministic timing, and edge intelligence are essential."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10">
            {industries.map((ind, iIdx) => (
              <a
                key={iIdx}
                href={ind.href}
                onClick={(e) => navigateTo(ind.href, e)}
                className="group flex flex-col bg-white dark:bg-[#101936] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-lg hover:border-[#089EC2]/50 dark:hover:border-[#2DD4F0]/50 transition-all duration-200 cursor-pointer"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#089EC2]/90 text-white px-2 py-0.5 rounded">
                    {ind.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#14213D] dark:text-white group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] transition-colors flex items-center justify-between">
                      <span>{ind.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#089EC2] dark:text-[#2DD4F0]" />
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {ind.desc}
                    </p>
                  </div>

                  <span className="inline-flex items-center text-xs font-semibold text-[#089EC2] dark:text-[#2DD4F0] group-hover:underline pt-2 border-t border-slate-100 dark:border-white/5">
                    Explore Solutions &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          6. Why Choose AIEGX Section
      ────────────────────────────────────────────────────────── */}
      <section id="why-aiegx" className="py-12 sm:py-16 bg-white dark:bg-[#0e1630] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div className="section-container">
          <SectionHeadingContainer
            subheading="OUR VALUE PROPOSITION"
            heading="Why Choose AIEGX"
            description="Built on engineering rigor, long-term supply stability, and dedicated customer collaboration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
            {whyChoosePoints.map((point, pIdx) => {
              const Icon = point.icon;
              return (
                <div
                  key={pIdx}
                  className="bg-slate-50 dark:bg-[#152144]/60 rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex flex-col justify-between"
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
          7. Engineering & Technology Section
      ────────────────────────────────────────────────────────── */}
      <section id="engineering-capabilities" className="py-12 sm:py-16 bg-[#F5F8FC] dark:bg-[#0D1733] border-b border-slate-200/80 dark:border-white/10 scroll-mt-20 transition-colors duration-300">
        <div id="our-approach" className="sr-only" />
        <div className="section-container">
          <SectionHeadingContainer
            subheading="TECHNICAL EXCELLENCE"
            heading="Engineering & Technology"
            description="End-to-end engineering from high-speed schematic design through production BSP optimization and edge AI deployment."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-10">
            {/* Left Column: 5 Capabilities Steps */}
            <div className="lg:col-span-7 space-y-3.5">
              {engineeringCapabilities.map((cap, cIdx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#101936] border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-[#089EC2]/40 dark:hover:border-[#2DD4F0]/40 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 text-[#089EC2] dark:text-[#2DD4F0] flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">
                      {cap.number}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-white mb-1">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Technology Visual & Specs */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-white dark:bg-[#101936] shadow-xl p-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-[#0b1226]">
                  <img
                    src="/images/capabilities/hardware-design.png"
                    alt="Hardware Design & PCB Engineering"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-mono tracking-wider uppercase bg-[#089EC2]/90 px-2.5 py-1 rounded text-white font-semibold">
                      Full-Stack Engineering
                    </span>
                    <span className="text-[11px] font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded">
                      DFM Validated
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Spec Quick Badges */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#101936] border border-slate-200/90 dark:border-white/10 shadow-xs grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>High-Speed PCB Design</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>Yocto Linux &amp; RTOS</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>MIPI CSI-2 &amp; GMSL2</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                  <span>DRP-AI Model Pruning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          8. Final CTA Section
      ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-14 sm:py-20 relative bg-gradient-to-b from-white to-blue-50/60 dark:from-[#0e1630] dark:to-[#081026] text-center border-t border-slate-200/80 dark:border-white/10">
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
              onClick={() => handleOpenEnquiry('Final CTA Inquiry')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#089EC2] to-[#0284C7] hover:from-[#0aa8cf] hover:to-[#0394de] shadow-lg shadow-[#089EC2]/25 dark:shadow-cyan-950/40 cursor-pointer active:scale-95 transition-all"
            >
              Contact Us
            </button>
            <a
              href="#who-we-are"
              onClick={(e) => scrollToSection('who-we-are', e)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-[#17264D] hover:bg-slate-50 dark:hover:bg-[#1E3360] border border-slate-200 dark:border-white/10 cursor-pointer transition-colors"
            >
              Learn More About AIEGX
            </a>
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