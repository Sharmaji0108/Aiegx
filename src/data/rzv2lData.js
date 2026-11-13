import {
  Cpu,
  Network,
  Terminal,
  Clock,
  ShieldCheck,
  Activity,
  Eye,
  HardDrive,
  Zap,
  Maximize2,
  Layers,
  Plug,
  FlaskConical,
} from 'lucide-react';

export const RZV2L_PLATFORM_DATA = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/#hardware-platforms' },
    { label: 'RZ/V2L', path: null },
  ],
  hero: {
    tag: 'Renesas RZ/V2L Architecture',
    family: 'Renesas RZ/V2L Family',
    title: 'RZ/V2L',
    subtitle: 'Low-Power Vision AI Platform',
    description:
      'Embedded vision AI processing platform powered by the Renesas RZ/V2L MPU with dedicated DRP-AI neural accelerator. Engineered for real-time edge AI inference, smart cameras, and low-power computer vision without requiring active cooling.',
    image: '/images/RZV2L.png',
    fallbackImage: '/images/RZV2L.png',
    imageAlt: 'AIEGX RZ/V2L Low-Power Vision AI Single Board Computer',
    highlights: [
      'Renesas DRP-AI Engine (0.5 TOPS/W Efficiency)',
      'Dual Arm Cortex-A55 @ 1.2 GHz + Cortex-M33',
      '4-Lane MIPI CSI-2 with Hardware ISP',
      'Sub-4W Thermal Design Power (Fanless)',
    ],
  },
  capabilities: [
    {
      id: 'ai-engine',
      title: 'DRP-AI Dedicated Neural Engine',
      description:
        'Renesas proprietary DRP-AI accelerator providing 0.5 TOPS/W power-efficient neural network inference for real-time vision.',
      icon: Zap,
    },
    {
      id: 'cpu',
      title: 'Dual Cortex-A55 + Cortex-M33',
      description:
        'Dual 64-bit Arm Cortex-A55 cores @ 1.2 GHz for Linux application logic paired with Cortex-M33 real-time core.',
      icon: Cpu,
    },
    {
      id: 'camera',
      title: '4-Lane MIPI CSI-2 with ISP',
      description:
        'High-speed camera input with on-chip image signal processor (ISP) supporting HDR and noise reduction.',
      icon: Eye,
    },
    {
      id: 'power',
      title: 'Sub-4W Fanless Operation',
      description:
        'Ultra-low power envelope enabling sealed fanless enclosures and battery-operated edge devices.',
      icon: Activity,
    },
    {
      id: 'lifecycle',
      title: '10+ Year Product Longevity',
      description:
        'Backed by Renesas Super Long-Term Support (SLTS) program guaranteeing 10+ year availability.',
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
      id: 'rz-v2l-som',
      name: 'RZ/V2L SoM',
      badge: 'System on Module',
      description:
        'Compact computing module based on the Renesas RZ/V2L platform.',
      image: '/images/rz-v2l-hd.jpg',
      fallbackImage: '/images/rz-v2l.png',
      imageAlt: 'RZ/V2L SMARC System on Module',
      features: [
        'Renesas RZ/V2L (Dual A55 @ 1.2GHz + M33)',
        'DRP-AI Dedicated AI Engine (0.5 TOPS/W)',
        'Compact SMARC 2.1 Form Factor',
        'Production-Ready Yocto / CIP Linux BSP',
      ],
      route: '/products/rzv2l/som',
      featured: true,
    },
    {
      id: 'rz-v2l-sbc',
      name: 'RZ/V2L SBC',
      badge: 'Single Board Computer',
      description:
        'Integrated single-board computing platform based on the Renesas RZ/V2L processor.',
      image: '/images/RZV2L.png',
      fallbackImage: '/images/sbc-front-transparent.png',
      imageAlt: 'RZ/V2L Single Board Computer',
      features: [
        'Turnkey Single Board Computer',
        'Dual Gigabit Ethernet & Dual USB 2.0',
        '4-Lane MIPI CSI-2 with Built-in ISP',
        'Sub-4W Fanless Power Profile',
      ],
      route: '/products/rzv2l/complete-sbc/',
      featured: false,
    },
    {
      id: 'rz-v2l-dev-kit',
      name: 'RZ/V2L Development Kit',
      badge: 'Development Platform',
      description:
        'Complete development solution for evaluating and developing RZ/V2L-based embedded and AI applications.',
      image: '/images/sbc-front-transparent.png',
      fallbackImage: '/images/RZV2L.png',
      imageAlt: 'RZ/V2L Development Kit Evaluation Platform',
      features: [
        'Complete Evaluation & Dev Solution',
        'MIPI CSI-2 Camera Module Included',
        'Full I/O Breakout & Expansion Headers',
        'Pre-Loaded DRP-AI Demos & Linux BSP',
      ],
      route: '/products/rzv2l/development-kit',
      featured: false,
    },
  ],
  whyPoints: [
    {
      title: 'Dedicated DRP-AI Neural Engine',
      description:
        'Renesas proprietary Dynamically Reconfigurable Processor + AI accelerator delivers high-speed neural network inference with outstanding 0.5 TOPS/W power efficiency.',
    },
    {
      title: 'On-Chip Image Signal Processing (ISP)',
      description:
        'Integrated hardware ISP handles color correction, bad pixel replacement, noise reduction, and HDR directly on-chip without consuming CPU cycles.',
    },
    {
      title: 'Sub-4W Fanless Power Efficiency',
      description:
        'Advanced silicon architecture operates under a sub-4W thermal design power, enabling completely silent, maintenance-free, passively cooled enclosures.',
    },
    {
      title: 'Dual Gigabit Ethernet & Industrial I/O',
      description:
        'Dual Gigabit Ethernet ports, CAN-FD, high-speed UARTs, USB 2.0, and rich industrial headers simplify integration into factory automation and telemetry systems.',
    },
    {
      title: '10+ Years CIP Linux & Yocto BSP',
      description:
        'Backed by Renesas and Civil Infrastructure Platform (CIP) Super Long-Term Support for 10+ years of security maintenance and stability.',
    },
    {
      title: 'Modular & Turnkey Hardware Choices',
      description:
        'Comprehensive hardware lineup spanning modular SMARC SoMs, turnkey single-board computers, and complete evaluation kits accelerates design to mass production.',
    },
  ],
};

