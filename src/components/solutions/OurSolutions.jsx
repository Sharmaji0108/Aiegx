import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeadingContainer from '../common/SectionHeadingContainer';
import { SOLUTIONS_CATEGORIES } from '../../data/solutionsData';
import { navigateTo } from '../../utils/navigation';

/**
 * Mapping between category identifiers/routes and canonical IDs in SOLUTIONS_CATEGORIES
 */
const CATEGORY_MAP = {
  // Vehicle & Mobility
  'vehicle-mobility': 'vehicle-mobility',
  '/vehicle-mobility': 'vehicle-mobility',
  '/solutions/vehicle-mobility': 'vehicle-mobility',

  // Video & Surveillance
  'video-surveillance': 'video-surveillance',
  '/solutions/video-surveillance': 'video-surveillance',
  '/video-surveillance': 'video-surveillance',

  // Industrial & Machine Vision
  'industrial-machine-vision': 'industrial-vision',
  'industrial-vision': 'industrial-vision',
  '/solutions/industrial-machine-vision': 'industrial-vision',
  '/solutions/industrial-vision': 'industrial-vision',
  '/industrial-machine-vision': 'industrial-vision',

  // Defence & Advanced Vision
  'defence-advanced-vision': 'defence-advanced',
  'defence-advanced': 'defence-advanced',
  '/solutions/defence-advanced-vision': 'defence-advanced',
  '/solutions/defence-advanced': 'defence-advanced',
  '/defence-advanced-vision': 'defence-advanced',
};

/**
 * Dynamic category subtitles for "Our Solutions" section
 */
const CATEGORY_SUBTITLES = {
  'vehicle-mobility':
    'Explore intelligent embedded vision solutions for driver monitoring, vehicle identification and number plate recognition across mobility applications.',
  'video-surveillance':
    'Explore intelligent edge video recording, perimeter monitoring, and real-time AI vision analytics engineered for high-security environments.',
  'industrial-vision':
    'Explore automated optical inspection, industrial control HMIs, and edge vision systems engineered for zero-defect manufacturing.',
  'industrial-machine-vision':
    'Explore automated optical inspection, industrial control HMIs, and edge vision systems engineered for zero-defect manufacturing.',
  'defence-advanced':
    'Explore mission-critical electro-optical guidance, tactical target tracking, and ruggedized edge computing systems.',
  'defence-advanced-vision':
    'Explore mission-critical electro-optical guidance, tactical target tracking, and ruggedized edge computing systems.',
};

/**
 * Meaningful short descriptions (max 2 lines) for all individual sub-solutions
 */
const SUB_SOLUTION_DESCRIPTIONS = {
  // Vehicle & Mobility Solutions
  'driver-monitoring-system':
    'Monitor driver attention and behaviour for enhanced safety and in-cabin awareness.',
  'anpr-systems':
    'Detect and recognize vehicle number plates with high accuracy in real-time environments.',
  'vehicle-detection-camera':
    'Detect and monitor vehicles for traffic management, safety and automation.',
  'smart-parking':
    'Automated parking detection, occupancy monitoring and smart parking management.',

  // Video & Surveillance Solutions
  'nvr-systems':
    'High-throughput edge recording platform with hardware decoding and on-device neural search.',
  'cctv-monitoring':
    'Continuous 24/7 perimeter surveillance with automated intrusion tripwires and PTZ camera tracking.',
  'ai-video-analytics':
    'Real-time edge video parsing for worker safety, crowd density analysis and anomaly detection.',
  'people-counting':
    'Bidirectional foot-traffic counting and occupancy analytics with high precision and privacy.',
  'multi-camera-analytics':
    'Synchronized multi-camera visual fusion providing cross-camera trajectory tracking and re-identification.',

  // Industrial & Machine Vision Solutions
  'industrial-railway-hmi':
    'Rugged operator consoles combining hardware 3D graphics, dual CAN-FD and transit safety standards.',
  'display-video-controller':
    'Multi-display routing hub driving independent LVDS, MIPI and HDMI panels with synchronized scaling.',
  'ai-visual-inspection':
    'In-line automated optical inspection identifying microscopic surface defects at high manufacturing speeds.',
  'smart-vision-ai-camera':
    'IP67 all-in-one smart camera combining global-shutter imaging with embedded edge AI processing.',
  'infrastructure-control':
    'High-availability SCADA control nodes with redundant fieldbus networking and safety interlocks.',

  // Defence & Advanced Vision Solutions
  'seeker-systems':
    'High-framerate electro-optical seeker guidance computing terminal intercept trajectories at 120 FPS.',
  'surveillance-vision':
    'Long-range multi-spectral situational awareness combining pixel-aligned thermal and optical sensors.',
  'target-tracking-recognition':
    'Neural multi-target tracking maintaining continuous target lock through smoke and occlusions.',
  'rugged-ai-embedded':
    'Conduction-cooled military-grade edge AI chassis engineered for tactical and armored vehicles.',
};

