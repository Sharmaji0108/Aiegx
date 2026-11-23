import React from 'react';
import {
  Eye,
  Scan,
  ScanText,
  Car,
  SquareParking,
  BrainCircuit,
  Video,
  Users,
  Layers,
  HardDrive,
  AlertTriangle,
  Monitor,
  Cpu,
  Gauge,
  Target,
  Radar,
  Zap
} from 'lucide-react';

function SteeringWheelIcon(props) {
  return React.createElement('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props
  },
    React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    React.createElement('circle', { cx: '12', cy: '12', r: '3' }),
    React.createElement('line', { x1: '2', y1: '12', x2: '9', y2: '12' }),
    React.createElement('line', { x1: '15', y1: '12', x2: '22', y2: '12' }),
    React.createElement('line', { x1: '12', y1: '15', x2: '12', y2: '22' })
  );
}

export const VEHICLE_MOBILITY_DATA = {
  id: 'vehicle-mobility',
  route: '/vehicle-mobility',
  title: 'Vehicle & Mobility Solutions',
  badge: 'TRANSPORTATION & MOBILITY',
  solutionsSubtitle:
    'Explore intelligent embedded vision solutions for driver monitoring, vehicle identification and number plate recognition across mobility applications.',
  description:
    'Embedded vision solutions for driver monitoring, number plate recognition and vehicle detection across transportation applications.',
  heroImage: '/images/AI Traffic Surveillance with Plate Detection.png',
  exploreButtonText: 'Explore Solutions',
  featureHighlights: [
    'AEC-Q100 Automotive Ready',
    'Sub-15ms Neural Inferencing',
    '10+ Year Supply Longevity'
  ],
  capabilitiesSubheading: 'VEHICLE & MOBILITY SOLUTIONS',
  capabilitiesHeading: 'Key Capabilities',
  capabilitiesDescription:
    'Core capabilities powering our embedded vehicle monitoring and vision solutions.',
  ctaHeading: 'Ready to Accelerate Your Vehicle & Mobility Solutions?',
  ctaDescription:
    'Connect with our engineering team to discuss solution customization, integration and technical requirements.',
  keyCapabilities: [
    {
      name: 'In-Cabin Monitoring',
      icon: SteeringWheelIcon,
      description: 'Monitor driver attention and behaviour for safety.'
    },
    {
      name: 'Vehicle Recognition & Tracking',
      icon: ScanText,
      description: 'Detect, identify and track vehicles, where supported by the application.'
    },
    {
      name: 'Real-Time Vision Processing',
      icon: Gauge,
      description: 'Process camera feeds for detection and monitoring on embedded hardware.'
    },
    {
      name: 'Embedded System Integration',
      icon: Layers,
      description: 'Integrate cameras, AI software and embedded Linux platforms for reliable deployment.'
    }
  ],
  overview: [
    'Deterministic, low-latency edge vision computing engineered for automotive, commercial fleets, and intelligent transit systems.',
    'Powered by Renesas RZ/V2L & RZ/V2H microprocessors with DRP-AI delivering sub-15ms on-device neural inferencing without cloud latency.',
    'AEC-Q100 automotive silicon, extended -40°C to +105°C temperature range, dual CAN-FD, Automotive Ethernet, and 10+ year availability.'
  ],
  pillars: [
    {
      title: 'AEC-Q100 Automotive Ready',
      desc: 'Tested for extreme automotive vibration, thermal shock, and wide input voltage fluctuations.'
    },
    {
      title: 'Sub-15ms Neural Inferencing',
      desc: 'Hardware DRP-AI accelerator executes multi-class neural networks with deterministic safety latency.'
    },
    {
      title: 'Automotive Bus Integration',
      desc: 'Native Dual CAN-FD, LIN, and TSN Automotive Ethernet interfaces for immediate ECU alerts.'
    },
    {
      title: '10+ Year Supply Longevity',
      desc: 'Guaranteed multi-year lifecycle backed by Renesas Product Longevity and CIP Linux SLTS.'
    }
  ],
  subtopics: [
    {
      id: 'driver-monitoring-system',
      title: 'Driver Monitoring System (DMS)',
      status: null,
      image: '/images/Electric Bus at Smart City Stop.png',
      shortDescription:
        'Monitor driver attention and behaviour for enhanced safety and in-cabin awareness.',
      keyFeatures: [
        'Sub-15ms pupil and facial landmark tracking',
        'Pulsed 940nm NIR illumination for nighttime vision'
      ]
    },
    {
      id: 'anpr-systems',
      title: 'Automatic Number Plate Recognition (ANPR)',
      status: null,
      image: '/images/AI Traffic Surveillance with Plate Detection.png',
      shortDescription:
        'Detect and recognize vehicle number plates with high accuracy in real-time environments.',
      keyFeatures: [
        'High-speed plate recognition with HDR anti-glare',
        'Vehicle make, model, and color classification'
      ]
    },
    {
      id: 'vehicle-detection-camera',
      title: 'Vehicle Detection Camera (VDC)',
      status: null,
      image: '/images/Electric Bus at Smart City Stop.png',
      shortDescription:
        'Detect and monitor vehicles for traffic management, safety and automation.',
      keyFeatures: [
        'Multi-class vehicle and pedestrian detection',
        'Continuous queue measurement for signal control'
      ]
    }
  ],
  recommendedHardware: [
    {
      name: 'Renesas RZ/V2H Complete SBC',
      tag: 'Flagship 10 TOPS AI',
      type: 'Single Board Computer',
      specs: 'Quad Cortex-A55 @ 1.2GHz, Dual Cortex-R8, 10 TOPS DRP-AI, Dual GbE, PCIe Gen3, MIPI CSI-2',
      desc: 'High-throughput vision platform engineered for multi-camera driver monitoring, automotive radar fusion, and edge ANPR processing.',
      href: '/products/rzv2h/complete-sbc/'
    },
    {
      name: 'Renesas RZ/V2L SMARC Module',
      tag: 'Cost-Optimized Vision AI',
      type: 'System on Module',
      specs: 'Dual Cortex-A55 @ 1.2GHz, Cortex-M33, DRP-AI, Dual GbE, SMARC 2.1.1 Form Factor',
      desc: 'Ultra-compact, power-efficient vision computing module ideal for integrated smart cameras, roadside sensors, and vehicle dash units.',
      href: '/products/rz-v2l'
    }
  ]
};

