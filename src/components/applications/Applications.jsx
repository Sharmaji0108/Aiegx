import React, { useState } from 'react';
import { 
  Monitor, 
  Eye, 
  Cpu, 
  Scan, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

/**
 * Integrated Solutions Component
 * Displays the 4 core embedded solutions: HMI, DMS, VDC, and ANPR in a 4-box horizontal arrangement.
 * Responsive: 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
 * Interactive: Clicking any solution switches the active view and reveals detailed solution specs below.
 */
export default function Applications() {
  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutions = [
    {
      id: 'hmi',
      shortName: 'HMI',
      name: 'Human-Machine Interface',
      category: 'Intelligent Display & GUI',
      badge: 'Graphics & Control',
      icon: Monitor,
      tagline: 'High-responsiveness intelligent GUI & interactive industrial touch display control',
      description: 'Ultra-low latency graphical user interfaces powered by hardware-accelerated 2D/3D rendering engines. Designed for mission-critical industrial dashboards, medical monitoring displays, and automotive smart cockpits with multi-touch and functional safety compliance.',
      features: [
        'Multi-display 4K & FHD rendering with LVDS, MIPI-DSI, and HDMI/eDP',
        'Sub-15ms tactile touch-to-screen response latency for zero operator delay',
        'Optimized Qt, Flutter & LVGL runtimes on Linux, Android, and RTOS',
        'Industrial-grade -40°C to +85°C continuous 24/7 mission-critical operation'
      ],
      specs: [
        { label: 'Display Channels', value: 'Dual LVDS / MIPI / HDMI' },
        { label: 'Render Pipeline', value: 'Arm Mali / OpenGL ES 3.2' },
        { label: 'Touch Latency', value: '< 15 ms' },
        { label: 'Boot-to-UI', value: '< 1.8 seconds' }
      ]
    },
    {
      id: 'dms',
      shortName: 'DMS',
      name: 'Driver Monitoring System',
      category: 'In-Cabin Vision AI',
      badge: 'Safety Compliance',
      icon: Eye,
      tagline: 'Real-time in-cabin vision AI for distraction, drowsiness & occupant safety detection',
      description: 'Automotive-grade edge vision pipeline utilizing near-infrared (NIR) sensors and low-power neural processors. Delivers real-time eye-gaze tracking, head pose estimation, microsleep detection, and seat occupancy recognition in compliance with Euro NCAP and GSR standards.',
      features: [
        'Full Euro NCAP & GSR compliant driver vigilance and attention tracking',
        'Night-vision NIR camera illumination with sunglasses and face-mask bypass',
        '100% on-device edge neural inference with zero biometric data leakage',
        'Deterministic sub-10ms driver alert warning trigger to prevent accidents'
      ],
      specs: [
        { label: 'Neural Latency', value: '4.2 ms / frame' },
        { label: 'Sensor Input', value: 'Global Shutter NIR MIPI-CSI' },
        { label: 'Safety Standard', value: 'ASIL-B / ISO 26262' },
        { label: 'Power Budget', value: '< 3.5 Watts' }
      ]
    },
    {
      id: 'vdc',
      shortName: 'VDC',
      name: 'Vehicle Domain Controller',
      category: 'Chassis & Gateway',
      badge: 'Deterministic Control',
      icon: Cpu,
      tagline: 'Deterministic chassis control, CAN-FD/Ethernet gateway & powertrain telematics',
      description: 'Centralized vehicular computing unit consolidating chassis dynamics, body electronics, and multi-bus sensor gateways into a robust lockstep processing core. Delivers fail-operational real-time determinism with integrated hardware security modules (HSM).',
      features: [
        'Real-time dual-core lockstep Cortex-M architecture for functional safety',
        'Multi-channel CAN-FD, LIN, FlexRay & Automotive Ethernet sensor gateways',
        'Integrated Hardware Security Module (HSM) for encrypted ECU authentication',
        'AUTOSAR Classic & Adaptive software stack with OTA lifecycle management'
      ],
      specs: [
        { label: 'Processing Architecture', value: 'Lockstep Real-Time + Cortex-A' },
        { label: 'Bus Connectivity', value: '8x CAN-FD, 2x 100BASE-T1' },
        { label: 'Safety Integrity', value: 'ISO 26262 ASIL-D Ready' },
        { label: 'Fault Recovery', value: 'Zero-Downtime Fail-Operational' }
      ]
    },
    {
      id: 'anpr',
      shortName: 'ANPR',
      name: 'Automatic Number Plate Recognition',
      category: 'Edge Neural Vision',
      badge: 'High-Speed OCR',
      icon: Scan,
      tagline: 'High-accuracy edge neural OCR & vehicle identification across high-speed lanes',
      description: 'Embedded vision AI system capable of detecting, recognizing, and cataloging license plates across multi-lane roadways in real time. Features integrated optical character recognition (OCR) models optimized for low-light, extreme weather, and fast-moving traffic.',
      features: [
        'Multi-lane simultaneous plate capture at vehicle speeds up to 160 km/h',
        '99.4%+ recognition accuracy across reflective, embossed & multinational plates',
        'On-device edge inference eliminating costly high-bandwidth cloud video streams',
        'Seamless plug-and-play integration with electronic tolling & smart parking APIs'
      ],
      specs: [
        { label: 'Inference Speed', value: '1.6 ms / plate' },
        { label: 'Recognition Accuracy', value: '99.4% Multi-Region' },
        { label: 'Max Vehicle Speed', value: 'Up to 160 km/h' },
        { label: 'Environmental', value: 'IP67 Weather-Sealed' }
      ]
    }
  ];

  const current = solutions[selectedSolution];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="applications" 
      className="py-20 sm:py-28 lg:py-32 relative bg-gradient-to-b from-[#EBF2FC]/70 via-[#F4F8FD] to-[#E5EEFA]/60 dark:bg-[#101936] dark:bg-none border-t border-slate-200/60 dark:border-white/5 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Anchor alias for solutions links */}
      <div id="solutions" className="sr-only" />

      {/* Subtle Ambient Background Lighting Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-cyan-400/10 to-transparent dark:from-[#3478F6]/15 dark:via-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-cyan-400/15 via-blue-400/10 to-transparent dark:from-[#42D9F5]/10 dark:via-[#3478F6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Heading — Centered at the top */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
            OUR <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">INTEGRATED SOLUTIONS</span>
          </h2>
        </div>

        {/* Four Horizontally Aligned Solution Cards / Buttons */}
        {/* Responsive: 4 items in 1 row on desktop (lg:grid-cols-4), 2 cols on tablet (sm:grid-cols-2), 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {solutions.map((item, idx) => {
            const isSelected = selectedSolution === idx;
            const CardIcon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedSolution(idx)}
                className={`group relative text-left p-6 sm:p-7 rounded-2xl sm:rounded-3xl transition-all duration-300 border flex flex-col justify-between cursor-pointer backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-[#42D9F5] ${
                  isSelected
                    ? 'bg-white dark:bg-[#17264D] border-blue-500 dark:border-[#42D9F5] shadow-lg shadow-blue-500/15 dark:shadow-cyan-500/20 -translate-y-1'
                    : 'bg-white/80 dark:bg-[#17264D]/60 border-slate-200/90 dark:border-white/10 hover:border-blue-400/60 dark:hover:border-[#42D9F5]/50 hover:bg-white dark:hover:bg-[#17264D] hover:-translate-y-0.5 hover:shadow-md'
                }`}
                aria-pressed={isSelected}
                aria-label={`Select ${item.shortName}: ${item.name}`}
              >
                <div>
                  {/* Top Header Row with Icon and Active Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className={`p-3 rounded-2xl transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-tr from-[#42D9F5] to-[#3478F6] text-[#101936] shadow-md shadow-cyan-500/30'
                          : 'bg-blue-50 dark:bg-[#101936] text-blue-600 dark:text-[#42D9F5] border border-blue-100 dark:border-white/10 group-hover:border-blue-300 dark:group-hover:border-[#42D9F5]/30'
                      }`}
                    >
                      <CardIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {isSelected && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/10 dark:bg-cyan-400/15 text-blue-600 dark:text-[#42D9F5] border border-blue-500/30 dark:border-cyan-400/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-[#42D9F5] animate-pulse" />
                        Selected
                      </span>
                    )}
                  </div>

                  {/* Main Acronym */}
                  <h3 
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                      isSelected 
                        ? 'text-blue-600 dark:text-[#42D9F5]' 
                        : 'text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#42D9F5]'
                    }`}
                  >
                    {item.shortName}
                  </h3>

                  {/* Full Name */}
                  <p className="text-sm font-semibold text-slate-700 dark:text-white/90 mt-1">
                    {item.name}
                  </p>

                  {/* Brief Tagline */}
                  <p className="text-xs text-slate-500 dark:text-[#F5F7FC]/60 mt-2 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Bottom Action Hint */}
                <div 
                  className={`mt-6 pt-3.5 border-t flex items-center justify-between text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'border-blue-500/20 dark:border-cyan-400/20 text-blue-600 dark:text-[#42D9F5]'
                      : 'border-slate-100 dark:border-white/5 text-slate-400 dark:text-white/40 group-hover:text-blue-600 dark:group-hover:text-[#42D9F5]'
                  }`}
                >
                  <span>{isSelected ? 'Active Details' : 'View Architecture'}</span>
                  <ArrowRight 
                    className={`w-3.5 h-3.5 transform transition-transform ${
                      isSelected ? 'translate-x-1 text-blue-600 dark:text-[#42D9F5]' : 'group-hover:translate-x-1'
                    }`} 
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Structured Solution Details Section */}
        {/* Modular and extensible so additional solution specs, diagrams, or benchmarks can easily be added later */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#17264D]/90 dark:via-[#101936] dark:to-[#17264D]/60 border border-slate-200 dark:border-white/15 shadow-xl dark:shadow-2xl relative overflow-hidden backdrop-blur-md transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Solution Overview & Capabilities (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-[#42D9F5] to-[#3478F6] text-[#101936] shadow-md shadow-cyan-500/25">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-[#42D9F5] font-semibold">
                      {current.category}
                    </span>
                    <span className="text-slate-300 dark:text-white/20">•</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-white/60">
                      {current.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {current.shortName} <span className="font-normal text-slate-600 dark:text-white/80">— {current.name}</span>
                  </h3>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-3">
                {current.tagline}
              </h4>

              <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Solution Key Capabilities Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:text-[#101936] dark:bg-gradient-to-r dark:from-[#42D9F5] dark:to-[#3478F6] shadow-md shadow-blue-500/20 dark:shadow-cyan-500/25 hover:opacity-95 transition-all font-bold"
                >
                  <span>Explore Hardware for {current.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#why-aiegx"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-white/90 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 transition-colors"
                >
                  <span>Why Choose Aiegx</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hardware Metrics & Architecture Parameters (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {current.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-slate-50/90 dark:bg-[#101936]/90 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/50 dark:hover:border-[#42D9F5]/40 transition-colors shadow-sm"
                >
                  <span className="text-[11px] uppercase font-mono text-slate-500 dark:text-white/50 tracking-wider">
                    {spec.label}
                  </span>
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold font-mono text-blue-600 dark:text-[#42D9F5] mt-3">
                    {spec.value}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-white/50">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                    <span>Hardware Ready</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
