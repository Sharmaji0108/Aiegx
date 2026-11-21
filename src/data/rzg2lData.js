import {
  Cpu,
  Monitor,
  Network,
  Terminal,
  Clock,
  PlaySquare,
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
    tag: 'EMBEDDED HARDWARE PLATFORMS',
    title: 'RZ/G2L-Based Platforms',
    subtitle: 'Embedded Control & HMI',
    description:
      'Embedded hardware platforms based on the Renesas RZ/G2L processor, designed for industrial HMI, display, control, and connected applications.',
    image: '/images/RZV2L-SBC.png',
    fallbackImage: '/images/RZV2L-SBC.png',
    imageAlt: 'AIEGX RZ/G2L Embedded Control & HMI Hardware Module',
    family: 'RZ/G2L-Based Hardware',
    familyClassName: 'font-bold text-sm text-[#14213D] dark:text-[#F8FAFC]',
    highlights: [
      'Up to dual-core Arm Cortex-A55, 1.2 GHz',
      'Arm Mali-G31 GPU and H.264 codec',
      'Camera, display, and industrial connectivity',
    ],
  },
  capabilitiesDescription:
    'Arm-based processing, graphics, multimedia, industrial connectivity, and embedded Linux support.',
  capabilities: [
    {
      id: 'cpu',
      title: 'Arm Cortex-A55 Processing',
      description:
        'Up to dual-core Arm Cortex-A55 at 1.2 GHz, with a Cortex-M33 core for real-time processing.',
      icon: Cpu,
    },
    {
      id: 'graphics',
      title: 'Graphics & Display Support',
      description:
        'Arm Mali-G31 GPU with MIPI DSI and parallel display interface support.',
      icon: Monitor,
    },
    {
      id: 'interfaces',
      title: 'Industrial Connectivity',
      description:
        'Gigabit Ethernet, CAN FD, USB 2.0, UART, SPI, and I²C interfaces.',
      icon: Network,
    },
    {
      id: 'linux',
      title: 'Linux / Yocto Support',
      description:
        'Embedded Linux development supported by Renesas Linux BSP packages.',
      icon: Terminal,
    },
    {
      id: 'multimedia',
      title: 'Multimedia Capabilities',
      description:
        'Integrated H.264 video encoding and decoding for multimedia applications.',
      icon: PlaySquare,
    },
  ],
  architecture: [
    {
      id: 'smarc-som',
      title: 'RZ/G2L SMARC SoM',
      subtitle: 'Processor, memory, and core interfaces',
      image: '/images/SOM.png',
      fallbackImage: '/images/aiegx-hardware-som-hd.jpg',
      imageAlt: 'RZ/G2L SMARC SoM hardware module',
    },
    {
      id: 'carrier-board',
      title: 'RZ/G2L Carrier Board',
      subtitle: 'Application interfaces and expansion',
      image: '/images/RZG2L-Carrier_Board.png',
      fallbackImage: '/images/RZG2L-Carrier_Board.png',
      imageAlt: 'RZ/G2L Carrier Board',
    },
    {
      id: 'complete-sbc',
      title: 'Complete Development Platform',
      subtitle: 'SMARC SoM + Carrier Board',
      image: '/images/RZV2L-SBC.png',
      fallbackImage: '/images/RZV2L-SBC.png',
      imageAlt: 'RZ/G2L Complete SBC Development Platform',
    },
  ],
  availableHardwareDescription:
    'Explore our RZ/G2L-based hardware, including SMARC modules, carrier boards, and single-board computers for embedded product development.',
  availableHardware: [
    {
      id: 'rz-g2l-smarc-som',
      name: 'RZ/G2L SMARC SoM',
      badge: 'SYSTEM ON MODULE',
      description:
        'Compact processor module for integration into embedded systems using a compatible carrier board.',
      image: '/images/SOM.png',
      fallbackImage: '/images/aiegx-hardware-som-hd.jpg',
      imageAlt: 'RZ/G2L SMARC SoM Embedded Module',
      features: [
        'Arm Cortex-A55 and Cortex-M33 processing',
        'MIPI DSI display interface support',
        'SMARC form-factor integration',
        'Designed for carrier-board integration',
      ],
      route: '/products/rz-g2l/smarc-som',
      featured: true,
    },
    {
      id: 'rz-g2l-carrier-board',
      name: 'RZ/G2L Carrier Board',
      badge: 'CARRIER BOARD',
      description:
        'Carrier board providing connectivity and expansion interfaces for the RZ/G2L SMARC SoM.',
      image: '/images/RZG2L-Carrier_Board.png',
      fallbackImage: '/images/RZG2L-Carrier_Board.png',
      imageAlt: 'RZ/G2L Carrier Board',
      features: [
        'Supports compatible RZ/G2L SMARC SoM',
        'External connectivity and expansion',
        'Application-specific interface integration',
        'Supports embedded system development',
      ],
      route: '/products/rz-g2l/carrier-board',
      featured: false,
    },
    {
      id: 'rz-g2l-sbc',
      name: 'RZ/G2L Embedded Computing Platform',
      badge: 'EMBEDDED COMPUTING PLATFORM',
      description:
        'Single-board computer for embedded application development and system integration.',
      image: '/images/RZV2L-SBC.png',
      fallbackImage: '/images/RZV2L-SBC.png',
      imageAlt: 'RZ/G2L Embedded Computing Platform',
      features: [
        'RZ/G2L-based embedded computing',
        'Integrated board-level interfaces',
        'Embedded Linux development',
        'Application development and evaluation',
      ],
      route: '/products/rzg2l/complete-sbc/',
      featured: false,
    },
  ],
  whyPoints: [
    {
      title: 'Graphics & Display Support',
      description:
        'Arm Mali-G31 GPU for rich graphics and interactive HMI.',
    },
    {
      title: 'Industrial Connectivity',
      description:
        'Gigabit Ethernet, CAN FD, USB 2.0, and serial interfaces (UART, SPI, I²C) for industrial systems.',
    },
    {
      title: 'Modular Hardware Platforms',
      description:
        'RZ/G2L SMARC SoM and carrier board for embedded development and integration.',
    },
    {
      title: 'Embedded Linux Support',
      description:
        'Renesas Linux software package (RZ/G Verified Linux Package) for embedded application development.',
    },
    {
      title: 'Multimedia Capabilities',
      description:
        'Integrated H.264 video encoding and decoding (Full HD class) for video applications.',
    },
    {
      title: 'Camera & Display Interfaces',
      description:
        'MIPI CSI-2 camera input and MIPI DSI display output for camera and display integration.',
    },
  ],
};

