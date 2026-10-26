import React, { useState } from 'react';
import { 
  Monitor, 
  Eye, 
  Cpu, 
  Scan
} from 'lucide-react';

/**
 * Integrated Solutions Component
 * Displays the 4 core embedded solutions: HMI, DMS, VDC, and ANPR in a 4-box horizontal arrangement.
 * Responsive: 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
 * Interactive: Clicking any solution switches the active view and reveals detailed solution specs and high-res hardware architecture below.
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
      image: '/images/hmi-solution-hd.jpg',
      alt: 'Industrial Human-Machine Interface Multi-Touch Panel Computer',
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
      image: '/images/dms-solution-hd.jpg',
      alt: 'Automotive Driver Monitoring System NIR Camera Module',
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
      image: '/images/vdc-solution-hd.jpg',
      alt: 'Automotive Vehicle Domain Controller Central Processing Unit',
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
      image: '/images/anpr-solution-hd.jpg',
      alt: 'High-Speed Automatic Number Plate Recognition Edge AI Camera',
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

  return (
    <section 
      id="integrated-solutions" 
      className="py-16 sm:py-20 lg:py-24 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300"
    >
      {/* Anchor aliases for backwards compatibility */}
      <div id="solutions" className="sr-only" />
      <div id="applications" className="sr-only" />

      {/* Subtle Background Lighting Glows */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#3285FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2DD4F0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative">
        
        {/* Section Heading */}
        <div className="section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_8px_24px_rgba(50,133,255,0.12)] dark:shadow-[0_8px_24px_rgba(45,212,240,0.12)]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1733] tracking-tight">
            Our Integrated <span className="bg-gradient-to-r from-[#2DD4F0] to-[#3285FF] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(13,23,51,0.30)]">Solutions</span>
          </h2>
        </div>

        {/* 4 Interactive Solution Cards in a Horizontal Arrangement */}
        {/* Responsive: 4 items in 1 row on desktop (lg:grid-cols-4), 2 cols on tablet (sm:grid-cols-2), 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {solutions.map((item, idx) => {
            const isSelected = selectedSolution === idx;
            const CardIcon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedSolution(idx)}
                className={`group relative text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 border flex flex-col cursor-pointer backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4F0] ${
                  isSelected
                    ? 'bg-white dark:bg-[#17264A] border-[#089EC2] dark:border-[#2DD4F0] shadow-xl shadow-[#089EC2]/10 dark:shadow-[#2DD4F0]/15 ring-1 ring-[#089EC2]/50 dark:ring-[#2DD4F0]/50 -translate-y-1'
                    : 'bg-white/80 dark:bg-[#17264A]/70 border-[#DBE4F0] dark:border-[#24355A] hover:border-[#089EC2]/50 dark:hover:border-[#2DD4F0]/50 hover:bg-white dark:hover:bg-[#17264A] hover:-translate-y-0.5 hover:shadow-md'
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
                          ? 'bg-gradient-to-tr from-[#2DD4F0] to-[#3285FF] text-[#0D1733] shadow-md shadow-[#2DD4F0]/25'
                          : 'bg-[#EDF2F7] dark:bg-[#101936] text-[#089EC2] dark:text-[#2DD4F0] border border-[#DBE4F0] dark:border-[#24355A] group-hover:border-[#089EC2]/40 dark:group-hover:border-[#2DD4F0]/40'
                      }`}
                    >
                      <CardIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {isSelected && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#089EC2]/15 dark:bg-[#2DD4F0]/15 text-[#089EC2] dark:text-[#2DD4F0] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0] animate-pulse" />
                        Selected
                      </span>
                    )}
                  </div>

                  {/* Main Acronym */}
                  <h3 
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-200 ${
                      isSelected 
                        ? 'text-[#089EC2] dark:text-[#2DD4F0]' 
                        : 'text-[#14213D] dark:text-[#F8FAFC] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0]'
                    }`}
                  >
                    {item.shortName}
                  </h3>

                  {/* Full Name */}
                  <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]/90 mt-1">
                    {item.name}
                  </p>

                  {/* Brief Tagline */}
                  <p className="text-xs text-[#52627C] dark:text-[#AAB6D0] mt-2 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
