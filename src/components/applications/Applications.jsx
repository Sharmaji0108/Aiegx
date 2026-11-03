import React from 'react';
import {
  Car,
  Camera,
  Factory,
  Shield,
  Eye,
  ScanLine,
  Car as CarIcon,
  ParkingCircle,
  HardDrive,
  Monitor,
  Settings,
  Users,
  BarChart2,
  Layers,
  Search,
  Cpu,
  Server,
  Target,
  RadioTower,
  ArrowRight,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────────── */
const solutions = [
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle & Mobility Solutions',
    description:
      'Intelligent vision and monitoring systems for vehicles, traffic and transportation.',
    image: '/images/AI Traffic Surveillance with Plate Detection.png',
    imageAlt: 'AI Traffic Surveillance with Plate Detection',
    features: [
      { icon: Eye,          label: 'Driver Monitoring System (DMS)',             status: null },
      { icon: ScanLine,     label: 'Automatic Number Plate Recognition (ANPR)',  status: null },
      { icon: Camera,       label: 'Vehicle Detection Camera',                   status: null },
      { icon: ParkingCircle,label: 'Smart Parking',                              status: 'Planned' },
    ],
    ctaGradient: true,
    href: '#integrated-solutions',
  },
  {
    id: 'surveillance',
    icon: Camera,
    title: 'Video & Surveillance Solutions',
    description:
      'Recording, monitoring and intelligent video analytics for enhanced security.',
    image: '/images/AI Security Surveillance at Modern Entrance.png',
    imageAlt: 'AI Security Surveillance at Modern Entrance',
    features: [
      { icon: HardDrive, label: 'Network Video Recorder (NVR)',        status: null },
      { icon: Monitor,   label: 'CCTV Monitoring System',             status: null },
      { icon: Settings,  label: 'AI Video Analytics',                 status: null },
      { icon: Users,     label: 'People Counting',                    status: 'Planned' },
      { icon: BarChart2, label: 'Multi-Camera Video Analytics',       status: 'Planned' },
    ],
    ctaGradient: false,
    href: '#integrated-solutions',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial & Machine Vision Solutions',
    description:
      'Embedded control, HMI and vision systems for industrial automation and inspection.',
    image: '/images/Automated Gear Inspection Line.png',
    imageAlt: 'Automated Gear Inspection Line',
    features: [
      { icon: Monitor, label: 'Industrial / Railway HMI',            status: null },
      { icon: Layers,  label: 'Display / Video Controller',          status: null },
      { icon: Search,  label: 'AI Visual Inspection',                status: null },
      { icon: Camera,  label: 'Smart Vision AI Camera',              status: null },
      { icon: Server,  label: 'Infrastructure Control Systems',      status: 'Planned' },
    ],
    ctaGradient: false,
    href: '#integrated-solutions',
  },
  {
    id: 'defence',
    icon: Shield,
    title: 'Defence & Advanced Vision Solutions',
    description:
      'Specialized vision and guidance systems for defence and strategic applications.',
    image: '/images/Futuristic Mountain Surveillance HUD.png',
    imageAlt: 'Futuristic Mountain Surveillance HUD',
    features: [
      { icon: Target,     label: 'Seeker',                          status: 'In Development' },
      { icon: RadioTower, label: 'Surveillance Vision System',       status: 'Planned' },
      { icon: Eye,        label: 'Target Tracking & Recognition',    status: 'Planned' },
      { icon: Cpu,        label: 'Rugged AI Embedded System',        status: 'Planned' },
    ],
    ctaGradient: false,
    href: '#integrated-solutions',
  },
];

/* ─── Badge component ───────────────────────────────────────────────────── */
function StatusBadge({ status }) {
  if (!status) return null;
  const isDev = status === 'In Development';
  return (
    <span
      className={`inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap ${
        isDev
          ? 'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/40'
          : 'bg-[#E2EEFB] text-[#089EC2] border border-[#C5DDF5] dark:bg-[#1A2C52] dark:text-[#2DD4F0] dark:border-[#244277]'
      }`}
    >
      {status}
    </span>
  );
}

