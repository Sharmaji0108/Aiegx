import {
  Car,
  Video,
  Factory,
  Shield,
  Monitor,
  Eye,
  Bot,
  Cpu,
  Zap,
  Server,
  Layers,
  ShieldCheck,
  Activity,
  Scan,
  Compass,
  Radio,
  Gauge,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export const SOLUTIONS_CATEGORIES = [
  {
    id: 'vehicle-mobility',
    name: 'Vehicle & Mobility Solutions',
    href: '/vehicle-mobility',
    icon: Car,
    items: [
      { name: 'Driver Monitoring System (DMS)', href: '/solutions/driver-monitoring-system', slug: 'driver-monitoring-system' },
      { name: 'Automatic Number Plate Recognition (ANPR)', href: '/solutions/anpr-systems', slug: 'anpr-systems' },
      { name: 'Vehicle Detection Camera', href: '/solutions/vehicle-detection-camera', slug: 'vehicle-detection-camera' },
      { name: 'Smart Parking', href: '/solutions/smart-parking', slug: 'smart-parking', badge: 'Planned' },
    ],
  },
  {
    id: 'video-surveillance',
    name: 'Video & Surveillance Solutions',
    href: '/solutions/video-surveillance',
    icon: Video,
    items: [
      { name: 'Network Video Recorder (NVR)', href: '/solutions/nvr-systems', slug: 'nvr-systems' },
      { name: 'CCTV Monitoring System', href: '/solutions/cctv-monitoring', slug: 'cctv-monitoring' },
      { name: 'AI Video Analytics', href: '/solutions/ai-video-analytics', slug: 'ai-video-analytics' },
      { name: 'People Counting', href: '/solutions/people-counting', slug: 'people-counting', badge: 'Planned' },
      { name: 'Multi-Camera Video Analytics', href: '/solutions/multi-camera-analytics', slug: 'multi-camera-analytics', badge: 'Planned' },
    ],
  },
  {
    id: 'industrial-vision',
    name: 'Industrial & Machine Vision Solutions',
    href: '/solutions/industrial-machine-vision',
    icon: Factory,
    items: [
      { name: 'Industrial / Railway HMI', href: '/solutions/industrial-railway-hmi', slug: 'industrial-railway-hmi' },
      { name: 'Display / Video Controller', href: '/solutions/display-video-controller', slug: 'display-video-controller' },
      { name: 'AI Visual Inspection', href: '/solutions/ai-visual-inspection', slug: 'ai-visual-inspection' },
      { name: 'Smart Vision AI Camera', href: '/solutions/smart-vision-ai-camera', slug: 'smart-vision-ai-camera' },
      { name: 'Infrastructure Control Systems', href: '/solutions/infrastructure-control', slug: 'infrastructure-control', badge: 'Planned' },
    ],
  },
  {
    id: 'defence-advanced',
    name: 'Defence & Advanced Vision Solutions',
    href: '/solutions/defence-advanced-vision',
    icon: Shield,
    items: [
      { name: 'Seeker', href: '/solutions/seeker-systems', slug: 'seeker-systems', badge: 'In Development' },
      { name: 'Surveillance Vision System', href: '/solutions/surveillance-vision', slug: 'surveillance-vision', badge: 'Planned' },
      { name: 'Target Tracking & Recognition', href: '/solutions/target-tracking-recognition', slug: 'target-tracking-recognition', badge: 'Planned' },
      { name: 'Rugged AI Embedded System', href: '/solutions/rugged-ai-embedded', slug: 'rugged-ai-embedded', badge: 'Planned' },
    ],
  },
];

export const SOLUTIONS_MAP = {
  // ── CATEGORY 1: Vehicle & Mobility Solutions ──
  'driver-monitoring-system': {
    slug: 'driver-monitoring-system',
    category: 'Vehicle & Mobility Solutions',
    title: 'Driver Monitoring System (DMS)',
    subtitle: 'Automotive-grade in-cabin vision system tracking driver drowsiness, distraction, and gaze vectors in real time.',
    heroImage: '/images/Electric Bus at Smart City Stop.png',
    overview: [
      'AIEGX Driver Monitoring Systems (DMS) deliver deterministic, low-latency in-cabin driver state analysis powered by Renesas RZ/V2L and RZ/V2H processors with dedicated DRP-AI hardware neural accelerators.',
      'Equipped with high-sensitivity Near-Infrared (NIR) camera interfaces and active 850nm/940nm IR illumination drivers, the platform reliably monitors facial landmarks, eye closure (PERCLOS), head 3D pose, and phone distraction across all daytime and nighttime lighting conditions.',
      'Designed to meet European General Safety Regulation (GSR) and Euro NCAP safety standards, AIEGX DMS solutions run entirely on-device with zero cloud latency and complete driver privacy.'
    ],
    features: [
      { title: 'Sub-15ms Neural Inference', desc: 'Hardware DRP-AI engine executes facial landmark detection and eye tracking models in under 15 milliseconds.' },
      { title: 'Active NIR Illumination Control', desc: 'Synchronized pulsed IR LED driver ensures crisp pupil contrast without visible glare to the driver.' },
      { title: 'Gaze & Head Pose Tracking', desc: '6-Degrees-of-Freedom 3D head pose and gaze vector estimation to instantly flag road inattention.' },
      { title: 'Automotive Isolation & Bus', desc: 'Integrated Dual CAN-FD and automotive Ethernet interfaces provide instantaneous alerts to vehicle ECU.' },
      { title: 'AEC-Q100 Hardware Longevity', desc: 'Qualified for automotive temperature ranges (-40°C to +105°C) with 10+ years production longevity.' },
      { title: 'Root of Trust Security', desc: 'Secure boot with Renesas Cryptographic Engine ensures tamper-proof firmware and confidential video pipelines.' }
    ],
    architecture: [
      { layer: 'Optics & Sensing', details: 'NIR Global Shutter sensor via MIPI CSI-2 with synchronized 940nm IR strobe pulse.' },
      { layer: 'Inference Accelerator', details: 'Renesas RZ/V2L / RZ/V2H with DRP-AI (up to 10 TOPS) running quantized PyTorch DMS models.' },
      { layer: 'Safety & Co-Processing', details: 'Arm Cortex-M33 / Cortex-R8 real-time core validating Euro NCAP safety thresholds and watchdog.' },
      { layer: 'Automotive Gateway', details: 'Dual CAN-FD, LIN, Automotive Ethernet (100BASE-T1), and isolated digital outputs.' }
    ],
    recommendedProcessors: [
      {
        name: 'RZ/V2H',
        tag: 'Flagship 10 TOPS AI',
        desc: 'Quad Cortex-A55 + Dual Cortex-R8 with 2nd Gen DRP-AI for simultaneous DMS and multi-zone occupant monitoring.',
        href: '/products/rz-v2h'
      },
      {
        name: 'RZ/V2L',
        tag: 'Cost-Optimized Vision AI',
        desc: 'Dual Cortex-A55 + Cortex-M33 with DRP-AI vision accelerator engineered for compact dedicated DMS smart cameras.',
        href: '/products/rz-v2l'
      }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Development SBC', type: 'Single Board Computer', specs: 'Quad Cortex-A55, 10 TOPS DRP-AI, Dual GbE, PCIe Gen3, MIPI CSI-2', href: '/products/rzv2h/complete-sbc/' },
      { name: 'RZ/V2L SMARC Module', type: 'System on Module', specs: 'Dual Cortex-A55 @ 1.2GHz, DRP-AI, Dual GbE, MIPI CSI-2, SMARC 2.1.1', href: '/products/rz-v2l' }
    ]
  },

  'anpr-systems': {
    slug: 'anpr-systems',
    category: 'Vehicle & Mobility Solutions',
    title: 'Automatic Number Plate Recognition (ANPR)',
    subtitle: 'High-speed multi-lane license plate capture, character segmentation, and vehicle classification at the edge.',
    heroImage: '/images/AI Traffic Surveillance with Plate Detection.png',
    overview: [
      'AIEGX ANPR / LPR edge platforms provide deterministic license plate detection and character recognition at vehicle speeds exceeding 160 km/h, eliminating costly cloud streaming bandwidth.',
      'Utilizing Renesas RZ/V2H multi-core vision MPUs with DRP-AI neural acceleration, the system performs simultaneous vehicle detection, country/state plate localization, OCR character recognition, and color/make classification.',
      'Housed in weather-sealed industrial enclosures, these platforms interface with high-speed global-shutter IP cameras, radar sensors, and tolling infrastructure with sub-100 millisecond response times.'
    ],
    features: [
      { title: 'High-Speed Multi-Lane Capture', desc: 'Simultaneously captures and reads up to 4 lanes of vehicular traffic moving up to 160 km/h.' },
      { title: 'Universal Font & Plate OCR', desc: 'Deep learning OCR models trained for multi-national reflective, standard, and retro-reflective plates.' },
      { title: 'Vehicle Attribute Classification', desc: 'Instantly identifies vehicle make, body type (sedan, SUV, truck, bus), and primary color.' },
      { title: 'Low-Light OCR Accuracy', desc: 'High dynamic range (HDR) exposure fusion algorithms counteract headlight bloom and night glare.' },
      { title: 'Dual TSN Gigabit Ethernet', desc: 'Direct gigabit connection to toll plaza controllers and police hotlist databases.' },
      { title: 'Industrial Edge Reliability', desc: 'Fanless operation from -40°C to +85°C with power-loss safe eMMC and NVMe storage.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: 'High-Throughput ANPR', desc: 'Quad Cortex-A55 with 10 TOPS DRP-AI capable of multi-stream 4K OCR inference.', href: '/products/rz-v2h' },
      { name: 'RZ/V2L', tag: 'Entry Lane ANPR', desc: 'Dedicated dual-core MPU optimized for single-lane parking barriers and entry gates.', href: '/products/rz-v2l' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Complete SBC', type: 'Edge AI SBC', specs: '10 TOPS DRP-AI, 4-lane MIPI CSI-2, Dual TSN GbE, M.2 NVMe', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'vehicle-detection-camera': {
    slug: 'vehicle-detection-camera',
    category: 'Vehicle & Mobility Solutions',
    title: 'Vehicle Detection Camera',
    subtitle: 'Intelligent traffic monitoring sensor combining global-shutter imaging with edge neural classification.',
    heroImage: '/images/Electric Bus at Smart City Stop.png',
    overview: [
      'AIEGX Vehicle Detection Cameras integrate high-resolution CMOS image sensors directly with Renesas RZ/V Series vision microprocessors in a compact, thermally optimized enclosure.',
      'Designed for smart intersections, highway incident detection, and priority transit dispatch, the camera calculates vehicle queue lengths, average traffic velocities, and stopped-vehicle incidents on-die.',
      'Edge analytics output structured metadata over isolated Ethernet and RS-485 interfaces, slashing backend data traffic by over 95% compared to streaming raw RTSP feeds.'
    ],
    features: [
      { title: 'On-Sensor AI Classification', desc: 'Classifies bicycles, motorcycles, cars, commercial vans, and emergency vehicles in real time.' },
      { title: 'Queue & Congestion Analytics', desc: 'Continuous spatial queue measurement enables dynamic adaptive traffic light controllers.' },
      { title: 'Incident & Wrong-Way Alert', desc: 'Generates instant alerts for stalled vehicles, wrong-way driving, and pedestrian road incursions.' },
      { title: 'Zero Cloud Dependency', desc: 'Complete inference pipeline executed locally within a low-power 7W thermal envelope.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: '10 TOPS Multi-Model', desc: 'Quad Cortex-A55 processor running concurrent detection and tracking models.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Development SBC', type: 'Industrial SBC', specs: '10 TOPS DRP-AI, 8x MIPI CSI-2 lanes, Dual GbE, PCIe Gen3', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'smart-parking': {
    slug: 'smart-parking',
    category: 'Vehicle & Mobility Solutions',
    title: 'Smart Parking',
    subtitle: 'Multi-space optical occupancy monitoring, automated payment verification, and digital bay signage guidance.',
    heroImage: '/images/Smart City.png',
    badge: 'Planned',
    overview: [
      'AIEGX Smart Parking solutions leverage wide-angle overhead vision sensors to monitor up to 6 individual parking bays simultaneously with a single low-power edge compute node.',
      'Powered by Renesas RZ/V Series processors, the edge node detects open/occupied parking states, unauthorized space usage (such as EV charging stall blockages), and vehicle entry/exit timestamps.',
      'Scheduled for launch with full integration support for smart city LoRaWAN, Wi-Fi 6, and PoE mesh deployments.'
    ],
    features: [
      { title: 'Multi-Bay Visual Monitoring', desc: 'A single high-mounted camera monitors up to 6 adjacent bays with 99.8% occupancy precision.' },
      { title: 'EV Charging Bay Enforcement', desc: 'Detects internal combustion vehicles illegally parked in designated electric charging stalls.' },
      { title: 'RGB LED Guidance Integration', desc: 'Integrated GPIO drivers control overhead green/red status indicators above bays.' },
      { title: 'Ultra-Low Power PoE Operation', desc: 'Powered completely over standard 802.3af Power-over-Ethernet (PoE) wiring.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2L', tag: 'Efficient Edge Node', desc: 'Dual Cortex-A55 with DRP-AI for multi-space neural parking occupancy detection.', href: '/products/rz-v2l' }
    ],
    relatedProducts: [
      { name: 'RZ/V2L Complete SBC', type: 'Evaluation Platform', specs: 'Dual Cortex-A55 @ 1.2GHz, DRP-AI, Dual GbE, USB 2.0', href: '/products/rzv2l/complete-sbc/' }
    ]
  },

  // ── CATEGORY 2: Video & Surveillance Solutions ──
  'nvr-systems': {
    slug: 'nvr-systems',
    category: 'Video & Surveillance Solutions',
    title: 'Network Video Recorder (NVR)',
    subtitle: 'Multi-channel edge video recording, real-time H.264/H.265 hardware decoding, and neural threat detection.',
    heroImage: '/images/AI City Surveillance Camera.png',
    overview: [
      'AIEGX Network Video Recorders (NVR) merge multi-channel IP camera streaming with on-chassis edge AI video analytics powered by Renesas RZ/G2N and RZ/V2H processors.',
      'Featuring hardware-accelerated H.264 and H.265 video codecs, PCIe Gen3 NVMe storage channels, and multi-gigabit Ethernet interfaces, the platform records high-bitrate video streams while performing parallel real-time object detection.',
      'Designed for industrial plants, transit hubs, and commercial facilities requiring rugged, fanless operation with zero maintenance overhead.'
    ],
    features: [
      { title: 'Multi-Stream Hardware Decoding', desc: 'Simultaneous 4K / 1080p multi-channel video decoding with ultra-low CPU utilization.' },
      { title: 'High-Speed NVMe Storage', desc: 'Direct PCIe Gen3 x4 interface supports sustained enterprise SSD writes without dropped frames.' },
      { title: 'Real-Time Neural Metadata Tagging', desc: 'Streams are indexed by detected person, vehicle, and face metadata for instant forensic search.' },
      { title: 'Dual TSN Ethernet Ports', desc: 'Dedicated camera network isolation port prevents camera multicast traffic from saturating corporate LAN.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/G2N', tag: 'High-Throughput Storage', desc: 'Dual Cortex-A57 @ 1.5GHz with hardware video codecs and SATA/PCIe controllers.', href: '/products/rz-g2n' },
      { name: 'RZ/V2H', tag: 'AI-Enhanced NVR', desc: 'Quad Cortex-A55 with 10 TOPS DRP-AI for concurrent recording and multi-channel inference.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/G2N SBC', type: 'Single Board Computer', specs: 'Dual Cortex-A57 @ 1.5GHz, 4GB LPDDR4, PCIe Gen2, Dual GbE, SATA', href: '/products/rz-g2n/sbc' },
      { name: 'RZ/V2H Complete SBC', type: 'Edge AI SBC', specs: '10 TOPS DRP-AI, PCIe Gen3 x4, Dual GbE, 8GB LPDDR4X', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'cctv-monitoring': {
    slug: 'cctv-monitoring',
    category: 'Video & Surveillance Solutions',
    title: 'CCTV Monitoring System',
    subtitle: 'Continuous 24/7 high-reliability perimeter surveillance with automated intrusion alarms and PTZ control.',
    heroImage: '/images/AI Security Surveillance at Modern Entrance.png',
    overview: [
      'AIEGX CCTV Monitoring Systems deliver deterministic surveillance processing tailored for railway corridors, power utility substations, and critical infrastructure perimeter protection.',
      'Built upon Renesas RZ industrial processors, the platform combines hardware watchdog timers, extended operating temperature ratings, and hardware-accelerated pan-tilt-zoom (PTZ) motion loops.',
      'Equipped with on-device intrusion filtering, the system reliably differentiates between humans, wildlife, and wind-blown vegetation, cutting false alarms by up to 90%.'
    ],
    features: [
      { title: 'Virtual Tripwire & Perimeter Fence', desc: 'Defines multi-zone bi-directional virtual tripwires with sub-second alert dispatch.' },
      { title: 'PTZ Auto-Tracking Coordination', desc: 'Feeds coordinates to high-speed PTZ cameras to maintain lock on intruders across camera zones.' },
      { title: 'Extended Temperature Endurance', desc: 'Ruggedized circuit design rated for unconditioned outdoor cabinets (-40°C to +85°C).' },
      { title: 'Tamper & Occlusion Detection', desc: 'Immediate alarm generation if camera lens is spray-painted, blinded by lasers, or repositioned.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2L', tag: 'Perimeter AI Vision', desc: 'Dual Cortex-A55 with DRP-AI vision engine tailored for perimeter security cameras.', href: '/products/rz-v2l' }
    ],
    relatedProducts: [
      { name: 'RZ/V2L SMARC Module', type: 'System on Module', specs: 'Dual Cortex-A55 @ 1.2GHz, DRP-AI, Dual GbE, MIPI CSI-2', href: '/products/rz-v2l' }
    ]
  },

  'ai-video-analytics': {
    slug: 'ai-video-analytics',
    category: 'Video & Surveillance Solutions',
    title: 'AI Video Analytics',
    subtitle: 'Real-time video parsing for abnormal crowd behavior, line-crossing detection, and unattended object recognition.',
    heroImage: '/images/AI City Surveillance Camera.png',
    overview: [
      'AIEGX AI Video Analytics systems process live RTSP video feeds at the edge to extract actionable operational intelligence and security insights.',
      'Utilizing the powerful Renesas RZ/V2H 10 TOPS DRP-AI neural accelerator, our platforms run multiple concurrent deep learning models including object detection, person pose estimation, and anomaly detection.',
      'By processing feeds on-premises, organizations eliminate recurring cloud bandwidth bills while ensuring complete compliance with global privacy regulations.'
    ],
    features: [
      { title: 'Multi-Class Object Detection', desc: 'Concurrent detection of people, vehicles, backpacks, safety helmets, and hazardous tools.' },
      { title: 'Pose & Fall Detection', desc: 'Human skeleton landmark tracking instantly detects slips, falls, and workers in distress.' },
      { title: 'Loitering & Gathering Analysis', desc: 'Tracks spatial dwell time to identify loitering suspects or unauthorized group gatherings.' },
      { title: 'Unattended Luggage Alert', desc: 'Flags stationary abandoned items in transit stations and public concourses within seconds.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: '10 TOPS Video Analytics', desc: 'Quad Cortex-A55 with 2nd Gen DRP-AI executing high-density multi-stream video pipelines.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Complete SBC', type: 'Edge AI SBC', specs: '10 TOPS DRP-AI, 8GB LPDDR4X, Dual GbE, M.2 PCIe Gen3', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'people-counting': {
    slug: 'people-counting',
    category: 'Video & Surveillance Solutions',
    title: 'People Counting',
    subtitle: 'Bidirectional foot traffic monitoring, density estimation, and public space occupancy optimization.',
    heroImage: '/images/AI Security Surveillance at Modern Entrance.png',
    badge: 'Planned',
    overview: [
      'AIEGX People Counting edge solutions provide high-accuracy occupancy statistics for public transit terminals, shopping centers, and commercial office complexes.',
      'Utilizing top-down stereo vision and Renesas DRP-AI neural detection, the system accurately counts crossing patrons while filtering out shopping carts, luggage, and strollers.',
      'Planned for release with plug-and-play building automation protocols including BACnet/IP, Modbus TCP, and MQTT.'
    ],
    features: [
      { title: 'Bidirectional Line Crossing', desc: 'Distinguishes between entering and exiting patrons with >99% certified accuracy.' },
      { title: 'Cart & Stroller Filtering', desc: 'Morphological size and height analysis prevents non-human objects from triggering counts.' },
      { title: 'Density Heatmap Generation', desc: 'Generates spatial heatmaps showing customer dwell hotspots without storing personal images.' },
      { title: 'Privacy-Compliant Architecture', desc: 'Metadata only is transmitted upstream; raw video is never recorded or stored.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2L', tag: 'Cost-Effective Counter', desc: 'Dual Cortex-A55 with DRP-AI optimized for overhead smart sensor installations.', href: '/products/rz-v2l' }
    ],
    relatedProducts: [
      { name: 'RZ/V2L Complete SBC', type: 'Evaluation SBC', specs: 'Dual Cortex-A55 @ 1.2GHz, DRP-AI, Dual GbE', href: '/products/rzv2l/complete-sbc/' }
    ]
  },

  'multi-camera-analytics': {
    slug: 'multi-camera-analytics',
    category: 'Video & Surveillance Solutions',
    title: 'Multi-Camera Video Analytics',
    subtitle: 'Synchronized multi-angle camera fusion for wide-area tracking, cross-camera person re-ID, and spatial mapping.',
    heroImage: '/images/integrated-solution-hd.jpg',
    badge: 'Planned',
    overview: [
      'AIEGX Multi-Camera Video Analytics unites multiple overlapping or distributed camera streams into a coherent spatial digital twin of the monitored facility.',
      'Leveraging the 8-lane MIPI CSI-2 and PCIe expansion capabilities of the Renesas RZ/V2H platform, the system performs cross-camera person re-identification (Re-ID) and vehicle trajectory reconstruction.',
      'Currently in active roadmap planning for airport concourse tracking, warehouse logistics hubs, and smart campus security operations.'
    ],
    features: [
      { title: 'Cross-Camera Person Re-ID', desc: 'Tracks individuals seamlessly across blind spots between multiple camera viewpoints.' },
      { title: 'Wide-Area 3D Spatial Trajectory', desc: 'Projects 2D image coordinates into real-world facility CAD coordinates for unified tracking.' },
      { title: 'Hardware Frame Synchronization', desc: 'Hardware Genlock and TSN synchronization ensure microsecond frame alignment across cameras.' },
      { title: 'High-Density DRP-AI Inference', desc: 'Executes lightweight visual embedding extractors at 30 FPS across up to 8 camera streams.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: 'Multi-Camera Powerhouse', desc: 'Quad Cortex-A55 + 10 TOPS DRP-AI with 8-lane MIPI CSI-2 camera input support.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Complete SBC', type: 'Edge Vision Platform', specs: '10 TOPS DRP-AI, Dual 4-lane MIPI CSI-2, PCIe Gen3, Dual GbE', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  // ── CATEGORY 3: Industrial & Machine Vision Solutions ──
  'industrial-railway-hmi': {
    slug: 'industrial-railway-hmi',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Industrial / Railway HMI',
    subtitle: 'Rugged EN 50155 transit touch display consoles with hardware 3D graphics, CAN-FD, and isolated I/O.',
    heroImage: '/images/Modern Train Cockpit Control Panel.png',
    overview: [
      'AIEGX Industrial / Railway HMI platforms combine deterministic Arm processing with hardware 3D graphics acceleration to deliver high-reliability operator interfaces for trains, mining machinery, and factory automation.',
      'Built upon Renesas RZ/G2L and RZ/G2N MPUs, the platform supports multi-touch projected capacitive touchscreens, high-brightness LVDS / MIPI-DSI displays, and wide temperature operation (-40°C to +85°C).',
      'Certified for EN 50155 and ISO 9001 standards, our HMIs provide dual isolated CAN-FD ports, Gigabit Ethernet with TSN, and long-term Linux CIP kernel support for 10+ years of operational availability.'
    ],
    features: [
      { title: 'Hardware 3D GPU Rendering', desc: 'Arm Mali-G31 and PowerVR engines deliver fluid 60 FPS Qt and Chromium UI dashboards.' },
      { title: 'EN 50155 Transit Compliance', desc: 'Designed for shock, vibration, wide input voltage (9V to 36V DC), and ESD immunity.' },
      { title: 'Dual Isolated CAN-FD Interfaces', desc: 'Galvanically isolated CAN-FD controllers interface directly to train TCMS and industrial PLCs.' },
      { title: 'Real-Time Co-Processing Core', desc: 'Integrated Arm Cortex-M33 real-time core supervises physical buttons and safety interlocks.' },
      { title: '10+ Year Longevity Supply', desc: 'Backed by the Renesas Product Longevity Program and Civil Infrastructure Platform (CIP) Linux.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/G2L', tag: 'Industrial Touch HMI', desc: 'Dual Cortex-A55 with Mali-G31 3D GPU, dual LVDS, and Cortex-M33 co-processor.', href: '/products/rz-g2l' },
      { name: 'RZ/G2N', tag: 'High-Resolution HMI', desc: 'Dual Cortex-A57 @ 1.5GHz with PowerVR 3D GPU supporting dual 1080p and 4K displays.', href: '/products/rz-g2n' }
    ],
    relatedProducts: [
      { name: 'RZ/G2L Development Kit', type: 'Development Platform', specs: 'Dual Cortex-A55 @ 1.2GHz, Mali-G31 GPU, Dual GbE, LVDS, MIPI-DSI', href: '/products/rzg2l/complete-sbc/' },
      { name: 'RZ/G2N SBC', type: 'Single Board Computer', specs: 'Dual Cortex-A57 @ 1.5GHz, PowerVR GPU, PCIe, Dual GbE, SATA', href: '/products/rz-g2n/sbc' }
    ]
  },

  'display-video-controller': {
    slug: 'display-video-controller',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Display / Video Controller',
    subtitle: 'High-performance video timing generation, multi-format LVDS/DSI/HDMI conversion, and multi-display routing.',
    heroImage: '/images/vdc-solution-hd.jpg',
    overview: [
      'AIEGX Display & Video Controllers serve as the central visual rendering and video signal distribution hub for multi-screen industrial cockpits, medical workstations, and transit passenger information displays.',
      'Powered by Renesas RZ Series microprocessors with multi-channel video output interfaces, the system drives dual independent panels with synchronized video playback, alpha blending, and dynamic scaling.',
      'Equipped with hardware video decoders and redundant video input capture ports, the controller guarantees zero-jitter, artifact-free visual presentation in mission-critical operations.'
    ],
    features: [
      { title: 'Multi-Display Synchronization', desc: 'Simultaneous driving of independent LVDS and HDMI / MIPI-DSI displays at up to 1080p/4K.' },
      { title: 'Hardware Multi-Layer Blending', desc: 'Multi-plane hardware compositor overlays video feeds with real-time UI telemetry.' },
      { title: 'Ultra-Low Video Latency', desc: 'Sub-frame glass-to-glass display latency for real-time robotic and machinery control.' },
      { title: 'Wide Operating Temperature', desc: 'Convection-cooled fanless design rated from -40°C to +85°C.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/G2L', tag: 'Dual Display Controller', desc: 'Dual Cortex-A55 with integrated display timing controllers and dual GbE.', href: '/products/rz-g2l' }
    ],
    relatedProducts: [
      { name: 'RZ/G2L SMARC Module', type: 'System on Module', specs: 'Dual Cortex-A55, Mali-G31 GPU, Dual GbE, SMARC 2.1.1', href: '/products/rz-g2l' }
    ]
  },

  'ai-visual-inspection': {
    slug: 'ai-visual-inspection',
    category: 'Industrial & Machine Vision Solutions',
    title: 'AI Visual Inspection',
    subtitle: 'Sub-millimeter automated optical surface defect detection, dimensional gauging, and rapid component sorting.',
    heroImage: '/images/Automated Gear Inspection Line.png',
    overview: [
      'AIEGX AI Visual Inspection platforms bring deep learning defect classification directly to the factory floor, inspecting parts on high-speed conveyors in fractions of a millisecond.',
      'Driven by Renesas RZ/V2H processors with 10 TOPS DRP-AI acceleration, the system identifies micro-cracks, scratches, missing components, and solder bridge defects with sub-pixel precision.',
      'By replacing fragile traditional rule-based machine vision with robust neural networks, manufacturers eliminate false rejects caused by normal lighting variances and part position shifts.'
    ],
    features: [
      { title: 'Sub-Millimeter Defect Precision', desc: 'Detects micro-defects down to 0.05mm on metal, glass, plastic, and silicon surfaces.' },
      { title: 'High-Speed Conveyor Throughput', desc: 'Inspects up to 60 parts per second with synchronized hardware strobe lighting triggers.' },
      { title: 'Direct Industrial PLC Interlock', desc: 'Optically isolated high-speed digital I/O triggers pneumatic reject actuators within 500µs.' },
      { title: 'Unsupervised Anomaly Detection', desc: 'Trains on "good" parts only to detect unforeseen defect morphologies without defect datasets.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: '10 TOPS Inspection AI', desc: 'Quad Cortex-A55 + 2nd Gen DRP-AI executing high-resolution neural defect segmentation.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Development SBC', type: 'Machine Vision SBC', specs: '10 TOPS DRP-AI, Dual 4-lane MIPI CSI-2, Dual GbE, PCIe Gen3', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'smart-vision-ai-camera': {
    slug: 'smart-vision-ai-camera',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Smart Vision AI Camera',
    subtitle: 'All-in-one industrial smart camera combining global-shutter optics with embedded Renesas DRP-AI inference.',
    heroImage: '/images/Precision Robotic Gripper on Assembly Line.png',
    overview: [
      'AIEGX Smart Vision AI Cameras combine a high-speed global-shutter CMOS image sensor, lens mount, and Renesas RZ/V2L / RZ/V2H edge computing core into a single compact IP67 housing.',
      'Eliminating external PC controllers and bulky camera cabling, the smart camera performs complete image acquisition, neural classification, and EtherNet/IP communications internally.',
      'Designed for robotic arm end-of-arm tooling, automated guided vehicles, and tight industrial assembly enclosures requiring minimal footprint.'
    ],
    features: [
      { title: 'Global Shutter Image Sensor', desc: 'Freezes fast-moving machinery parts with zero motion blur or rolling shutter distortion.' },
      { title: 'On-Board Neural AI Engine', desc: 'DRP-AI accelerator performs real-time optical barcode decoding and part orientation checks.' },
      { title: 'Integrated LED Ring Light Driver', desc: 'Software-programmable current source powers multi-channel polarized ring illuminators.' },
      { title: 'Industrial Fieldbus & M12 Connectors', desc: 'Rugged M12 Ethernet and power connectors ensure waterproof, vibration-proof connections.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2L', tag: 'Compact Smart Camera', desc: 'Dual Cortex-A55 with DRP-AI fitting into standard 50x50mm industrial camera form factors.', href: '/products/rz-v2l' }
    ],
    relatedProducts: [
      { name: 'RZ/V2L SMARC SoM', type: 'Compact Module', specs: 'Dual Cortex-A55 @ 1.2GHz, DRP-AI, MIPI CSI-2, Dual GbE', href: '/products/rz-v2l' }
    ]
  },

  'infrastructure-control': {
    slug: 'infrastructure-control',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Infrastructure Control Systems',
    subtitle: 'High-availability deterministic control hubs for signaling, power distribution, and transit infrastructure.',
    heroImage: '/images/High-Speed Train.png',
    badge: 'Planned',
    overview: [
      'AIEGX Infrastructure Control Systems provide high-reliability supervisory control and data acquisition (SCADA) processing for wayside railway signaling, smart energy grids, and water treatment plants.',
      'Structured around Renesas RZ industrial microprocessors with real-time Cortex-M33/R8 co-processing cores, the platform guarantees deterministic sub-millisecond response times for critical safety interlocks.',
      'In roadmap development with native redundant network topologies (HSR/PRP) and functional safety SIL certification readiness.'
    ],
    features: [
      { title: 'Zero-Failover Network Redundancy', desc: 'Hardware-supported High-availability Seamless Redundancy (HSR) and Parallel Redundancy Protocol (PRP).' },
      { title: 'Deterministic Microsecond Interlocks', desc: 'Dedicated real-time cores execute safety control logic independent of host operating system.' },
      { title: 'Heavy Electrical Isolation', desc: 'Galvanically isolated serial, Ethernet, and digital I/O lines withstand multi-kilovolt surge pulses.' },
      { title: 'Extended Lifecycle Guarantee', desc: '15+ year component availability roadmap ensures decades of infrastructure stability.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/G2L', tag: 'Infrastructure RT MPU', desc: 'Dual Cortex-A55 + Cortex-M33 real-time core with dual CAN-FD and TSN Ethernet.', href: '/products/rz-g2l' }
    ],
    relatedProducts: [
      { name: 'RZ/G2L Development Kit', type: 'Development Platform', specs: 'Dual Cortex-A55, Cortex-M33, Dual GbE, CAN-FD', href: '/products/rzg2l/complete-sbc/' }
    ]
  },

  // ── CATEGORY 4: Defence & Advanced Vision Solutions ──
  'seeker-systems': {
    slug: 'seeker-systems',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Seeker',
    subtitle: 'Precision electro-optical seeker guidance and real-time terminal target tracking under strict SWaP-C constraints.',
    heroImage: '/images/Futuristic Mountain Surveillance HUD.png',
    badge: 'In Development',
    overview: [
      'AIEGX Seeker platforms integrate multi-spectral imaging with dedicated Renesas DRP-AI neural acceleration to deliver autonomous terminal guidance and target acquisition in GPS-denied environments.',
      'Engineered for extreme Size, Weight, Power, and Cost (SWaP-C) constraints, the edge module processes high-framerate infrared and optical video feeds, calculating target centroid offsets and line-of-sight rates at 120 FPS.',
      'Currently in advanced development with hardware-in-the-loop (HIL) simulation testbeds and conformal coating for high-G and vibration environments.'
    ],
    features: [
      { title: '120 FPS Terminal Target Tracking', desc: 'Hardware DRP-AI neural network tracks high-velocity targets with sub-milliradian precision.' },
      { title: 'GPS-Denied Autonomous Guidance', desc: 'Visual inertial odometry (VIO) coupled with target landmark recognition operates without satellite signals.' },
      { title: 'Ultra-Compact Conduction Cooling', desc: 'Sub-30 gram circuit footprint designed for direct conduction mounting to airframe bulkheads.' },
      { title: 'Hardened Real-Time Actuator Link', desc: 'Microsecond SPI and CAN-FD communication loops directly actuate fin control servo mechanisms.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: '10 TOPS Seeker AI', desc: 'Quad Cortex-A55 + Dual Cortex-R8 with 2nd Gen DRP-AI for sub-millisecond guidance inference.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Development SBC', type: 'High-Density Compute', specs: '10 TOPS DRP-AI, Dual 4-lane MIPI CSI-2, PCIe Gen3, Dual GbE', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'surveillance-vision': {
    slug: 'surveillance-vision',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Surveillance Vision System',
    subtitle: 'Long-range optical and thermal situational awareness platforms for border control and defense installations.',
    heroImage: '/images/UGV at a High-Tech Defense Base.png',
    badge: 'Planned',
    overview: [
      'AIEGX Surveillance Vision Systems combine long-wave infrared (LWIR) thermal sensors with high-magnification visible optical cameras for 24/7 all-weather perimeter monitoring.',
      'Powered by Renesas RZ/V Series vision processors, the system performs edge-based multi-spectral image fusion, highlighting thermal signatures against high-resolution optical terrain backgrounds.',
      'Scheduled on the product roadmap for fixed observation posts, mobile reconnaissance vehicles, and coastal defense installations.'
    ],
    features: [
      { title: 'Bimodal Thermal & Optical Fusion', desc: 'Pixel-aligned fusion of infrared and visible video feeds reveals targets concealed by fog, smoke, and camouflage.' },
      { title: 'Kilometer-Range Threat Detection', desc: 'Identifies human signatures at distances exceeding 2 kilometers with neural bounding box extraction.' },
      { title: 'Low-Power Solar & Battery Support', desc: 'Power-throttling modes enable extended operation from compact field batteries and solar panels.' },
      { title: 'MIL-STD-810H Compliant Design', desc: 'Engineered for salt fog, sandstorms, shock, vibration, and extreme temperature cycling.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: 'Dual-Spectrum AI MPU', desc: 'Quad Cortex-A55 with 10 TOPS DRP-AI capable of multi-resolution thermal-optical fusion.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Complete SBC', type: 'Edge AI Platform', specs: '10 TOPS DRP-AI, 8x MIPI CSI-2 lanes, Dual GbE, PCIe Gen3', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'target-tracking-recognition': {
    slug: 'target-tracking-recognition',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Target Tracking & Recognition',
    subtitle: 'Deep neural object classification, robust multi-target tracking, and non-line-of-sight trajectory projection.',
    heroImage: '/images/Futuristic Mountain Surveillance HUD.png',
    badge: 'Planned',
    overview: [
      'AIEGX Target Tracking & Recognition edge platforms provide automated classification and kinetic trajectory estimation for defense reconnaissance and counter-UAS systems.',
      'Running on the Renesas RZ/V2H platform with 10 TOPS DRP-AI acceleration, the system continuously tracks up to 50 simultaneous visual targets, maintaining track identity through temporary occlusions.',
      'Currently in roadmap engineering for integrated counter-drone turrets, remote weapon stations, and unmanned aerial sensor gimbals.'
    ],
    features: [
      { title: '50+ Simultaneous Target Tracks', desc: 'Multi-object tracking (MOT) architecture calculates instantaneous speed, heading, and range vectors.' },
      { title: 'Occlusion-Resistant Trajectory Filtering', desc: 'Kalman filter kinematic state projection maintains target lock through smoke and terrain obstacles.' },
      { title: 'Target Silhouette Classification', desc: 'Deep neural networks classify tracked assets into civilian vehicles, military vehicles, drones, and personnel.' },
      { title: 'Deterministic Fire Control Bus', desc: 'Real-time deterministic fieldbus outputs fire-control telemetry to pan-tilt stabilization gimbals.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: 'Targeting Neural Core', desc: 'Quad Cortex-A55 + Dual Cortex-R8 with 10 TOPS DRP-AI for real-time kinematic tracking.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Development SBC', type: 'Defense Vision SBC', specs: '10 TOPS DRP-AI, Dual 4-lane MIPI CSI-2, PCIe Gen3, Dual GbE', href: '/products/rzv2h/complete-sbc/' }
    ]
  },

  'rugged-ai-embedded': {
    slug: 'rugged-ai-embedded',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Rugged AI Embedded System',
    subtitle: 'Conduction-cooled, MIL-STD-810H compliant edge AI computing chassis for extreme battlefield and airborne environments.',
    heroImage: '/images/UGV at a High-Tech Defense Base.png',
    badge: 'Planned',
    overview: [
      'AIEGX Rugged AI Embedded Systems pack high-density neural inferencing into a fully sealed, conduction-cooled aluminum enclosure designed for extreme aerospace and armored vehicle environments.',
      'Driven by Renesas RZ/V2H and RZ/G2 processors, the ruggedized platform withstands extreme ballistic shock, continuous vibration, EMI interference (MIL-STD-461G), and sub-zero temperatures (-40°C to +85°C).',
      'Roadmap planned for unmanned ground vehicles (UGV), tactical drones, and field sensor hubs requiring rugged MIL-DTL-38999 circular connectors and wide 12V–36V DC MIL-STD-1275E power conditioning.'
    ],
    features: [
      { title: 'MIL-STD-810H & 461G Ready', desc: 'Fully sealed IP67 conduction-cooled chassis resists dust, water ingress, and electromagnetic interference.' },
      { title: 'MIL-STD-1275E Vehicle Power Protection', desc: 'Withstands +100V voltage spikes, reverse polarity, and severe engine cranking voltage drop.' },
      { title: 'MIL-DTL-38999 Circular Connectors', desc: 'Heavy-duty bayonet locking connectors for high-reliability vibration and moisture sealing.' },
      { title: 'Zero Moving Parts Fanless Cooling', desc: 'Internal heat pipe thermal dissipation directly into external heavy-gauge aluminum heatsink fins.' }
    ],
    recommendedProcessors: [
      { name: 'RZ/V2H', tag: 'Rugged 10 TOPS AI', desc: 'Quad Cortex-A55 with 10 TOPS DRP-AI delivering battlefield intelligence within a 15W chassis envelope.', href: '/products/rz-v2h' }
    ],
    relatedProducts: [
      { name: 'RZ/V2H Development SBC', type: 'Rugged Embedded SBC', specs: '10 TOPS DRP-AI, Dual GbE, PCIe Gen3, Wide Voltage Input', href: '/products/rzv2h/complete-sbc/' }
    ]
  }
};

// ── Backwards-Compatibility Aliases ──
SOLUTIONS_MAP['industrial-hmi'] = SOLUTIONS_MAP['industrial-railway-hmi'];
SOLUTIONS_MAP['embedded-linux'] = SOLUTIONS_MAP['infrastructure-control'];
SOLUTIONS_MAP['smart-displays'] = SOLUTIONS_MAP['display-video-controller'];
SOLUTIONS_MAP['iot-gateways'] = SOLUTIONS_MAP['infrastructure-control'];
SOLUTIONS_MAP['pos-access-control'] = SOLUTIONS_MAP['anpr-systems'];
SOLUTIONS_MAP['edge-ai'] = SOLUTIONS_MAP['ai-video-analytics'];
SOLUTIONS_MAP['ai-cameras'] = SOLUTIONS_MAP['smart-vision-ai-camera'];
SOLUTIONS_MAP['object-detection'] = SOLUTIONS_MAP['target-tracking-recognition'];
SOLUTIONS_MAP['ai-barcode-scanning'] = SOLUTIONS_MAP['ai-visual-inspection'];
SOLUTIONS_MAP['video-analytics'] = SOLUTIONS_MAP['ai-video-analytics'];
SOLUTIONS_MAP['optical-inspection'] = SOLUTIONS_MAP['ai-visual-inspection'];
SOLUTIONS_MAP['multi-camera-vision'] = SOLUTIONS_MAP['multi-camera-analytics'];
SOLUTIONS_MAP['machine-vision'] = SOLUTIONS_MAP['smart-vision-ai-camera'];
SOLUTIONS_MAP['video-processing'] = SOLUTIONS_MAP['display-video-controller'];
SOLUTIONS_MAP['smart-factory'] = SOLUTIONS_MAP['infrastructure-control'];
SOLUTIONS_MAP['amr'] = SOLUTIONS_MAP['vehicle-detection-camera'];
SOLUTIONS_MAP['agv'] = SOLUTIONS_MAP['vehicle-detection-camera'];
SOLUTIONS_MAP['vision-navigation'] = SOLUTIONS_MAP['seeker-systems'];
SOLUTIONS_MAP['robotic-perception'] = SOLUTIONS_MAP['smart-vision-ai-camera'];
SOLUTIONS_MAP['motion-control'] = SOLUTIONS_MAP['infrastructure-control'];