export const VIDEO_SURVEILLANCE_DATA = {
  id: 'video-surveillance',
  route: '/solutions/video-surveillance',
  title: 'Video & Surveillance Solutions',
  badge: 'INTELLIGENT VISION & PERIMETER SECURITY',
  solutionsSubtitle:
    'Explore intelligent edge video recording, perimeter monitoring, and real-time AI vision analytics engineered for high-security environments.',
  description:
    'Scalable edge video recording, perimeter intrusion detection, and deep learning video analytics powered by Renesas RZ Series microprocessors with multi-stream hardware decoding.',
  heroImage: '/images/AI Security Surveillance at Modern Entrance.png',
  featureHighlights: [
    'Multi-Stream 4K Codecs',
    'Low-Power DRP-AI Inference',
    '24/7 Fanless Operation'
  ],
  keyCapabilities: [
    { name: 'Real-Time Video Monitoring', icon: Video },
    { name: 'Intelligent Video Analytics', icon: BrainCircuit },
    { name: 'People Detection & Counting', icon: Users },
    { name: 'Multi-Camera Processing', icon: Layers },
    { name: 'Smart Recording Systems', icon: HardDrive }
  ],
  overview: [
    'Proactive edge video intelligence transforming conventional CCTV streams into real-time threat detection networks.',
    'Renesas RZ/V2H (10 TOPS) & RZ/G2N processors delivering hardware H.264/H.265 decoding without recurring cloud bandwidth.',
    'Hardened fanless operation (-40°C to +85°C), isolated field networking, and tamper-resistant cryptographic Root of Trust.'
  ],
  pillars: [
    {
      title: 'Multi-Stream 4K Codecs',
      desc: 'Hardware-accelerated H.264/H.265 video decoding with ultra-low CPU utilization.'
    },
    {
      title: 'NVMe Sustained Recording',
      desc: 'Direct PCIe Gen3 x4 interface for continuous high-bitrate multi-channel camera writes.'
    },
    {
      title: '90% False Alarm Reduction',
      desc: 'Deep learning classification reliably filters out wildlife, shadows, and weather artifacts.'
    },
    {
      title: 'Zero-Trust Cryptographic Security',
      desc: 'Hardware Root of Trust and encrypted storage volumes guarantee video integrity.'
    }
  ],
  subtopics: [
    {
      id: 'nvr-systems',
      title: 'Network Video Recorder (NVR)',
      status: null,
      image: '/images/AI City Surveillance Camera.png',
      shortDescription:
        'Multi-channel edge recording platform with hardware video decoding and on-device neural indexing on NVMe storage.',
      keyFeatures: [
        'Multi-channel H.264/H.265 hardware video decoding',
        'Real-time metadata indexing for person and vehicle search'
      ]
    },
    {
      id: 'cctv-monitoring',
      title: 'CCTV Monitoring System',
      status: null,
      image: '/images/AI Security Surveillance at Modern Entrance.png',
      shortDescription:
        'Continuous 24/7 perimeter surveillance with automated intrusion tripwires and PTZ camera tracking handoff.',
      keyFeatures: [
        'Virtual tripwire and perimeter intrusion alerts',
        'Automated PTZ target tracking and coordinate handoff'
      ]
    },
    {
      id: 'ai-video-analytics',
      title: 'AI Video Analytics',
      status: null,
      image: '/images/AI City Surveillance Camera.png',
      shortDescription:
        'Real-time edge video parsing for worker safety, crowd density analysis, and anomaly detection.',
      keyFeatures: [
        'Real-time pose estimation for fall and safety alerts',
        'Crowd density and loitering threshold tracking'
      ]
    },
    {
      id: 'people-counting',
      title: 'People Counting',
      image: '/images/AI Security Surveillance at Modern Entrance.png',
      shortDescription:
        'Overhead optical foot-traffic monitoring and occupancy analytics with high precision while preserving privacy.',
      keyFeatures: [
        'Bidirectional ingress and egress line crossing',
        'Spatial heatmaps without storing private video'
      ]
    },
    {
      id: 'multi-camera-analytics',
      title: 'Multi-Camera Video Analytics',
      image: '/images/integrated-solution-hd.jpg',
      shortDescription:
        'Synchronized multi-camera visual fusion providing cross-camera trajectory tracking across blind spots.',
      keyFeatures: [
        'Cross-camera person and vehicle re-identification',
        'Microsecond hardware multi-camera synchronization'
      ]
    }
  ],
  recommendedHardware: [
    {
      name: 'Renesas RZ/V2H Complete SBC',
      tag: '10 TOPS Video Analytics',
      type: 'Edge AI SBC',
      specs: 'Quad Cortex-A55, 10 TOPS DRP-AI, 8GB LPDDR4X, Dual GbE, M.2 PCIe Gen3 x4',
      desc: 'Enterprise edge AI platform capable of decoding and analyzing multiple 4K/1080p RTSP camera streams concurrently in real time.',
      href: '/products/rzv2h/complete-sbc/'
    },
    {
      name: 'Renesas RZ/G2N Development Platform',
      tag: 'High-Throughput Storage',
      type: 'Single Board Computer',
      specs: 'Dual Cortex-A57 @ 1.5GHz, 4GB LPDDR4, PowerVR 3D GPU, SATA, PCIe Gen2, Dual GbE',
      desc: 'High-performance storage and video streaming platform ideal for rugged fanless NVR appliances and multi-drive video servers.',
      href: '/products/rz-g2n/sbc'
    }
  ]
};

