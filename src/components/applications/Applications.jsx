import React from 'react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
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
        <SectionHeadingContainer
          subheading="INTEGRATED SOLUTIONS"
          heading={
            <>
              Our{' '}
              <span className="bg-gradient-to-r from-[#089EC2] to-[#3285FF] bg-clip-text text-transparent">
                Integrated Solutions
              </span>
            </>
          }
          description="Turnkey embedded systems combining intelligent vision, AI analytics, and rugged connectivity for mobility, surveillance, and smart infrastructure."
        />

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
