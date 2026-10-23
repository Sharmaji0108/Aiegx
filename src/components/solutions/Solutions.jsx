import React, { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Radio, 
  ShieldCheck, 
  Eye, 
  BatteryCharging, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'edge-inferencing',
      title: 'Intelligent Edge AI Inferencing',
      tagline: 'Deterministic, low-latency neural processing directly at the sensor node.',
      icon: Cpu,
      metrics: {
        latency: '0.38 ms',
        efficiency: '6.8 TOPS/W',
        models: 'Transformers, CNNs, LLMs'
      },
      description: 'Run state-of-the-art vision models, audio intelligence, and compact transformers on low-power embedded silicon without round-trip cloud dependencies.',
      features: [
        'INT8 / FP16 quantized neural graph acceleration',
        'Hardware-level memory arbitration for zero jitter',
        'Zero-cloud privacy and offline air-gapped autonomy',
        'Direct DMA channels for sensor-to-tensor ingestion'
      ],
      idealFor: 'Robotics, Medical Devices, Smart Drones, Industrial Inspection'
    },
    {
      id: 'robotics',
      title: 'Autonomous Embedded Robotics',
      tagline: 'Synchronous sensor fusion and motor control loops on a single silicon substrate.',
      icon: Bot,
      metrics: {
        latency: '1.2 ms SLAM',
        efficiency: 'Dual CAN-FD',
        models: 'ROS2 Humble / Iron'
      },
      description: 'End-to-end compute platform for autonomous mobile robots (AMRs), robotic arms, and unmanned systems with integrated ROS2 micro-nodes.',
      features: [
        'Hardware-accelerated LiDAR SLAM & visual odometry',
        'Deterministic real-time RTOS micro-kernel co-processor',
        'Fail-safe hardware watchdog and dual-redundant safety channels',
        'Pre-validated ROS2 Humble / Iron hardware drivers'
      ],
      idealFor: 'Warehouse AMRs, Agricultural Robotics, Surgical Cobots'
    },
    {
      id: 'vision-isp',
      title: 'Real-Time Embedded Computer Vision',
      tagline: 'Direct MIPI CSI-2 camera streaming into on-die neural acceleration.',
      icon: Eye,
      metrics: {
        latency: '60 FPS 4K',
        efficiency: 'Quad MIPI-CSI',
        models: 'YOLOv11, Segmentation'
      },
      description: 'Eliminate external frame grabbers. Stream multiple high-definition camera feeds directly through custom neural ISPs with hardware object classification.',
      features: [
        'Quad 4K60 HDR camera inputs with hardware debayering',
        'Sub-pixel defect classification for manufacturing lines',
        'Dynamic exposure control tuned for fast-moving targets',
        'Integrated zero-copy OpenCV pipelines'
      ],
      idealFor: 'Factory Quality Control, High-Speed Packaging, ANPR'
    },
    {
      id: 'fleet-security',
      title: 'Secure Fleet Management & Zero-Trust OTA',
      tagline: 'Cryptographically verified hardware provenance and tamper-proof updates.',
      icon: ShieldCheck,
      metrics: {
        latency: 'AES-256 GCM',
        efficiency: 'TPM 2.0 Hardened',
        models: 'Dual-Bank Rollback'
      },
      description: 'Deploy, monitor, and update thousands of distributed intelligent edge devices with atomic firmware rollbacks and quantum-resistant certificates.',
      features: [
        'Hardware Root-of-Trust with physical unclonable functions (PUF)',
        'Atomic A/B dual-bank operating system updates',
        'Continuous device attestation and anomaly detection telemetry',
        'Compliant with IEC 62443 industrial cybersecurity standards'
      ],
      idealFor: 'Critical Infrastructure, Energy Grids, Defense Edge'
    },
    {
      id: 'sensor-mesh',
      title: 'Industrial IoT & Predictive Telemetry',
      tagline: 'Edge anomaly detection across multi-kHz vibration and acoustic sensor arrays.',
      icon: Radio,
      metrics: {
        latency: 'Continuous FFT',
        efficiency: 'Sub-1W Sleep',
        models: 'Autoencoders'
      },
      description: 'Transform passive machinery into intelligent self-diagnosing assets. Local spectral analysis catches bearing and gearbox failures weeks in advance.',
      features: [
        'Embedded edge FFT & wavelet decomposition engines',
        'Continuous acoustic pattern recognition and vibration profiling',
        'Modbus, Profinet, and OPC-UA protocol adapters built-in',
        'Ruggedized IP67 thermal operating envelope (-40°C to +85°C)'
      ],
      idealFor: 'Turbines, Heavy Machinery, Oil & Gas, Rail Transit'
    },
    {
      id: 'low-power',
      title: 'Ultra-Low Power Neural Micro-Compute',
      tagline: 'Always-on wake words and micro-gestures running on coin-cell batteries.',
      icon: BatteryCharging,
      metrics: {
        latency: '< 15 µW Standby',
        efficiency: '0.9V Core',
        models: 'TinyML Micro-NPU'
      },
      description: 'Micro-watt neural acceleration for edge endpoints where battery replacement is impractical or impossible. True energy-autonomous intelligence.',
      features: [
        'Sub-milliwatt continuous audio and accelerometer inferencing',
        'Autonomous power domain gating and fast cold-boot (<2ms)',
        'Support for solar and thermal energy harvesting inputs',
        'Integrated Bluetooth LE 5.4 & Matter mesh radio'
      ],
      idealFor: 'Smart Wearables, Remote Environmental Monitors, Smart Labels'
    }
  ];

  const current = solutions[activeTab];

  return (
    <section id="solutions" className="py-24 sm:py-32 relative bg-[#101936] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3478F6]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#42D9F5]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17264D] border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Architectural Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Extreme Edge Environments</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F5F7FC]/70">
            From deterministic robotics control to micro-watt neural sensors, our unified hardware-software architecture unlocks intelligent autonomy at scale.
          </p>
        </div>

        {/* Interactive Solutions Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Solution Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                    isSelected 
                      ? 'bg-[#17264D] border-[#42D9F5]/60 shadow-lg shadow-cyan-500/10 ring-1 ring-[#42D9F5]' 
                      : 'bg-[#17264D]/40 border-white/5 hover:border-white/15 hover:bg-[#17264D]/60'
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${
                    isSelected 
                      ? 'bg-gradient-to-br from-[#42D9F5] to-[#3478F6] text-[#101936]' 
                      : 'bg-[#101936] text-[#42D9F5] border border-white/10'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-white/80'
                      }`}>
                        {item.title}
                      </h3>
                      {isSelected && (
                        <ChevronRight className="w-4 h-4 text-[#42D9F5] animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-white/60 line-clamp-1 mt-1 font-normal">
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Solution Detail Display Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#17264D]/90 to-[#101936] border border-[#42D9F5]/30 shadow-2xl relative overflow-hidden backdrop-blur-md">
              
              {/* Card Ambient Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#42D9F5] via-[#3478F6] to-transparent" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#42D9F5] px-3 py-1 rounded-full bg-[#101936] border border-white/10">
                  Solution Deep-Dive
                </span>
                <span className="text-xs font-mono text-white/50">
                  Architecture 0{activeTab + 1}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Hardware Performance Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#101936]/80 border border-white/10 mb-6">
                <div>
                  <div className="text-[10px] font-mono uppercase text-white/50">Execution Speed</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-[#42D9F5] mt-0.5">{current.metrics.latency}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-white/50">Efficiency Profile</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">{current.metrics.efficiency}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-white/50">Target Frameworks</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-[#42D9F5] mt-0.5 truncate">{current.metrics.models}</div>
                </div>
              </div>

              {/* Architectural Capabilities */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3 font-semibold">
                  Technical Specifications & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <div className="mt-0.5 p-1 rounded-full bg-[#101936] text-[#42D9F5]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Targets & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-white/50 block">Recommended Sectors:</span>
                  <span className="text-xs font-medium text-white">{current.idealFor}</span>
                </div>

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all font-bold"
                >
                  <span>Explore Compatible Hardware</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