/* ─── Single Card ───────────────────────────────────────────────────────── */
function SolutionCard({ solution }) {
  const CardIcon = solution.icon;

  return (
    <div className="flex flex-col bg-white dark:bg-[#17264A] border border-[#DCE8F5] dark:border-[#24355A] rounded-[18px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">

      {/* ── Icon + Title + Description ── */}
      <div className="p-5 pb-4">
        <div className="flex items-start gap-3 mb-3">
          {/* Icon circle */}
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#E8F4FD] dark:bg-[#1A2C52] border border-[#C5DDF5] dark:border-[#244277] flex items-center justify-center">
            <CardIcon className="w-5 h-5 text-[#089EC2] dark:text-[#2DD4F0]" />
          </div>
          {/* Title */}
          <h3 className="text-base font-bold leading-snug text-[#14213D] dark:text-[#F8FAFC] pt-0.5">
            {solution.title}
          </h3>
        </div>
        {/* Description */}
        <p className="text-xs leading-relaxed text-[#52627C] dark:text-[#AAB6D0]">
          {solution.description}
        </p>
      </div>

      {/* ── Image ── */}
      <div className="mx-5 rounded-xl overflow-hidden border border-[#DCE8F5] dark:border-[#24355A] flex-shrink-0 h-44">
        <img
          src={solution.image}
          alt={solution.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* ── Feature List ── */}
      <div className="flex-1 px-5 pt-4 pb-4 space-y-2.5">
        {solution.features.map((feat, i) => {
          const FeatIcon = feat.icon;
          return (
            <div key={i} className="flex items-center gap-2.5">
              <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#E8F4FD] dark:bg-[#1A2C52] flex items-center justify-center">
                <FeatIcon className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
              </div>
              <span className="text-xs text-[#14213D] dark:text-[#D4E3F5] font-medium leading-tight">
                {feat.label}
              </span>
              <StatusBadge status={feat.status} />
            </div>
          );
        })}
      </div>

      {/* ── CTA Button ── */}
      <div className="px-5 pb-5 mt-auto">
        <a
          href={solution.href}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('integrated-solutions');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="explore-btn"
        >
          Explore Solutions
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function Applications() {
  return (
    <section
      id="integrated-solutions"
      className="py-6 sm:py-8 lg:py-10 relative bg-[#F5F8FC] dark:bg-[#0D1733] scroll-mt-20 transition-colors duration-300"
    >
      {/* Anchor aliases */}
      <div id="solutions" className="sr-only" />
      <div id="applications" className="sr-only" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#3285FF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#2DD4F0]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative">

        {/* ── Section Header Banner ── */}
        <div className="relative w-full mb-6 sm:mb-8 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] bg-gradient-to-br from-[#EEF5FD] via-white to-[#E5F2FB] dark:from-[#101936] dark:via-[#0D1733] dark:to-[#101936] shadow-[0_6px_24px_rgba(50,133,255,0.10)] dark:shadow-[0_6px_24px_rgba(45,212,240,0.08)] overflow-hidden">

          {/* Background network decoration */}
          <svg
            className="absolute right-0 top-0 h-full w-auto opacity-[0.07] dark:opacity-[0.04] pointer-events-none select-none"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="320" cy="40"  r="5" fill="#089EC2" />
            <circle cx="360" cy="100" r="5" fill="#3285FF" />
            <circle cx="280" cy="140" r="5" fill="#089EC2" />
            <circle cx="380" cy="160" r="4" fill="#3285FF" />
            <circle cx="240" cy="60"  r="4" fill="#089EC2" />
            <circle cx="340" cy="180" r="3" fill="#3285FF" />
            <line x1="320" y1="40"  x2="360" y2="100" stroke="#089EC2" strokeWidth="1" />
            <line x1="360" y1="100" x2="280" y2="140" stroke="#3285FF" strokeWidth="1" />
            <line x1="280" y1="140" x2="380" y2="160" stroke="#089EC2" strokeWidth="1" />
            <line x1="360" y1="100" x2="380" y2="160" stroke="#3285FF" strokeWidth="1" />
            <line x1="240" y1="60"  x2="320" y2="40"  stroke="#089EC2" strokeWidth="1" />
            <line x1="240" y1="60"  x2="280" y2="140" stroke="#3285FF" strokeWidth="1" />
            <line x1="340" y1="180" x2="280" y2="140" stroke="#089EC2" strokeWidth="1" />
          </svg>

          <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#1672E8] mb-0.5">
            INTEGRATED SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1733] dark:text-[#F8FAFC] tracking-tight mb-2">
            Our{' '}
            <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
              Integrated Solutions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#52627C] dark:text-[#AAB6D0] max-w-3xl leading-snug">
            Application-ready embedded systems combining hardware, software and AI for
            transportation, video surveillance, industrial automation and defence applications.
          </p>
        </div>

        {/* ── Four Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {solutions.map((sol) => (
            <SolutionCard key={sol.id} solution={sol} />
          ))}
        </div>

      </div>
    </section>
  );
}
