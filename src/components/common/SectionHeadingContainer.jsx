import React from 'react';

/**
 * Helper to ensure dual-tone heading:
 * First words in dark navy, key trailing words in vibrant blue/cyan gradient span
 */
function formatHeading(heading) {
  if (!heading) return null;
  if (React.isValidElement(heading) || typeof heading !== 'string') {
    return heading;
  }
  const words = heading.trim().split(/\s+/);
  if (words.length <= 1) {
    return heading;
  }
  let splitIndex = 1;
  if (words.length === 2) {
    splitIndex = 1;
  } else if (words.length === 3) {
    splitIndex = 1; // e.g. "Industries" + "We Serve"
  } else {
    splitIndex = words.length - 2;
  }
  const prefix = words.slice(0, splitIndex).join(' ');
  const highlight = words.slice(splitIndex).join(' ');
  return (
    <>
      {prefix}{' '}
      <span className="bg-gradient-to-r from-[#0284C7] to-[#3285FF] bg-clip-text text-transparent">
        {highlight}
      </span>
    </>
  );
}

/**
 * SectionHeadingContainer
 * Universal section heading banner across the AIEGX website.
 * Features:
 * - Clean white-to-light-blue gradient background matching reference
 * - Uniform 1px rounded border all around (no bottom cut-off)
 * - Subtle, delicate futuristic technology graphic on the RIGHT
 * - Left-aligned Eyebrow, Dual-tone Heading, and Description
 * - Responsive: scales gracefully on mobile, tablet, and desktop
 */
