import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck,
  FileText,
  Download,
  X
} from 'lucide-react';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [activeDatasheet, setActiveDatasheet] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Aiegx NeuroCore X1',
      category: 'modules',
      categoryLabel: 'Embedded NPU Module',
      badge: 'Flagship Silicon',
      badgeColor: 'from-[#3478F6] to-[#42D9F5]',
      price: 349,
      image: '/images/neurocore_chip.jpg',
      headline: '32 TOPS Edge Neural Acceleration in M.2 Form Factor',
      specs: [
        { label: 'Compute', value: '32 TOPS INT8 / 16 TFLOPS FP16' },
        { label: 'Power Draw', value: '3.8W – 5.5W Dynamic TDP' },
        { label: 'Interface', value: 'PCIe Gen3 x4 / M.2 2280' },
        { label: 'Thermal Profile', value: '-25°C to +85°C Operating' }
      ],
      description: 'Ultra-dense neural accelerator designed for plug-and-play integration into autonomous mobile robots, edge drones, and medical diagnostic carts.',
      inStock: true
    },
    {
      id: 2,
      name: 'Synapse Gateway Pro',
      category: 'gateways',
      categoryLabel: 'Rugged Industrial Edge Gateway',
      badge: 'IP67 Sealed',
      badgeColor: 'from-emerald-500 to-cyan-500',
      price: 1280,
      image: '/images/edge_robotics_ai.jpg',
      headline: 'Heavy-Duty Industrial Gateway with Integrated 5G & Dual CAN-FD',
      specs: [
        { label: 'Compute', value: '64 TOPS Dual NPU + Octa-Core' },
        { label: 'Fieldbus', value: 'Dual CAN-FD, RS-485, Modbus' },
        { label: 'Connectivity', value: '5G Sub-6GHz + Dual 2.5GbE' },
        { label: 'Enclosure', value: 'Milled Aviation Aluminum IP67' }
      ],
      description: 'Fanless, vibration-resistant edge computer built for heavy mining, marine propulsion, high-speed rail, and electrical substation telemetry.',
      inStock: true
    },
    {
      id: 3,
      name: 'OmniVision Sensor Pod V2',
      category: 'vision',
      categoryLabel: 'Neural Vision Sensor Pod',
      badge: 'Sub-2ms Latency',
      badgeColor: 'from-amber-400 to-[#42D9F5]',
      price: 620,
      image: '/images/edge_robotics_ai.jpg',
      headline: 'Integrated 4K HDR Global Shutter Camera with On-Die Perception',
      specs: [
        { label: 'Sensor', value: '1/1.8" 4K Global Shutter CMOS' },
        { label: 'FPS', value: '120 FPS at 1080p / 60 FPS at 4K' },
        { label: 'On-Die NPU', value: '16 TOPS Object Classifier' },
        { label: 'Ingress', value: 'IP66 Industrial Sealed' }
      ],
      description: 'Eliminates host PC bottleneck by performing edge bounding box tracking, barcode reading, and optical inspection directly at the camera optics.',
      inStock: true
    },
    {
      id: 4,
      name: 'QuantumEdge Dev Kit',
      category: 'devkits',
      categoryLabel: 'Developer Evaluation Platform',
      badge: 'ROS2 Native',
      badgeColor: 'from-purple-500 to-[#3478F6]',
      price: 499,
      image: '/images/neurocore_chip.jpg',
      headline: 'Complete Carrier Board with Pre-Loaded Linux & ROS2 Humble',
      specs: [
        { label: 'Baseboard', value: 'Dual PCIe, Quad MIPI-CSI' },
        { label: 'Memory', value: '16GB LPDDR5 + 64GB eMMC 5.1' },
        { label: 'Software', value: 'Ubuntu 24.04 LTS + Aiegx SDK' },
        { label: 'IO Ports', value: '40-Pin GPIO, USB 3.2 Gen2 x4' }
      ],
      description: 'The fastest path from prototype to mass manufacturing. Includes breakout cables, active cooling module, 65W power adapter, and pre-trained model zoo.',
      inStock: true
    }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const _handleAddToCart = (product) => {
    window.dispatchEvent(new CustomEvent('aiegx-add-cart', {
      detail: {
        id: product.id,
        name: product.name,
        type: product.categoryLabel,
        price: product.price,
        badge: product.badge
      }
    }));
  };

  return (
    <section id="products" className="py-24 sm:py-32 relative bg-[#101936] border-t border-white/5">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3478F6]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filtering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17264D] border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              Hardware Silicon & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Hardware Products</span>
            </h2>
            <p className="mt-3 text-base text-[#F5F7FC]/70 max-w-xl">
              Production-grade edge neural processors, sealed industrial gateways, and turnkey development kits.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#17264D]/70 border border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Hardware' },
              { id: 'modules', label: 'NPU Modules' },
              { id: 'gateways', label: 'Edge Gateways' },
              { id: 'vision', label: 'Vision Pods' },
              { id: 'devkits', label: 'Dev Kits' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-[#42D9F5] to-[#3478F6] text-[#101936] shadow-md shadow-cyan-500/25 font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-gradient-to-b from-[#17264D]/80 to-[#101936]/90 border border-white/10 hover:border-[#42D9F5]/50 transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-md"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#17264D]/50 overflow-hidden rounded-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle dark gradient at the bottom of the image for contrast and legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101936] via-[#101936]/50 to-transparent" />

                {/* Category Badge (Top-Left) */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r ${product.badgeColor} shadow-md`}>
                    {product.badge}
                  </span>
                </div>

                {/* Availability Badge (Top-Right) */}
                {product.inStock && (
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101936]/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    In Stock & Ready to Ship
                  </div>
                )}

                {/* Product Category Label & Name (Near Bottom of Image) */}
                <div className="absolute bottom-5 left-6 right-6 sm:bottom-6 sm:left-7 sm:right-7 z-10">
                  <span className="text-xs font-mono text-[#42D9F5] font-semibold tracking-wide uppercase block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Hardware Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#17264D]/90 via-[#101936] to-[#17264D]/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#17264D] text-[#42D9F5] border border-white/10">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Custom Silicon & Carrier Board Engineering</h4>
              <p className="text-xs text-white/60">Need custom pinouts, automotive ASIL-D certification, or volume procurement (&gt;1,000 units)?</p>
            </div>
          </div>
          <a
            href="#why-aiegx"
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors whitespace-nowrap"
          >
            Contact OEM Solutions Team
          </a>
        </div>

      </div>

      {/* Datasheet Modal Preview */}
      {activeDatasheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-[#17264D] border border-[#42D9F5]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-white">
            <button
              onClick={() => setActiveDatasheet(null)}
              className="absolute top-5 right-5 p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#42D9F5] mb-2 uppercase font-semibold">
              <FileText className="w-4 h-4" />
              <span>Official Hardware Technical Specification</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">{activeDatasheet.name}</h3>
            <p className="text-sm text-white/70 mb-6">{activeDatasheet.headline}</p>

            <div className="space-y-4 text-xs text-white">
              <div className="p-4 rounded-xl bg-[#101936]/80 border border-white/10">
                <h4 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-[#42D9F5]">Processor & Tensor Core Microarchitecture</h4>
                <p className="text-white/70">Dense tensor systolic matrix engine supporting native INT4, INT8, INT16, FP16, and BF16 execution with zero pipeline stalls. Dedicated RISC-V scalar micro-controller handles hardware tensor dispatching.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#101936]/80 border border-white/10">
                <h4 className="font-bold mb-2 uppercase tracking-wider text-[11px] text-[#42D9F5]">Electrical & Environmental Rating</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>Operating Voltage: 3.3V / 5.0V Dual Rails with integrated PMIC</li>
                  <li>Operating Temperature: -40°C to +85°C Ambient with passive heatsink</li>
                  <li>ESD Protection: IEC 61000-4-2 Level 4 (8kV contact, 15kV air discharge)</li>
                  <li>Compliance: CE, FCC Class B, RoHS, REACH, ISO 9001 certified fab</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  alert(`Downloading technical PDF for ${activeDatasheet.name}...`);
                  setActiveDatasheet(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:opacity-90 shadow-md shadow-cyan-500/20 flex items-center gap-2 font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Complete PDF Spec (Rev 3.2)</span>
              </button>
              <button
                onClick={() => setActiveDatasheet(null)}
                className="text-xs text-white/60 hover:text-white"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
