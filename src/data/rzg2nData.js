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
  Share2,
} from 'lucide-react';

export const RZG2N_PLATFORM_DATA = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/#hardware-platforms' },
    { label: 'RZ/G2N', path: null },
  ],
  hero: {
    tag: 'EMBEDDED HARDWARE PLATFORMS',
    family: 'RZ/G2N SBC',
    familyClassName: 'font-bold text-sm text-[#14213D] dark:text-[#F8FAFC]',
    title: 'RZ/G2N-Based Platform',
    subtitle: '4K Multimedia & Embedded Computing',
    description:
      'Embedded computing platform based on the Renesas RZ/G2N processor, designed for multimedia, video processing, display and connected industrial applications.',
    image: '/images/RZG2N.png',
    fallbackImage: '/images/RZG2N.png',
    imageAlt: 'AIEGX RZ/G2N Multimedia & 4K Video Single Board Computer',
    highlights: [
      'Dual-core Arm Cortex-A57 at 1.5 GHz with Cortex-R7 at 800 MHz',
      '3D graphics, 4K H.264 encoding/decoding and H.265 decoding',
      'PCIe Gen 2, USB 3.0 and Gigabit Ethernet support',
    ],
  },
  capabilities: [
    {
      id: 'cpu',
      title: 'Arm Cortex-A57 Processing',
      description: 'Dual-core Cortex-A57 at 1.5 GHz with Cortex-R7 at 800 MHz.',
      icon: Cpu,
    },
    {
      id: 'graphics',
      title: '3D Graphics & Video Processing',
      description: '3D graphics, 4K H.264 encoding/decoding and H.265 decoding.',
      icon: Monitor,
    },
    {
      id: 'connectivity',
      title: 'High-Speed Connectivity',
      description: 'PCIe Gen 2, USB 3.0 and Gigabit Ethernet support.',
      icon: Network,
    },
    {
      id: 'linux',
      title: 'Embedded Linux Support',
      description: 'Renesas RZ/G Verified Linux Package for embedded Linux development.',
      icon: Terminal,
    },
    {
      id: 'multimedia',
      title: 'Multimedia Interfaces',
      description: 'Camera, display and audio interface capabilities for multimedia applications.',
      icon: Clock,
    },
  ],
  architecture: {
    subheading: 'INTEGRATED BOARD ARCHITECTURE',
    title: 'Hardware',
    titleGradient: 'Architecture',
    statement: 'Single-Board Computer (SBC)',
    statementTitle: 'Single-Board Computer (SBC)',
    statementDescription:
      'RZ/G2N processor mounted directly on the main PCB, with onboard memory and peripheral interfaces.',
  },
  availableHardware: [
    {
      id: 'rz-g2n-sbc',
      name: 'RZ/G2N SBC',
      badge: 'SINGLE-BOARD COMPUTER',
      description:
        'RZ/G2N-based single-board computer for multimedia, display and embedded computing applications.',
      image: '/images/RZG2N.png',
      fallbackImage: '/images/RZG2N.png',
      imageAlt: 'RZ/G2N Single Board Computer Development Platform',
      features: [
        'Integrated RZ/G2N single-board design.',
        'Onboard memory and peripheral connectivity.',
        'Suitable for product development, prototyping and system integration.',
        'Embedded Linux support (Renesas RZ/G Verified Linux Package).',
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
    id: 'industrial-control-hmi',
    title: 'Industrial Control & HMI',
    subtitle: 'Operator interfaces for industrial equipment and machine control.',
    description: 'Operator interfaces for industrial equipment and machine control.',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    icon: Eye,
  },
  {
    id: 'smart-building-systems',
    title: 'Smart Building Systems',
    subtitle: 'Building monitoring and control interfaces (HVAC, lighting, access, energy).',
    description: 'Building monitoring and control interfaces (HVAC, lighting, access, energy).',
    image: '/images/Electric Bus at Smart City Stop.png',
    icon: Monitor,
  },
  {
    id: 'video-monitoring-systems',
    title: 'Video Monitoring Systems',
    subtitle: 'IP camera streaming, recording and surveillance applications.',
    description: 'IP camera streaming, recording and surveillance applications.',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Network,
  },
  {
    id: 'industrial-process-monitoring',
    title: 'Industrial Process Monitoring',
    subtitle: 'Process visualization, data acquisition and real-time monitoring systems.',
    description: 'Process visualization, data acquisition and real-time monitoring systems.',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    icon: Activity,
  },
  {
    id: 'digital-information-displays',
    title: 'Digital Information Displays',
    subtitle: 'Multimedia and passenger information display systems.',
    description: 'Multimedia and passenger information display systems.',
    image: '/images/Modern Train Cockpit Control Panel.png',
    icon: Train,
  },
];

export const RZG2N_PRODUCT_DETAILS = {
  sbc: {
    slug: 'sbc',
    category: 'SINGLE-BOARD COMPUTER',
    title: 'RZ/G2N SBC',
    shortDescription:
      'RZ/G2N-based single-board computer integrating the processor and peripheral connectivity for embedded computing applications.',
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
        model3d: '/models/G2N_SBC.glb',
        alt: 'RZ/G2N SBC 3D Model',
      },
    ],
    heroHighlights: [
      {
        heading: 'Integrated SBC Design',
        label: 'Integrated SBC Design',
        description: 'Compact, ready-to-use board for rapid application development.',
        icon: Layers,
      },
      {
        heading: 'Onboard Memory & Storage',
        label: 'Onboard Memory & Storage',
        description: 'Integrated memory and storage for embedded applications.',
        icon: HardDrive,
      },
      {
        heading: 'Board Interfaces & Expansion',
        label: 'Board Interfaces & Expansion',
        description: 'I/O interfaces for display, networking and system expansion.',
        icon: Share2,
      },
      {
        heading: 'Embedded Linux Support',
        label: 'Embedded Linux Support',
        description: 'Renesas RZ/G Verified Linux Package (VLP) and Yocto-based BSP.',
        icon: Terminal,
      },
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
      { feature: 'Processor', details: 'Renesas RZ/G2N' },
      { feature: 'CPU', details: 'Dual-core Arm® Cortex®-A57 @ 1.5 GHz + Cortex®-R7 @ 800 MHz' },
      { feature: '3D Graphics', details: 'Integrated 3D graphics support' },
      { feature: 'Video Decoding', details: 'H.264 and H.265 hardware decoding, up to 4K' },
      { feature: 'Video Encoding', details: 'H.264 hardware encoding, up to 4K' },
      { feature: 'Onboard Memory', details: 'Integrated system memory' },
      { feature: 'Onboard Storage', details: 'eMMC (capacity varies by configuration)' },
      { feature: 'External Storage', details: 'SD card slot (supports Linux boot)' },
      { feature: 'Ethernet', details: '1 × Gigabit Ethernet (RJ45)' },
      { feature: 'Display Interfaces', details: 'HDMI and LVDS' },
      { feature: 'Touch Interface', details: 'Display touch connector (for LCD touch panel)' },
      { feature: 'Audio Interface', details: 'Headphone and microphone' },
      { feature: 'UART', details: 'UART connectors' },
      { feature: 'SATA', details: 'SATA connector (Serial ATA, Gen3)' },
      { feature: 'PCI Express (PCIe)', details: 'PCIe Gen2.0 interface (RZ/G2N supports up to two ×1 channels; board configuration may vary)' },
      { feature: 'Expansion Interfaces', details: 'CAN, SPI, GPIO and I²C interfaces' },
      { feature: 'Software Support', details: 'Renesas RZ/G Verified Linux Package (VLP)' },
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
