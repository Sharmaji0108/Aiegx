import {
  Cpu,
  Network,
  Clock,
  ShieldCheck,
  Activity,
  Eye,
  HardDrive,
  Plug,
  Zap,
} from 'lucide-react';

export const RZV2H_PLATFORM_DATA = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/#hardware-platforms' },
    { label: 'RZ/V2H', path: null },
  ],
  hero: {
    tag: 'Renesas RZ/V2H Architecture',
    family: 'Renesas RZ/V2H Family',
    title: 'RZ/V2H',
    subtitle: 'High-Performance Edge AI Platform',
    description:
      'High-performance edge AI vision platform powered by the Renesas RZ/V2H MPU with 2nd generation DRP-AI accelerator delivering 10 TOPS. Engineered for multi-camera real-time intelligence, advanced autonomous robotics, high-speed automated optical inspection, and edge server analytics.',
    image: '/images/RZV2H.png',
    fallbackImage: '/images/RZV2H.png',
    imageAlt: 'AIEGX RZ/V2H High-Performance Edge AI Single Board Computer',
    highlights: [
      '2nd Gen DRP-AI Accelerator @ 10 TOPS',
      'Quad Arm Cortex-A55 @ 1.8 GHz + Dual Cortex-R8',
      'Multi-Camera Vision (Up to 8 MIPI CSI-2 Streams)',
      'High-Bandwidth LPDDR5 & PCIe Gen3',
    ],
  },
  capabilities: [
    {
      id: 'ai-engine',
      title: '2nd Gen DRP-AI (10 TOPS)',
      description: 'High-throughput neural acceleration delivering 10 TOPS for multi-stream deep neural network inference.',
      icon: Zap,
    },
    {
      id: 'cpu',
      title: 'Quad A55 + Dual Cortex-R8',
      description: 'Quad 64-bit Arm Cortex-A55 cores @ 1.8 GHz plus dual Cortex-R8 @ 800 MHz real-time cores for deterministic control.',
      icon: Cpu,
    },
    {
      id: 'camera',
      title: 'Multi-Camera Vision (8 Streams)',
      description: 'Supports up to 8 camera inputs via high-speed MIPI CSI-2 with advanced hardware ISP pipelines.',
      icon: Eye,
    },
    {
      id: 'memory-bus',
      title: 'LPDDR5 & PCIe Gen3 Bus',
      description: 'Ultra-high memory bandwidth with up to 8GB LPDDR5 and PCIe Gen3 expansion for NVMe/peripherals.',
      icon: Plug,
    },
    {
      id: 'lifecycle',
      title: '10+ Year Product Longevity',
      description: 'Industrial longevity program with Renesas Super Long-Term Support (SLTS) and CIP Linux maintenance.',
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
      id: 'rz-v2h-sbc',
      name: 'RZ/V2H SBC (Development Platform)',
      badge: 'Single Board Computer',
      description:
        'High-performance turnkey edge AI single-board computer featuring the Renesas RZ/V2H MPU with 10 TOPS DRP-AI accelerator and multi-camera support.',
      image: '/images/RZV2H.png',
      fallbackImage: '/images/RZV2H.png',
      imageAlt: 'RZ/V2H Single Board Computer Development Platform',
      features: [
        'Renesas RZ/V2H (Quad A55 @ 1.8GHz + Dual R8)',
        '2nd Gen DRP-AI Accelerator @ 10 TOPS',
        'Up to 8 MIPI CSI-2 Camera Streams with ISP',
        'PCIe Gen3, USB 3.2 & Dual Gigabit Ethernet',
      ],
      route: '/products/rzv2h/complete-sbc/',
      featured: true,
    },

  ],
  whyPoints: [
    {
      title: '10 TOPS High-Throughput Edge AI',
      description:
        '2nd Generation DRP-AI accelerator delivers 10 TOPS of power-efficient AI inference, capable of running multiple deep neural networks concurrently in real time.',
    },
    {
      title: 'Heterogeneous Compute Architecture',
      description:
        'Quad Cortex-A55 application cores @ 1.8 GHz paired with dual Cortex-R8 real-time cores @ 800 MHz deliver high-level Linux intelligence and deterministic motor control.',
    },
    {
      title: 'Multi-Camera Real-Time Processing',
      description:
        'Direct connection of up to 8 MIPI CSI-2 cameras with dual hardware ISPs enables panoramic 360° situational awareness for robotics and industrial AOI.',
    },
    {
      title: 'LPDDR5 High-Bandwidth Memory Architecture',
      description:
        'LPDDR5 memory interface operating up to 4800 MT/s provides the immense memory bandwidth essential for high-resolution 4K video feeds and complex AI models.',
    },
    {
      title: 'PCIe Gen3 & High-Speed Connectivity',
      description:
        'Native PCIe Gen3 (up to 4 lanes), USB 3.2 Gen2 (10 Gbps), and dual Gigabit Ethernet with TSN ensure zero-bottleneck data transfer for edge servers.',
    },
    {
      title: '10+ Years CIP Linux & Yocto BSP',
      description:
        'Full industrial software stack with mainline-aligned CIP Linux SLTS kernel, ROS 2 Humble integration, and continuous security patching for over a decade.',
    },
  ],
};