export default function SectionHeadingContainer({
  label,
  subheading,
  title,
  heading,
  description,
  children,
  rightContent,
  className = '',
  id,
}) {
  const rawId = React.useId();
  const uid = 'shc-' + rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const displaySubheading = subheading || label;
  const rawHeading = heading || title;
  const displayHeading = formatHeading(rawHeading);

  return (
    <div
      id={id}
      className={`section-heading-container relative w-full mb-4 sm:mb-5 px-4 py-4 sm:px-6 sm:py-5 lg:px-7 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_4px_20px_rgba(50,133,255,0.06)] dark:shadow-[0_4px_20px_rgba(45,212,240,0.08)] ${className}`}
    >
      {/* ── Futuristic Technology Fluid Wave Graphic on the RIGHT ── */}
      <svg
        className="section-heading-graphic absolute right-0 top-0 h-full w-[150px] sm:w-[320px] md:w-[480px] lg:w-[660px] pointer-events-none select-none overflow-hidden opacity-20 sm:opacity-35 lg:opacity-45 transition-opacity duration-300 z-0"
        viewBox="0 0 680 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Natural fade-out mask towards the left */}
          <linearGradient id={`${uid}-fade-mask`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.06" />
            <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
          </linearGradient>

          <mask id={`${uid}-mask`}>
            <rect x="0" y="0" width="680" height="140" fill={`url(#${uid}-fade-mask)`} />
          </mask>

          {/* Cyan to Blue gradients */}
          <linearGradient id={`${uid}-cyan-blue`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#089EC2" />
            <stop offset="100%" stopColor="#3285FF" />
          </linearGradient>

          <linearGradient id={`${uid}-blue-cyan`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3285FF" />
            <stop offset="100%" stopColor="#2DD4F0" />
          </linearGradient>

          {/* Translucent sheer wave ribbon fills */}
          <linearGradient id={`${uid}-sheer-1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4F0" stopOpacity="0.01" />
            <stop offset="40%" stopColor="#3285FF" stopOpacity="0.05" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.22" />
          </linearGradient>

          <linearGradient id={`${uid}-sheer-2`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id={`${uid}-sheer-3`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0" />
            <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.10" />
          </linearGradient>

          {/* Radial ambient glow in right quadrant */}
          <radialGradient id={`${uid}-ambient-glow`} cx="82%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#3285FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g mask={`url(#${uid}-mask)`}>
          {/* Luminous ambient backdrop glow */}
          <ellipse cx="540" cy="70" rx="160" ry="70" fill="${`url(#${uid}-ambient-glow)`}" />

          {/* ── Sheer Fluid Mesh Wave Ribbons ── */}
          <path
            d="M 280 0 C 390 35, 470 90, 560 140 L 680 140 L 680 0 Z"
            fill="${`url(#${uid}-sheer-1)`}"
          />

          <path
            d="M 360 140 C 440 95, 520 45, 680 25 L 680 85 C 540 100, 460 128, 410 140 Z"
            fill="${`url(#${uid}-sheer-2)`}"
          />

          <path
            d="M 220 0 C 350 45, 450 100, 580 140 L 630 140 C 490 92, 400 35, 270 0 Z"
            fill="${`url(#${uid}-sheer-3)`}"
          />

          {/* ── Fine Highlight Crest Wave Lines ── */}
          <path
            d="M 180 0 C 320 40, 440 95, 580 140"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M 220 0 C 350 45, 460 98, 600 140"
            stroke="${`url(#${uid}-blue-cyan)`}"
            strokeWidth="1.0"
            strokeOpacity="0.32"
            fill="none"
          />
          <path
            d="M 270 0 C 385 45, 490 95, 630 140"
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M 330 0 C 430 48, 520 95, 660 140"
            stroke="${`url(#${uid}-cyan-blue)`}"
            strokeWidth="0.9"
            strokeOpacity="0.28"
            fill="none"
          />

          {/* Cross-curving graceful wave lines */}
          <path
            d="M 320 140 C 410 95, 500 45, 680 15"
            stroke="#FFFFFF"
            strokeWidth="1.0"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M 370 140 C 450 100, 530 52, 680 32"
            stroke="#0284C7"
            strokeWidth="0.8"
            strokeOpacity="0.22"
            fill="none"
          />
          <path
            d="M 430 140 C 500 105, 570 65, 680 50"
            stroke="#38BDF8"
            strokeWidth="0.9"
            strokeOpacity="0.25"
            fill="none"
          />

          {/* Translucent parallel micro-ribbon paths */}
          <path
            d="M 250 0 C 370 42, 475 96, 615 140"
            stroke="#BAE6FD"
            strokeWidth="0.65"
            strokeOpacity="0.2"
            fill="none"
          />
          <path
            d="M 290 0 C 400 44, 505 97, 645 140"
            stroke="#E0F2FE"
            strokeWidth="0.65"
            strokeOpacity="0.25"
            fill="none"
          />

          {/* ── Floating Luminous Nodes & Ambient Light Orbs ── */}
          <circle cx="490" cy="75" r="12" fill="#38BDF8" fillOpacity="0.06" />
          <circle cx="490" cy="75" r="6" fill="#38BDF8" fillOpacity="0.12" />
          <circle cx="490" cy="75" r="3.5" fill="#0284C7" fillOpacity="0.45" />
          <circle cx="490" cy="75" r="1.5" fill="#FFFFFF" fillOpacity="0.75" />

          <circle cx="560" cy="52" r="8" fill="#0284C7" fillOpacity="0.06" />
          <circle cx="560" cy="52" r="3" fill="#38BDF8" fillOpacity="0.4" />
          <circle cx="560" cy="52" r="1.2" fill="#FFFFFF" fillOpacity="0.75" />

          <circle cx="430" cy="98" r="2.5" fill="#0284C7" fillOpacity="0.3" />
          <circle cx="370" cy="48" r="2" fill="#38BDF8" fillOpacity="0.28" />
          <circle cx="525" cy="112" r="3" fill="#0284C7" fillOpacity="0.3" />
          <circle cx="615" cy="85" r="3.5" fill="#38BDF8" fillOpacity="0.32" />
          <circle cx="640" cy="38" r="2.5" fill="#0284C7" fillOpacity="0.25" />
          <circle cx="460" cy="30" r="2" fill="#38BDF8" fillOpacity="0.28" />
          <circle cx="330" cy="22" r="1.8" fill="#0284C7" fillOpacity="0.2" />

          <line x1="370" y1="48" x2="490" y2="75" stroke="#38BDF8" strokeWidth="0.7" strokeOpacity="0.16" />
          <line x1="490" y1="75" x2="560" y2="52" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.18" />
          <line x1="490" y1="75" x2="525" y2="112" stroke="#38BDF8" strokeWidth="0.7" strokeOpacity="0.16" />
          <line x1="560" y1="52" x2="615" y2="85" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.16" />
        </g>
      </svg>

      {/* ── Content on the LEFT (elevated above graphic) ── */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0 pr-2">
          {displaySubheading && (
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#1672E8] dark:text-[#2DD4F0] mb-1">
              {displaySubheading}
            </p>
          )}
          {displayHeading && (
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0D1733] dark:text-[#F8FAFC] tracking-tight mb-2 break-words">
              {displayHeading}
            </h2>
          )}
          {description && (
            <p className="section-heading-description text-xs sm:text-sm lg:text-[15px] font-medium text-[#0D1733] dark:text-[#CBD5E1] max-w-3xl leading-relaxed mt-1 break-words">
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Optional Right Content (e.g. badge, action, or custom count) */}
        {rightContent && (
          <div className="w-full md:w-auto shrink-0 md:shrink self-start md:self-center min-w-0">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
}