export const RZV2L_APPLICATIONS = [
  {
    id: 'smart-cameras',
    title: 'Smart Vision & AI Cameras',
    subtitle: 'Edge Object Detection & Counting',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    icon: Eye,
  },
  {
    id: 'industrial-inspection',
    title: 'Automated Optical Inspection (AOI)',
    subtitle: 'Real-Time Defect Detection on Production Lines',
    image: '/images/Automated Gear Inspection Line.png',
    icon: ShieldCheck,
  },
  {
    id: 'face-recognition',
    title: 'Biometric Access & Smart Terminals',
    subtitle: 'Low-Latency Facial Recognition & Presence',
    image: '/images/AI City Surveillance Camera.png',
    icon: Activity,
  },
  {
    id: 'medical-vision',
    title: 'Medical Diagnostic Devices',
    subtitle: 'Portable Point-of-Care Imaging & Analysis',
    image: '/images/Futuristic Mountain Surveillance HUD.png',
    icon: Cpu,
  },
  {
    id: 'mobile-robotics',
    title: 'Compact Autonomous Robotics',
    subtitle: 'Visual SLAM & Obstacle Avoidance for AMRs',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Network,
  },
];

export const RZV2L_PRODUCT_DETAILS = {
  som: {
    slug: 'som',
    category: 'SMARC 2.1 SYSTEM ON MODULE',
    title: 'RZ/V2L SoM',
    badge: 'System on Module',
    shortDescription:
      'Compact computing module based on the Renesas RZ/V2L platform with dedicated DRP-AI neural core in a standard SMARC 2.1 form factor.',
    introParagraph:
      'The AIEGX RZ/V2L SoM is an industrial-grade System on Module built to the standardized SMARC 2.1 specification (82 mm × 50 mm). Powered by the Renesas RZ/V2L processor, it combines dual Arm Cortex-A55 cores clocked at 1.2 GHz, a 200 MHz Cortex-M33 real-time core, and Renesas proprietary DRP-AI neural accelerator delivering 0.5 TOPS/W power efficiency. With onboard LPDDR4 memory with In-line ECC, high-speed eMMC flash, dual Gigabit Ethernet PHYs, and 4-lane MIPI CSI-2 camera input with built-in ISP, the module allows OEMs to rapidly design custom carrier baseboards while eliminating high-speed circuit design complexity.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2L', path: '/products/rzv2l' },
      { label: 'RZ/V2L SoM', path: null },
    ],
    gallery: [
      {
        src: '/images/rz-v2l-hd.jpg',
        alt: 'RZ/V2L SMARC System on Module Hardware View',
        caption: 'RZ/V2L SMARC SoM — Renesas MPU, DRP-AI & LPDDR4 Core',
      },
      {
        src: '/images/rz-v2l.png',
        alt: 'RZ/V2L SoM SMARC Edge Connector',
        caption: 'SMARC 2.1 Interface — 314-Pin Gold Finger Edge',
      },
      {
        src: '/images/capabilities/camera-multimedia.png',
        alt: 'RZ/V2L Vision AI & DRP-AI Architecture',
        caption: 'Vision AI Engine — Renesas DRP-AI & 4-Lane MIPI CSI-2 with ISP',
      },
    ],
    heroHighlights: [
      { label: 'Dual Cortex-A55 @ 1.2GHz + M33', icon: Cpu },
      { label: 'DRP-AI Dedicated AI Engine', icon: Zap },
      { label: 'SMARC 2.1 Standard Form Factor', icon: Layers },
      { label: 'Sub-4W Fanless Power Profile', icon: Activity },
    ],
    overviewSummary:
      'The RZ/V2L SoM provides a compact, energy-efficient vision AI building block in a standard SMARC form factor, combining 64-bit Arm compute with dedicated neural acceleration.',
    overviewParagraphs: [
      'The RZ/V2L SoM serves as the modular compute foundation for industrial vision equipment manufacturers developing smart cameras, biometric access controllers, and intelligent robotics. By isolating complex high-speed LPDDR4 routing, power sequencing, and neural processor layout onto a pre-validated SMARC module, engineering teams significantly reduce hardware development risk and accelerate time to market.',
      'Powered by the Renesas RZ/V2L processor with Arm Cortex-A55 application cores and a dedicated Cortex-M33 real-time co-processor, the module delivers responsive Linux vision pipelines and deterministic fieldbus control concurrently. Sub-4W typical thermal dissipation enables fanless sealed enclosures suitable for harsh industrial deployments.',
    ],
    overviewMetrics: [
      { label: 'Form Factor', value: 'SMARC 2.1 (82 × 50 mm)' },
      { label: 'Processor Core', value: 'Arm Cortex-A55 + M33' },
      { label: 'AI Accelerator', value: 'Renesas DRP-AI (0.5 TOPS/W)' },
      { label: 'Operating Temp', value: '-40°C to +85°C (optional)' },
    ],
    keyFeaturesTable: [
      { label: 'Renesas RZ/V2L', description: 'Dual Cortex-A55 (1.2 GHz) + Cortex-M33 (200 MHz)' },
      { label: 'AI Accelerator', description: 'Renesas DRP-AI Dedicated Neural Engine (0.5 TOPS/W)' },
      { label: 'Memory', description: 'Up to 4 GB LPDDR4 with In-line ECC Support' },
      { label: 'Storage', description: '16 GB / 32 GB eMMC 5.1 Flash + QSPI NOR Flash' },
      { label: 'Form Factor', description: 'Standard SMARC 2.1 Form Factor (82 mm × 50 mm)' },
      { label: 'Camera Interface', description: '4-Lane MIPI CSI-2 with Hardware Image Signal Processor (ISP)' },
      { label: 'Display Support', description: '1 × HDMI (up to 1080p60) & 1 × 4-lane MIPI-DSI' },
      { label: 'Industrial Grade', description: 'Designed for -40°C to +85°C 24/7 fanless operation' },
    ],
    keyFeatures: [
      { title: 'Dual Arm Cortex-A55 @ 1.2GHz', icon: Cpu },
      { title: 'DRP-AI Dedicated AI Engine', icon: Zap },
      { title: 'Standard SMARC 2.1 Size', icon: Maximize2 },
      { title: 'Up to 4 GB LPDDR4 with ECC', icon: HardDrive },
      { title: '4-Lane MIPI CSI-2 with ISP', icon: Eye },
      { title: 'Dual Gigabit Ethernet PHYs', icon: Network },
      { title: 'Yocto Linux & CIP SLTS BSP', icon: Terminal },
      { title: 'Industrial Grade Reliability', icon: ShieldCheck },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/V2L (Dual Arm Cortex-A55 @ 1.2 GHz, Cortex-M33 @ 200 MHz)' },
      { parameter: 'AI Engine', specification: 'Renesas DRP-AI (Dynamically Reconfigurable Processor + AI Engine @ 0.5 TOPS/W)' },
      { parameter: 'Form Factor', specification: 'SMARC 2.1 Standard Module (82 mm × 50 mm, 314-pin MXM edge connector)' },
      { parameter: 'Memory', specification: 'Up to 4 GB LPDDR4-3200 (with In-line ECC support)' },
      { parameter: 'Storage', specification: '16 GB / 32 GB eMMC 5.1 Flash, QSPI NOR Flash' },
      { parameter: 'Camera Input', specification: '1 × 4-lane MIPI CSI-2 with Built-in Hardware ISP (Color correction, HDR)' },
      { parameter: 'Video Codec', specification: 'H.264 Video Encoder/Decoder (up to 1080p @ 60 fps)' },
      { parameter: '3D Graphics', specification: 'Arm Mali-G31 3D GPU (OpenGL ES 3.2, Vulkan 1.1)' },
      { parameter: 'Display Outputs', specification: '1 × HDMI (up to 1080p60 via SMARC), 1 × 4-lane MIPI-DSI' },
      { parameter: 'Networking', specification: '2 × 10/100/1000 Mbps Gigabit Ethernet (RGMII routed to SMARC edge)' },
      { parameter: 'USB Ports', specification: '1 × USB 2.0 Host, 1 × USB 2.0 OTG' },
      { parameter: 'Industrial Fieldbus', specification: '2 × CAN / CAN-FD, 4 × UART, 2 × I2C, 2 × SPI, GPIO' },
      { parameter: 'Power Consumption', specification: 'Sub-4W Typical TDP (Passive Fanless Cooling)' },
      { parameter: 'Operating Temp', specification: '-40°C to +85°C Industrial Grade (opt. -20°C to +70°C)' },
      { parameter: 'OS Support', specification: 'Verified Linux Package (VLP), Yocto Project LTS, CIP Linux SLTS' },
    ],
    interfaces: [
      { label: 'SMARC Connector', description: '314-pin MXM Edge Connector adhering to SMARC 2.1 Specification' },
      { label: 'MIPI CSI-2', description: '4-Lane Camera Serial Interface with Hardware ISP' },
      { label: 'Ethernet', description: '2 × 10/100/1000 Mbps Gigabit Ethernet RGMII channels' },
      { label: 'USB', description: '1 × USB 2.0 Host, 1 × USB 2.0 OTG Interface' },
      { label: 'Display Outputs', description: 'HDMI and 4-Lane MIPI DSI Video Interface Headers' },
      { label: 'CAN-FD', description: '2 × Flexible Data-Rate CAN Industrial Fieldbus' },
      { label: 'UART', description: '4 × High-Speed Serial Channels for Debug & Sensors' },
      { label: 'I2C & SPI', description: 'Multiple Synchronous Peripheral Buses for Industrial Sensors' },
      { label: 'GPIO', description: 'Configurable General Purpose Digital I/O Signals' },
      { label: 'Debug', description: 'JTAG and Serial Console Debug Signals' },
    ],
    softwareSupport: [
      {
        label: 'DRP-AI Translator & Tools',
        description:
          'Renesas DRP-AI Translator converting ONNX / PyTorch models to optimized DRP-AI binary code with automated quantization.',
      },
      {
        label: 'Yocto Linux BSP',
        description:
          'Verified Linux Package (VLP) with pre-configured Yocto layers, OpenCV acceleration, and bootable reference images.',
      },
      {
        label: 'Linux Kernel Support',
        description:
          'Mainline-aligned LTS Linux kernel and Civil Infrastructure Platform (CIP) Super Long-Term Support with 10+ year security maintenance.',
      },
      {
        label: 'Vision & Camera Drivers',
        description:
          'Pre-validated V4L2 drivers, ISP tuning utilities, and GStreamer pipelines for Sony/OnSemi MIPI CSI-2 image sensors.',
      },
      {
        label: 'Real-Time Subsystem',
        description:
          'FreeRTOS BSP for the Arm Cortex-M33 core with inter-processor communication (RPMsg) to the Linux host.',
      },
      {
        label: 'Design Documentation',
        description:
          'Comprehensive SMARC SoM user manual, carrier design guide, schematic checklist, and thermal design notes.',
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete RZ/V2L SoM technical specifications, pinout table, and electrical parameters.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Carrier Design Guide',
        description: 'SMARC carrier design guidelines, pin mapping, power sequencing, and schematic checklist.',
        fileUrl: null,
      },
    ],
  },
  sbc: {
    slug: 'sbc',
    category: 'SINGLE BOARD COMPUTER',
    title: 'RZ/V2L SBC',
    badge: 'Single Board Computer',
    shortDescription:
      'Integrated single-board computing platform based on the Renesas RZ/V2L processor for edge vision AI and smart camera systems.',
    introParagraph:
      'The AIEGX RZ/V2L SBC is a production-ready single-board computer powered by the Renesas RZ/V2L processor. Featuring dual 64-bit Arm Cortex-A55 cores clocked at 1.2 GHz, a 200 MHz Cortex-M33 real-time core, and Renesas proprietary DRP-AI neural engine with 0.5 TOPS/W power efficiency, it enables real-time edge vision processing under 4 Watts. Complete with 4-lane MIPI CSI-2 camera interface with built-in ISP, dual Gigabit Ethernet, HDMI display output, and industrial fieldbuses, it delivers a turnkey platform ready for immediate software engineering and industrial deployment.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2L', path: '/products/rzv2l' },
      { label: 'RZ/V2L SBC', path: null },
    ],
    gallery: [
      {
        src: '/images/RZV2L.png',
        alt: 'RZ/V2L SBC Development Platform View',
        caption: 'Turnkey SBC — Integrated Board & Industrial I/O',
      },
      {
        src: '/images/sbc-front-transparent.png',
        alt: 'RZ/V2L Board Top View',
        caption: 'Top Layout — Dual Ethernet, USB & Camera Ports',
      },
      {
        src: '/images/capabilities/camera-multimedia.png',
        alt: 'RZ/V2L Vision AI & DRP-AI Architecture',
        caption: 'Vision AI Engine — Renesas DRP-AI & 4-Lane MIPI CSI-2 with ISP',
      },
    ],
    heroHighlights: [
      { label: 'Dual Cortex-A55 @ 1.2GHz + M33', icon: Cpu },
      { label: 'DRP-AI Dedicated AI Engine', icon: Zap },
      { label: '4-Lane MIPI CSI-2 with ISP', icon: Eye },
      { label: 'Sub-4W Fanless TDP', icon: Activity },
    ],
    overviewSummary:
      'Engineered for power-constrained vision AI applications, the RZ/V2L SBC delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
    overviewParagraphs: [
      'Engineered for power-constrained vision AI applications, the RZ/V2L SBC delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
      'Pre-loaded with verified Yocto Linux images featuring DRP-AI Translator tools, OpenCV acceleration, and industrial driver stacks, it enables immediate edge analytics without extensive hardware bring-up overhead.',
    ],
    overviewMetrics: [
      { label: 'Architecture', value: 'Integrated Single Board Computer' },
      { label: 'Processor', value: 'Renesas RZ/V2L (Dual A55 + M33)' },
      { label: 'AI Accelerator', value: 'Renesas DRP-AI (0.5 TOPS/W)' },
      { label: 'Readiness', value: 'Pre-Flashed Yocto / CIP Linux' },
    ],
    keyFeaturesTable: [
      { label: 'Renesas RZ/V2L', description: 'Dual Cortex-A55 (1.2 GHz) + Cortex-M33 (200 MHz)' },
      { label: 'AI Accelerator', description: 'Renesas DRP-AI Dedicated Neural Engine (0.5 TOPS/W)' },
      { label: 'Memory', description: 'Up to 4 GB LPDDR4 Memory with In-line ECC' },
      { label: 'Storage', description: '16 GB / 32 GB eMMC 5.1 Flash + MicroSD Slot' },
      { label: 'Camera Interface', description: '4-Lane MIPI CSI-2 with Hardware Image Signal Processor (ISP)' },
      { label: 'Display & Multimedia', description: '1 × HDMI (up to 1080p60), 1 × MIPI-DSI, H.264 Video Codec' },
      { label: 'Rich I/O & Networking', description: 'Dual Gigabit Ethernet (RJ45), USB 2.0, CAN-FD, UART, I2C, SPI' },
      { label: 'Industrial Grade', description: 'Designed for 24/7 fanless operation (-40°C to +85°C optional)' },
    ],
    keyFeatures: [
      { title: 'Dual Arm Cortex-A55 @ 1.2GHz', icon: Cpu },
      { title: 'DRP-AI Dedicated AI Engine', icon: Zap },
      { title: '4-Lane MIPI CSI-2 with ISP', icon: Eye },
      { title: 'Up to 4 GB LPDDR4 Memory', icon: HardDrive },
      { title: 'Sub-4W Fanless Power Profile', icon: Activity },
      { title: 'Dual Gigabit Ethernet & USB 2.0', icon: Network },
      { title: 'Yocto Linux & CIP SLTS Support', icon: Terminal },
      { title: 'Industrial Grade Reliability', icon: ShieldCheck },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/V2L (Dual Arm Cortex-A55 @ 1.2 GHz, Cortex-M33 @ 200 MHz)' },
      { parameter: 'AI Engine', specification: 'Renesas DRP-AI (Dynamically Reconfigurable Processor + AI Engine @ 0.5 TOPS/W)' },
      { parameter: 'Memory', specification: 'Up to 4 GB LPDDR4-3200 (with In-line ECC support)' },
      { parameter: 'Storage', specification: '16 GB / 32 GB eMMC 5.1 Flash, QSPI NOR Flash, MicroSD Slot' },
      { parameter: 'Camera Input', specification: '1 × 4-lane MIPI CSI-2 with Built-in Hardware ISP (Color correction, HDR)' },
      { parameter: 'Video Codec', specification: 'H.264 Video Encoder/Decoder (up to 1080p @ 60 fps)' },
      { parameter: '3D Graphics', specification: 'Arm Mali-G31 3D GPU (OpenGL ES 3.2, Vulkan 1.1)' },
      { parameter: 'Display Outputs', specification: '1 × HDMI (up to 1080p60), 1 × 4-lane MIPI-DSI' },
      { parameter: 'Networking', specification: '2 × 10/100/1000 Mbps Gigabit Ethernet (RJ45)' },
      { parameter: 'USB Ports', specification: '1 × USB 2.0 Host Type-A, 1 × USB 2.0 OTG Micro-AB' },
      { parameter: 'Industrial Fieldbus', specification: '2 × CAN / CAN-FD, 4 × UART, 2 × I2C, 2 × SPI' },
      { parameter: 'Audio', specification: 'I2S Audio Interface / Headphone Audio Jack' },
      { parameter: 'Power Envelope', specification: 'Sub-4W Typical TDP (Passive Fanless Cooling)' },
      { parameter: 'Operating Temp', specification: '-40°C to +85°C Industrial Grade (opt. -20°C to +70°C)' },
      { parameter: 'OS Support', specification: 'Verified Linux Package (VLP), Yocto Project LTS, CIP Linux SLTS' },
    ],
    interfaces: [
      { label: 'Ethernet', description: '2 × 10/100/1000 Mbps Gigabit Ethernet (RJ45)' },
      { label: 'MIPI CSI-2', description: '4-Lane Camera Serial Interface with Hardware ISP' },
      { label: 'USB', description: '1 × USB 2.0 Type-A Host, 1 × USB 2.0 OTG Micro-AB' },
      { label: 'HDMI', description: 'HDMI Output (up to 1080p @ 60 fps)' },
      { label: 'MIPI DSI', description: '4-Lane Mobile Industry Processor Display Serial Interface' },
      { label: 'CAN-FD', description: '2 × Flexible Data-Rate CAN Industrial Fieldbus' },
      { label: 'UART', description: '4 × High-Speed Serial Channels for Debug & Sensors' },
      { label: 'I2C & SPI', description: 'Multiple Synchronous Peripheral Buses for Industrial Sensors' },
      { label: 'GPIO', description: 'Configurable General Purpose Digital I/O Headers' },
      { label: 'MicroSD', description: 'Push-Push MicroSD Card Slot for OS Boot & Storage' },
    ],
    softwareSupport: [
      {
        label: 'DRP-AI Translator & Tools',
        description:
          'Renesas DRP-AI Translator converting ONNX / PyTorch models to optimized DRP-AI binary code with automated quantization.',
      },
      {
        label: 'Yocto Linux BSP',
        description:
          'Verified Linux Package (VLP) with pre-configured Yocto layers, OpenCV acceleration, and bootable reference images.',
      },
      {
        label: 'Linux Kernel Support',
        description:
          'Mainline-aligned LTS Linux kernel and Civil Infrastructure Platform (CIP) Super Long-Term Support with 10+ year security maintenance.',
      },
      {
        label: 'Vision & Camera Drivers',
        description:
          'Pre-validated V4L2 drivers, ISP tuning utilities, and GStreamer pipelines for Sony/OnSemi MIPI CSI-2 image sensors.',
      },
      {
        label: 'Real-Time Subsystem',
        description:
          'FreeRTOS BSP for the Arm Cortex-M33 core with inter-processor communication (RPMsg) to the Linux host.',
      },
      {
        label: 'Technical Documentation',
        description:
          'Comprehensive SBC user manual, hardware reference manual, DRP-AI application notes, and BSP customization guides.',
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete RZ/V2L SBC platform technical specifications and electrical parameters.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Quick Start & Setup',
        description: 'Out-of-the-box evaluation setup, connector pinouts, camera connection, and serial console bring-up guide.',
        fileUrl: null,
      },
    ],
  },
  'dev-kit': {
    slug: 'dev-kit',
    category: 'DEVELOPMENT PLATFORM',
    title: 'RZ/V2L Development Kit',
    badge: 'Development Platform',
    shortDescription:
      'Complete development solution for evaluating and developing RZ/V2L-based embedded and AI applications.',
    introParagraph:
      'The AIEGX RZ/V2L Development Kit is a comprehensive evaluation and prototyping platform engineered to fast-track embedded vision and AI application development. Combining the RZ/V2L compute core with a full-featured expansion carrier board, pre-tested Sony IMX MIPI CSI-2 camera module, HDMI display output, power supply, and debugging accessories, it provides engineers with everything required to evaluate the Renesas DRP-AI neural accelerator on day one. Pre-loaded with bootable Linux BSP images and DRP-AI Translator sample models, it enables immediate benchmark testing and custom software development.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2L', path: '/products/rzv2l' },
      { label: 'RZ/V2L Development Kit', path: null },
    ],
    gallery: [
      {
        src: '/images/sbc-front-transparent.png',
        alt: 'RZ/V2L Development Kit Evaluation Platform',
        caption: 'Development Kit — Carrier Baseboard & Compute Core',
      },
      {
        src: '/images/RZV2L.png',
        alt: 'RZ/V2L Development Kit Interfaces',
        caption: 'Hardware Assembly — Dual GbE, USB & Debugging Headers',
      },
      {
        src: '/images/rz-v2l-hd.jpg',
        alt: 'RZ/V2L Core Compute Module with Camera',
        caption: 'Core Compute — Renesas RZ/V2L with DRP-AI & MIPI Camera',
      },
    ],
    heroHighlights: [
      { label: 'Complete Out-of-the-Box Kit', icon: FlaskConical },
      { label: 'MIPI CSI-2 Camera Module Included', icon: Eye },
      { label: 'Full Expansion & Debug Headers', icon: Plug },
      { label: 'Pre-Flashed DRP-AI Vision Demos', icon: Terminal },
    ],
    overviewSummary:
      'The RZ/V2L Development Kit provides a complete turn-key solution for engineering teams evaluating DRP-AI neural acceleration, prototyping intelligent edge vision systems, and deploying production AI pipelines.',
    overviewParagraphs: [
      'The RZ/V2L Development Kit delivers a complete, lab-ready engineering package comprising the core Renesas RZ/V2L processor, high-definition Sony IMX MIPI CSI-2 camera module, and comprehensive peripheral breakout baseboard. Developers can evaluate object detection, facial recognition, and image classification algorithms within hours of unboxing.',
      'Shipped with a pre-configured MicroSD card containing bootable Yocto Linux, OpenCV hardware acceleration, and the Renesas DRP-AI Translator toolsuite, the kit eliminates hardware bring-up friction and provides verified reference source code for immediate customization.',
    ],
    overviewMetrics: [
      { label: 'Kit Content', value: 'Board + Camera + Power + Cables' },
      { label: 'AI Acceleration', value: 'DRP-AI (0.5 TOPS/W)' },
      { label: 'Camera Sensor', value: 'Sony IMX MIPI CSI-2 Included' },
      { label: 'Software Stack', value: 'Pre-Loaded Yocto Linux Demos' },
    ],
    keyFeaturesTable: [
      { label: 'Compute Core', description: 'Renesas RZ/V2L (Dual Cortex-A55 @ 1.2 GHz + Cortex-M33)' },
      { label: 'AI Acceleration', description: 'Renesas DRP-AI Neural Engine (0.5 TOPS/W Efficiency)' },
      { label: 'Camera Module', description: 'Sony IMX MIPI CSI-2 Camera Module Included in Kit' },
      { label: 'Memory & Storage', description: 'Up to 4 GB LPDDR4 + 16 GB eMMC + Pre-Flashed MicroSD' },
      { label: 'Display Output', description: '1 × Full-Size HDMI (up to 1080p60) & MIPI-DSI Header' },
      { label: 'Expansion Headers', description: '40-Pin GPIO, PMOD, High-Speed UART, CAN-FD, I2C, SPI' },
      { label: 'Networking & USB', description: 'Dual RJ45 Gigabit Ethernet, USB 2.0 Host & OTG' },
      { label: 'Out-of-Box Readiness', description: 'Includes 12V Power Supply, USB Debug Cable & Quick Start Guide' },
    ],
    keyFeatures: [
      { title: 'Renesas RZ/V2L Compute Core', icon: Cpu },
      { title: 'DRP-AI Dedicated AI Engine', icon: Zap },
      { title: 'MIPI CSI-2 Camera Included', icon: Eye },
      { title: 'Full I/O Expansion Headers', icon: Plug },
      { title: 'Dual Gigabit Ethernet', icon: Network },
      { title: 'HDMI Display Output', icon: Layers },
      { title: 'Turnkey Evaluation Kit', icon: FlaskConical },
      { title: 'Yocto Linux & DRP-AI BSP', icon: Terminal },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/V2L (Dual Arm Cortex-A55 @ 1.2 GHz, Cortex-M33 @ 200 MHz)' },
      { parameter: 'AI Accelerator', specification: 'Renesas DRP-AI Engine @ 0.5 TOPS/W (INT8 / FP16 Quantization)' },
      { parameter: 'Memory', specification: '2 GB / 4 GB LPDDR4-3200 with In-line ECC' },
      { parameter: 'Storage', specification: '16 GB eMMC 5.1 Flash, MicroSD Card Slot (Pre-loaded with Linux OS)' },
      { parameter: 'Camera Module', specification: 'High-Resolution Sony IMX MIPI CSI-2 Camera with Ribbon Cable' },
      { parameter: 'Display Outputs', specification: '1 × HDMI Type-A (1080p60), 1 × 4-lane MIPI DSI FPC connector' },
      { parameter: 'Networking', specification: '2 × 10/100/1000 Mbps Gigabit Ethernet (RJ45 with status LEDs)' },
      { parameter: 'USB Ports', specification: '1 × USB 2.0 Host Type-A, 1 × USB 2.0 OTG Micro-AB' },
      { parameter: 'Expansion Headers', specification: '40-pin GPIO expansion header (Raspberry Pi compatible pinout)' },
      { parameter: 'Industrial Fieldbus', specification: '1 × CAN-FD with onboard transceiver, 2 × High-Speed UART' },
      { parameter: 'Debug Interface', specification: 'Onboard USB-to-UART bridge for serial console logging & JTAG' },
      { parameter: 'Power Supply', specification: '12V DC / 2A Universal Power Adapter included' },
      { parameter: 'Kit Inclusions', specification: 'RZ/V2L Board, MIPI Camera, Power Adapter, USB Cable, MicroSD Card' },
      { parameter: 'Operating Temp', specification: '0°C to +70°C Commercial / -40°C to +85°C Industrial option' },
      { parameter: 'OS & Software', specification: 'Pre-flashed Yocto Linux BSP with DRP-AI Translator sample applications' },
    ],
    interfaces: [
      { label: 'Camera Input', description: 'Dedicated MIPI CSI-2 FPC connector with included Sony IMX camera' },
      { label: 'HDMI Output', description: 'Full-size HDMI 1.4b port supporting up to 1080p @ 60 fps' },
      { label: 'Ethernet', description: '2 × 10/100/1000 Mbps Gigabit Ethernet ports (RJ45)' },
      { label: 'USB Ports', description: '1 × USB 2.0 Host Type-A, 1 × USB 2.0 Micro-AB OTG port' },
      { label: 'Serial Console', description: 'Micro-USB port with onboard FTDI UART bridge for plug-and-play console' },
      { label: '40-Pin Header', description: 'General Purpose Digital I/O, I2C, SPI, UART, PWM signals' },
      { label: 'CAN-FD', description: '3-Pin terminal block for flexible data-rate CAN industrial bus' },
      { label: 'MIPI DSI', description: '4-Lane display serial interface header for touch panel LCDs' },
      { label: 'MicroSD', description: 'High-speed MicroSD card socket for boot image and storage' },
      { label: 'Power Input', description: 'DC barrel jack (12V / 2A nominal input)' },
    ],
    softwareSupport: [
      {
        label: 'DRP-AI Translator & Model Zoo',
        description:
          'Comprehensive toolchain converting PyTorch and ONNX deep learning models to DRP-AI binaries with pre-trained vision demos.',
      },
      {
        label: 'Yocto Linux BSP',
        description:
          'Verified Linux Package (VLP) with pre-configured Yocto layers, GStreamer camera pipelines, and OpenCV acceleration.',
      },
      {
        label: 'Reference Applications',
        description:
          'Ready-to-run sample applications for real-time object detection (YOLO), face recognition, pose estimation, and OCR.',
      },
      {
        label: 'Camera Tuning Utilities',
        description:
          'ISP tuning tools and V4L2 capture pipelines optimized for included Sony IMX image sensors.',
      },
      {
        label: 'Quick Start Software',
        description:
          'Pre-flashed MicroSD card with automated boot script, web-based demonstration dashboard, and diagnostic utilities.',
      },
      {
        label: 'Documentation & Schematics',
        description:
          'Complete development kit user guide, carrier board schematics, bill of materials (BOM), and mechanical CAD files.',
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete RZ/V2L Development Kit platform specifications and peripheral reference.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Quick Start & Setup',
        description: 'Step-by-step kit bring-up, camera connection, serial console access, and running DRP-AI demos.',
        fileUrl: null,
      },
      {
        id: 'quick-start',
        title: 'Quick Start Guide',
        category: 'Getting Started',
        description: 'Fast 5-minute setup checklist to power on and run pre-loaded object recognition models.',
        fileUrl: null,
      },
    ],
  },
};