export const RZV2H_APPLICATIONS = [
  {
    id: 'amr-robotics',
    title: 'Autonomous Mobile Robots (AMR)',
    subtitle: '3D Visual SLAM, Obstacle Detection & Real-Time Navigation',
    image: '/images/Precision Robotic Gripper on Assembly Line.png',
    icon: Cpu,
  },
  {
    id: 'smart-city',
    title: 'Multi-Stream Smart City Video Analytics',
    subtitle: 'Simultaneous 8-Channel Traffic & Pedestrian Tracking',
    image: '/images/AI City Surveillance Camera.png',
    icon: Activity,
  },
  {
    id: 'factory-aoi',
    title: 'High-Speed Factory Optical Inspection (AOI)',
    subtitle: 'Micro-Defect Classification at High Frame Rates',
    image: '/images/Automated Gear Inspection Line.png',
    icon: ShieldCheck,
  },
  {
    id: 'autonomous-defense',
    title: 'Autonomous Ground Vehicles & Defense Systems',
    subtitle: 'Rugged Edge AI Perception in Extreme Environments',
    image: '/images/UGV at a High-Tech Defense Base.png',
    icon: Network,
  },
  {
    id: 'medical-robotics',
    title: 'Surgical & Medical Robotic Vision',
    subtitle: 'High-Definition Multi-Modal Diagnostic Guidance',
    image: '/images/Futuristic Mountain Surveillance HUD.png',
    icon: Eye,
  },
];

