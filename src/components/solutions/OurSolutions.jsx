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
 * Helper to dynamically resolve sub-solutions for any given category
 */
export function getSubSolutionsForCategory(categoryKey, fallbackSubtopics) {
  const targetId = CATEGORY_MAP[categoryKey] || categoryKey;
  const found = SOLUTIONS_CATEGORIES.find((c) => c.id === targetId);

  if (found && Array.isArray(found.items) && found.items.length > 0) {
    return found.items.map((item) => ({
      name: item.name,
      href: item.href || `/solutions/${item.slug}`,
      slug: item.slug || (item.href ? item.href.replace(/^\/solutions\/?/, '') : ''),
    }));
  }

  // Fallback to data.subtopics if not found in SOLUTIONS_CATEGORIES
  if (Array.isArray(fallbackSubtopics) && fallbackSubtopics.length > 0) {
    return fallbackSubtopics.map((s) => ({
      name: s.title || s.name,
      href: `/solutions/${s.id || s.slug}`,
      slug: s.id || s.slug,
    }));
  }

  return [];
}

/**
 * Reusable OurSolutions Section Component
 * 
 * Renders the clean "Our Solutions" card grid directly below Key Capabilities.
 * Each card contains ONLY:
 * 1. Sub-solution name
 * 2. Explore button with right-arrow icon
 */
export default function OurSolutions({
  categoryId,
  data,
  solutions: propSolutions,
  className = '',
}) {
  const resolvedCategoryKey = categoryId || data?.id || data?.route || '';
  const items =
    propSolutions && propSolutions.length > 0
      ? propSolutions
      : getSubSolutionsForCategory(resolvedCategoryKey, data?.subtopics);

  if (!items || items.length === 0) return null;

  const handleNavigate = (href, e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    navigateTo(href, e);
  };

  // Responsive grid: 5 columns for 5 items, 4 columns for 4 items on desktop
  const gridColsClass =
    items.length === 5
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section
      id="our-solutions"
      className={`py-12 sm:py-16 bg-[#F8FAFD] dark:bg-[#0c142c] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300 scroll-mt-20 ${className}`}
    >
      {/* Anchor for backward compatibility with existing links/scrollToSubtopics */}
      <span id="subtopics" className="block -mt-24 pt-24 invisible pointer-events-none" aria-hidden="true" />

      <div className="section-container">
        {/* Section Heading: "Our Solutions" */}
        <SectionHeadingContainer heading="Our Solutions" />

        {/* Sub-Solutions Horizontal Card Layout */}
        <div className={`grid ${gridColsClass} gap-4 sm:gap-5 mt-6 sm:mt-8 items-stretch`}>
          {items.map((item, idx) => (
            <div
              key={item.slug || item.id || idx}
              id={item.slug || item.id}
              className="group bg-white dark:bg-[#101936] rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-md hover:border-[#089EC2]/60 dark:hover:border-[#2DD4F0]/60 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between h-full scroll-mt-24"
            >
              {/* 1. Sub-solution name (title only, no images, descriptions, or specs) */}
              <div className="mb-4">
                <h3 className="text-sm sm:text-base font-bold text-[#14213D] dark:text-white leading-snug tracking-tight">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigate(item.href, e)}
                    className="hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors"
                  >
                    {item.name || item.title}
                  </a>
                </h3>
              </div>

              {/* 2. Explore button with right-arrow icon (cyan/blue accents) */}
              <div className="mt-auto pt-2">
                <a
                  href={item.href}
                  onClick={(e) => handleNavigate(item.href, e)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm text-[#089EC2] dark:text-[#2DD4F0] bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 hover:bg-[#089EC2]/20 dark:hover:bg-[#2DD4F0]/20 border border-[#089EC2]/25 dark:border-[#2DD4F0]/25 transition-all duration-150 cursor-pointer group/btn"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
