import {
  Cpu,
  Monitor,
  Network,
  Terminal,
  Clock,
  ShieldCheck,
  Activity,
  Eye,
  Train,
  Layers,
  HardDrive,
  Plug,
} from 'lucide-react';

export const RZG2N_PLATFORM_DATA = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/#hardware-platforms' },
    { label: 'RZ/G2N', path: null },
  ],
  hero: {
    tag: 'Renesas RZ/G2N Architecture',
    family: 'Renesas RZ/G2N Family',
    title: 'RZ/G2N',
    subtitle: 'Multimedia & 4K Video Processing Platform',
    description:
      'High-performance 64-bit Arm Cortex-A57 embedded computing platform engineered for 4K video surveillance, edge video analytics, intelligent digital signage, and high-throughput industrial gateways with long-term Linux support.',
    image: '/images/RZG2N.png',
    fallbackImage: '/images/RZG2N.png',
    imageAlt: 'AIEGX RZ/G2N Multimedia & 4K Video Single Board Computer',
    highlights: [
      'Dual Arm Cortex-A57 @ 1.5 GHz + Real-Time Cortex-R7',
      'PowerVR 3D GPU & 4K H.265/H.264 Hardware VPU',
      'PCIe Gen2, USB 3.0 & Dual Gigabit Ethernet',
    ],
  },
  capabilities: [
    {
      id: 'cpu',
      title: 'Dual Cortex-A57 (Up to 1.5 GHz)',
      description: '64-bit Arm compute delivering ~12.3k DMIPS paired with a real-time Cortex-R7 core.',
      icon: Cpu,
    },
    {
      id: 'graphics',
      title: 'PowerVR 3D GPU & 4K VPU',
      description: 'Hardware 4K H.265/H.264 video decode and PowerVR Series 6XE (GE7800) 3D graphics.',
      icon: Monitor,
    },
    {
      id: 'connectivity',
      title: 'PCIe Gen2, Dual GbE & USB 3.0',
      description: 'High-speed expansion bus, dual Gigabit Ethernet ports, and USB 3.0 Host/OTG.',
      icon: Network,
    },
    {
      id: 'linux',
      title: 'CIP Linux & Yocto BSP',
      description: 'Production-ready Yocto reference BSP and Civil Infrastructure Platform (CIP) LTS kernel.',
      icon: Terminal,
    },
    {
      id: 'lifecycle',
      title: '10+ Year Product Longevity',
      description: 'Super Long-Term Support (SLTS) program guaranteeing 10+ year availability.',
      icon: Clock,
    },
  ],
  architecture: {
    title: 'Hardware',
    titleGradient: 'Architecture',
    statement: 'Processor is mounted directly on the main PCB.',
  },
  availableHardware: [
    {
      id: 'rz-g2n-sbc',
      name: 'RZ/G2N SBC (Development Platform)',
      badge: 'Single Board Computer',
      description:
        'High-performance turnkey single-board computer engineered for multimedia, 4K video processing, and edge computing.',
      image: '/images/RZG2N.png',
      fallbackImage: '/images/RZG2N.png',
      imageAlt: 'RZ/G2N Single Board Computer Development Platform',
      features: [
        'Renesas RZ/G2N Processor (Dual A57 @ 1.5GHz)',
        '4K H.265/H.264 Hardware Video Processing',
        'PCIe Gen2, USB 3.0 & Dual Gigabit Ethernet',
        'Production-Ready Yocto Linux BSP',
      ],
      route: '/products/rz-g2n/sbc',
      featured: true,
    },
  ],
  whyPoints: [
    {
      title: 'High-Compute 64-bit Arm Performance',
      description:
        'Dual Cortex-A57 cores operating at 1.5 GHz deliver ~12.3k DMIPS for computationally demanding edge processing.',
    },
    {
      title: 'Hardware 4K Video & 3D Acceleration',
      description:
        'Integrated 4K UHD H.265/H.264 VPU and PowerVR GE7800 GPU enable seamless real-time video analytics and fluid graphics.',
    },
    {
      title: 'High-Throughput Bus Connectivity',
      description:
        'Native PCIe Gen2 (1-lane), USB 3.0 Host, and dual Gigabit Ethernet provide high-bandwidth connectivity for cameras and sensors.',
    },
    {
      title: 'End-to-End ECC Memory Reliability',
      description:
        'Full ECC protection on L1/L2 caches and external LPDDR4 memory guarantees maximum uptime in critical environments.',
    },
    {
      title: '10+ Years CIP Linux Support',
      description:
        'Backed by Renesas and Civil Infrastructure Platform (CIP) Super Long-Term Support for 10+ years of security maintenance.',
    },
    {
      title: 'Turnkey Single-Board Computer Design',
      description:
        'Complete, validated SBC eliminates complex carrier board integration and accelerates commercial time-to-market.',
    },
  ],
};