export const RZV2H_PRODUCT_DETAILS = {
  sbc: {
    slug: 'sbc',
    category: 'HIGH-PERFORMANCE EDGE AI SBC',
    title: 'RZ/V2H SBC (Development Platform)',
    shortDescription:
      'High-performance turnkey edge AI single-board computer powered by the Renesas RZ/V2H processor with 10 TOPS 2nd Gen DRP-AI, multi-camera interfaces, and PCIe Gen3.',
    introParagraph:
      'The AIEGX RZ/V2H SBC is a high-performance edge AI single-board computer powered by the Renesas RZ/V2H microprocessor. Built with quad 64-bit Arm Cortex-A55 cores clocked at 1.8 GHz, dual real-time Cortex-R8 cores at 800 MHz, and Renesas revolutionary 2nd generation DRP-AI accelerator delivering 10 TOPS of neural performance, it handles concurrent multi-stream video analytics and deterministic real-time control. Equipped with up to 8GB LPDDR5 memory, up to 8 MIPI CSI-2 camera streams, PCIe Gen3, USB 3.2, and dual Gigabit Ethernet, it is the ideal turnkey platform for autonomous robotics, machine vision, and edge computing.',
    breadcrumb: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/#hardware-platforms' },
      { label: 'RZ/V2H', path: '/products/rzv2h' },
      { label: 'Complete SBC', path: null },
    ],
    gallery: [
      {
        src: '/images/RZV2H.png',
        alt: 'RZ/V2H SBC Development Platform View',
        caption: 'Turnkey SBC — Pre-Assembled & Validated',
      },
      {
        src: '/images/capabilities/camera-multimedia.png',
        alt: 'RZ/V2H 10 TOPS DRP-AI Architecture',
        caption: '2nd Gen DRP-AI Neural Engine @ 10 TOPS & Multi-Camera Vision',
      },
    ],
    heroHighlights: [
      { label: 'Quad A55 @ 1.8GHz + Dual R8', icon: Cpu },
      { label: '2nd Gen DRP-AI @ 10 TOPS', icon: Zap },
      { label: 'Multi-Camera Vision (8 Streams)', icon: Eye },
      { label: 'PCIe Gen3 & LPDDR5 Memory', icon: Plug },
    ],
    overviewSummary:
      'Engineered for next-generation multi-camera robotics and high-throughput edge AI inference, the RZ/V2H SBC delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
    overviewParagraphs: [
      'Engineered for next-generation multi-camera robotics and high-throughput edge AI inference, the RZ/V2H SBC delivers a turnkey, fully validated hardware and software platform ready for rapid prototyping and production rollout.',
      'Pre-loaded with verified Yocto Linux images featuring ROS 2 Humble integration, DRP-AI 2nd Gen toolkits, and hardware-accelerated 4K GStreamer pipelines, it enables immediate edge intelligence without extensive hardware bring-up overhead.',
    ],
    overviewMetrics: [
      { label: 'Architecture', value: 'Complete Single Board Computer' },
      { label: 'Processor', value: 'Renesas RZ/V2H (Quad A55 + Dual R8)' },
      { label: 'AI Accelerator', value: '2nd Gen DRP-AI @ 10 TOPS' },
      { label: 'Readiness', value: 'Pre-Flashed Yocto / CIP Linux' },
    ],
    keyFeaturesTable: [
      { label: 'Renesas RZ/V2H', description: 'Quad Cortex-A55 (1.8 GHz) + Dual Cortex-R8 (800 MHz)' },
      { label: 'AI Accelerator', description: '2nd Gen Renesas DRP-AI Engine (10 TOPS Performance)' },
      { label: 'Memory', description: 'Up to 8 GB LPDDR5 Memory (High Bandwidth)' },
      { label: 'Storage', description: '32 GB / 64 GB eMMC 5.1 + NVMe PCIe SSD Slot + MicroSD' },
      { label: 'Camera Support', description: 'Up to 8 MIPI CSI-2 Camera Streams with Dual Hardware ISP' },
      { label: 'Display & Multimedia', description: '1 × HDMI 2.0 (up to 4K60), 4K H.265/H.264 Video Codec' },
      { label: 'High-Speed Expansion', description: 'PCIe Gen3 (4-lane), USB 3.2 Gen2, Dual Gigabit Ethernet (TSN)' },
      { label: 'Industrial Grade', description: 'Designed for continuous industrial operation (-40°C to +85°C optional)' },
    ],
    keyFeatures: [
      { title: 'Quad Arm Cortex-A55 @ 1.8GHz', icon: Cpu },
      { title: '2nd Gen DRP-AI @ 10 TOPS', icon: Zap },
      { title: 'Dual Real-Time Cortex-R8 Cores', icon: Cpu },
      { title: 'Up to 8 GB High-Speed LPDDR5', icon: HardDrive },
      { title: 'PCIe Gen3 High-Speed Expansion', icon: Plug },
      { title: 'Multi-Camera MIPI CSI-2 (8 Streams)', icon: Eye },
      { title: 'Dual Gigabit Ethernet with TSN', icon: Network },
      { title: 'Industrial Grade Reliability', icon: ShieldCheck },
    ],
    specifications: [
      { parameter: 'Processor', specification: 'Renesas RZ/V2H (Quad Arm Cortex-A55 @ 1.8 GHz, Dual Cortex-R8 @ 800 MHz)' },
      { parameter: 'AI Performance', specification: '2nd Gen DRP-AI Neural Engine @ 10 TOPS (Supports INT8 / FP16)' },
      { parameter: 'Memory', specification: 'Up to 8 GB LPDDR5 (Data Rate up to 4800 MT/s)' },
      { parameter: 'Storage', specification: '32 GB / 64 GB eMMC 5.1 Flash, M.2 NVMe PCIe SSD Slot, MicroSD Slot' },
      { parameter: 'Camera Interfaces', specification: 'Up to 8 × MIPI CSI-2 Camera Streams with Dual Hardware ISP' },
      { parameter: 'Video Codec', specification: '4K UHD H.265 (HEVC) & H.264 (AVC) Hardware Decode & Encode (4K @ 60fps)' },
      { parameter: '3D Graphics', specification: 'Mali-G310 / DRP-GPU High-Efficiency 2D/3D Graphic Accelerator' },
      { parameter: 'Display Outputs', specification: '1 × HDMI 2.0 (up to 4K @ 60 fps), 1 × 4-lane MIPI-DSI / eDP' },
      { parameter: 'Networking', specification: '2 × 10/100/1000 Mbps Gigabit Ethernet with TSN Support' },
      { parameter: 'USB Ports', specification: '2 × USB 3.2 Gen2 (10 Gbps) Type-A, 2 × USB 2.0 Host / OTG' },
      { parameter: 'PCI Express', specification: '1 × PCIe Gen3 (up to 4 lanes) M.2 Key-M Socket for High-Speed NVMe / AI Modules' },
      { parameter: 'Industrial Fieldbus', specification: '2 × CAN-FD, 4 × High-Speed UART, 3 × I2C, 3 × SPI, Timers' },
      { parameter: 'Real-Time Cores', specification: 'Dual Arm Cortex-R8 Cores @ 800 MHz for Deterministic Motion / Motor Control' },
      { parameter: 'Operating Temp', specification: '-40°C to +85°C Industrial Grade (opt. -20°C to +70°C)' },
      { parameter: 'OS Support', specification: 'Verified Linux Package (VLP), Yocto Project LTS, CIP Linux SLTS' },
    ],
    interfaces: [
      { label: 'PCIe Gen3', description: 'PCIe Gen3 (up to 4-lane) M.2 Key-M for NVMe High-Speed SSD' },
      { label: 'Camera (MIPI)', description: 'Up to 8 × MIPI CSI-2 High-Speed Camera Serial Interfaces' },
      { label: 'Ethernet', description: '2 × 10/100/1000 Mbps Gigabit Ethernet with TSN Hardware Support' },
      { label: 'USB 3.2 Gen2', description: '2 × USB 3.2 Gen2 (10 Gbps) Type-A Ports' },
      { label: 'HDMI 2.0', description: 'HDMI 2.0 Output (up to 4K UHD @ 60 fps)' },
      { label: 'CAN-FD', description: '2 × Flexible Data-Rate CAN Industrial Fieldbus' },
      { label: 'Real-Time I/O', description: 'Dedicated Cortex-R8 PWM, Encoder & High-Speed Timer Headers' },
      { label: 'UART', description: '4 × High-Speed Serial Channels for Telemetry & Host Debug' },
      { label: 'I2C & SPI', description: 'High-Speed Peripheral and Sensor Expansion Buses' },
      { label: 'MicroSD', description: 'MicroSD Card Socket for OS Boot & Storage' },
    ],
    softwareSupport: [
      {
        label: '2nd Gen DRP-AI Toolkit',
        description:
          'Advanced DRP-AI compiler supporting ONNX, PyTorch, and TensorFlow with INT8/FP16 mixed-precision optimization and graph pruning.',
      },
      {
        label: 'ROS 2 Robotics Stack',
        description:
          'Pre-integrated ROS 2 Humble LTS runtime with hardware-accelerated nodes for visual SLAM, point-cloud perception, and navigation.',
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
        label: 'Real-Time Subsystem',
        description:
          'FreeRTOS / Bare-Metal BSP for the dual Arm Cortex-R8 real-time cores with OpenAMP inter-processor communication.',
      },
      {
        label: 'Technical Documentation',
        description:
          'Comprehensive SBC user manual, hardware reference manual, multi-camera bring-up notes, and BSP customization guides.',
      },
    ],
    documents: [
      {
        id: 'datasheet',
        title: 'Datasheet',
        category: 'Hardware Reference',
        description: 'Complete RZ/V2H SBC platform technical specifications and electrical parameters.',
        fileUrl: null,
      },
      {
        id: 'user-manual',
        title: 'User Manual',
        category: 'Quick Start & Setup',
        description: 'Out-of-the-box evaluation setup, connector pinouts, multi-camera connection, and serial console bring-up guide.',
        fileUrl: null,
      },
    ],
  },
};
