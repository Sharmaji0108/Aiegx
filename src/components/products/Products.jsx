import React, { useState } from 'react';
import { 
  FileText,
  Download,
  X,
  ArrowRight
} from 'lucide-react';

export default function Products() {
  const [activeDatasheet, setActiveDatasheet] = useState(null);

  const products = [
    {
      id: 'rz-g2l',
      name: 'RZ/G2L',
      fullName: 'Renesas RZ/G2L SMARC 2.1 MPU Module',
      categoryLabel: 'Embedded MPU Module',
      badge: 'Cortex-A55 + M33',
      badgeColor: 'from-[#3478F6] to-[#42D9F5]',
      image: '/images/rz-g2l.png',
      headline: 'Dual 64-bit Arm Cortex-A55 with 3D Graphics for Next-Gen HMI',
      specs: [
        { label: 'Core CPU', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33 @ 200MHz' },
        { label: '3D Graphics', value: 'Arm Mali-G31 GPU (500MHz)' },
        { label: 'Memory', value: 'Up to 4GB DDR4 / LPDDR4 + 16GB eMMC 5.1' },
        { label: 'Connectivity', value: 'Dual Gigabit Ethernet, MIPI-CSI, USB 2.0 Host/OTG' }
      ],
      description: 'Compact SMARC v2.1 System on Module combining dual Cortex-A55 performance with integrated 3D graphics for edge HMI, industrial control, and medical devices.',
      inStock: true
    },
    {
      id: 'rz-g2n',
      name: 'RZ/G2N',
      fullName: 'Renesas RZ/G2N High-Performance Embedded SOM',
      categoryLabel: 'High-Performance SOM',
      badge: 'Dual Cortex-A57',
      badgeColor: 'from-blue-600 to-indigo-500',
      image: '/images/rz-g2n.png',
      headline: 'Dual Arm Cortex-A57 @ 1.5GHz with 4K UHD Video Processing',
      specs: [
        { label: 'Core CPU', value: 'Dual Arm Cortex-A57 @ 1.5GHz 64-bit' },
        { label: 'Graphics & Video', value: 'PowerVR Series 6XE GPU + 4K H.265/H.264 VPU' },
        { label: 'High-Speed Bus', value: 'PCIe Gen2 (1-lane), USB 3.0, Dual GbE' },
        { label: 'Display Engine', value: 'HDMI 1.4b, Dual LVDS (up to 1080p60)' }
      ],
      description: 'High-compute 64-bit embedded system-on-module designed for video surveillance, intelligent digital signage, and high-throughput industrial gateways.',
      inStock: true
    },
    {
      id: 'rz-v2l',
      name: 'RZ/V2L',
      fullName: 'Renesas RZ/V2L AI Vision Evaluation Board',
      categoryLabel: 'Vision AI Processor',
      badge: 'DRP-AI Neural Core',
      badgeColor: 'from-emerald-500 to-cyan-500',
      image: '/images/rz-v2l.png',
      headline: 'Embedded MPU with Renesas DRP-AI Dedicated Neural Engine',
      specs: [
        { label: 'AI Accelerator', value: 'Renesas DRP-AI Engine (0.5 TOPS/W efficiency)' },
        { label: 'Core CPU', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33' },
        { label: 'Vision Interface', value: '4-Lane MIPI-CSI2 Camera with ISP' },
        { label: 'Power Envelope', value: 'Sub-4W Thermal Design Power (Fanless)' }
      ],
      description: 'Vision-optimized processor board featuring Renesas proprietary DRP-AI accelerator, delivering low-latency real-time vision analytics without active cooling.',
      inStock: true
    },
    {
      id: 'rz-n2h',
      name: 'RZ/N2H',
      fullName: 'Renesas RZ/N2H Industrial Networking Board',
      categoryLabel: 'Industrial Network Board',
      badge: 'TSN & EtherCAT Ready',
      badgeColor: 'from-amber-400 to-[#42D9F5]',
      image: '/images/rz-n2h.webp',
      headline: 'Quad Cortex-A55 + Dual Real-Time Cortex-R52 with TSN Switching',
      specs: [
        { label: 'Multi-Core', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R52 @ 1GHz' },
        { label: 'Industrial Fieldbus', value: '4-Port Gigabit Ethernet with EtherCAT Slave & TSN' },
        { label: 'Deterministic Control', value: 'Sub-microsecond latency for motion & robotics' },
        { label: 'Expansion Ports', value: 'MikroBUS, Pmod, Qwiic, PCIe Gen2' }
      ],
      description: 'Unified real-time motor control and high-level networking evaluation board engineered for next-generation factory automation, smart PLCs, and multi-axis robotics.',
      inStock: true
    }
  ];

  return (
    <section id="products" className="py-20 sm:py-24 lg:py-28 relative bg-[#F4F8FD] dark:bg-[#101936] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3478F6]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Hardware Products</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-[#F5F7FC]/70 max-w-xl">
            Renesas embedded processor modules and industrial carrier boards for edge AI, HMI, and real-time networking.
          </p>
        </div>

        {/* 4-Card Single Horizontal Row Grid (1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveDatasheet(product)}
              className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-[#17264D]/80 border border-slate-200 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-[#42D9F5]/60 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden text-left cursor-pointer backdrop-blur-md"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveDatasheet(product);
                }
              }}
              aria-label={`View technical specification for ${product.name}`}
            >
              {/* Product Visual Container (Top Image) */}
              <div className="relative aspect-[4/3] w-full p-6 sm:p-7 flex items-center justify-center bg-slate-50/80 dark:bg-[#101936]/60 border-b border-slate-100 dark:border-white/5 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.fullName}
                  className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Availability Tag */}
                {product.inStock && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Ready
                  </div>
                )}
              </div>

              {/* Product Info & Name Below Image */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#42D9F5] font-semibold block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#42D9F5] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-[#F5F7FC]/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-[#42D9F5]">
                  <span>Technical Specs</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Datasheet Technical Specification Modal Preview */}
      {activeDatasheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white dark:bg-[#17264D] border border-slate-200 dark:border-[#42D9F5]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white">
            <button
              onClick={() => setActiveDatasheet(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 dark:text-white/60 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-[#42D9F5] mb-2 uppercase font-semibold">
              <FileText className="w-4 h-4" />
              <span>Official Hardware Technical Specification</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              {activeDatasheet.name}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-white/50 mb-3">
              {activeDatasheet.fullName}
            </p>
            <p className="text-sm text-slate-600 dark:text-white/70 mb-6">
              {activeDatasheet.headline}
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#101936]/80 border border-slate-200 dark:border-white/10">
                <h4 className="font-bold mb-3 uppercase tracking-wider text-[11px] text-blue-600 dark:text-[#42D9F5]">
                  Key Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDatasheet.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-white/50">{spec.label}</span>
                      <span className="font-semibold text-slate-800 dark:text-white/90">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#101936]/80 border border-slate-200 dark:border-white/10">
                <h4 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-blue-600 dark:text-[#42D9F5]">
                  Overview & Architecture
                </h4>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                  {activeDatasheet.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  alert(`Downloading technical documentation package for ${activeDatasheet.name}...`);
                  setActiveDatasheet(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white dark:text-[#101936] bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#42D9F5] dark:to-[#3478F6] hover:opacity-95 shadow-md shadow-blue-500/20 dark:shadow-cyan-500/20 flex items-center gap-2 font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Spec Sheet (PDF)</span>
              </button>
              <button
                onClick={() => setActiveDatasheet(null)}
                className="text-xs text-slate-500 dark:text-white/60 hover:text-slate-800 dark:hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