export const INDUSTRIAL_VISION_DATA = {
  id: 'industrial-machine-vision',
  route: '/solutions/industrial-machine-vision',
  title: 'Industrial & Machine Vision Solutions',
  badge: 'FACTORY AUTOMATION & MACHINE VISION',
  solutionsSubtitle:
    'Explore automated optical inspection, industrial control HMIs, and edge vision systems engineered for zero-defect manufacturing.',
  description:
    'Sub-millimeter automated optical inspection, rugged railway HMIs, multi-display video controllers, and smart AI cameras engineered for deterministic industrial throughput.',
  heroImage: '/images/Automated Gear Inspection Line.png',
  featureHighlights: [
    'Sub-Millimeter Defect AOI',
    'Deterministic Real-Time OS',
    'EN 50155 Transit Certified'
  ],
  keyCapabilities: [
    { name: 'Automated Visual Inspection', icon: Scan },
    { name: 'Defect Detection', icon: AlertTriangle },
    { name: 'Industrial HMI', icon: Monitor },
    { name: 'Real-Time Image Processing', icon: Cpu },
    { name: 'Machine Monitoring', icon: Gauge }
  ],
  overview: [
    'Deterministic edge computing and deep learning defect inspection deployed directly into factories, robotic cells, and rolling stock.',
    'Renesas RZ/V2H & RZ/G2L processors with 10 TOPS DRP-AI, real-time Cortex-M33/R8 cores, and sub-millisecond control loops.',
    'EN 50155 transit certified, industrial temperature rated (-40°C to +85°C), and backed by guaranteed 10+ year availability.'
  ],
  pillars: [
    {
      title: 'Sub-Millimeter Defect Accuracy',
      desc: 'Detects microscopic surface defects down to 0.05mm on fast-moving components.'
    },
    {
      title: 'Sub-500µs PLC Interlocks',
      desc: 'Optically isolated digital I/O lines trigger pneumatic reject actuators with microsecond latency.'
    },
    {
      title: 'EN 50155 Transit Certified',
      desc: 'Qualified for severe mechanical vibration, electronic shock, and industrial voltage surges.'
    },
    {
      title: 'Fanless 10+ Year Longevity',
      desc: 'Enterprise lifecycle support backed by Renesas Product Longevity and CIP Linux SLTS.'
    }
  ],
  subtopics: [
    {
      id: 'industrial-railway-hmi',
      title: 'Industrial / Railway HMI',
      status: null,
      image: '/images/Modern Train Cockpit Control Panel.png',
      shortDescription:
        'Rugged operator consoles combining hardware 3D graphics, dual CAN-FD, and railway safety certification.',
      keyFeatures: [
        'Fluid 60 FPS 3D operator dashboard graphics',
        'EN 50155 railway shock and vibration compliance'
      ]
    },
    {
      id: 'display-video-controller',
      title: 'Display / Video Controller',
      status: null,
      image: '/images/vdc-solution-hd.jpg',
      shortDescription:
        'Multi-display routing hub driving independent LVDS, MIPI, and HDMI panels with synchronized scaling.',
      keyFeatures: [
        'Dual independent display outputs up to 4K',
        'Sub-frame glass-to-glass display latency'
      ]
    },
    {
      id: 'ai-visual-inspection',
      title: 'AI Visual Inspection',
      status: null,
      image: '/images/Automated Gear Inspection Line.png',
      shortDescription:
        'In-line automated optical inspection identifying microscopic surface defects at high production speeds.',
      keyFeatures: [
        'Micro-defect detection down to 0.05mm at high speeds',
        'Fast reject actuator triggering under 500µs'
      ]
    },
    {
      id: 'smart-vision-ai-camera',
      title: 'Smart Vision AI Camera',
      status: null,
      image: '/images/Precision Robotic Gripper on Assembly Line.png',
      shortDescription:
        'IP67 all-in-one smart camera combining global-shutter imaging with embedded edge AI processing.',
      keyFeatures: [
        'Global shutter sensor for blur-free machine capture',
        'Embedded AI barcode, OCR, and defect inspection'
      ]
    },
    {
      id: 'infrastructure-control',
      title: 'Infrastructure Control Systems',
      image: '/images/High-Speed Train.png',
      shortDescription:
        'High-availability SCADA control nodes with redundant fieldbus networking and deterministic safety interlocks.',
      keyFeatures: [
        'Zero-failover HSR/PRP redundant network support',
        'Deterministic hardware safety watchdog interlocks'
      ]
    }
  ],
  recommendedHardware: [
    {
      name: 'Renesas RZ/V2H Development SBC',
      tag: '10 TOPS Inspection AI',
      type: 'Machine Vision SBC',
      specs: 'Quad Cortex-A55, 10 TOPS DRP-AI, Dual 4-lane MIPI CSI-2, Dual GbE, PCIe Gen3',
      desc: 'High-density compute board built for multi-camera AOI, machine vision inspection, and real-time robotic perception.',
      href: '/products/rzv2h/complete-sbc/'
    },
    {
      name: 'Renesas RZ/G2L Single Board Computer',
      tag: 'Industrial HMI Controller',
      type: 'Single Board Computer',
      specs: 'Dual Cortex-A55 @ 1.2GHz, Mali-G31 GPU, Dual GbE, Dual LVDS, CAN-FD',
      desc: 'Rugged display controller and IoT gateway platform designed for railway consoles, industrial HMIs, and automation hubs.',
      href: '/products/rzg2l/complete-sbc/'
    }
  ]
};