export const RZG2L_APPLICATIONS = [
  {
    id: 'industrial-hmi',
    title: 'Industrial HMI',
    description: 'Industrial control and operator interfaces.',
    subtitle: 'Industrial control and operator interfaces.',
    image: '/images/Automated Gear Inspection Line.png',
    icon: Factory,
  },
  {
    id: 'railway-hmi',
    title: 'Railway HMI',
    description: 'Driver displays and train system monitoring.',
    subtitle: 'Driver displays and train system monitoring.',
    image: '/images/Modern Train Cockpit Control Panel.png',
    icon: Train,
  },
  {
    id: 'display-systems',
    title: 'Display Systems',
    description:
      'Embedded displays and visualization (e.g., digital signage, information displays).',
    subtitle:
      'Embedded displays and visualization (e.g., digital signage, information displays).',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    icon: Monitor,
  },
  {
    id: 'video-enabled-systems',
    title: 'Video-Enabled Systems',
    description:
      'Embedded video monitoring and communication (e.g., intercom, doorbell).',
    subtitle:
      'Embedded video monitoring and communication (e.g., intercom, doorbell).',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    icon: Eye,
  },
  {
    id: 'industrial-gateways',
    title: 'Industrial Gateways',
    description:
      'Connected devices, data collection, and industrial communication.',
    subtitle:
      'Connected devices, data collection, and industrial communication.',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Share2,
  },
];

