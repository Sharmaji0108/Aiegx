import React from 'react';
import { 
  CircuitBoard, 
  Terminal, 
  Camera, 
  BrainCircuit 
} from 'lucide-react';

/**
 * Our Engineering Capabilities Component
 * Replaces the previous Final CTA section.
 * Displays four horizontally aligned engineering capability cards in one row on desktop:
 * 1. Hardware Design (SoM, SBC, and carrier board design)
 * 2. Linux / Yocto BSP & Driver Development (Embedded Linux, Yocto BSP customization, kernel and device drivers)
 * 3. Camera & Multimedia Integration (Camera interfaces, multimedia pipelines, and HW/SW integration)
 * 4. Edge AI Application Development (Edge AI deployment, model optimization, and on-device inference)
 */
export default function FinalCTA() {
  const capabilities = [
    {
      id: 'hardware-design',
      title: 'Hardware Design',
      focus: 'SoM, SBC & Carrier Boards',
      icon: CircuitBoard,
      description: 'Custom schematic design, multi-layer high-speed PCB layout, signal & power integrity analysis, and complete hardware prototyping for SoMs, SBCs, and baseboards.'
    },
    {
      id: 'linux-yocto-bsp',
      title: 'Linux / Yocto BSP & Driver Development',
      focus: 'Kernel, Device Drivers & RTOS',
      icon: Terminal,
      description: 'Production-grade embedded Linux, custom Yocto Project BSP creation, low-level peripheral device drivers, bootloader optimization, and real-time kernel tuning.'
    },
    {
      id: 'camera-multimedia',
      title: 'Camera & Multimedia Integration',
      focus: 'Sensor Interfaces & Video Pipelines',
      icon: Camera,
      description: 'Multi-camera MIPI-CSI2 and GMSL2 integration, image signal processor (ISP) tuning, 4K hardware video codec pipelines, and low-latency display sub-systems.'
    },
    {
      id: 'edge-ai-development',
      title: 'Edge AI Application Development',
      focus: 'On-Device Inference & Optimization',
      icon: BrainCircuit,
      description: 'Edge AI deployment, INT8/FP16 model quantization, neural acceleration with TensorRT, ONNX, and DRP-AI, and high-throughput real-time vision analytics.'
    }
  ];

  return (
    <section 
      id="capabilities" 
      className="py-20 sm:py-28 lg:py-32 relative bg-gradient-to-b from-[#EBF2FC]/70 via-[#F4F8FD] to-[#E5EEFA]/60 dark:bg-[#101936] dark:bg-none border-t border-slate-200/60 dark:border-white/5 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >

      {/* Ambient Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-cyan-400/10 to-transparent dark:from-[#3478F6]/15 dark:via-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-cyan-400/15 via-blue-400/10 to-transparent dark:from-[#42D9F5]/10 dark:via-[#3478F6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading — Centered Horizontally at Top */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Engineering Capabilities</span>
          </h2>
        </div>

        {/* 4 Engineering Capability Cards in a Single Horizontal Row on Desktop */}
        {/* Responsive: 4 cols on lg, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#17264D]/85 border border-blue-200/80 dark:border-white/10 hover:border-blue-500/70 dark:hover:border-[#42D9F5]/70 p-6 sm:p-7 flex flex-col justify-between items-center text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/15 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Capability Icon Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50/80 dark:bg-[#101936] text-blue-600 dark:text-[#42D9F5] border border-blue-100 dark:border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#42D9F5] group-hover:to-[#3478F6] group-hover:text-white dark:group-hover:text-[#101936] group-hover:border-transparent group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Capability Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#42D9F5] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Focus Subtitle / Category */}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-[#42D9F5] font-semibold mt-2 block">
                    {item.focus}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#F5F7FC]/70 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-4 w-full border-t border-slate-100 dark:border-white/5 flex items-center justify-center">
                  <div className="w-8 h-1 rounded-full bg-blue-500/20 dark:bg-cyan-400/20 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-[#42D9F5] group-hover:to-[#3478F6] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
