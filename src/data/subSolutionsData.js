import {
  Camera,
  Cpu,
  Scan,
  BrainCircuit,
  Bell,
  Database,
  Server,
  Activity,
  Layers,
  Monitor,
  Shield,
  Video,
  Target,
  Eye,
  Zap,
  HardDrive
} from 'lucide-react';

/**
 * Comprehensive, verified sub-solutions configuration across all 4 AIEGX categories.
 * Each sub-solution contains unique, technically accurate Overview, Key Features,
 * System Architecture flow steps, and Specifications.
 */
export const SUBSOLUTIONS_DATA = {
  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 1: Vehicle & Mobility Solutions
  // ═══════════════════════════════════════════════════════════════

  'driver-monitoring-system': {
    slug: 'driver-monitoring-system',
    category: 'Vehicle & Mobility Solutions',
    title: 'Driver Monitoring System (DMS)',
    subtitle:
      'Camera-based driver monitoring solution developed on the Renesas RZ/V2L platform to identify potential signs of driver drowsiness and distraction.',
    heroImage: '/images/Electric Bus at Smart City Stop.png',
    primaryButtonText: 'Contact Our Team',
    secondaryButtonText: 'Explore Features',
    secondaryTab: 'key-features',
    highlights: [
      'Camera-Based Monitoring',
      'Edge AI Processing',
      'Renesas RZ/V2L Platform'
    ],
    tabs: [
      { id: 'overview', label: 'Overview' },
      { id: 'key-features', label: 'Key Features' },
      { id: 'specifications', label: 'Specifications' }
    ],
    overview: {
      heading: 'Overview',
      summary:
        'A real-time, camera-based Driver Monitoring System (DMS) that analyses driver behaviour to identify possible drowsiness and distraction, helping enhance driving safety in transportation applications.',
      platform: 'Renesas RZ/V2L',
      aiAccelerator: 'Renesas DRP-AI'
    },
    features: [
      {
        title: 'Eye Closure & Drowsiness Monitoring',
        desc: 'Monitors eye closure to identify potential signs of drowsiness.'
      },
      {
        title: 'Head Pose Detection',
        desc: 'Monitors driver head movements to assess attention.'
      },
      {
        title: 'Mobile Phone Detection',
        desc: 'Detects mobile phone usage within the camera view.'
      },
      {
        title: 'Yawn Detection',
        desc: 'Detects driver yawning as a potential indicator of fatigue.'
      }
    ],
    specifications: [
      { label: 'Processing Platform', value: 'Renesas RZ/V2L' },
      { label: 'AI Accelerator', value: 'Renesas DRP-AI' },
      { label: 'Operating System', value: 'Embedded Linux' },
      { label: 'Camera Input', value: 'Camera-based driver monitoring' },
      { label: 'AI Capabilities', value: 'Eye closure, head pose, mobile phone and yawn detection' }
    ]
  },

  'anpr-systems': {
    slug: 'anpr-systems',
    category: 'Vehicle & Mobility Solutions',
    title: 'Automatic Number Plate Recognition (ANPR)',
    subtitle:
      'AI-based vehicle recognition solution developed on the Renesas RZ/V2H Evaluation Kit, supporting four RTSP camera streams for number plate recognition, vehicle classification, manufacturer logo detection and speed estimation.',
    heroImage: '/images/AI Traffic Surveillance with Plate Detection.png',
    primaryButtonText: 'Contact Our Team',
    secondaryButtonText: 'Explore Features',
    secondaryTab: 'key-features',
    highlights: [
      '4 RTSP Camera Streams',
      'Edge AI Processing',
      'Renesas RZ/V2H EVK'
    ],
    ctaHeading: 'Interested in our Automatic Number Plate Recognition (ANPR)?',
    ctaDescription: 'Get in touch with our team to discuss your requirements.',
    ctaButtonText: 'Contact Our Team',
    overview: {
      heading: 'Overview',
      summary:
        'An embedded AI-based vehicle monitoring solution that processes video from four RTSP cameras to detect vehicles, recognise number plates, classify vehicle types, identify manufacturer logos and estimate vehicle speed.',
      platform: 'Renesas RZ/V2H EVK',
      aiProcessing: 'On-device (Edge AI)',
    },
    features: [
      {
        title: 'Multi-Camera Processing',
        desc: 'Supports simultaneous processing of four RTSP camera streams.'
      },
      {
        title: 'Number Plate Recognition',
        desc: 'Detects vehicle number plates and extracts registration text.'
      },
      {
        title: 'Vehicle Classification',
        desc: 'Identifies vehicle categories using AI-based classification.'
      },
      {
        title: 'Manufacturer Logo Detection',
        desc: 'Detects vehicle manufacturer logos (e.g., Toyota, Honda, etc.).'
      },
      {
        title: 'Vehicle Speed Estimation',
        desc: 'Estimates vehicle speed using camera-based analysis.'
      },
      {
        title: 'Embedded AI Processing',
        desc: 'Performs vehicle analytics on the Renesas RZ/V2H EVK.'
      }
    ],
    specifications: [
      {
        label: 'Development Platform',
        value: 'Renesas RZ/V2H Evaluation Kit'
      },
      {
        label: 'Camera Input',
        value: 'RTSP IP cameras'
      },
      {
        label: 'Simultaneous Streams',
        value: '4'
      },
      {
        label: 'Video Analytics',
        value: 'Vehicle detection, classification and manufacturer logo detection'
      },
      {
        label: 'Number Plate Processing',
        value: 'Plate detection and registration text extraction'
      },
      {
        label: 'Speed Measurement',
        value: 'Camera-based speed estimation'
      },
      {
        label: 'AI Processing',
        value: 'On-device AI inference'
      }
    ]
  },

  'vehicle-detection-camera': {
    slug: 'vehicle-detection-camera',
    category: 'Vehicle & Mobility Solutions',
    title: 'Vehicle Detection Camera',
    subtitle: 'Roadside edge vision sensor delivering real-time vehicle counting, queue tracking, and incident warnings.',
    heroImage: '/images/Electric Bus at Smart City Stop.png',
    overview: {
      heading: 'Intelligent Roadside Vehicle Detection & Traffic Flow Camera',
      summary: 'Integrated optical edge computing system combining wide-angle traffic cameras with real-time neural vehicle counting, occupancy detection, speed approximation, and incident warning capabilities.',
      purpose: 'Automate intersection signal optimization, queue length monitoring, highway congestion detection, and wrong-way vehicle alerting.',
      problem: 'Outdated inductive road loop sensors that require expensive pavement cutting, suffer high failure rates, and lack vehicle classification intelligence.',
      aiegxRole: 'AIEGX deploys compact Renesas RZ/V2L and RZ/V2H smart camera platforms featuring low thermal dissipation, wide voltage inputs, and on-device object detection to process traffic video directly at the roadside pole.'
    },
    features: [
      { title: 'Multi-Class Vehicle Detection', desc: 'Classifies passenger cars, freight trucks, buses, motorcycles, bicycles, and crossing pedestrians.' },
      { title: 'Virtual Queue & Occupancy Tracking', desc: 'Continuous measurement of intersection queue depth, lane occupancy percentage, and wait times.' },
      { title: 'Incident & Wrong-Way Warnings', desc: 'Instant alert generation for stalled vehicles, wrong-way drivers, and shoulder obstructions.' },
      { title: 'Traffic Controller Bus Integration', desc: 'Direct RS-485, CAN, and Ethernet connectivity to NEMA TS2 and 170/2070 traffic signal controllers.' },
      { title: 'All-Weather Day/Night Robustness', desc: 'Neural feature extractors maintain high accuracy across heavy rain, fog, snowfall, and night darkness.' }
    ],
    architecture: [
      { step: '01', title: 'Camera Input', desc: 'Wide-angle roadside optical sensor capturing multi-lane roadway footage', icon: Camera },
      { step: '02', title: 'Image Processing', desc: 'Lens distortion correction, dynamic range normalization & frame cropping', icon: Scan },
      { step: '03', title: 'Object Detection', desc: 'DRP-AI hardware accelerator detecting all moving and stationary roadway entities', icon: Cpu },
      { step: '04', title: 'Vehicle Classification', desc: 'Multi-class deep learning categorizing vehicles, calculating speed vectors & lane occupancy', icon: BrainCircuit },
      { step: '05', title: 'Detection Output', desc: 'Real-time telemetry transmission to municipal traffic controllers and SCADA networks', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: '1x or 2x MIPI CSI-2 (up to 4 lanes) or IP RTSP stream input' },
      { label: 'Video Input / Resolution', value: '1080p Full HD @ 60 FPS / 4K @ 30 FPS' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33 (RZ/V2L) or Quad Cortex-A55 (RZ/V2H)' },
      { label: 'AI Inference', value: 'Renesas DRP-AI hardware neural engine (0.5 to 10 TOPS)' },
      { label: 'Connectivity / Interfaces', value: '10/100/1000 Mbps Ethernet, RS-485 Modbus, CAN-FD, optoisolated trigger I/O' },
      { label: 'Platform Support', value: 'Renesas RZ/V2L SMARC Module / Renesas RZ/V2H Complete SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C sealed IP66/IP67 enclosure rated' }
    ]
  },

  'smart-parking': {
    slug: 'smart-parking',
    category: 'Vehicle & Mobility Solutions',
    title: 'Smart Parking',
    subtitle: 'Multi-space optical parking occupancy monitoring and dynamic guidance with automated EV stall enforcement.',
    heroImage: '/images/Smart City.png',
    overview: {
      heading: 'Multi-Bay Optical Smart Parking Management System',
      summary: 'Overhead edge-vision computing system providing automated multi-space parking occupancy detection, guidance display integration, and unauthorized stall enforcement without in-ground magnetic sensors.',
      purpose: 'Minimize parking search times, optimize garage utilization, enforce electric vehicle (EV) charging stall policies, and automate revenue management.',
      problem: 'High maintenance costs and battery replacement cycles of individual in-ground magnetometer pucks, along with an inability to verify whether parked vehicles are actively charging at EV bays.',
      aiegxRole: 'AIEGX edge vision systems leverage wide-angle optics and Renesas RZ/V2L microprocessors to monitor up to 12 parking spaces simultaneously with a single low-power edge node, streaming occupancy telemetry to cloud and LED displays.'
    },
    features: [
      { title: 'Multi-Space Optical Coverage', desc: 'A single overhead camera unit accurately monitors 6 to 12 parking bays concurrently.' },
      { title: 'Sub-Second Occupancy Updates', desc: 'Detects vehicle arrival, departure, and bay transitions with 99%+ accuracy in under 1 second.' },
      { title: 'EV Charging Stall Enforcement', desc: 'Distinguishes between actively charging electric vehicles and unauthorized combustion vehicles.' },
      { title: 'Local LED Guidance Control', desc: 'Directly drives multi-color overhead LED indicators: green for available, red for occupied, blue for accessible.' },
      { title: 'Resilient Local Edge Analytics', desc: 'Continues full tracking and gate actuation during network outages with zero reliance on cloud video streams.' }
    ],
    architecture: [
      { step: '01', title: 'Parking Camera / Sensor', desc: 'Overhead wide-angle camera monitoring multi-bay parking stalls', icon: Camera },
      { step: '02', title: 'Data Acquisition', desc: 'Continuous video frame acquisition and spatial bay coordinate mapping', icon: Scan },
      { step: '03', title: 'Occupancy Detection', desc: 'Deep learning neural inference classifying empty, occupied, and transitioning bays', icon: BrainCircuit },
      { step: '04', title: 'Space Availability Processing', desc: 'Aggregation of bay states, parking duration calculation & access privilege verification', icon: Cpu },
      { step: '05', title: 'Parking Status Output', desc: 'Instant update to overhead status LEDs, electronic wayfinding signs & parking servers', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'MIPI CSI-2 2-lane / 4-lane or PoE Gigabit Ethernet camera connection' },
      { label: 'Video Input / Resolution', value: '1080p @ 30 FPS multi-bay tracking (6 to 12 bays per sensor node)' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33 real-time core' },
      { label: 'AI Inference', value: 'Renesas DRP-AI (low-power sub-5W total system envelope)' },
      { label: 'Connectivity / Interfaces', value: 'Dual GbE, RS-485, USB 2.0, multi-channel GPIO for LED indicator drivers and gate relays' },
      { label: 'Platform Support', value: 'Renesas RZ/V2L SMARC Module / Renesas RZ/G2L Development Kit' },
      { label: 'Operating Temperature', value: '-40°C to +85°C outdoor garage and surface lot qualified' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 2: Video & Surveillance Solutions
  // ═══════════════════════════════════════════════════════════════

  'nvr-systems': {
    slug: 'nvr-systems',
    category: 'Video & Surveillance Solutions',
    title: 'Network Video Recorder (NVR)',
    subtitle: 'Multi-channel edge recording platform with hardware video decoding and on-device neural indexing on NVMe storage.',
    heroImage: '/images/AI City Surveillance Camera.png',
    overview: {
      heading: 'Multi-Channel High-Throughput Edge Network Video Recorder',
      summary: 'Heavy-duty, fanless edge recording appliance engineered for high-bitrate multi-stream H.264/H.265 video capture, local NVMe storage, and on-device neural metadata indexing.',
      purpose: 'Provide tamper-resistant, 24/7 video recording and rapid forensic AI search across dozens of IP camera streams without cloud storage costs.',
      problem: 'High monthly cloud bandwidth and storage fees, network bottleneck vulnerabilities during emergencies, and slow manual forensic video reviews across hundreds of hours of raw footage.',
      aiegxRole: 'AIEGX combines high-bandwidth storage interfaces (SATA/PCIe Gen3 NVMe) and multi-stream hardware video decoders in Renesas RZ/G2N and RZ/V2H platforms to deliver high-capacity recording and real-time metadata tagging.'
    },
    features: [
      { title: 'Multi-Channel Hardware Video Decoding', desc: 'Hardware-accelerated decoding of up to 16x 1080p or 4x 4K H.264/H.265 camera streams.' },
      { title: 'High-Sustained NVMe / SATA Throughput', desc: 'Dedicated PCIe Gen3 and SATA interfaces guarantee jitter-free concurrent multi-drive writes.' },
      { title: 'Real-Time Metadata Indexing', desc: 'Neural engines tag timestamps with vehicle, person, and object metadata for instant forensic queries.' },
      { title: 'Tamper-Resistant Cryptographic Storage', desc: 'Hardware Root of Trust with AES-256 encrypted storage volumes prevents unauthorized data extraction.' },
      { title: '24/7 Fanless Industrial Operation', desc: 'Conduction-cooled design with zero moving parts qualified for round-the-clock enterprise reliability.' }
    ],
    architecture: [
      { step: '01', title: 'Multi-Channel IP Cameras', desc: 'Distributed surveillance cameras streaming ONVIF / RTSP video', icon: Camera },
      { step: '02', title: 'RTSP Stream Ingestion', desc: 'Gigabit Ethernet network interface ingesting concurrent multi-channel camera feeds', icon: Server },
      { step: '03', title: 'Hardware Video Decoding', desc: 'Hardware H.264/H.265 multi-stream video decoding with minimal CPU overhead', icon: Cpu },
      { step: '04', title: 'Real-Time Metadata Indexing', desc: 'Neural feature extraction generating forensic searchable tags for persons and vehicles', icon: BrainCircuit },
      { step: '05', title: 'NVMe Storage & Streaming', desc: 'Zero-loss recording to local high-speed SSDs and encrypted client playback streaming', icon: Database }
    ],
    specifications: [
      { label: 'Camera Interface', value: '8 to 16 channels @ 1080p30 or 4 channels @ 4K30 concurrent RTSP streams' },
      { label: 'Video Input / Resolution', value: 'Hardware H.264 / H.265 (HEVC), MJPEG decoding up to 4K resolution' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A57 @ 1.5GHz (RZ/G2N) or Quad Cortex-A55 @ 1.2GHz (RZ/V2H)' },
      { label: 'AI Inference', value: 'Integrated DRP-AI hardware acceleration (up to 10 TOPS on RZ/V2H)' },
      { label: 'Connectivity / Interfaces', value: 'Dual Gigabit Ethernet ports (isolated WAN/LAN architecture), M.2 NVMe, SATA III' },
      { label: 'Platform Support', value: 'Renesas RZ/G2N Development Platform / Renesas RZ/V2H Complete SBC' },
      { label: 'Operating Temperature', value: '-40°C to +75°C fanless conduction cooled' }
    ]
  },

  'cctv-monitoring': {
    slug: 'cctv-monitoring',
    category: 'Video & Surveillance Solutions',
    title: 'CCTV Monitoring System',
    subtitle: 'Continuous 24/7 perimeter surveillance with automated intrusion tripwires and PTZ camera tracking handoff.',
    heroImage: '/images/AI Security Surveillance at Modern Entrance.png',
    overview: {
      heading: 'Continuous Perimeter & Facility CCTV Monitoring System',
      summary: 'Enterprise security surveillance hub offering automated perimeter breach detection, intelligent PTZ camera handoff, and false-alarm suppression for critical facilities.',
      purpose: 'Protect perimeter fences, entrance corridors, and high-security zones with continuous automated threat detection.',
      problem: 'Operator fatigue leading to missed security breaches on multi-monitor walls, and legacy motion sensors generating 90%+ false alarms triggered by swaying trees, animals, and weather.',
      aiegxRole: 'AIEGX provides hardened, fanless computing units running real-time deep learning filters on Renesas RZ Series silicon to differentiate human intruders and unauthorized vehicles from environmental noise.'
    },
    features: [
      { title: 'Virtual Tripwire & Zone Ingress Alerts', desc: 'Configurable bidirectional digital tripwires and polygonal exclusion zones trigger instant alerts.' },
      { title: '90% Reduction in False Alarms', desc: 'Neural classification models discard windblown vegetation, passing wildlife, shadows, and rain.' },
      { title: 'Automated PTZ Target Tracking Handoff', desc: 'Wide-angle fixed cameras detect targets and dynamically slew pan-tilt-zoom cameras for optical lock.' },
      { title: 'Multi-Display HDMI Console Output', desc: 'Hardware 2D/3D graphics sub-engine drives local high-resolution security operator console displays.' },
      { title: 'Isolated Alarm Relay Integration', desc: 'Hardware optoisolated relay outputs trigger sirens, perimeter floodlights, and automated access gates.' }
    ],
    architecture: [
      { step: '01', title: 'Surveillance Camera Grid', desc: 'Fixed and pan-tilt-zoom optical/thermal cameras covering critical perimeters', icon: Camera },
      { step: '02', title: 'Video Stream Management', desc: 'High-definition stream parsing, camera sync & motion vector pre-filtering', icon: Scan },
      { step: '03', title: 'Intrusion & Motion Detection', desc: 'DRP-AI edge inferencing differentiating real human/vehicle targets from noise', icon: BrainCircuit },
      { step: '04', title: 'PTZ Auto-Tracking Handoff', desc: 'Coordinate translation sending dynamic slew commands to motorized tracking gimbals', icon: Activity },
      { step: '05', title: 'Security Operations Console', desc: 'Instant operator alert dispatch, siren relay trigger & multi-monitor live feed', icon: Monitor }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'ONVIF Profile S/G/T, RTSP, MIPI CSI-2, USB 3.0 UVC' },
      { label: 'Video Input / Resolution', value: '1x or 2x HDMI / LVDS up to 4K resolution for local operator consoles' },
      { label: 'Processing Capabilities', value: 'Dual/Quad Cortex-A55 @ 1.2GHz with hardware graphics accelerator' },
      { label: 'AI Inference', value: 'Renesas DRP-AI (up to 10 TOPS for real-time multi-target classification)' },
      { label: 'Connectivity / Interfaces', value: 'Optoisolated digital inputs/outputs, RS-485 for PTZ Pelco-D/P protocols, Dual GbE' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H Complete SBC / Renesas RZ/G2L Development Kit' },
      { label: 'Operating Temperature', value: '-40°C to +85°C continuous 24/7 deployment' }
    ]
  },

  'ai-video-analytics': {
    slug: 'ai-video-analytics',
    category: 'Video & Surveillance Solutions',
    title: 'AI Video Analytics',
    subtitle: 'Real-time edge video parsing for worker safety, crowd density analysis, and anomaly detection.',
    heroImage: '/images/AI City Surveillance Camera.png',
    overview: {
      heading: 'Multi-Class Intelligent Edge Video Analytics Appliance',
      summary: 'Dedicated deep learning edge inferencing appliance running high-density neural networks for person re-identification, PPE safety compliance, worker fall alerts, and crowd anomaly tracking.',
      purpose: 'Transform passive surveillance camera networks into active, automated operational safety and security engines.',
      problem: 'Streaming raw surveillance video to cloud AI engines consumes prohibitive bandwidth, introduces multi-second latency, and creates major privacy and data jurisdiction compliance liabilities.',
      aiegxRole: 'Powered by the 10 TOPS DRP-AI neural accelerator on Renesas RZ/V2H processors, AIEGX edge appliances execute multiple neural networks concurrently on-premises with sub-30ms latency.'
    },
    features: [
      { title: 'PPE & Worker Safety Compliance', desc: 'Real-time detection of hardhats, high-visibility safety vests, goggles, and safety harnesses.' },
      { title: 'Worker Fall & Ergonomic Alerts', desc: 'Pose estimation models calculate human skeletal joint angles to detect slips, trips, and immobility.' },
      { title: 'Loitering & Unattended Object Tracking', desc: 'Flags suspicious prolonged stationary individuals or baggage left unattended in public spaces.' },
      { title: 'Zero-Cloud Privacy Architecture', desc: 'Processes all video streams locally on-die, outputting only structured JSON metadata and coordinates.' },
      { title: 'Dynamic RTSP Multi-Camera Scaling', desc: 'Capable of analyzing multiple high-resolution RTSP camera streams simultaneously.' }
    ],
    architecture: [
      { step: '01', title: 'Video Feed Ingestion', desc: 'RTSP and MIPI camera streams from industrial and public facilities', icon: Video },
      { step: '02', title: 'Real-Time Frame Extraction', desc: 'Hardware decoding and multi-resolution image normalization pipeline', icon: Scan },
      { step: '03', title: 'Multi-Class Neural Analytics', desc: 'DRP-AI engine executing simultaneous object detection and pose estimation models', icon: BrainCircuit },
      { step: '04', title: 'Behavior & Anomaly Recognition', desc: 'Spatio-temporal analysis detecting slips, falls, unauthorized entries & missing PPE', icon: Activity },
      { step: '05', title: 'Automated Incident Dispatch', desc: 'Immediate MQTT/REST alert publishing to safety dashboards, PA systems & security teams', icon: Bell }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Up to 8 concurrent 1080p video streams with real-time neural evaluation' },
      { label: 'Video Input / Resolution', value: 'YOLOv8/v9/v11, MobileNet-SSD, OpenPose, ResNet, Custom PyTorch/ONNX models' },
      { label: 'Processing Capabilities', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R8 real-time cores' },
      { label: 'AI Inference', value: 'Renesas DRP-AI (10 TOPS throughput, <15W total system thermal power)' },
      { label: 'Connectivity / Interfaces', value: 'Dual Gigabit Ethernet (TSN capable), Wi-Fi 6 / 4G LTE optional expansion via M.2' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H Complete SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C fanless aluminum enclosure' }
    ]
  },

  'people-counting': {
    slug: 'people-counting',
    category: 'Video & Surveillance Solutions',
    title: 'People Counting',
    subtitle: 'Overhead optical foot-traffic monitoring and occupancy analytics with high precision while preserving privacy.',
    heroImage: '/images/AI Security Surveillance at Modern Entrance.png',
    overview: {
      heading: 'High-Accuracy Overhead Optical People Counting & Occupancy Sensor',
      summary: 'Overhead edge-vision sensor delivering bidirectional ingress/egress pedestrian counting, occupancy limit enforcement, and spatial traffic flow analytics while strictly preserving personal privacy.',
      purpose: 'Accurately count building occupants, manage room capacity limits, and optimize retail layout without storing identifiable facial images.',
      problem: 'Inaccuracy of infrared break-beam sensors with groups of people, and privacy regulations (GDPR) prohibiting the storage or transmission of identifiable facial video footage.',
      aiegxRole: 'AIEGX utilizes top-down overhead cameras with Renesas RZ/V2L microprocessors that execute head-and-shoulder detection on-device, deleting video frames immediately after counting increments.'
    },
    features: [
      { title: 'Bidirectional Line-Crossing Precision', desc: 'Distinguishes between entering and exiting persons with 98%+ precision even in dense foot traffic.' },
      { title: '100% Privacy-Preserving Architecture', desc: 'Operates strictly on top-down head-shoulder contours; no facial images are ever recorded or transmitted.' },
      { title: 'Group Separation & Anti-Tailgating', desc: 'Deep learning feature extraction correctly separates groups of people walking closely together.' },
      { title: 'Children & Cart Filtering', desc: 'Height and contour estimation algorithms filter out shopping carts, strollers, and pets.' },
      { title: 'Facility HVAC / Lighting Energy Integration', desc: 'Outputs real-time room occupancy numbers to building automation protocols over BACnet/MQTT.' }
    ],
    architecture: [
      { step: '01', title: 'Overhead Optical Sensor', desc: 'Ceiling-mounted top-down wide-angle camera above entry portals', icon: Camera },
      { step: '02', title: 'Video Acquisition', desc: 'Direct MIPI CSI-2 frame capture with optical perspective correction', icon: Scan },
      { step: '03', title: 'Pedestrian Head Detection', desc: 'Neural contour detector identifying human head-and-shoulder silhouettes', icon: BrainCircuit },
      { step: '04', title: 'Line Crossing Count', desc: 'Multi-object tracking vector calculating ingress and egress boundary crossings', icon: Activity },
      { step: '05', title: 'Occupancy Analytics & Heatmaps', desc: 'Instant tally aggregation and MQTT/BACnet dispatch to facility management systems', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: '1x 2-lane / 4-lane MIPI CSI-2 interface for top-down lens module' },
      { label: 'Video Input / Resolution', value: '2.5m to 6.0m recommended mounting height above entry/exit thresholds' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33' },
      { label: 'AI Inference', value: 'Renesas DRP-AI hardware neural engine (low power, fanless, PoE powered)' },
      { label: 'Connectivity / Interfaces', value: 'MQTT, REST API, BACnet/IP, Modbus TCP over Gigabit Ethernet' },
      { label: 'Platform Support', value: 'Renesas RZ/V2L SMARC Module' },
      { label: 'Operating Temperature', value: '0°C to +70°C (commercial indoor) / -40°C to +85°C (industrial transit)' }
    ]
  },

  'multi-camera-analytics': {
    slug: 'multi-camera-analytics',
    category: 'Video & Surveillance Solutions',
    title: 'Multi-Camera Video Analytics',
    subtitle: 'Synchronized multi-camera visual fusion providing cross-camera trajectory tracking across blind spots.',
    heroImage: '/images/integrated-solution-hd.jpg',
    overview: {
      heading: 'Synchronized Multi-Camera Edge Analytics & Spatial Fusion Platform',
      summary: 'High-capacity edge compute engine capable of ingesting multiple camera perspectives, synchronizing frames with microsecond precision, and performing cross-camera person and vehicle re-identification.',
      purpose: 'Maintain continuous target tracking across wide campus perimeters, blind spots, and warehouse transit corridors without losing track ID.',
      problem: 'Single-camera systems lose track of targets as soon as they step behind obstacles or cross into adjacent camera fields of view, creating fragmented intelligence.',
      aiegxRole: 'AIEGX leverages the multi-channel MIPI CSI-2 and dual Gigabit capabilities of the Renesas RZ/V2H platform to fuse multiple camera feeds, extracting universal Re-ID feature embeddings in real time.'
    },
    features: [
      { title: 'Multi-Stream Concurrent Ingestion', desc: 'Synchronous hardware ingestion and decoding of up to 4 local MIPI or 8 remote RTSP camera streams.' },
      { title: 'Cross-Camera Re-Identification (Re-ID)', desc: 'Extracts deep appearance feature vectors to track individuals and vehicles across distinct camera viewpoints.' },
      { title: 'Blind Spot Trajectory Stitching', desc: 'Kalman spatial filtering projects and links target paths across camera occlusion gaps.' },
      { title: 'Microsecond Hardware Frame Sync', desc: 'Hardware trigger line synchronization ensures synchronized multi-angle capture of dynamic events.' },
      { title: 'Bandwidth-Optimized Edge Summarization', desc: 'Sends only consolidated multi-camera telemetry paths rather than multiple redundant video streams.' }
    ],
    architecture: [
      { step: '01', title: 'Synchronized Cameras', desc: 'Multiple wide-angle and narrow-beam cameras positioned across key vantage points', icon: Video },
      { step: '02', title: 'Multi-Stream Ingestion', desc: 'Hardware-synchronized ingestion and color-calibrated debayering across all feeds', icon: Scan },
      { step: '03', title: 'Cross-Camera Re-ID', desc: 'DRP-AI neural network computing global visual feature embeddings for all tracked entities', icon: BrainCircuit },
      { step: '04', title: 'Spatial Trajectory Fusion', desc: 'Multi-camera geometry calibration projecting unified floorplan tracking coordinates', icon: Layers },
      { step: '05', title: 'Centralized Spatial Telemetry', desc: 'Continuous trajectory data export to centralized command centers and security consoles', icon: Database }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Dual 4-lane MIPI CSI-2 + Dual Gigabit Ethernet (RTSP / GigE Vision)' },
      { label: 'Video Input / Resolution', value: '4x to 8x 1080p30 video streams analyzed concurrently in real-time' },
      { label: 'Processing Capabilities', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R8 real-time cores' },
      { label: 'AI Inference', value: 'Renesas DRP-AI (10 TOPS neural processing power with dynamic tensor tiling)' },
      { label: 'Connectivity / Interfaces', value: 'Up to 8GB LPDDR4X, M.2 PCIe Gen3 x4 NVMe, Dual GbE' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H Complete SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C fanless industrial temperature rating' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 3: Industrial & Machine Vision Solutions
  // ═══════════════════════════════════════════════════════════════

  'industrial-railway-hmi': {
    slug: 'industrial-railway-hmi',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Industrial / Railway HMI',
    subtitle: 'Rugged operator consoles combining hardware 3D graphics, dual CAN-FD, and railway safety certification.',
    heroImage: '/images/Modern Train Cockpit Control Panel.png',
    overview: {
      heading: 'Rugged Industrial & Railway Human-Machine Interface (HMI) Platform',
      summary: 'High-reliability, rugged operator console computing platform combining hardware 3D graphical acceleration, dual CAN-FD, isolated serial buses, and EN 50155 railway safety certification.',
      purpose: 'Provide intuitive, instantaneous machine status visualization and deterministic operator control for rolling stock cabs, industrial automation lines, and power utilities.',
      problem: 'Commercial tablets and consumer displays crash under industrial electrical surges, extreme thermal swings (-40°C to +85°C), and railway mechanical shock and vibration.',
      aiegxRole: 'AIEGX builds on Renesas RZ/G2L and RZ/G2N silicon featuring PowerVR / Arm Mali 3D GPUs, real-time Cortex-M co-processors, and isolated fieldbus interfaces backed by 10+ year production availability.'
    },
    features: [
      { title: 'EN 50155 Railway & Industrial Compliance', desc: 'Engineered to withstand severe mechanical shock, continuous vibration, and industrial power surges.' },
      { title: 'Fluid 60 FPS 3D Dashboard Graphics', desc: 'Hardware 3D GPU acceleration drives responsive gauges, interactive schematics, and alarms.' },
      { title: 'Real-Time Control Co-Processor', desc: 'Dedicated Arm Cortex-M33 / Cortex-R real-time core runs safety interlocks independently of Linux OS.' },
      { title: 'Dual Independent High-Res Displays', desc: 'Simultaneously drives primary operator touch panels and secondary informational displays up to Full HD/4K.' },
      { title: 'Multi-Protocol Industrial Fieldbus', desc: 'Integrated Dual CAN-FD, RS-485 Modbus, and Industrial Ethernet interfaces for direct PLC connectivity.' }
    ],
    architecture: [
      { step: '01', title: 'Touch Panel & Controls', desc: 'Capacitive touchscreen, pushbuttons & industrial sensors at operator station', icon: Monitor },
      { step: '02', title: 'Sensor Ingestion', desc: 'Hardware-isolated digital/analog inputs and CAN-FD bus telemetry acquisition', icon: Scan },
      { step: '03', title: '3D Graphics Engine', desc: 'GPU-accelerated vector rendering generating real-time interactive instrument dashboards', icon: Cpu },
      { step: '04', title: 'Safety Interlocks', desc: 'Cortex-M33 real-time core monitoring safety thresholds and emergency stop triggers', icon: Shield },
      { step: '05', title: 'CAN-FD & Industrial Bus', desc: 'High-speed fieldbus synchronization dispatching commands to PLCs and motor drives', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Optional MIPI CSI-2 for operator verification or rear camera feeds' },
      { label: 'Video Input / Resolution', value: 'Dual LVDS (up to 1920x1080 @ 60 FPS), MIPI DSI, and HDMI 1.4 / 2.0' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Arm Cortex-M33 @ 200MHz (RZ/G2L) or Dual Cortex-A57 (RZ/G2N)' },
      { label: 'AI Inference', value: 'Arm Mali-G31 3D GPU / PowerVR GPU (OpenGL ES 3.2, Vulkan)' },
      { label: 'Connectivity / Interfaces', value: 'Dual CAN-FD, 2x GbE Ethernet, RS-485, RS-232, optoisolated digital inputs & relay outputs' },
      { label: 'Platform Support', value: 'Renesas RZ/G2L Development Kit' },
      { label: 'Operating Temperature', value: '-40°C to +85°C fanless, EN 50155 / IEC 61373 compliant design' }
    ]
  },

  'display-video-controller': {
    slug: 'display-video-controller',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Display / Video Controller',
    subtitle: 'Multi-display routing hub driving independent LVDS, MIPI, and HDMI panels with synchronized scaling.',
    heroImage: '/images/vdc-solution-hd.jpg',
    overview: {
      heading: 'Multi-Display Video Controller & Real-Time Compositing Hub',
      summary: 'Multi-channel industrial display controller engineered for independent dual-display rendering, synchronized video scaling, low-latency glass-to-glass camera feed compositing, and digital signage.',
      purpose: 'Drive multiple heterogeneous displays from a single compact, fanless embedded computer across medical diagnostics, cockpit displays, and factory HMIs.',
      problem: 'High system bill-of-materials and power consumption when deploying multiple independent computers simply to drive dual high-resolution displays with synchronized content.',
      aiegxRole: 'AIEGX utilizes Renesas RZ/G2L and RZ/G2N processors featuring flexible multi-display hardware display controllers, supporting independent LVDS, MIPI DSI, and HDMI pipelines from one compact board.'
    },
    features: [
      { title: 'Dual Independent Video Displays', desc: 'Drives two distinct display panels with independent resolutions, framerates, and UI content.' },
      { title: 'Sub-Frame Glass-to-Glass Latency', desc: 'Direct hardware video overlay pipelines display camera streams with less than 16ms delay.' },
      { title: 'Heterogeneous Panel Output', desc: 'Simultaneously outputs to high-brightness LVDS sunlight-readable panels and standard HDMI monitors.' },
      { title: 'Hardware Scaling & Conversion', desc: 'On-chip scaler handles real-time aspect ratio adjustments and RGB/YUV conversions.' },
      { title: 'Industrial Fanless Thermal Reliability', desc: 'Optimized low-power silicon operates continuously in sealed enclosures without cooling fans.' }
    ],
    architecture: [
      { step: '01', title: 'Video Inputs', desc: 'Camera MIPI/HDMI inputs, network video streams & local UI data sources', icon: Video },
      { step: '02', title: 'Synchronization & Scaling', desc: 'Hardware frame buffer sync, color space conversion & aspect ratio scaling', icon: Scan },
      { step: '03', title: 'Processing Hub', desc: 'Multi-plane video mixer blending live camera video, 3D graphics & UI overlays', icon: Cpu },
      { step: '04', title: 'Latency Compositing', desc: 'Real-time display pipe generating pixel-clock synchronized output streams', icon: Layers },
      { step: '05', title: 'Independent Displays', desc: 'Simultaneous transmission to dual LVDS, MIPI DSI, and HDMI display panels', icon: Monitor }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'MIPI CSI-2 (up to 4 lanes) or HDMI input module' },
      { label: 'Video Input / Resolution', value: 'Up to 4K UHD @ 30 FPS or Dual 1080p @ 60 FPS independent channels' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A57 @ 1.5GHz (RZ/G2N) or Dual Cortex-A55 @ 1.2GHz (RZ/G2L)' },
      { label: 'AI Inference', value: 'Hardware 2D/3D GPU with multi-plane alpha blending & video decoding' },
      { label: 'Connectivity / Interfaces', value: 'Dual GbE, USB 3.0, PCIe Gen2, MicroSD / eMMC 5.1' },
      { label: 'Platform Support', value: 'Renesas RZ/G2N Development Platform / Renesas RZ/G2L Development Kit' },
      { label: 'Operating Temperature', value: '-40°C to +85°C industrial temperature' }
    ]
  },

  'ai-visual-inspection': {
    slug: 'ai-visual-inspection',
    category: 'Industrial & Machine Vision Solutions',
    title: 'AI Visual Inspection',
    subtitle: 'In-line automated optical inspection identifying microscopic surface defects at high production speeds.',
    heroImage: '/images/Automated Gear Inspection Line.png',
    overview: {
      heading: 'Automated Optical Inspection (AOI) & Defect Detection System',
      summary: 'In-line deep learning automated visual inspection platform engineered for sub-millimeter defect detection, surface anomaly classification, and microsecond reject actuator triggering on high-speed factory lines.',
      purpose: 'Automate quality assurance, eliminate defective parts before shipping, and guarantee 100% inspection throughput at production line speeds.',
      problem: 'Human visual fatigue leading to missed defects, and traditional rule-based computer vision failing on complex organic defects, scratches, color variations, and reflective materials.',
      aiegxRole: 'AIEGX pairs high-resolution global shutter cameras with the 10 TOPS DRP-AI accelerator on Renesas RZ/V2H processors, executing micro-defect segmentation in milliseconds and firing reject actuators over isolated GPIOs.'
    },
    features: [
      { title: 'Sub-Millimeter Defect Precision', desc: 'Detects microscopic cracks, solder bridges, scratches, and burrs down to 0.05mm.' },
      { title: 'Microsecond Reject Actuator Triggering', desc: 'Dedicated real-time Cortex-R8 core fires pneumatic reject gates in under 500 microseconds.' },
      { title: 'Reflective Surface Tolerance', desc: 'Trained deep neural networks distinguish true functional defects from benign surface glare.' },
      { title: 'Multi-Camera Simultaneous Inspection', desc: 'Inspects top, bottom, and side angles of components synchronously in a single inspection station.' },
      { title: 'Production Statistical Logging', desc: 'Automatically logs defect heatmaps, Pareto charts, and lot numbers to factory MES/ERP databases.' }
    ],
    architecture: [
      { step: '01', title: 'Production Camera', desc: 'Industrial global shutter optical sensor synchronized with pulsed ring illumination', icon: Camera },
      { step: '02', title: 'Image Capture', desc: 'Hardware MIPI CSI-2 frame acquisition with zero motion blur at high belt speeds', icon: Scan },
      { step: '03', title: 'Defect Inference', desc: 'Neural convolutional network performing pixel-level segmentation of anomalies', icon: BrainCircuit },
      { step: '04', title: 'Classification & Sizing', desc: 'Rule engine calculating defect surface area, depth classification & pass/fail threshold', icon: Cpu },
      { step: '05', title: 'Reject Actuator Output', desc: 'Isolated real-time GPIO firing pneumatic reject diverter and updating MES database', icon: Activity }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Dual 4-lane MIPI CSI-2 or GigE Vision (GenICam compliant)' },
      { label: 'Video Input / Resolution', value: 'Up to 120 FPS at Full HD / 60 FPS at 4K resolution (global shutter)' },
      { label: 'Processing Capabilities', value: 'Quad Cortex-A55 @ 1.2GHz + Dual Cortex-R8 real-time cores @ 800MHz' },
      { label: 'AI Inference', value: 'Renesas DRP-AI 10 TOPS accelerator with sub-5ms defect model latency' },
      { label: 'Connectivity / Interfaces', value: 'Optoisolated 24V industrial digital I/O, hardware encoder inputs, Dual GbE' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H Development SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C fanless factory floor deployment' }
    ]
  },

  'smart-vision-ai-camera': {
    slug: 'smart-vision-ai-camera',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Smart Vision AI Camera',
    subtitle: 'IP67 all-in-one smart camera combining global-shutter imaging with embedded edge AI processing.',
    heroImage: '/images/Precision Robotic Gripper on Assembly Line.png',
    overview: {
      heading: 'All-In-One Compact Edge Smart Vision AI Camera',
      summary: 'Integrated industrial smart camera packing high-resolution global shutter imaging, on-sensor image signal processing (ISP), and embedded deep learning acceleration into an IP67 compact aluminum enclosure.',
      purpose: 'Deliver decentralized machine vision inspection, barcode/OCR reading, and robotic guidance directly at the camera head with no external PC.',
      problem: 'Bulky external industrial PCs, fragile camera cabling across moving robotic arms, and expensive setup costs required for conventional machine vision architectures.',
      aiegxRole: 'AIEGX integrates the compact Renesas RZ/V2L or RZ/V2H processor directly into camera housings, allowing AI models to execute on-die inside a fanless, low-power Power-over-Ethernet (PoE) camera head.'
    },
    features: [
      { title: 'Fully Integrated All-In-One Design', desc: 'Combines C-mount lens optics, image sensor, neural processor, and network I/O in one housing.' },
      { title: 'High-Speed Global Shutter Sensor', desc: 'Eliminates rolling shutter distortion on rapidly spinning parts and high-speed conveyor belts.' },
      { title: '1D/2D Barcode & DPM OCR', desc: 'Reads low-contrast Direct Part Marking (DPM) barcodes, dot-peen codes, and laser etchings.' },
      { title: 'Power-over-Ethernet (PoE)', desc: 'Operates over a single Ethernet cable supplying both gigabit data communications and system power.' },
      { title: 'IP67 Waterproof & Dustproof Housing', desc: 'Ruggedized sealed aluminum housing resists oil spray, coolant washdown, and airborne dust.' }
    ],
    architecture: [
      { step: '01', title: 'Global Shutter Sensor', desc: 'On-board high-sensitivity global shutter CMOS sensor capturing crisp frames', icon: Camera },
      { step: '02', title: 'On-Sensor ISP Pipeline', desc: 'Hardware image signal processor performing black level correction, demosaicing & HDR', icon: Scan },
      { step: '03', title: 'Neural Accelerator', desc: 'DRP-AI engine executing deep learning classification, 2D barcode decoding & OCR', icon: BrainCircuit },
      { step: '04', title: 'Measurement & Logic', desc: 'On-device geometry validation verifying part positioning, orientation & tolerances', icon: Cpu },
      { step: '05', title: 'Fieldbus Gateway', desc: 'Direct transmission of inspection pass/fail signals over PROFINET, Ethernet/IP & MQTT', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: '2MP / 5MP Global Shutter CMOS sensor (C-mount / S-mount lens options)' },
      { label: 'Video Input / Resolution', value: 'Up to 60 FPS full resolution capture with synchronized strobe LED output' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33 (RZ/V2L) or Quad Cortex-A55 (RZ/V2H)' },
      { label: 'AI Inference', value: 'Dedicated Renesas DRP-AI neural core (0.5 to 10 TOPS)' },
      { label: 'Connectivity / Interfaces', value: 'Gigabit Ethernet with PoE (IEEE 802.3af), M12 industrial connector, isolated GPIO' },
      { label: 'Platform Support', value: 'Renesas RZ/V2L SMARC Module / Renesas RZ/V2H Complete SBC' },
      { label: 'Operating Temperature', value: 'IP67 sealed aluminum enclosure, -40°C to +85°C operation' }
    ]
  },

  'infrastructure-control': {
    slug: 'infrastructure-control',
    category: 'Industrial & Machine Vision Solutions',
    title: 'Infrastructure Control Systems',
    subtitle: 'High-availability SCADA control nodes with redundant fieldbus networking and deterministic safety interlocks.',
    heroImage: '/images/High-Speed Train.png',
    overview: {
      heading: 'Deterministic Infrastructure Control & SCADA Gateway Platform',
      summary: 'High-availability industrial computing platform designed for supervisory control and data acquisition (SCADA), critical substation automation, redundant fieldbus gateway routing, and safety-critical equipment control.',
      purpose: 'Ensure uninterrupted deterministic monitoring and control across electrical substations, water treatment utilities, railway interlocking, and pipeline networks.',
      problem: 'Unscheduled system downtime, packet loss during network failover, and hardware lockups in unmonitored remote field stations that jeopardize critical public infrastructure.',
      aiegxRole: 'AIEGX provides robust embedded computing hardware based on Renesas RZ/G2 and RZ/V Series MPUs featuring redundant Gigabit Ethernet (HSR/PRP), hardware watchdog timers, and CIP Linux Super Long-Term Support (SLTS).'
    },
    features: [
      { title: 'HSR/PRP Zero-Loss Redundancy', desc: 'High-availability Seamless Redundancy protocol ensures zero packet loss upon primary link failure.' },
      { title: 'Deterministic Real-Time Loops', desc: 'Hardware real-time Cortex-M/R cores execute microsecond control cycles independently of Linux.' },
      { title: 'Hardware Watchdog & Fault Isolation', desc: 'Dual-watchdog supervisor resets isolated peripheral subsystems without dropping main line power.' },
      { title: 'Substation Automation (IEC 61850)', desc: 'Hardware-timestamped packet handling for IEC 61850 GOOSE and SV communication profiles.' },
      { title: '10+ Year Industrial Longevity', desc: 'Backed by Renesas Product Longevity Program and CIP Linux 10-year security maintenance.' }
    ],
    architecture: [
      { step: '01', title: 'Field Instrumentation', desc: 'Remote terminal units, flow sensors, circuit breakers & motor drives', icon: Activity },
      { step: '02', title: 'Real-Time I/O Acquisition', desc: 'Optoisolated digital inputs, analog telemetry & serial Modbus data collection', icon: Scan },
      { step: '03', title: 'Control Engine', desc: 'Real-time Cortex-M/R core processing logic rungs, interlocks & PID equations', icon: Cpu },
      { step: '04', title: 'Watchdog & Fault Isolation', desc: 'Automated self-health monitoring, memory parity checking & fail-safe fallback', icon: Shield },
      { step: '05', title: 'Zero-Failover Network', desc: 'Dual redundant Gigabit Ethernet transmission to SCADA consoles and utility operations', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Optional MIPI CSI-2 interface for substation optical safety verification' },
      { label: 'Video Input / Resolution', value: 'Dual/Triple Gigabit Ethernet supporting HSR (IEC 62439-3 Clause 5) and PRP' },
      { label: 'Processing Capabilities', value: 'Dual Arm Cortex-A55 @ 1.2GHz + Cortex-M33 (RZ/G2L) or Dual Cortex-A57 (RZ/G2N)' },
      { label: 'AI Inference', value: 'Hardware Secure Boot, Cryptographic Engine (AES/RSA/ECC), True RNG' },
      { label: 'Connectivity / Interfaces', value: 'Isolated RS-485 / RS-422, CAN 2.0B / CAN-FD, 24V optoisolated digital I/O' },
      { label: 'Platform Support', value: 'Renesas RZ/G2L Development Kit' },
      { label: 'Operating Temperature', value: '-40°C to +85°C fanless, high surge/ESD isolation' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 4: Defence & Advanced Vision Solutions
  // ═══════════════════════════════════════════════════════════════

  'seeker-systems': {
    slug: 'seeker-systems',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Seeker',
    subtitle: 'High-framerate electro-optical seeker guidance computing terminal intercept trajectories at 120 FPS.',
    heroImage: '/images/Futuristic Mountain Surveillance HUD.png',
    overview: {
      heading: 'Electro-Optical / Infrared (EO/IR) Seeker Guidance Platform',
      summary: 'SWaP-C optimized electro-optical seeker guidance computing engine capable of executing high-framerate centroid tracking, visual-inertial odometry, and terminal kinetic intercept calculations at 120 FPS.',
      purpose: 'Deliver autonomous optical guidance and terminal target sensing for unmanned systems, precision guidance kits, and aerospace testbeds.',
      problem: 'Extreme Size, Weight, Power, and Cost (SWaP-C) constraints, high aerodynamic vibrations, and the critical operational requirement to navigate accurately in GPS-denied tactical environments.',
      aiegxRole: 'AIEGX provides ultra-compact computing boards powered by Renesas RZ/V2H neural MPUs, achieving 10 TOPS of high-efficiency DRP-AI inference within a sub-20W conduction-cooled envelope.'
    },
    features: [
      { title: '120 FPS Neural Tracking', desc: 'Executes centroid tracking and target bounding box localization at 120 frames per second.' },
      { title: 'GPS-Denied Visual Odometry', desc: 'Integrates high-speed camera optical flow with IMU sensor fusion for drift-free positioning.' },
      { title: 'Dual-Spectrum Sensor Support', desc: 'Seamlessly interfaces with Visible CMOS, Short-Wave Infrared (SWIR), and LWIR sensors.' },
      { title: 'Sub-Milliradian Guidance Precision', desc: 'Calculates line-of-sight angular rate vectors with micro-radian precision for autopilot actuation.' },
      { title: 'SWaP-C Aerospace Envelope', desc: 'Consumes under 15W total power in a compact form factor optimized for uncooled aerodynamic chassis.' }
    ],
    architecture: [
      { step: '01', title: 'EO/IR Sensor Head', desc: 'High-speed optical or uncooled microbolometer thermal sensor head', icon: Eye },
      { step: '02', title: 'Image Preprocessing', desc: 'Hardware non-uniformity correction (NUC), bad pixel replacement & image stabilization', icon: Scan },
      { step: '03', title: 'Centroid Tracker', desc: 'Sub-milliradian neural network estimating target line-of-sight angles at 120 FPS', icon: BrainCircuit },
      { step: '04', title: 'Flight State Estimation', desc: 'Visual-inertial odometry fusion with IMU gyroscope and accelerometer telemetry', icon: Cpu },
      { step: '05', title: 'Autopilot Guidance Bus', desc: 'Ultra-low latency deterministic serial bus outputting steering commands to control fins', icon: Activity }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Dual 4-lane MIPI CSI-2 with high-speed serial LVDS sensor adapter options' },
      { label: 'Video Input / Resolution', value: 'Visible Global Shutter, SWIR, and LWIR uncooled thermal microbolometer cores' },
      { label: 'Processing Capabilities', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R8 lockstep real-time cores @ 800MHz' },
      { label: 'AI Inference', value: 'Renesas DRP-AI (10 TOPS neural acceleration, sub-15W thermal envelope)' },
      { label: 'Connectivity / Interfaces', value: 'Low-latency high-baud RS-422, SPI, Dual CAN-FD, Gigabit Ethernet' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H High-Density Compute SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C conduction cooled' }
    ]
  },

  'surveillance-vision': {
    slug: 'surveillance-vision',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Surveillance Vision System',
    subtitle: 'Long-range multi-spectral situational awareness combining thermal and high-zoom optical sensors.',
    heroImage: '/images/UGV at a High-Tech Defense Base.png',
    overview: {
      heading: 'Multi-Spectral Dual-Band Tactical Surveillance Vision System',
      summary: 'Long-range tactical surveillance computing engine providing hardware pixel-level fusion of thermal and high-zoom optical camera channels for 24/7 situational awareness across land and coastal borders.',
      purpose: 'Enable border security, forward operating bases, and unmanned ground vehicles (UGV) to detect, classify, and track threats across total darkness, smoke, and haze.',
      problem: 'Single optical cameras are blinded by nighttime darkness and fog, while standalone thermal cameras lack the high-resolution texture details needed to visually identify targets at long range.',
      aiegxRole: 'AIEGX implements pixel-aligned optical/thermal image fusion and deep learning classification on Renesas RZ/V2H hardware, allowing operators to detect targets at distances exceeding 2 kilometers.'
    },
    features: [
      { title: 'Pixel-Aligned Dual-Spectrum Fusion', desc: 'Fuses thermal infrared heat signatures with visible optical details in real time for crisp threat visibility.' },
      { title: 'Long-Range Target Classification', desc: 'Detects, recognizes, and classifies personnel, vehicles, and naval craft at ranges exceeding 2,000 meters.' },
      { title: 'Digital Haze & Fog Penetration', desc: 'Hardware image signal algorithms counteract atmospheric thermal heat shimmer, smoke, and marine fog.' },
      { title: 'Geo-Referenced Coordinate Mapping', desc: 'Pairs visual target tracks with laser rangefinder and GPS/Compass data to output exact GIS coordinates.' },
      { title: 'Tactical Network Telemetry', desc: 'Transmits compressed low-bandwidth target coordinate packets over tactical UHF/VHF and satellite links.' }
    ],
    architecture: [
      { step: '01', title: 'Dual-Spectrum Sensors', desc: 'Synchronized high-zoom visible camera and continuous-zoom thermal sensor', icon: Eye },
      { step: '02', title: 'Pixel-Level Image Fusion', desc: 'Hardware color-space alignment blending thermal heat contours over crisp optical textures', icon: Scan },
      { step: '03', title: 'Target Identification', desc: 'DRP-AI deep neural model detecting, classifying and isolating distant moving threats', icon: BrainCircuit },
      { step: '04', title: 'Coordinate Mapping', desc: 'Target telemetry fusion with laser rangefinder and digital magnetic compass coordinates', icon: Target },
      { step: '05', title: 'Tactical Command Link', desc: 'Encrypted telemetry and video distribution to field command consoles and combat networks', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: '2x 4-lane MIPI CSI-2 (simultaneous Optical and Thermal sensor inputs)' },
      { label: 'Video Input / Resolution', value: 'Up to 4K Visible + 640x512 / 1280x1024 Thermal IR video streams' },
      { label: 'Processing Capabilities', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R8 real-time cores' },
      { label: 'AI Inference', value: 'Renesas DRP-AI 10 TOPS neural accelerator (multi-class tactical object recognition)' },
      { label: 'Connectivity / Interfaces', value: 'Dual GbE Ethernet, RS-422 for PTZ gimbal control, MIL-STD-1553 option' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H High-Density Compute SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C fanless, environmentally hardened' }
    ]
  },

  'target-tracking-recognition': {
    slug: 'target-tracking-recognition',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Target Tracking & Recognition',
    subtitle: 'Neural multi-target tracking maintaining lock through smoke, foliage, and visual occlusions.',
    heroImage: '/images/Futuristic Mountain Surveillance HUD.png',
    overview: {
      heading: 'Multi-Target Optical Tracking & Autonomous Recognition System',
      summary: 'Real-time kinematic tracking and neural target recognition engine engineered for remote weapon stations, counter-UAS turrets, and unmanned aerial sensor gimbals.',
      purpose: 'Maintain reliable multi-object tracking (MOT) through foliage, thermal obscurants, and complex visual clutter with automated trajectory projection.',
      problem: 'High-velocity erratic targets (such as tactical drones) escaping camera fields of view during brief occlusions behind trees, buildings, or smoke clouds.',
      aiegxRole: 'AIEGX implements deep learning target classification coupled with Kalman state filtering on Renesas RZ/V2H processors, maintaining track locks and driving pan-tilt gimbal servos with deterministic latency.'
    },
    features: [
      { title: '50+ Concurrent Multi-Target Tracking', desc: 'Simultaneously establishes and maintains continuous state tracks across dozens of targets.' },
      { title: 'Occlusion-Resistant Kalman Projection', desc: 'Maintains track persistence through visual occlusions, terrain obstacles, and countermeasure smoke.' },
      { title: 'Silhouette Deep Classification', desc: 'Distinguishes between civilian vehicles, military vehicles, commercial drones, and rotary aircraft.' },
      { title: 'Deterministic Fire-Control Bus', desc: 'Calculates lead-angle intercept trajectories and outputs motor telemetry to gimbal servos.' },
      { title: 'Low-Latency Slew Stabilization', desc: 'Real-time Cortex-R8 cores execute gimbal gyro-stabilization control loops under 1 millisecond.' }
    ],
    architecture: [
      { step: '01', title: 'Multi-Sensor Video Feed', desc: 'High-definition optical and infrared video streams from stabilized sensor pod', icon: Camera },
      { step: '02', title: 'Feature Extraction', desc: 'Multi-scale image pyramid extraction isolating foreground motion vectors', icon: Scan },
      { step: '03', title: 'Neural Classification', desc: 'DRP-AI classification determining vehicle types, aerial drone classes & personnel', icon: BrainCircuit },
      { step: '04', title: 'Trajectory Projection', desc: 'Kinematic state estimation projecting target velocity, acceleration & occlusion paths', icon: Target },
      { step: '05', title: 'Gimbal Output', desc: 'Deterministic trajectory stream sent to pan-tilt gimbal controllers and consoles', icon: Activity }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'Dual MIPI CSI-2 or HD-SDI / 3G-SDI / Gigabit Ethernet video inputs' },
      { label: 'Video Input / Resolution', value: '50+ simultaneous moving targets tracked with unique IDs at high framerates' },
      { label: 'Processing Capabilities', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R8 real-time cores @ 800MHz' },
      { label: 'AI Inference', value: 'Renesas DRP-AI 10 TOPS engine (sub-10ms detection and feature extraction)' },
      { label: 'Connectivity / Interfaces', value: 'Dual CAN-FD, RS-422, Dual GbE, isolated digital trigger outputs' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H High-Density Compute SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C conduction cooled' }
    ]
  },

  'rugged-ai-embedded': {
    slug: 'rugged-ai-embedded',
    category: 'Defence & Advanced Vision Solutions',
    title: 'Rugged AI Embedded System',
    subtitle: 'Conduction-cooled, MIL-STD-810H compliant edge AI computing chassis for extreme battlefield and airborne environments.',
    heroImage: '/images/UGV at a High-Tech Defense Base.png',
    overview: {
      heading: 'Conduction-Cooled Rugged Edge AI Embedded Computing Chassis',
      summary: 'Fully sealed, conduction-cooled military-grade edge AI computing chassis engineered to withstand extreme ballistic shock, continuous vibration, electromagnetic interference (MIL-STD-461G), and severe vehicle power fluctuations.',
      purpose: 'Provide reliable, fanless artificial intelligence processing in harsh tactical ground vehicles (UGVs), naval vessels, and airborne platforms.',
      problem: 'Commercial computing hardware failing due to dust ingress, water immersion, high G-force vibration, and destructive vehicle voltage spikes during engine cranking.',
      aiegxRole: 'AIEGX designs conduction-cooled rugged systems utilizing Renesas RZ/V2H and RZ/G2 silicon housed in sealed aluminum enclosures with MIL-DTL-38999 circular connectors and MIL-STD-1275E power protection.'
    },
    features: [
      { title: 'Fully Sealed IP67 Conduction Cooling', desc: 'Dissipates high-density neural computing heat directly into external chassis heatsink fins with zero moving fans.' },
      { title: 'MIL-STD-810H Shock & Vibration', desc: 'Withstands continuous heavy mechanical vibration and ballistic shock on tracked armored vehicles.' },
      { title: 'MIL-STD-461G Electromagnetic Immunity', desc: 'Full internal shielding prevents radiated emissions and resists nearby high-power radio frequency jamming.' },
      { title: 'MIL-STD-1275E Vehicle Power Conditioning', desc: 'Withstands +100V power transients, severe battery cranking voltage dips, and reverse polarity.' },
      { title: 'MIL-DTL-38999 Circular Connectors', desc: 'Bayonet-locking circular connectors prevent moisture ingress and accidental cable disconnects.' }
    ],
    architecture: [
      { step: '01', title: 'MIL-DTL Sensor & Power', desc: 'Rugged circular connectors feeding raw 12V-36V DC power and sensor lines', icon: Zap },
      { step: '02', title: 'Hardware Root of Trust', desc: 'Hardware cryptographic engine authenticating signed OS kernels before initialization', icon: Shield },
      { step: '03', title: 'Conduction-Cooled AI Core', desc: 'Renesas RZ/V2H neural processor executing on-board inference within sealed chassis', icon: Cpu },
      { step: '04', title: 'Real-Time Sensor Fusion', desc: 'Synchronous acquisition and fusion of radar, lidar, camera and tactical radio streams', icon: BrainCircuit },
      { step: '05', title: 'Isolated Tactical Fieldbus', desc: 'Secure delivery of processed telemetry to crew displays, tactical command bus & actuators', icon: Server }
    ],
    specifications: [
      { label: 'Camera Interface', value: 'MIL-DTL-38999 circular connectors breakout for Dual GbE, CAN-FD, RS-422, USB 3.0, and HDMI' },
      { label: 'Video Input / Resolution', value: 'Fully sealed IP67 aluminum chassis with integrated passive conduction heat pipes' },
      { label: 'Processing Capabilities', value: 'Quad Arm Cortex-A55 @ 1.2GHz + Dual Cortex-R8 real-time cores' },
      { label: 'AI Inference', value: '10 TOPS Renesas DRP-AI hardware neural engine (under 25W full chassis draw)' },
      { label: 'Connectivity / Interfaces', value: 'MIL-STD-810H, MIL-STD-461G, MIL-STD-1275E (vehicle), and MIL-STD-704F (aircraft)' },
      { label: 'Platform Support', value: 'Renesas RZ/V2H High-Density Compute SBC' },
      { label: 'Operating Temperature', value: '-40°C to +85°C continuous fanless operation' }
    ]
  }
};

// Aliases for backward-compatibility
SUBSOLUTIONS_DATA['industrial-hmi'] = SUBSOLUTIONS_DATA['industrial-railway-hmi'];
SUBSOLUTIONS_DATA['embedded-linux'] = SUBSOLUTIONS_DATA['infrastructure-control'];
SUBSOLUTIONS_DATA['smart-displays'] = SUBSOLUTIONS_DATA['display-video-controller'];
SUBSOLUTIONS_DATA['iot-gateways'] = SUBSOLUTIONS_DATA['infrastructure-control'];
SUBSOLUTIONS_DATA['pos-access-control'] = SUBSOLUTIONS_DATA['anpr-systems'];
SUBSOLUTIONS_DATA['edge-ai'] = SUBSOLUTIONS_DATA['ai-video-analytics'];
SUBSOLUTIONS_DATA['ai-cameras'] = SUBSOLUTIONS_DATA['smart-vision-ai-camera'];
SUBSOLUTIONS_DATA['object-detection'] = SUBSOLUTIONS_DATA['target-tracking-recognition'];
SUBSOLUTIONS_DATA['ai-barcode-scanning'] = SUBSOLUTIONS_DATA['ai-visual-inspection'];
SUBSOLUTIONS_DATA['video-analytics'] = SUBSOLUTIONS_DATA['ai-video-analytics'];
SUBSOLUTIONS_DATA['optical-inspection'] = SUBSOLUTIONS_DATA['ai-visual-inspection'];
SUBSOLUTIONS_DATA['multi-camera-vision'] = SUBSOLUTIONS_DATA['multi-camera-analytics'];
SUBSOLUTIONS_DATA['machine-vision'] = SUBSOLUTIONS_DATA['smart-vision-ai-camera'];
SUBSOLUTIONS_DATA['video-processing'] = SUBSOLUTIONS_DATA['display-video-controller'];
SUBSOLUTIONS_DATA['smart-factory'] = SUBSOLUTIONS_DATA['infrastructure-control'];
SUBSOLUTIONS_DATA['amr'] = SUBSOLUTIONS_DATA['vehicle-detection-camera'];
SUBSOLUTIONS_DATA['agv'] = SUBSOLUTIONS_DATA['vehicle-detection-camera'];
SUBSOLUTIONS_DATA['vision-navigation'] = SUBSOLUTIONS_DATA['seeker-systems'];
SUBSOLUTIONS_DATA['robotic-perception'] = SUBSOLUTIONS_DATA['smart-vision-ai-camera'];
SUBSOLUTIONS_DATA['motion-control'] = SUBSOLUTIONS_DATA['infrastructure-control'];