export const RZG2N_APPLICATIONS = [
  {
    id: 'video-surveillance',
    title: 'Video Surveillance & Analytics',
    subtitle: '4K Security Monitoring & Edge Vision',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    icon: Eye,
  },
  {
    id: 'digital-signage',
    title: 'Intelligent Digital Signage',
    subtitle: 'Multi-Display 4K Commercial Displays',
    image: '/images/Electric Bus at Smart City Stop.png',
    icon: Monitor,
  },
  {
    id: 'industrial-gateway',
    title: 'Industrial IoT Gateway',
    subtitle: 'High-Throughput Edge Computing & Telemetry',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Network,
  },
  {
    id: 'smart-traffic',
    title: 'Smart City Traffic Monitoring',
    subtitle: 'Automated Plate & Vehicle Analytics',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    icon: Activity,
  },
  {
    id: 'fleet-telemetry',
    title: 'Transportation & Fleet Telemetry',
    subtitle: 'In-Vehicle Infotainment & Transit Control',
    image: '/images/Modern Train Cockpit Control Panel.png',
    icon: Train,
  },
];

export const RZG2N_PRODUCT_DETAILS = {
  sbc: {
    slug: 'sbc',
    category: 'HIGH-PERFORMANCE SBC',
    title: 'RZ/G2N SBC (Development Platform)',
    shortDescription:
      'High-performance turnkey single-board computer powered by the Renesas RZ/G2N processor for 4K multimedia, video analytics, and edge IoT gateways.',
    introParagraph:
      'The AIEGX RZ/G2N SBC is a production-grade single-board computer powered by the Renesas RZ/G2N microprocessor featuring dual 64-bit Arm Cortex-A57 cores clocked at 1.5 GHz, a real-time Cortex-R7 core, and hardware-accelerated 4K H.265/H.264 video decoding. With onboard LPDDR4 with full ECC support, PCIe Gen2, dual Gigabit Ethernet, USB 3.0, and rich display interfaces, it delivers a turnkey platform ready for immediate software engineering and industrial deployment.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/G2N', path: '/products/rz-g2n' },
      { label: 'RZ/G2N SBC', path: null },
    ],
    gallery: [
      {
        src: '/images/RZG2N.png',
        alt: 'RZ/G2N SBC Development Platform View',
        caption: 'Turnkey SBC — Pre-Assembled & Validated',
      },
      {
        src: '/images/capabilities/camera-multimedia.png',
        alt: 'RZ/G2N Multimedia & 4K Video Architecture',
        caption: 'Multimedia Engine — 4K H.265/H.264 VPU & PowerVR 3D GPU',
      },
    ],
    heroHighlights: [
      { label: 'Dual Cortex-A57 @ 1.5GHz', icon: Cpu },
      { label: '4K H.265/H.264 VPU', icon: Monitor },
      { label: 'PCIe Gen2 & USB 3.0', icon: Plug },
      { label: 'CIP Linux & Yocto BSP', icon: Terminal },
    ],
    overviewSummary:
      'Engineered for multimedia-rich and compute-intensive embedded applications, the RZ/G2N SBC delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
    overviewParagraphs: [
      'Engineered for multimedia-rich and compute-intensive embedded applications, the RZ/G2N SBC delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
      'Pre-loaded with verified Yocto Linux images featuring hardware-accelerated GStreamer pipelines and industrial driver stacks, it enables immediate edge analytics without extensive hardware bring-up overhead.',
    ],
    overviewMetrics: [
      { label: 'Architecture', value: 'Complete Single Board Computer' },
      { label: 'Processor', value: 'Renesas RZ/G2N (Dual A57 @ 1.5GHz)' },
      { label: 'Memory / Storage', value: 'Up to 4 GB LPDDR4 (ECC) + eMMC' },
      { label: 'Readiness', value: 'Pre-Flashed Yocto / CIP Linux' },
    ],
    keyFeaturesTable: [
      { label: 'Processor', description: 'Dual Arm Cortex-A57 @ 1.5 GHz + Cortex-R7 @ 200 MHz' },
      { label: '3D Graphics & Video', description: 'PowerVR Series 6XE (GE7800) GPU + 4K H.265/H.264 VPU' },
      { label: 'Memory', description: 'Up to 4 GB LPDDR4 with Full ECC Support' },
      { label: 'Storage', description: '16 GB / 32 GB eMMC 5.1 Flash + MicroSD Slot' },
      { label: 'Display Support', description: 'HDMI 1.4b (up to 4K / 1080p60) & Dual-Channel LVDS' },
      { label: 'High-Speed Expansion', description: 'PCIe Gen2 (1-lane), USB 3.0 Host, Dual GbE' },
      { label: 'Software Support', description: 'Yocto Linux BSP with Civil Infrastructure Platform (CIP) LTS' },
      { label: 'Industrial Grade', description: 'Designed for 24/7 continuous operation (-40°C to +85°C optional)' },
    ],
    keyFeatures: [
      { title: 'Dual Arm Cortex-A57 @ 1.5GHz', icon: Cpu },
      { title: '4K H.265/H.264 Hardware VPU', icon: Monitor },
      { title: 'PowerVR Series 6XE GPU', icon: Layers },
      { title: 'Up to 4 GB LPDDR4 with ECC', icon: HardDrive },
      { title: 'PCIe Gen2 High-Speed Bus', icon: Plug },
      { title: 'Dual Gigabit Ethernet & USB 3.0', icon: Network },
      { title: 'Yocto Linux & CIP SLTS Support', icon: Terminal },
      { title: 'Industrial Grade Reliability', icon: ShieldCheck },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/G2N (Dual Arm Cortex-A57 @ 1.5 GHz, Cortex-R7 @ 200 MHz)' },
      { parameter: 'Memory', specification: 'Up to 4 GB LPDDR4-3200 (with ECC support)' },
      { parameter: 'Storage', specification: '16 GB / 32 GB eMMC 5.1 Flash, QSPI NOR Flash, MicroSD Slot' },
      { parameter: 'Video Decoding', specification: '4K UHD H.265 (HEVC) & H.264 (AVC) Hardware Decode' },
      { parameter: 'Video Encoding', specification: 'Full HD H.264 Hardware Encode' },
      { parameter: '3D Graphics', specification: 'PowerVR GE7800 (Imagination Technologies Series 6XE)' },
      { parameter: 'Display Outputs', specification: '1 × HDMI 1.4b (up to 4K / 1080p60), 1 × Dual-Channel LVDS' },
      { parameter: 'Camera Interface', specification: '1 × 4-lane MIPI CSI-2 with Hardware ISP' },
      { parameter: 'Networking', specification: '2 × 10/100/1000 Mbps Gigabit Ethernet (RJ45)' },
      { parameter: 'USB Ports', specification: '1 × USB 3.0 Type-A Host, 2 × USB 2.0 Host / OTG' },
      { parameter: 'PCI Express', specification: '1 × PCIe Gen2 (1-lane) Expansion Bus' },
      { parameter: 'Industrial Fieldbus', specification: '2 × CAN / CAN-FD, 4 × High-Speed UART, 2 × I2C, 2 × SPI' },
      { parameter: 'Architecture', specification: 'High-Performance Single Board Computer (SBC)' },
      { parameter: 'Operating Temperature', specification: '-40°C to +85°C Industrial Grade (opt. -20°C to +70°C)' },
      { parameter: 'OS Support', specification: 'Verified Linux Package (VLP), Yocto Project LTS, CIP Linux SLTS' },
    ],
    interfaces: [
      { label: 'Ethernet', description: '2 × 10/100/1000 Mbps Gigabit Ethernet (RJ45)' },
      { label: 'USB', description: '1 × USB 3.0 Type-A Host, 2 × USB 2.0 Host / OTG' },
      { label: 'PCIe', description: 'PCIe Gen2 (1-lane) High-Speed Serial Expansion' },
      { label: 'HDMI', description: 'HDMI 1.4b Output (up to 4K UHD / 1080p60)' },
      { label: 'LVDS', description: 'Dual-Channel Industrial Display Panel Header' },
      { label: 'MIPI-CSI2', description: '4-Lane High-Speed Camera Serial Interface' },
      { label: 'CAN', description: '2 × CAN / CAN-FD Industrial Fieldbus' },
      { label: 'UART', description: 'Multi-Channel Serial Debug & Field Headers' },
      { label: 'GPIO', description: 'Configurable Industrial Digital I/O Headers' },
      { label: 'I2C & SPI', description: 'Standard & Fast-Mode Peripheral and Sensor Buses' },
    ],
    softwareSupport: [
      {
        label: 'Yocto Linux BSP',
        description:
          'Verified Linux Package (VLP) with pre-configured Yocto layers, recipes, and bootable reference images.',
      },
      {
        label: 'Linux Kernel Support',
        description:
          'Mainline-aligned LTS Linux kernel and Civil Infrastructure Platform (CIP) Super Long-Term Support with 10+ year security maintenance.',
      },
      {
        label: 'Video & GPU Drivers',
        description:
          'Hardware-accelerated GStreamer plugins for 4K H.265/H.264 VPU and OpenGL ES / OpenCL drivers for PowerVR GPU.',
      },
      {
        label: 'Device Drivers',
        description:
          'Pre-validated drivers across dual Gigabit Ethernet, PCIe Gen2, USB 3.0, MIPI CSI-2, and CAN-FD.',
      },
      {
        label: 'Development Resources',
        description:
          'Cross-compilation SDK toolchains, container runtimes (Docker), Qt/Wayland HMI demos, and debugging utilities.',
      },
      {
        label: 'Technical Documentation',
        description:
          'Comprehensive SBC user manual, hardware reference manual, schematic checklist, and BSP customization guides.',
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete RZ/G2N SBC platform technical specifications and electrical parameters.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Quick Start & Setup',
        description: 'Out-of-the-box evaluation setup, connector pinouts, and serial console bring-up guide.',
        fileUrl: null,
      },
    ],
  },
};
