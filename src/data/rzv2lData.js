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
  Database,
  Code,
  Share2,
} from 'lucide-react';

export const RZV2L_PLATFORM_DATA = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Platforms', path: '/#hardware-platforms' },
    { label: 'RZ/V2L', path: null },
  ],
  hero: {
    tag: 'EMBEDDED HARDWARE PLATFORMS',
    family: 'RZ/V2L-Based Hardware',
    familyClassName: 'font-bold text-sm text-[#14213D] dark:text-[#F8FAFC]',
    title: 'RZ/V2L-Based Platforms',
    subtitle: 'Edge AI & Vision Processing',
    description:
      'Embedded hardware platforms based on the Renesas RZ/V2L processor, designed for camera-based AI, image processing and connected embedded applications.',
    image: '/images/RZV2L.png',
    fallbackImage: '/images/RZV2L.png',
    imageAlt: 'AIEGX RZ/V2L Low-Power Vision AI Single Board Computer',
    highlights: [
      'Renesas DRP-AI accelerator — 0.5 TOPS',
      'Dual-core Arm Cortex-A55 up to 1.2 GHz with Cortex-M33',
      'MIPI CSI-2 camera interface with software-based ISP support',
      'Integrated 3D graphics and H.264 video codec',
    ],
  },
  capabilities: [
    {
      id: 'ai-engine',
      title: 'DRP-AI Acceleration',
      description:
        'Integrated DRP-AI accelerator delivering up to 0.5 TOPS for edge AI inference.',
      icon: Zap,
    },
    {
      id: 'cpu',
      title: 'Arm Cortex-A55 Processing',
      description:
        'Up to dual-core Arm Cortex-A55 at 1.2 GHz, with Cortex-M33 for real-time processing.',
      icon: Cpu,
    },
    {
      id: 'camera',
      title: 'Camera Interface Support',
      description:
        '4-lane MIPI CSI-2 camera input for embedded vision applications.',
      icon: Eye,
    },
    {
      id: 'power',
      title: 'Graphics & Multimedia',
      description:
        'Arm Mali-G31 GPU with H.264 video encoding and decoding.',
      icon: Activity,
    },
    {
      id: 'lifecycle',
      title: 'Embedded Linux Support',
      description:
        'Renesas Linux software packages for embedded application and AI development.',
      icon: Clock,
    },
  ],
  architecture: [
    {
      id: 'rz-v2l-som',
      title: 'RZ/V2L SMARC SoM',
      subtitle: 'Processor, memory and core interfaces.',
      description: 'Processor, memory and core interfaces.',
      image: '/images/SOM.png',
      fallbackImage: '/images/SOM.png',
      imageAlt: 'RZ/V2L SMARC SoM',
    },
    {
      id: 'rz-v2l-carrier-board',
      title: 'RZ/V2L Carrier Board',
      subtitle: 'Application interfaces and expansion.',
      description: 'Application interfaces and expansion.',
      image: '/images/RZV2L-Carrier_Board.png',
      fallbackImage: '/images/RZV2L-Carrier_Board.png',
      imageAlt: 'RZ/V2L Carrier Board',
    },
    {
      id: 'rz-v2l-complete-sbc',
      title: 'Complete Computing Platform',
      subtitle: 'SMARC SoM + Carrier Board',
      description: 'SMARC SoM + Carrier Board',
      image: '/images/RZV2L-SBC.png',
      fallbackImage: '/images/RZV2L-SBC.png',
      imageAlt: 'RZ/V2L Complete Computing Platform',
    },
  ],
  availableHardware: [
    {
      id: 'rz-v2l-som',
      name: 'RZ/V2L SMARC SoM',
      badge: 'SYSTEM ON MODULE',
      description:
        'Compact processor module integrating RZ/V2L processing and AI acceleration for embedded system development.',
      image: '/images/SOM.png',
      fallbackImage: '/images/SOM.png',
      imageAlt: 'RZ/V2L SMARC System on Module',
      features: [
        'Renesas RZ/V2L processor with Arm Cortex-A55',
        'Integrated DRP-AI accelerator',
        'Compact SMARC form factor',
        'Designed for integration with a compatible carrier board',
      ],
      route: '/products/rzv2l/som',
      featured: true,
    },
    {
      id: 'rz-v2l-sbc',
      name: 'RZ/V2L Carrier Board',
      badge: 'CARRIER BOARD',
      description:
        'Carrier board providing connectivity and expansion interfaces for the RZ/V2L SMARC SoM.',
      image: '/images/RZV2L-Carrier_Board.png',
      fallbackImage: '/images/RZV2L-Carrier_Board.png',
      imageAlt: 'RZ/V2L Carrier Board',
      features: [
        'Supports the RZ/V2L SMARC SoM',
        'External connectivity and expansion',
        'Application-specific peripheral interfaces',
        'Supports embedded system development and integration',
      ],
      route: '/products/rzv2l/complete-sbc/',
      featured: false,
    },
    {
      id: 'rz-v2l-dev-kit',
      name: 'RZ/V2L Embedded Computing Platform',
      badge: 'EMBEDDED COMPUTING PLATFORM',
      description:
        'Complete computing platform combining the RZ/V2L SMARC SoM and carrier board for embedded AI and vision applications.',
      image: '/images/RZV2L-SBC.png',
      fallbackImage: '/images/RZV2L-SBC.png',
      imageAlt: 'RZ/V2L Embedded Computing Platform',
      features: [
        'Integrated SMARC SoM and carrier-board configuration',
        'DRP-AI acceleration for edge AI applications',
        'Connectivity and expansion for system integration',
        'Embedded Linux development support',
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
    title: 'Driver Monitoring System (DMS)',
    subtitle: 'Real-time driver state monitoring for safer and more secure operation.',
    description: 'Real-time driver state monitoring for safer and more secure operation.',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    icon: Eye,
  },
  {
    id: 'industrial-inspection',
    title: 'Smart Vision Cameras',
    subtitle: 'AI-based object detection and monitoring.',
    description: 'AI-based object detection and monitoring.',
    image: '/images/Automated Gear Inspection Line.png',
    icon: ShieldCheck,
  },
  {
    id: 'face-recognition',
    title: 'Industrial Vision Inspection',
    subtitle: 'Visual defect detection and quality inspection.',
    description: 'Visual defect detection and quality inspection.',
    image: '/images/AI City Surveillance Camera.png',
    icon: Activity,
  },
  {
    id: 'medical-vision',
    title: 'AI-Enabled HMI',
    subtitle: 'Interactive displays with embedded AI capabilities.',
    description: 'Interactive displays with embedded AI capabilities.',
    image: '/images/Futuristic Mountain Surveillance HUD.png',
    icon: Cpu,
  },
  {
    id: 'mobile-robotics',
    title: 'Vision-Based Robotics',
    subtitle: 'Object detection and obstacle awareness.',
    description: 'Object detection and obstacle awareness.',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Network,
  },
];

export const RZV2L_PRODUCT_DETAILS = {
  som: {
    slug: 'som',
    category: 'SYSTEM ON MODULE',
    title: 'RZ/V2L SMARC SoM',
    badge: 'System on Module',
    featuresList: [
      'Compact SMARC module design for integration with a compatible carrier board.',
      'Integrated DRP-AI acceleration for embedded vision applications.',
      'Onboard memory and eMMC storage for embedded applications.',
      'Renesas RZ/V2L verified Linux package for embedded development.',
    ],
    shortDescription:
      'Compact SMARC System on Module integrating the Renesas RZ/V2L processor, memory and essential interfaces for embedded AI and vision applications.',
    introParagraph:
      'The AIEGX RZ/V2L SoM is an industrial-grade System on Module built to the standardized SMARC 2.1 specification (82 mm × 50 mm). Powered by the Renesas RZ/V2L processor, it combines dual Arm Cortex-A55 cores clocked at 1.2 GHz, a 200 MHz Cortex-M33 real-time core, and Renesas proprietary DRP-AI neural accelerator delivering 0.5 TOPS/W power efficiency. With onboard LPDDR4 memory with In-line ECC, high-speed eMMC flash, dual Gigabit Ethernet PHYs, and 4-lane MIPI CSI-2 camera input with built-in ISP, the module allows OEMs to rapidly design custom carrier baseboards while eliminating high-speed circuit design complexity.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2L', path: '/products/rzv2l' },
      { label: 'RZ/V2L SMARC SoM', path: null },
    ],
    gallery: [
      {
        src: '/images/SOM.png',
        alt: 'RZ/V2L SMARC SoM Hardware View',
      },
    ],
    heroHighlights: [
      {
        heading: 'SMARC Module Design',
        title: 'SMARC Module Design',
        label: 'SMARC Module Design',
        description: 'Compact processor module for integration with a compatible carrier board.',
        icon: Layers,
      },
      {
        heading: 'Integrated DRP-AI',
        title: 'Integrated DRP-AI',
        label: 'Integrated DRP-AI',
        description: 'Dedicated AI acceleration for embedded vision applications.',
        icon: Cpu,
      },
      {
        heading: 'Onboard Memory & Storage',
        title: 'Onboard Memory & Storage',
        label: 'Onboard Memory & Storage',
        description: 'Integrated memory and eMMC storage for embedded applications.',
        icon: Database,
      },
      {
        heading: 'Embedded Linux Support',
        title: 'Embedded Linux Support',
        label: 'Embedded Linux Support',
        description: 'Renesas RZ/V Verified Linux Package for embedded development.',
        icon: Code,
      },
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
      { feature: 'Processor', details: 'Renesas RZ/V2L' },
      { feature: 'CPU', details: 'Up to dual-core Arm Cortex-A55 @ 1.2 GHz + Cortex-M33 @ 200 MHz' },
      { feature: 'RAM', details: 'Up to 2 GB DDR4' },
      { feature: 'eMMC', details: 'Default: 8 GB, configurable capacity' },
      { feature: 'GPU', details: 'Arm Mali-G31' },
      { feature: 'AI Accelerator', details: 'Integrated DRP-AI (0.5 TOPS)' },
      { feature: 'Video Codec', details: 'H.264 encoding and decoding, up to Full HD (1920 × 1080) @ 30 fps' },
      { feature: 'Display Interface', details: 'MIPI DSI' },
      { feature: 'Camera Interface', details: 'MIPI CSI-2' },
      { feature: 'Ethernet', details: 'Dual Gigabit Ethernet' },
      { feature: 'USB', details: 'USB 2.0' },
      { feature: 'Serial Interfaces', details: 'UART, SPI, I²C' },
      { feature: 'Form Factor', details: 'SMARC SoM' },
      { feature: 'Software Support', details: 'Renesas RZ/V Verified Linux Package' },
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
    category: 'CARRIER BOARD',
    title: 'RZ/V2L Carrier Board',
    badge: 'Carrier Board',
    featuresList: [
      'Renesas RZ/V2L MPU with 64-bit ARM®v8.2A, ARM®v8-M & 3D-Graphics Engine with Arm®Mali™ Architecture',
      'Supports dual Cortex-A55 & Single Cortex-M33',
      'Supports original DRP-AI for accelerating AI processing',
      'Up to 2GB DDR4 Memory',
      'Supports 1 × 1Gb Ethernet',
      '16GB eMMC Flash (Expandable)',
    ],
    shortDescription:
      'Integrated carrier board platform based on the Renesas RZ/V2L processor for edge vision AI and smart camera systems.',
    introParagraph:
      'The AIEGX RZ/V2L Carrier Board is a production-ready carrier board powered by the Renesas RZ/V2L processor. Featuring dual 64-bit Arm Cortex-A55 cores clocked at 1.2 GHz, a 200 MHz Cortex-M33 real-time core, and Renesas proprietary DRP-AI neural engine with 0.5 TOPS/W power efficiency, it enables real-time edge vision processing under 4 Watts. Complete with 4-lane MIPI CSI-2 camera interface with built-in ISP, dual Gigabit Ethernet, HDMI display output, and industrial fieldbuses, it delivers a turnkey platform ready for immediate software engineering and industrial deployment.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2L', path: '/products/rzv2l' },
      { label: 'RZ/V2L Carrier Board', path: null },
    ],
    gallery: [
      {
        src: '/images/RZV2L-Carrier_Board.png',
        model3d: '/models/Carrier_Board.glb',
        alt: 'RZ/V2L Carrier Board 3D Model',
      },
    ],
    heroHighlights: [
      { label: 'Dual Cortex-A55 @ 1.2GHz + M33', icon: Cpu },
      { label: 'DRP-AI Dedicated AI Engine', icon: Zap },
      { label: '4-Lane MIPI CSI-2 with ISP', icon: Eye },
      { label: 'Sub-4W Fanless TDP', icon: Activity },
    ],
    overviewSummary:
      'Engineered for power-constrained vision AI applications, the RZ/V2L Carrier Board delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
    overviewParagraphs: [
      'Engineered for power-constrained vision AI applications, the RZ/V2L Carrier Board delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
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
      { feature: 'Supported SoM', details: 'RZ/V2L SoM' },
      { feature: 'Onboard Storage (SoM)', details: 'eMMC (on SMARC SoM)' },
      { feature: 'Ethernet', details: '2 × Gigabit Ethernet (1 Gbps, RJ45)' },
      { feature: 'USB 0', details: 'USB 2.0 Type-A' },
      { feature: 'USB 1', details: 'Micro-USB' },
      { feature: 'External Storage', details: 'SD card slot (microSD)' },
      { feature: 'Camera Interface', details: 'MIPI CSI-2 (4-lane) connector' },
      { feature: 'Display Interface', details: 'MIPI DSI (4-lane) connector' },
      { feature: 'PMOD Connectors', details: 'GPIO, I²C and SPI' },
      { feature: 'Serial Expansion', details: 'UART (via dedicated connector)' },
      { feature: 'Debug Interface', details: 'Debug UART (console)' },
      { feature: 'PWM / Backlight', details: 'PWM and Backlight GPIOs (via connector)' },
      { feature: 'Audio Interface', details: 'Speaker and Mic' },
      { feature: 'Reset', details: 'Reset button (system reset)' },
      { feature: 'Real-Time Clock (RTC)', details: 'Onboard RTC' },
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
          'Comprehensive Development Kit user manual, hardware reference manual, DRP-AI application notes, and BSP customization guides.',
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete RZ/V2L Carrier Board platform technical specifications and electrical parameters.',
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
    category: 'EMBEDDED COMPUTING PLATFORM',
    title: 'RZ/V2L Embedded Computing Platform',
    badge: 'Embedded Computing Platform',
    shortDescription:
      'Complete embedded computing platform combining the RZ/V2L SMARC SoM and carrier board for AI, vision processing and embedded applications.',
    introParagraph:
      'The AIEGX RZ/V2L Development Kit is a comprehensive evaluation and prototyping platform engineered to fast-track embedded vision and AI application development. Combining the RZ/V2L compute core with a full-featured expansion carrier board, pre-tested Sony IMX MIPI CSI-2 camera module, HDMI display output, power supply, and debugging accessories, it provides engineers with everything required to evaluate the Renesas DRP-AI neural accelerator on day one. Pre-loaded with bootable Linux BSP images and DRP-AI Translator sample models, it enables immediate benchmark testing and custom software development.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2L', path: '/products/rzv2l' },
      { label: 'RZ/V2L Embedded Computing Platform', path: null },
    ],
    gallery: [
      {
        src: '/images/RZV2L-SBC.png',
        model3d: '/models/G2L-V2L_SBC.glb',
        alt: 'RZ/V2L Embedded Computing Platform Evaluation Platform',
        caption: 'Embedded Computing Platform — Carrier Baseboard & Compute Core',
      },
      {
        src: '/images/RZV2L.png',
        alt: 'RZ/V2L Embedded Computing Platform Interfaces',
        caption: 'Hardware Assembly — Dual GbE, USB & Debugging Headers',
      },
      {
        src: '/images/rz-v2l-hd.jpg',
        alt: 'RZ/V2L Core Compute Module with Camera',
        caption: 'Core Compute — Renesas RZ/V2L with DRP-AI & MIPI Camera',
      },
    ],
    heroHighlights: [
      {
        heading: 'Integrated Hardware Platform',
        title: 'Integrated Hardware Platform',
        label: 'Integrated Hardware Platform',
        description: 'SMARC SoM and carrier board combined into a complete computing system.',
        icon: Layers,
      },
      {
        heading: 'DRP-AI Acceleration',
        title: 'DRP-AI Acceleration',
        label: 'DRP-AI Acceleration',
        description: 'Integrated AI acceleration for embedded vision applications.',
        icon: Cpu,
      },
      {
        heading: 'Connectivity & Expansion',
        title: 'Connectivity & Expansion',
        label: 'Connectivity & Expansion',
        description: 'Board-level interfaces for peripheral connectivity and system integration.',
        icon: Share2,
      },
      {
        heading: 'Embedded Linux Support',
        title: 'Embedded Linux Support',
        label: 'Embedded Linux Support',
        description: 'Renesas RZ/V Verified Linux Package for embedded development.',
        icon: Code,
      },
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
      { feature: 'Processor', details: 'Renesas RZ/V2L' },
      { feature: 'CPU', details: 'Up to dual-core Arm Cortex-A55 @ 1.2 GHz + Cortex-M33 @ 200 MHz' },
      { feature: 'RAM', details: 'Up to 2 GB DDR4' },
      { feature: 'Onboard Storage', details: 'eMMC (on SMARC SoM; default 8 GB, configurable capacity)' },
      { feature: 'GPU', details: 'Arm Mali-G31' },
      { feature: 'AI Accelerator', details: 'Integrated DRP-AI (0.5 TOPS)' },
      { feature: 'Video Codec', details: 'H.264 encoding and decoding, up to Full HD (1920 × 1080) @ 30 fps' },
      { feature: 'Ethernet', details: '2 × Gigabit Ethernet (1 Gbps, RJ45)' },
      { feature: 'USB0', details: 'USB 2.0' },
      { feature: 'USB1', details: 'Micro-USB' },
      { feature: 'External Storage', details: 'SD card slot (microSD)' },
      { feature: 'Camera Interface', details: 'MIPI CSI-2 (4-lane) connector' },
      { feature: 'Display Interface', details: 'MIPI DSI (4-lane) connector' },
      { feature: 'PMOD Connectors', details: 'GPIO, I²C and SPI' },
      { feature: 'UART Interface', details: 'UART (via dedicated connector)' },
      { feature: 'Debug Interface', details: 'Debug UART' },
      { feature: 'PWM / Backlight', details: 'PWM and backlight GPIO connector' },
      { feature: 'Audio Interface', details: 'Speaker and Mic' },
      { feature: 'Real-Time Clock (RTC)', details: 'Onboard RTC' },
      { feature: 'Reset', details: 'Reset button' },
      { feature: 'Software Support', details: 'Renesas RZ/V Verified Linux Package' },
      { feature: 'Hardware Configuration', details: 'RZ/V2L SMARC SoM + Carrier Board' },
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

RZV2L_PRODUCT_DETAILS['carrier-board'] = RZV2L_PRODUCT_DETAILS.sbc;