/**
 * Helper to dynamically resolve sub-solutions with their titles, descriptions, and routes
 */
export function getSubSolutionsForCategory(categoryKey, fallbackSubtopics) {
  const targetId = CATEGORY_MAP[categoryKey] || categoryKey;
  const found = SOLUTIONS_CATEGORIES.find((c) => c.id === targetId);

  if (found && Array.isArray(found.items) && found.items.length > 0) {
    return found.items.map((item) => {
      const slug = item.slug || (item.href ? item.href.replace(/^\/solutions\/?/, '') : '');
      const description =
        item.description ||
        SUB_SOLUTION_DESCRIPTIONS[slug] ||
        fallbackSubtopics?.find((s) => s.id === slug || s.slug === slug)?.shortDescription ||
        '';
      return {
        name: item.name,
        href: item.href || `/solutions/${slug}`,
        slug,
        description,
      };
    });
  }

  // Fallback to data.subtopics if not found in SOLUTIONS_CATEGORIES
  if (Array.isArray(fallbackSubtopics) && fallbackSubtopics.length > 0) {
    return fallbackSubtopics.map((s) => {
      const slug = s.id || s.slug;
      return {
        name: s.title || s.name,
        href: `/solutions/${slug}`,
        slug,
        description: s.shortDescription || s.description || SUB_SOLUTION_DESCRIPTIONS[slug] || '',
      };
    });
  }

  return [];
}

/**
 * Reusable OurSolutions Section Component
 * 
 * Renders the clean "Our Solutions" card grid with:
 * 1. "Our Solutions" heading with a dynamic category-relevant subtitle
 * 2. Sub-solution cards with title, short description (max 2 lines), and "Explore Solution" button
 */
export default function OurSolutions({
  categoryId,
  data,
  solutions: propSolutions,
  className = '',
}) {
  const resolvedCategoryKey = categoryId || data?.id || data?.route || '';
  const targetId = CATEGORY_MAP[resolvedCategoryKey] || resolvedCategoryKey;

  // Resolve dynamic category subtitle
  const subtitle =
    data?.solutionsSubtitle ||
    CATEGORY_SUBTITLES[targetId] ||
    CATEGORY_SUBTITLES[resolvedCategoryKey] ||
    'Explore intelligent embedded vision and edge AI solutions designed to improve operational efficiency and safety.';

  const items =
    propSolutions && propSolutions.length > 0
      ? propSolutions.map((item) => ({
        ...item,
        description:
          item.description ||
          SUB_SOLUTION_DESCRIPTIONS[item.slug || item.id] ||
          '',
      }))
      : getSubSolutionsForCategory(resolvedCategoryKey, data?.subtopics);

  if (!items || items.length === 0) return null;

  const handleNavigate = (href, e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    navigateTo(href, e);
  };

  // Responsive grid: 5 columns for 5 items, 3 columns for 3 items, 4 columns for 4 items on desktop
  const gridColsClass =
    items.length === 5
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
      : items.length === 3
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section
      id="our-solutions"
      className={`py-12 sm:py-16 bg-[#F8FAFD] dark:bg-[#0c142c] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300 scroll-mt-20 ${className}`}
    >
      {/* Anchor for backward compatibility with existing links/scrollToSubtopics */}
      <span id="subtopics" className="block -mt-24 pt-24 invisible pointer-events-none" aria-hidden="true" />

      <div className="section-container">
        {/* Section Heading: "Our Solutions" with dynamic subtitle */}
        <SectionHeadingContainer
          heading="Our Solutions"
          description={subtitle}
        />

        {/* Sub-Solutions Horizontal Card Layout */}
        <div className={`grid ${gridColsClass} gap-4 sm:gap-5 mt-6 sm:mt-8 items-stretch`}>
          {items.map((item, idx) => {
            const desc =
              item.description ||
              SUB_SOLUTION_DESCRIPTIONS[item.slug || item.id] ||
              '';

            return (
              <div
                key={item.slug || item.id || idx}
                id={item.slug || item.id}
                className="group bg-white dark:bg-[#101936] rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between h-full scroll-mt-24"
              >
                {/* 1. Sub-solution name and short description (max 2 lines) */}
                <div className="flex-1 min-w-0 flex flex-col mb-4">
                  <h3 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-white leading-snug tracking-tight">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavigate(item.href, e)}
                      className="hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors"
                    >
                      {item.name || item.title}
                    </a>
                  </h3>

                  {desc && (
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {desc}
                    </p>
                  )}
                </div>

                {/* 2. Explore Solution button with right-arrow icon (cyan/blue accents) */}
                <div className="mt-auto pt-2">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigate(item.href, e)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm text-[#089EC2] dark:text-[#2DD4F0] bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 hover:bg-[#089EC2]/20 dark:hover:bg-[#2DD4F0]/20 border border-[#089EC2]/25 dark:border-[#2DD4F0]/25 transition-all duration-150 cursor-pointer group/btn"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
