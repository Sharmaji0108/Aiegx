import {
  Cpu,
  Monitor,
  Network,
  Terminal,
  Clock,
  CircuitBoard,
  Layers,
  HardDrive,
  Maximize2,
  Plug,
  ShieldCheck,
  Usb,
  Radio,
  Cable,
  Sliders,
  Activity,
  Wrench,
  BookOpen,
  FileCode2,
  CheckCircle2,
  Eye,
  Train,
  Factory,
  Share2,
} from 'lucide-react';

export const RZG2L_PLATFORM_DATA = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/#hardware-platforms' },
    { label: 'RZ/G2L', path: null },
  ],
  hero: {
    tag: 'Renesas RZ/G2L Architecture',
    title: 'RZ/G2L',
    subtitle: 'Embedded Control & HMI Platform',
    description:
      'Power-efficient 64-bit Arm Cortex-A55 embedded computing platform engineered for industrial Human-Machine Interfaces (HMI), real-time deterministic control, multi-display visualization, and long-lifecycle connected embedded systems.',
    image: '/images/RZG2L.png',
    fallbackImage: '/images/rz-g2l-hd.jpg',
    imageAlt: 'AIEGX RZ/G2L Embedded Control & HMI Hardware Module',
    highlights: [
      'Dual / Quad-class Arm Cortex-A55 + Real-Time Cortex-M33',
      'Hardware 3D GPU & Dual Display Pipeline',
      'Industrial Temperature & 10+ Year Supply',
    ],
  },
  capabilities: [
    {
      id: 'cpu',
      title: 'Quad Cortex-A55 (Up to 1.2 GHz)',
      description: '64-bit Arm processing paired with deterministic real-time control.',
      icon: Cpu,
    },
    {
      id: 'graphics',
      title: '2D/3D Graphics & Display Support',
      description: 'Mali-G31 3D GPU supporting HDMI, LVDS, and MIPI-DSI panels.',
      icon: Monitor,
    },
    {
      id: 'interfaces',
      title: 'Rich Industrial Interfaces',
      description: 'Dual GbE, CAN, USB, UART, SPI, I2C, and industrial GPIO.',
      icon: Network,
    },
    {
      id: 'linux',
      title: 'Linux / Yocto Support',
      description: 'Production-ready Yocto BSP, kernel drivers, and LTS support.',
      icon: Terminal,
    },
    {
      id: 'lifecycle',
      title: 'Long Product Lifecycle',
      description: 'Industrial longevity program built for 10+ year deployments.',
      icon: Clock,
    },
  ],
  architecture: [
    {
      id: 'smarc-som',
      title: 'SMARC SoM',
      subtitle: 'Processor, Memory, Core Interfaces',
      image: '/images/SOM.png',
      fallbackImage: '/images/aiegx-hardware-som-hd.jpg',
      imageAlt: 'RZ/G2L SMARC SoM hardware module',
    },
    {
      id: 'carrier-board',
      title: 'Carrier Board',
      subtitle: 'Application Interfaces and Expansion',
      image: '/images/RZV2L.png',
      fallbackImage: '/images/rz-g2l-hd.jpg',
      imageAlt: 'RZ/G2L Carrier Board hardware',
    },
    {
      id: 'complete-sbc',
      title: 'Complete SBC / Development Platform',
      subtitle: 'SMARC SoM + Carrier Board',
      image: '/images/sbc-platform-hd.jpg',
      fallbackImage: '/images/rz-g2l-hd.jpg',
      imageAlt: 'RZ/G2L Complete SBC Development Platform',
    },
  ],
  availableHardware: [
    {
      id: 'rz-g2l-smarc-som',
      name: 'RZ/G2L SMARC SoM',
      badge: 'Core Module',
      description:
        'Compact SMARC module with essential interfaces for industrial and HMI applications.',
      image: '/images/SOM.png',
      fallbackImage: '/images/aiegx-hardware-som-hd.jpg',
      imageAlt: 'RZ/G2L SMARC SoM Embedded Module',
      features: [
        'Renesas RZ/G2L Processor',
        'Optimized for HMI & Display',
        'Compact SMARC Form Factor',
        'Yocto Linux BSP',
      ],
      route: '/products/rz-g2l/smarc-som',
      featured: true,
    },
    {
      id: 'rz-g2l-carrier-board',
      name: 'RZ/G2L Carrier Board',
      badge: 'Expansion Baseboard',
      description:
        'Expansion board with additional interfaces and connectivity.',
      image: '/images/RZV2L.png',
      fallbackImage: '/images/rz-g2l-hd.jpg',
      imageAlt: 'RZ/G2L SMARC Carrier Board',
      features: [
        'Supports RZ/G2L SMARC SoM',
        'Rich I/O and Expansion',
        'Industrial Connectors',
        'Flexible Custom Designs',
      ],
      route: '/products/rz-g2l/carrier-board',
      featured: false,
    },
    {
      id: 'rz-g2l-sbc',
      name: 'RZ/G2L SBC (Development Platform)',
      badge: 'Complete Kit',
      description: 'Complete ready-to-use single-board computer.',
      image: '/images/sbc-platform-hd.jpg',
      fallbackImage: '/images/rz-g2l-hd.jpg',
      imageAlt: 'RZ/G2L Single Board Computer Development Platform',
      features: [
        'All Required Interfaces',
        'Ideal for Prototyping',
        'Validated Configuration',
        'Yocto Linux BSP',
      ],
      route: '/products/rz-g2l/sbc',
      featured: false,
    },
  ],
  whyPoints: [
    {
      title: 'Optimized for HMI and Display',
      description:
        'Integrated 3D graphics engine and multi-interface display controller drive responsive, crisp touch UIs.',
    },
    {
      title: 'Rich Industrial Interfaces',
      description:
        'Native Gigabit Ethernet, CAN bus, UART, SPI, I2C, USB, and GPIO simplify industrial peripheral connectivity.',
    },
    {
      title: 'Flexible Modular Architecture',
      description:
        'SMARC standard allows effortless scaling and carrier board customization without re-engineering core compute.',
    },
    {
      title: 'Linux / Yocto Long-Term Support',
      description:
        'Civil Infrastructure Platform (CIP) and Yocto LTS BSP backing ensures long-term security and software stability.',
    },
    {
      title: 'Proven and Reliable Platform',
      description:
        'Engineered for continuous 24/7 operation with optional industrial temperature tolerance from -40°C to +85°C.',
    },
    {
      title: 'Industrial and Transportation Applications',
      description:
        'Trusted across factory automation, railway cab displays, medical instrumentation, and smart infrastructure.',
    },
  ],
};