export const RZG2L_PRODUCT_DETAILS = {
  'smarc-som': {
    slug: 'smarc-som',
    category: 'SMARC MODULE',
    title: 'RZ/G2L SMARC SoM',
    subtitle: 'Embedded Computing Module for HMI & Control',
    featuresList: [
      'Arm Cortex-A55 and Cortex-M33 processing',
      'MIPI DSI display interface support',
      'SMARC-based modular hardware design',
      'Embedded Linux support using Renesas software packages',
    ],
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
        alt: 'RZ/G2L SMARC SoM 3D Hardware Model',
      },
    ],
    heroHighlights: [
      { label: 'Compact SMARC Form Factor', icon: Layers },
      { label: 'Graphics & Display Support', icon: Monitor },
      { label: 'Modular Hardware Integration', icon: Network },
      { label: 'Linux / Yocto Support', icon: Terminal },
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
    keyFeaturesTable: [
      { label: 'Renesas RZ/G2L', description: 'Quad Cortex-A55 (Up to 1.2 GHz)' },
      { label: 'Memory', description: 'Up to 4 GB LPDDR4 Memory' },
      { label: 'Storage', description: 'eMMC / QSPI Storage Options' },
      { label: 'Form Factor', description: 'SMARC' },
      { label: 'Display Support', description: 'HDMI, LVDS, MIPI-DSI' },
      { label: 'Rich I/O Interfaces', description: 'Ethernet, USB, CAN, UART, I2C, SPI' },
      { label: 'Software Support', description: 'Yocto Linux BSP and Reference Software' },
      { label: 'Industrial Grade', description: 'Designed for industrial applications' },
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
      { feature: 'Processor', details: 'Renesas RZ/G2L' },
      { feature: 'CPU', details: 'Up to dual-core Arm Cortex-A55 @ 1.2 GHz + Cortex-M33 @ 200 MHz' },
      { feature: 'RAM', details: 'Up to 2 GB DDR4' },
      { feature: 'eMMC', details: '8 GB' },
      { feature: 'GPU', details: 'Arm Mali-G31' },
      { feature: 'Video Codec', details: 'H.264 encoding and decoding, up to Full HD (1920 × 1080) @ 30 fps' },
      { feature: 'Display Interface', details: 'MIPI DSI, up to Full HD (1920 × 1080) @ 60 Hz' },
      { feature: 'Camera Interface', details: 'MIPI CSI-2, up to 5 MP @ 30 fps (RAW12)' },
      { feature: 'Ethernet', details: 'Dual Gigabit Ethernet' },
      { feature: 'USB', details: 'USB 2.0' },
      { feature: 'Serial Interfaces', details: 'UART, SPI, I²C' },
      { feature: 'Form Factor', details: 'SMARC SoM' },
      { feature: 'Software Support', details: 'Renesas RZ/G Verified Linux Package' },
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
    subtitle: 'Connectivity and Expansion for RZ/G2L SMARC SoM',
    featuresList: [
      'Designed for the RZ/G2L SMARC SoM',
      '2 × Gigabit Ethernet (RJ45)',
      'USB connectivity for external peripherals',
      'Camera and display interface connectivity',
      'Serial and peripheral expansion interfaces',
    ],
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/G2L', path: '/products/rz-g2l' },
      { label: 'RZ/G2L Carrier Board', path: null },
    ],
    gallery: [
      {
        src: '/images/RZG2L-Carrier_Board.png',
        model3d: '/models/Carrier_Board.glb',
        alt: 'RZ/G2L Carrier Board 3D Model',
      },
    ],
    heroHighlights: [
      { label: 'RZ/G2L SMARC SoM Support', icon: CircuitBoard },
      { label: 'Connectivity & Expansion', icon: Plug },
      { label: 'Camera & Display Integration', icon: Network },
      { label: 'Peripheral Interfaces', icon: Layers },
    ],
    enquiryDescription:
      'Explore RZ/G2L carrier-board integration, custom hardware design, and embedded Linux development.',
    enquiryBottomMessage:
      'Discuss your hardware requirements, custom carrier design, or embedded Linux development with our engineering team.',
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
    keyFeaturesTable: [
      { label: 'SMARC Socket', description: 'SMARC Compatible Socket (314-pin)' },
      { label: 'Ethernet', description: 'Dual RJ45 Gigabit Ethernet' },
      { label: 'Display Interfaces', description: 'HDMI, LVDS & MIPI-DSI Headers' },
      { label: 'USB & Expansion', description: 'USB 3.0 / 2.0 & M.2 Expansion' },
      { label: 'Industrial I/O', description: 'Isolated CAN, UART & GPIO' },
      { label: 'Power Input', description: '12V – 24V DC Wide Power Input' },
      { label: 'Temperature Grade', description: 'Industrial Temperature Grade (-40°C to +85°C)' },
      { label: 'Design Files', description: 'Custom Carrier Reference Files' },
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
      { feature: 'Supported SoM', details: 'RZ/G2L SMARC SoM' },
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
    category: 'EMBEDDED COMPUTING PLATFORM',
    title: 'RZ/G2L Embedded Computing Platform',
    subtitle: 'Complete Embedded Platform with SMARC SoM and Carrier Board.',
    featuresList: [
      'Combines the RZ/G2L SMARC SoM and carrier board',
      'Arm® Cortex®-A55 and Cortex®-M33 processing',
      '2 × Gigabit Ethernet connectivity',
      'MIPI CSI-2 camera and MIPI DSI display interfaces',
      'USB, serial communication and peripheral expansion',
      'Embedded Linux / Yocto BSP support',
    ],
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/G2L', path: '/products/rz-g2l' },
      { label: 'RZ/G2L Embedded Computing Platform', path: null },
    ],
    gallery: [
      {
        src: '/images/RZV2L-SBC.png',
        model3d: '/models/G2L-V2L_SBC.glb',
        alt: 'RZ/G2L Embedded Computing Platform 3D Model',
      },
    ],
    heroHighlights: [
      { label: 'SMARC SoM + Carrier Board', icon: Plug },
      { label: 'Connectivity & Expansion', icon: Wrench },
      { label: 'Camera & Display Integration', icon: CheckCircle2 },
      { label: 'Embedded Linux Support', icon: Terminal },
    ],
    enquiryDescription:
      'Talk to our engineering team for your project requirements, interface needs and customization options for the RZ/G2L Embedded Computing Platform.',
    overviewSummary:
      'Designed to eliminate initial hardware bring-up delays, the RZ/G2L Development Kit delivers a completely validated computing system ready for software engineering, graphical UI prototyping, and field trials on day one.',
    overviewParagraphs: [
      'Designed to eliminate initial hardware bring-up delays, the RZ/G2L Development Kit delivers a completely validated computing system ready for software engineering, graphical UI prototyping, and field trials on day one.',
      'Shipping with pre-flashed Yocto Linux reference images, thermal solution compatibility, and comprehensive I/O connectivity, it bridges early application evaluation directly into production deployment.',
    ],
    overviewMetrics: [
      { label: 'Architecture', value: 'SMARC SoM + Carrier Board' },
      { label: 'Processor', value: 'Renesas RZ/G2L Cortex-A55' },
      { label: 'Memory / Storage', value: 'Up to 4 GB LPDDR4 + eMMC' },
      { label: 'Readiness', value: 'Pre-Flashed Yocto BSP' },
    ],
    keyFeaturesTable: [
      { label: 'System Assembly', description: 'Ready-to-Boot System Assembly' },
      { label: 'Processor Core', description: 'Renesas RZ/G2L Cortex-A55 Core' },
      { label: 'Memory & Storage', description: 'Up to 4 GB LPDDR4 & eMMC' },
      { label: 'Display Support', description: 'HDMI, LVDS & MIPI-DSI Display' },
      { label: 'Networking & USB', description: 'Dual Gigabit Ethernet & USB' },
      { label: 'Industrial I/O', description: 'CAN, UART, GPIO, I2C, SPI' },
      { label: 'Software Platform', description: 'Yocto Linux Reference BSP' },
      { label: 'Reliability', description: 'Industrial Grade Reliability' },
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
      { feature: 'Processor', details: 'Renesas RZ/G2L' },
      { feature: 'CPU', details: 'Up to dual-core Arm Cortex-A55 @ 1.2 GHz + Cortex-M33 @ 200 MHz' },
      { feature: 'RAM', details: 'Up to 2 GB DDR4' },
      { feature: 'Onboard Storage', details: 'eMMC (on SMARC SoM)' },
      { feature: 'GPU', details: 'Arm Mali-G31' },
      { feature: 'Video Codec', details: 'H.264 encoding and decoding, up to Full HD (1920 × 1080) @ 30 fps' },
      { feature: 'Ethernet', details: '2 × Gigabit Ethernet (1 Gbps, RJ45)' },
      { feature: 'USB 0', details: 'USB 2.0' },
      { feature: 'USB 1', details: 'Micro-USB' },
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
      { feature: 'Software Support', details: 'Renesas RZ/G Verified Linux Package' },
      { feature: 'Hardware Configuration', details: 'RZ/G2L SMARC SoM + Carrier Board' },
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
        description: 'Complete Development Kit platform technical specifications and environmental ratings.',
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
        description: 'Guidance for transitioning from evaluation Development Kit to custom production carrier.',
        fileUrl: null,
      },
    ],
  },
};