export const DEFENCE_VISION_DATA = {
  id: 'defence-advanced-vision',
  route: '/solutions/defence-advanced-vision',
  title: 'Defence & Advanced Vision Solutions',
  badge: 'STRATEGIC & DEFENCE TECHNOLOGIES',
  solutionsSubtitle:
    'Explore mission-critical electro-optical guidance, tactical target tracking, and ruggedized edge computing systems.',
  description:
    'SWaP-C optimized electro-optical seeker guidance, dual-spectrum surveillance, multi-target tracking, and MIL-STD-810H rugged embedded AI systems.',
  heroImage: '/images/Futuristic Mountain Surveillance HUD.png',
  featureHighlights: [
    'MIL-STD-810H & SWaP-C',
    '120 FPS Target Tracking',
    'GPS-Denied Autonomy'
  ],
  keyCapabilities: [
    { name: 'Target Detection & Recognition', icon: Target },
    { name: 'Object Tracking', icon: Radar },
    { name: 'Advanced Image Processing', icon: Eye },
    { name: 'Embedded Edge AI', icon: Cpu },
    { name: 'Real-Time Vision Processing', icon: Zap }
  ],
  overview: [
    'SWaP-C optimized electro-optical guidance, dual-spectrum surveillance, and tactical neural situational awareness.',
    'Renesas RZ/V2H 10 TOPS neural acceleration enabling 120 FPS target tracking, thermal fusion, and GPS-denied navigation.',
    'MIL-STD-810H/461G compliant, conduction-cooled sealed aluminum chassis with wide DC vehicle power conditioning.'
  ],
  pillars: [
    {
      title: '120 FPS Guidance Inferencing',
      desc: 'Sub-milliradian neural tracking at high framerates for terminal kinetic intercept.'
    },
    {
      title: 'GPS-Denied Autonomous Guidance',
      desc: 'Visual-Inertial Odometry (VIO) coupled with terrain landmark recognition.'
    },
    {
      title: 'MIL-STD-810H & 461G Compliant',
      desc: 'Hardened against ballistic shock, severe vibration, and electromagnetic interference.'
    },
    {
      title: 'Sub-30W Thermal Envelope',
      desc: 'Passive conduction cooling directly into vehicle or airframe aluminum bulkheads.'
    }
  ],
  subtopics: [
    {
      id: 'seeker-systems',
      title: 'Seeker',
      status: 'In Development',
      image: '/images/Futuristic Mountain Surveillance HUD.png',
      shortDescription:
        'High-framerate electro-optical seeker guidance computing terminal intercept trajectories at 120 FPS.',
      keyFeatures: [
        '120 FPS centroid tracking with sub-milliradian precision',
        'GPS-denied visual-inertial odometry terminal guidance'
      ]
    },
    {
      id: 'surveillance-vision',
      title: 'Surveillance Vision System',
      image: '/images/UGV at a High-Tech Defense Base.png',
      shortDescription:
        'Long-range multi-spectral situational awareness combining thermal and high-zoom optical sensors.',
      keyFeatures: [
        'Pixel-aligned thermal and optical sensor fusion',
        'Long-range target detection exceeding 2 kilometers'
      ]
    },
    {
      id: 'target-tracking-recognition',
      title: 'Target Tracking & Recognition',
      image: '/images/Futuristic Mountain Surveillance HUD.png',
      shortDescription:
        'Neural multi-target tracking maintaining lock through smoke, foliage, and visual occlusions.',
      keyFeatures: [
        'Simultaneous tracking of multiple moving targets',
        'Kalman trajectory projection through visual occlusions'
      ]
    },
    {
      id: 'rugged-ai-embedded',
      title: 'Rugged AI Embedded System',
      image: '/images/UGV at a High-Tech Defense Base.png',
      shortDescription:
        'Conduction-cooled military-grade edge AI computing chassis for armored vehicles and tactical platforms.',
      keyFeatures: [
        'MIL-STD-810H shock and vibration compliance',
        'Fanless conduction cooling in sealed aluminum chassis'
      ]
    }
  ],
  recommendedHardware: [
    {
      name: 'Renesas RZ/V2H High-Density Compute SBC',
      tag: 'Strategic 10 TOPS AI',
      type: 'Defense Vision Platform',
      specs: 'Quad Cortex-A55, Dual Cortex-R8 real-time cores, 10 TOPS DRP-AI, Dual GbE, PCIe Gen3, -40°C to +85°C',
      desc: 'Hardened edge AI processing engine delivering high-framerate terminal guidance and multi-spectral sensor fusion within strict SWaP-C envelopes.',
      href: '/products/rzv2h/complete-sbc/'
    },
    {
      name: 'Renesas RZ/V2L Rugged SMARC SoM',
      tag: 'Compact SWaP-C Vision',
      type: 'System on Module',
      specs: 'Dual Cortex-A55 @ 1.2GHz, Cortex-M33, DRP-AI, Wide Temp (-40°C to +85°C), SMARC 2.1.1',
      desc: 'Minimal Size, Weight, and Power compute module tailored for tactical micro-UAVs, man-portable optronics, and embedded seeker heads.',
      href: '/products/rz-v2l'
    }
  ]
};

export const SOLUTION_CATEGORIES_DATA = {
  'vehicle-mobility': VEHICLE_MOBILITY_DATA,
  'video-surveillance': VIDEO_SURVEILLANCE_DATA,
  'industrial-machine-vision': INDUSTRIAL_VISION_DATA,
  'industrial-vision': INDUSTRIAL_VISION_DATA, // Alias
  'defence-advanced-vision': DEFENCE_VISION_DATA,
  'defence-advanced': DEFENCE_VISION_DATA // Alias
};