export const RZG2L_APPLICATIONS = [
  {
    id: 'industrial-hmi',
    title: 'Industrial HMI',
    subtitle: 'Operator Panels & Factory Control',
    image: '/images/Automated Gear Inspection Line.png',
    icon: Factory,
  },
  {
    id: 'railway-hmi',
    title: 'Railway HMI',
    subtitle: 'Cab Displays & Transit Telemetry',
    image: '/images/Modern Train Cockpit Control Panel.png',
    icon: Train,
  },
  {
    id: 'display-controller',
    title: 'Display Controller',
    subtitle: 'Digital Signage & Instrumentation',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    icon: Monitor,
  },
  {
    id: 'remote-monitoring',
    title: 'Remote Monitoring',
    subtitle: 'Automated Edge Diagnostics',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    icon: Eye,
  },
  {
    id: 'connected-systems',
    title: 'Connected Systems',
    subtitle: 'Industrial IoT & Smart Gateways',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Share2,
  },
];

export const RZG2L_PRODUCT_DETAILS = {
  'smarc-som': {
    slug: 'smarc-som',
    category: 'SMARC MODULE',
    title: 'RZ/G2L SMARC SoM',
    shortDescription:
      'Compact SMARC System-on-Module powered by the Renesas RZ/G2L processor for industrial HMI, display control, and connected edge applications.',
    introParagraph:
      'Designed around the Renesas RZ/G2L family, the AIEGX RZ/G2L SMARC SoM combines power-efficient 64-bit Arm Cortex-A55 compute, an integrated Cortex-M33 real-time core, and hardware-accelerated 2D/3D graphics inside a standardized 82mm × 50mm SMARC footprint. Engineered for rapid integration into custom carrier boards or off-the-shelf evaluation kits, it delivers industrial-grade reliability, dual Gigabit Ethernet, rich display outputs, and production-ready Yocto Linux BSP support.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/G2L', path: '/products/rz-g2l' },
      { label: 'RZ/G2L SMARC SoM', path: null },
    ],
    gallery: [
      {
        src: '/images/SOM.png',
        model3d: '/models/SOM.glb',
        alt: 'RZ/G2L SMARC SoM Interactive 3D Hardware View',
        caption: 'Interactive 3D View — Compact SMARC Module',
      },
      {
        src: '/images/aiegx-hardware-som-hd.jpg',
        alt: 'RZ/G2L SMARC SoM High-Density PCB Detail',
        caption: 'Module Detail — High-Speed Memory & Power Integrity',
      },
      {
        src: '/images/rz-g2l-hd.jpg',
        alt: 'RZ/G2L Processor & Carrier Integration View',
        caption: 'Platform View — Processor & Embedded Architecture',
      },
      {
        src: '/images/pcb-modules-transparent.png',
        alt: 'AIEGX SMARC SoM Hardware Profile',
        caption: 'Hardware Profile — Gold-Finger MXM 314-Pin Edge',
      },
    ],
    heroHighlights: [
      { label: 'Compact SMARC Form Factor', icon: Maximize2 },
      { label: 'Optimized for HMI & Display', icon: Monitor },
      { label: 'Rich Connectivity Interfaces', icon: Plug },
      { label: 'Yocto Linux BSP Support', icon: Terminal },
    ],
    overviewSummary:
      'The RZ/G2L SMARC SoM provides a compact and scalable solution for industrial and embedded applications. It combines the high-performance and low-power Renesas RZ/G2L processor with essential memory, storage and connectivity interfaces in a standard SMARC form factor, enabling faster development and reduced time to market.',
    overviewParagraphs: [
      'The RZ/G2L SMARC SoM serves as the modular compute foundation for industrial equipment manufacturers building responsive graphical HMIs, field controllers, and connected embedded nodes. By isolating complex high-speed LPDDR4 memory routing, power sequencing, and processor layout onto a pre-validated SMARC module, engineering teams significantly reduce PCB design risk and accelerate time to market.',
      'Powered by the Renesas RZ/G2L processor with Arm Cortex-A55 application cores and a dedicated Cortex-M33 real-time co-processor, the module handles Linux-based user interfaces, network stacks, and deterministic I/O simultaneously. Flexible eMMC flash and QSPI NOR storage options ensure reliable boot and robust firmware updates across industrial deployments.',
      'With native support for HDMI, LVDS, and MIPI-DSI displays alongside dual Gigabit Ethernet, USB 3.0/2.0, CAN, UART, I2C, and SPI interfaces, the RZ/G2L SMARC SoM integrates cleanly across industrial automation, railway passenger and cab HMIs, smart city gateways, and medical instrumentation.',
    ],
    overviewMetrics: [
      { label: 'Form Factor', value: 'SMARC (82 × 50 mm)' },
      { label: 'Processor Core', value: 'Arm Cortex-A55 + M33' },
      { label: 'Memory Bandwidth', value: 'Up to 4 GB LPDDR4' },
      { label: 'Operating Temp', value: '-40°C to +85°C (opt.)' },
    ],
    keyFeatures: [
      { title: 'Renesas RZ/G2L', subtitle: 'Quad Cortex-A55 (Up to 1.2 GHz)', icon: Cpu },
      { title: 'Up to 4 GB', subtitle: 'LPDDR4 Memory', icon: Layers },
      { title: 'eMMC / QSPI', subtitle: 'Storage Options', icon: HardDrive },
      { title: 'SMARC', subtitle: 'Form Factor', icon: Maximize2 },
      { title: 'Display Support', subtitle: 'HDMI, LVDS, MIPI-DSI', icon: Monitor },
      { title: 'Rich I/O Interfaces', subtitle: 'Ethernet, USB, CAN, UART, I2C, SPI', icon: Network },
      { title: 'Yocto Linux BSP', subtitle: 'and Reference Software', icon: Terminal },
      { title: 'Industrial Grade', subtitle: 'Design', icon: ShieldCheck },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/G2L (Quad Cortex-A55, up to 1.2 GHz)' },
      { parameter: 'Memory', specification: 'Up to 4 GB LPDDR4' },
      { parameter: 'Storage', specification: 'eMMC / QSPI (configurable)' },
      { parameter: 'Display', specification: 'HDMI, LVDS, MIPI-DSI' },
      { parameter: 'Ethernet', specification: '2 × Gigabit Ethernet' },
      { parameter: 'USB', specification: 'USB 3.0 / 2.0' },
      { parameter: 'Industrial I/O', specification: 'CAN, UART, GPIO, I2C, SPI' },
      { parameter: 'Form Factor', specification: 'SMARC' },
      { parameter: 'Operating Temp.', specification: '-40°C to +85°C (optional)' },
      { parameter: 'OS Support', specification: 'Yocto Linux, Reference BSP' },
    ],
    interfaces: [
      { name: 'Ethernet', detail: '2 × Gigabit Ethernet (TSN capable)', icon: Network },
      { name: 'USB', detail: 'USB 3.0 / USB 2.0 Host & OTG', icon: Usb },
      { name: 'CAN', detail: 'CAN / CAN-FD Industrial Fieldbus', icon: Radio },
      { name: 'UART', detail: 'Multi-channel High-Speed UART', icon: Terminal },
      { name: 'GPIO', detail: 'Configurable Digital I/O Lines', icon: Sliders },
      { name: 'I2C', detail: 'Standard & Fast-Mode Sensor Bus', icon: Activity },
      { name: 'SPI', detail: 'High-Speed Synchronous Serial', icon: Cable },
      { name: 'HDMI', detail: 'Full HD Digital Display Output', icon: Monitor },
      { name: 'LVDS', detail: 'Dual/Single Channel Panel Interface', icon: Layers },
      { name: 'MIPI-DSI', detail: '4-Lane High-Speed Embedded Display', icon: CircuitBoard },
    ],
    softwareSupport: [
      {
        title: 'Yocto Linux BSP',
        description:
          'Pre-configured Yocto Project layers, recipes, and reference images tailored for immediate bring-up.',
        icon: Layers,
      },
      {
        title: 'Linux Kernel Support',
        description:
          'Mainline-aligned LTS Linux kernel and Renesas CIP kernel maintenance with security patching.',
        icon: Terminal,
      },
      {
        title: 'Device Drivers',
        description:
          'Validated drivers for display panels, touch controllers, Gigabit Ethernet, CAN, USB, and storage.',
        icon: Cpu,
      },
      {
        title: 'Development Resources',
        description:
          'Cross-compilation SDKs, container runtimes, Qt/Wayland HMI demos, and debugging utilities.',
        icon: Wrench,
      },
      {
        title: 'Reference Software',
        description:
          'Production-ready bootloader (U-Boot / Trusted Firmware-A) and sample edge telemetry applications.',
        icon: FileCode2,
      },
      {
        title: 'Technical Documentation',
        description:
          'Step-by-step bring-up guides, pinmux tables, and hardware-software integration notes.',
        icon: BookOpen,
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Electrical characteristics, pinout mapping, thermal profiles, and ordering codes.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Integration Guide',
        description: 'Hardware setup, power-up sequencing, boot switch configuration, and bring-up instructions.',
        fileUrl: null,
      },
    ],
  },
  'carrier-board': {
    slug: 'carrier-board',
    category: 'CARRIER BOARD',
    title: 'RZ/G2L Carrier Board',
    shortDescription:
      'Industrial SMARC carrier baseboard engineered to expose full RZ/G2L I/O, display pipelines, and fieldbus expansion.',
    introParagraph:
      'The AIEGX RZ/G2L Carrier Board pairs directly with the RZ/G2L SMARC SoM to deliver production-grade industrial connectors, flexible display interfaces, ruggedized power input, and clean expansion headers for rapid prototyping or volume deployment.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/G2L', path: '/products/rz-g2l' },
      { label: 'RZ/G2L Carrier Board', path: null },
    ],
    gallery: [
      {
        src: '/images/RZV2L.png',
        alt: 'RZ/G2L Carrier Board Top View',
        caption: 'Baseboard View — Full SMARC Expansion',
      },
      {
        src: '/images/rz-g2l-hd.jpg',
        alt: 'RZ/G2L Carrier & SoM Assembly',
        caption: 'System Assembly — SoM Seated on Carrier',
      },
      {
        src: '/images/sbc-platform-hd.jpg',
        alt: 'RZ/G2L Industrial Connector Layout',
        caption: 'Connectors — Dual GbE, USB & Display I/O',
      },
    ],
    heroHighlights: [
      { label: 'Supports RZ/G2L SMARC SoM', icon: CircuitBoard },
      { label: 'Rich I/O and Expansion', icon: Plug },
      { label: 'Industrial Connectors', icon: Network },
      { label: 'Flexible Custom Designs', icon: Layers },
    ],
    overviewSummary:
      'Engineered to unlock every peripheral of the RZ/G2L SMARC SoM, the RZ/G2L Carrier Board breaks out dual RJ45 Gigabit Ethernet ports, USB 3.0/2.0 hosts, isolated CAN interfaces, serial UART headers, and multiple display interfaces on ruggedized connectors.',
    overviewParagraphs: [
      'Engineered to unlock every peripheral of the RZ/G2L SMARC SoM, the RZ/G2L Carrier Board breaks out dual RJ45 Gigabit Ethernet ports, USB 3.0/2.0 hosts, isolated CAN interfaces, serial UART headers, and multiple display interfaces on ruggedized connectors.',
      'Available as an off-the-shelf evaluation baseboard or as a customizable reference schematic package for custom enclosure footprints and specialized fieldbus requirements.',
    ],
    overviewMetrics: [
      { label: 'Module Socket', value: 'SMARC (314-pin)' },
      { label: 'Power Input', value: '12V – 24V DC Industrial' },
      { label: 'Display Outputs', value: 'HDMI, LVDS, MIPI-DSI' },
      { label: 'Customization', value: 'Schematic & Layout Ready' },
    ],
    keyFeatures: [
      { title: 'SMARC Compatible Socket', icon: CircuitBoard },
      { title: 'Dual RJ45 Gigabit Ethernet', icon: Network },
      { title: 'HDMI, LVDS & MIPI-DSI Headers', icon: Monitor },
      { title: 'USB 3.0 / 2.0 & M.2 Expansion', icon: Usb },
      { title: 'Isolated CAN, UART & GPIO', icon: Sliders },
      { title: 'Wide DC Power Input', icon: Activity },
      { title: 'Industrial Temperature Grade', icon: ShieldCheck },
      { title: 'Custom Carrier Reference Files', icon: Layers },
    ],
    specifications: [
      { parameter: 'Compatibility', specification: 'AIEGX RZ/G2L SMARC SoM' },
      { parameter: 'Ethernet', specification: '2 × RJ45 Gigabit Ethernet' },
      { parameter: 'Display Interfaces', specification: 'HDMI, LVDS Header, MIPI-DSI' },
      { parameter: 'USB', specification: 'USB 3.0 Host, USB 2.0 Host & OTG' },
      { parameter: 'Industrial I/O', specification: 'CAN, RS232/RS485 UART, GPIO, I2C, SPI' },
      { parameter: 'Storage Expansion', specification: 'MicroSD Card Slot' },
      { parameter: 'Power Input', specification: '12V–24V DC Terminal / Barrel' },
      { parameter: 'Operating Temperature', specification: '-40°C to +85°C (optional)' },
    ],
    interfaces: [
      { name: 'Ethernet', detail: '2 × RJ45 Gigabit Ethernet', icon: Network },
      { name: 'USB', detail: 'USB 3.0 / 2.0 Ports', icon: Usb },
      { name: 'CAN', detail: 'Industrial CAN Terminal', icon: Radio },
      { name: 'UART', detail: 'Debug & RS232/485 Serial', icon: Terminal },
      { name: 'GPIO', detail: '2.54mm Expansion Header', icon: Sliders },
      { name: 'I2C', detail: 'Touch & Sensor Expansion', icon: Activity },
      { name: 'SPI', detail: 'Peripheral Bus Header', icon: Cable },
      { name: 'HDMI', detail: 'Standard Type-A Output', icon: Monitor },
      { name: 'LVDS', detail: 'Backlight & Panel Header', icon: Layers },
      { name: 'MIPI-DSI', detail: 'Flat Flex Display Connector', icon: CircuitBoard },
    ],
    softwareSupport: [
      {
        title: 'Yocto Linux BSP',
        description: 'Carrier device-tree overlays and peripheral drivers included out of the box.',
        icon: Layers,
      },
      {
        title: 'Linux Kernel Support',
        description: 'Verified LTS kernel images with full baseboard peripheral enablement.',
        icon: Terminal,
      },
      {
        title: 'Device Drivers',
        description: 'Pre-integrated drivers for panel backlights, touchscreens, audio, and fieldbuses.',
        icon: Cpu,
      },
      {
        title: 'Development Resources',
        description: 'Hardware schematics, BOM, and Altium/CAD reference packages.',
        icon: Wrench,
      },
      {
        title: 'Reference Software',
        description: 'Evaluation images with sample HMI and industrial communication demos.',
        icon: FileCode2,
      },
      {
        title: 'Technical Documentation',
        description: 'Connector pinouts, jumper configuration tables, and power tree guides.',
        icon: BookOpen,
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete baseboard specifications and connector pinout summary.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Integration Guide',
        description: 'Carrier board setup, jumper configuration, and SoM installation guide.',
        fileUrl: null,
      },
      {
        id: 'mechanical-drawing',
        title: 'Mechanical Drawing',
        category: 'CAD & Dimensions',
        description: 'Board footprint, connector keep-out zones, and enclosure mounting holes.',
        fileUrl: null,
      },
      {
        id: 'yocto-bsp-guide',
        title: 'Yocto BSP Guide',
        category: 'Software Manual',
        description: 'Device tree overlay guide and Yocto build steps for carrier peripherals.',
        fileUrl: null,
      },
      {
        id: 'design-guide',
        title: 'Design Guide',
        category: 'Carrier Design',
        description: 'Custom carrier modification notes and reference design guidelines.',
        fileUrl: null,
      },
    ],
  },
  sbc: {
    slug: 'sbc',
    category: 'DEVELOPMENT PLATFORM / SBC',
    title: 'RZ/G2L SBC (Development Platform)',
    shortDescription:
      'Complete ready-to-use single-board computer combining the RZ/G2L SMARC SoM and industrial carrier board for rapid prototyping and production.',
    introParagraph:
      'The AIEGX RZ/G2L SBC integrates the pre-validated RZ/G2L SMARC SoM onto the industrial carrier board as an out-of-the-box development and deployment platform. Teams can immediately boot Yocto Linux, test HMI displays, validate industrial peripherals, and transition cleanly to mass production.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/G2L', path: '/products/rz-g2l' },
      { label: 'RZ/G2L SBC', path: null },
    ],
    gallery: [
      {
        src: '/images/sbc-platform-hd.jpg',
        alt: 'RZ/G2L SBC Complete Platform View',
        caption: 'Turnkey SBC — Pre-Assembled & Validated',
      },
      {
        src: '/images/RZG2L.png',
        alt: 'Integrated RZ/G2L SoM Core',
        caption: 'Core Compute — RZ/G2L SMARC SoM',
      },
      {
        src: '/images/rz-g2l-hd.jpg',
        alt: 'RZ/G2L Development Platform Interfaces',
        caption: 'Platform Connectivity — HMI & Industrial I/O',
      },
    ],
    heroHighlights: [
      { label: 'All Required Interfaces', icon: Plug },
      { label: 'Ideal for Prototyping', icon: Wrench },
      { label: 'Validated Configuration', icon: CheckCircle2 },
      { label: 'Yocto Linux BSP', icon: Terminal },
    ],
    overviewSummary:
      'Designed to eliminate initial hardware bring-up delays, the RZ/G2L SBC delivers a completely validated computing system ready for software engineering, graphical UI prototyping, and field trials on day one.',
    overviewParagraphs: [
      'Designed to eliminate initial hardware bring-up delays, the RZ/G2L SBC delivers a completely validated computing system ready for software engineering, graphical UI prototyping, and field trials on day one.',
      'Shipping with pre-flashed Yocto Linux reference images, thermal solution compatibility, and comprehensive I/O connectivity, it bridges early application evaluation directly into production deployment.',
    ],
    overviewMetrics: [
      { label: 'Architecture', value: 'SMARC SoM + Carrier Board' },
      { label: 'Processor', value: 'Renesas RZ/G2L Cortex-A55' },
      { label: 'Memory / Storage', value: 'Up to 4 GB LPDDR4 + eMMC' },
      { label: 'Readiness', value: 'Pre-Flashed Yocto BSP' },
    ],
    keyFeatures: [
      { title: 'Ready-to-Boot System Assembly', icon: CheckCircle2 },
      { title: 'Renesas RZ/G2L Cortex-A55 Core', icon: Cpu },
      { title: 'Up to 4 GB LPDDR4 & eMMC', icon: HardDrive },
      { title: 'HDMI, LVDS & MIPI-DSI Display', icon: Monitor },
      { title: 'Dual Gigabit Ethernet & USB', icon: Network },
      { title: 'CAN, UART, GPIO, I2C, SPI', icon: Sliders },
      { title: 'Yocto Linux Reference BSP', icon: Terminal },
      { title: 'Industrial Grade Reliability', icon: ShieldCheck },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/G2L Quad Cortex-A55' },
      { parameter: 'Memory', specification: 'Up to 4 GB LPDDR4' },
      { parameter: 'Storage', specification: 'eMMC / QSPI + MicroSD' },
      { parameter: 'Display', specification: 'HDMI, LVDS, MIPI-DSI' },
      { parameter: 'Ethernet', specification: '2 × Gigabit Ethernet' },
      { parameter: 'USB', specification: 'USB 3.0 / 2.0' },
      { parameter: 'Industrial I/O', specification: 'CAN, UART, GPIO, I2C, SPI' },
      { parameter: 'Architecture', specification: 'Complete SBC (SMARC SoM + Carrier)' },
      { parameter: 'Operating Temperature', specification: '-40°C to +85°C (optional)' },
      { parameter: 'OS Support', specification: 'Yocto Linux, Reference BSP' },
    ],
    interfaces: [
      { name: 'Ethernet', detail: '2 × Gigabit Ethernet', icon: Network },
      { name: 'USB', detail: 'USB 3.0 / 2.0 Ports', icon: Usb },
      { name: 'CAN', detail: 'Industrial CAN Fieldbus', icon: Radio },
      { name: 'UART', detail: 'Serial Console & Field Ports', icon: Terminal },
      { name: 'GPIO', detail: 'Digital Control Headers', icon: Sliders },
      { name: 'I2C', detail: 'Touch & Sensor Interfaces', icon: Activity },
      { name: 'SPI', detail: 'Expansion Serial Bus', icon: Cable },
      { name: 'HDMI', detail: 'HD Display Port', icon: Monitor },
      { name: 'LVDS', detail: 'Industrial Display Panel', icon: Layers },
      { name: 'MIPI-DSI', detail: 'Embedded Touch Panel Bus', icon: CircuitBoard },
    ],
    softwareSupport: [
      {
        title: 'Yocto Linux BSP',
        description: 'Pre-installed Yocto Linux image ready for immediate application development.',
        icon: Layers,
      },
      {
        title: 'Linux Kernel Support',
        description: 'Full LTS Linux kernel support and security maintenance.',
        icon: Terminal,
      },
      {
        title: 'Device Drivers',
        description: 'Pre-validated drivers across all onboard interfaces and displays.',
        icon: Cpu,
      },
      {
        title: 'Development Resources',
        description: 'SDK installers, toolchains, and quick-start application examples.',
        icon: Wrench,
      },
      {
        title: 'Reference Software',
        description: 'HMI framework demos, Qt/Wayland examples, and network utilities.',
        icon: FileCode2,
      },
      {
        title: 'Technical Documentation',
        description: 'Quick-start guide, hardware manual, and BSP customization notes.',
        icon: BookOpen,
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete SBC platform technical specifications and environmental ratings.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Quick Start & Setup',
        description: 'Out-of-the-box evaluation setup, power-up, and serial console guide.',
        fileUrl: null,
      },
      {
        id: 'mechanical-drawing',
        title: 'Mechanical Drawing',
        category: 'CAD & Dimensions',
        description: 'Overall platform dimensions and mounting standoffs.',
        fileUrl: null,
      },
      {
        id: 'yocto-bsp-guide',
        title: 'Yocto BSP Guide',
        category: 'Software Manual',
        description: 'Instructions for building, modifying, and flashing Yocto images.',
        fileUrl: null,
      },
      {
        id: 'design-guide',
        title: 'Design Guide',
        category: 'Migration Guide',
        description: 'Guidance for transitioning from evaluation SBC to custom production carrier.',
        fileUrl: null,
      },
    ],
  },
};
