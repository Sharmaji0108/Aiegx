import React, { useState } from 'react';
import { 
  Bot, 
  Factory, 
  HeartPulse, 
  Zap, 
  Plane, 
  ShieldCheck, 
  CheckCircle, 
  ArrowUpRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function Applications() {
  const [selectedApp, setSelectedApp] = useState(0);

  const apps = [
    {
      id: 'robotics',
      title: 'Autonomous Mobile Robots (AMR)',
      category: 'Autonomous Systems',
      icon: Bot,
      headline: 'Sub-millisecond Obstacle Avoidance and Cooperative Swarm Navigation',
      description: 'Warehouse and manufacturing AMRs equipped with Aiegx NeuroCore modules process synchronous LiDAR point clouds and stereo depth cameras locally, eliminating latency risks in high-traffic facilities.',
      metrics: [
        { label: 'Reaction Latency', value: '0.42 ms' },
        { label: 'Safety Integrity', value: 'SIL-3 Certified' },
        { label: 'Sensor Channels', value: '4x MIPI + 2x LiDAR' },
        { label: 'Power Draw', value: '4.8 Watts' }
      ],
      caseStudy: {
        partner: 'Global Tier-1 Logistics Fleet',
        result: '42% increase in pick-and-pack throughput and zero safety incidents across 1.2M operating hours.'
      }
    },
    {
      id: 'manufacturing',
      title: 'High-Speed Industrial Inspection',
      category: 'Smart Manufacturing',
      icon: Factory,
      headline: 'Sub-Pixel Defect Detection at 120 Frames Per Second',
      description: 'Microscopic solder ball faults, wafer micro-cracks, and seal defects are categorized and rejected in real-time right on the optical assembly conveyor, preventing costly batch recalls.',
      metrics: [
        { label: 'Scan Throughput', value: '120 FPS @ 4K' },
        { label: 'Defect Accuracy', value: '99.98%' },
        { label: 'False Rejection', value: '< 0.01%' },
        { label: 'Inference Speed', value: '1.8 ms/frame' }
      ],
      caseStudy: {
        partner: 'Semiconductor Packaging Fab',
        result: 'Saved $3.4M annually in scrapped silicon wafers with automated edge classification.'
      }
    },
    {
      id: 'healthcare',
      title: 'Point-of-Care Medical Diagnostics',
      category: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      headline: 'Offline Edge AI for Bedside Ultrasound and Surgical Guidance',
      description: 'Embedded neural acceleration brings automated cardiac ejection fraction measurements and surgical tool tracking to portable battery-powered diagnostic instruments without HIPAA data leak hazards.',
      metrics: [
        { label: 'Data Privacy', value: '100% On-Device' },
        { label: 'Regulatory', value: 'ISO 13485 Ready' },
        { label: 'Boot Time', value: '1.2 Seconds' },
        { label: 'Battery Life', value: '8+ Hours Continuous' }
      ],
      caseStudy: {
        partner: 'Next-Gen Medical Imaging Lab',
        result: 'Enabled handheld bedside ultrasound machines with hospital-grade automatic diagnostics.'
      }
    },
    {
      id: 'energy',
      title: 'Critical Power Grid & Utilities',
      category: 'Energy & Infrastructure',
      icon: Zap,
      headline: 'Predictive Vibration and Thermal Telemetry for Turbines & Substations',
      description: 'Ruggedized Synapse Gateways withstand electromagnetic pulses and extreme temperature swings while continuously running spectral FFT autoencoders on high-voltage transformers and wind turbine gearboxes.',
      metrics: [
        { label: 'Operating Temp', value: '-40°C to +85°C' },
        { label: 'Lead Time Warning', value: '14 to 28 Days' },
        { label: 'Fieldbus Protocol', value: 'IEC 61850 & Modbus' },
        { label: 'Uptime Benchmark', value: '99.999%' }
      ],
      caseStudy: {
        partner: 'Offshore Wind Generation Grid',
        result: 'Zero catastrophic gearbox failures achieved across 120 offshore turbine installations.'
      }
    },
    {
      id: 'aerospace',
      title: 'Aerospace & GPS-Denied Avionics',
      category: 'Defense & Aerospace',
      icon: Plane,
      headline: 'Terrain-Relative Optical Odometry for Unmanned Aerial Systems',
      description: 'When satellite navigation signals are lost or spoofed, Aiegx embedded neural accelerators compare real-time ground camera features against onboard topological elevation maps for drift-free autonomous navigation.',
      metrics: [
        { label: 'Drift Rate', value: '< 0.05% distance' },
        { label: 'SWaP Footprint', value: '75 grams / 5W' },
        { label: 'ECC Memory', value: 'Full-Chip Fault Tolerant' },
        { label: 'Operating Altitude', value: 'Up to 65,000 ft' }
      ],
      caseStudy: {
        partner: 'Autonomous UAV Avionics Contractor',
        result: 'Successful autonomous return-to-base missions across 300+ simulated GPS jamming events.'
      }
    }
  ];

  const current = apps[selectedApp];
  const IconComponent = current.icon;

  return (
    <section id="applications" className="py-24 sm:py-32 relative bg-[#101936] border-t border-white/5">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#3478F6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17264D] border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider mb-4">
            <Bot className="w-3.5 h-3.5" />
            Field-Proven Deployment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transforming <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Mission-Critical Industries</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F5F7FC]/70">
            From surgical theaters to high-voltage power grids, Aiegx intelligent hardware powers systems that cannot afford failure.
          </p>
        </div>

        {/* Sector Navigation Selector */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {apps.map((item, idx) => {
            const TabIcon = item.icon;
            const isSelected = selectedApp === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedApp(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#42D9F5] to-[#3478F6] border-transparent text-[#101936] shadow-md shadow-cyan-500/25 font-bold'
                    : 'bg-[#17264D]/50 border-white/10 text-white/70 hover:text-white hover:bg-[#17264D]'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? 'text-[#101936]' : 'text-[#42D9F5]'}`} />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Application Feature Spotlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#17264D]/90 via-[#101936] to-[#17264D]/60 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#42D9F5] to-[#3478F6] text-[#101936] shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#42D9F5] font-semibold">
                    {current.category} Solution Focus
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-white mb-3">
                {current.headline}
              </h4>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Verified Case Study Result Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#101936]/80 border border-white/10 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#42D9F5] mb-1.5 uppercase font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Deployment Outcome: {current.caseStudy.partner}</span>
                </div>
                <p className="text-sm text-white/90 font-medium">
                  "{current.caseStudy.result}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] shadow-md shadow-cyan-500/25 hover:opacity-95 transition-opacity font-bold"
                >
                  <span>Request Hardware Evaluation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Metrics Telemetry Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {current.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-5 rounded-2xl bg-[#101936]/90 border border-white/10 flex flex-col justify-between hover:border-[#42D9F5]/40 transition-colors shadow-sm"
                >
                  <span className="text-[11px] uppercase font-mono text-white/50 tracking-wider">
                    {metric.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#42D9F5] mt-3">
                    {metric.value}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/50">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>Hardware Verified</span>
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
