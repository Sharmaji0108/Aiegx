import React from 'react';

/**
 * SectionHeadingContainer
 * Universal section heading banner across the AIEGX website.
 * Features:
 * - Clean white-to-light-blue gradient background
 * - 3px cyan-to-blue bottom gradient border
 * - Futuristic fluid wave ribbons, sheer mesh curves, and floating nodes on the RIGHT
 * - Left-aligned Eyebrow, Heading, and Description matching the AIEGX design language
 * - Responsive: scales gracefully and preserves readability on all viewports
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
  const displaySubheading = subheading || label;
  const displayHeading = heading || title;
  return (
    <div
      id={id}
      className={`section-heading-container relative w-full mb-4 sm:mb-5 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl border border-[#DCE6F3] dark:border-[#24355A] shadow-[0_6px_24px_rgba(50,133,255,0.08)] dark:shadow-[0_6px_24px_rgba(45,212,240,0.08)] ${className}`}
    >
      {/* ── Futuristic Technology Fluid Wave Graphic on the RIGHT ── */}
      <svg
        className="section-heading-graphic absolute right-0 top-0 h-full w-[300px] sm:w-[440px] md:w-[540px] lg:w-[680px] pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-50 lg:opacity-60 transition-opacity duration-300 z-0"
        viewBox="0 0 680 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Natural fade-out mask towards the left */}
          <linearGradient id="shc-fade-mask" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.75" />
          </linearGradient>

          <mask id="shc-mask">
            <rect x="0" y="0" width="680" height="140" fill="url(#shc-fade-mask)" />
          </mask>

          {/* Cyan to Blue gradients */}
          <linearGradient id="shc-cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#089EC2" />
            <stop offset="100%" stopColor="#3285FF" />
          </linearGradient>

          <linearGradient id="shc-blue-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3285FF" />
            <stop offset="100%" stopColor="#2DD4F0" />
          </linearGradient>

          {/* Translucent sheer wave ribbon fills */}
          <linearGradient id="shc-sheer-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4F0" stopOpacity="0.01" />
            <stop offset="40%" stopColor="#3285FF" stopOpacity="0.06" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="shc-sheer-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id="shc-sheer-3" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0" />
            <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.12" />
          </linearGradient>

          {/* Radial ambient glow in right quadrant */}
          <radialGradient id="shc-ambient-glow" cx="82%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.25" />
            <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3285FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g mask="url(#shc-mask)">
          {/* Luminous ambient backdrop glow */}
          <ellipse cx="540" cy="70" rx="160" ry="70" fill="url(#shc-ambient-glow)" />

          {/* ── Sheer Fluid Mesh Wave Ribbons ── */}
          <path
            d="M 280 0 C 390 35, 470 90, 560 140 L 680 140 L 680 0 Z"
            fill="url(#shc-sheer-1)"
          />

          <path
            d="M 360 140 C 440 95, 520 45, 680 25 L 680 85 C 540 100, 460 128, 410 140 Z"
            fill="url(#shc-sheer-2)"
          />

          <path
            d="M 220 0 C 350 45, 450 100, 580 140 L 630 140 C 490 92, 400 35, 270 0 Z"
            fill="url(#shc-sheer-3)"
          />

          {/* ── Fine Highlight Crest Wave Lines ── */}
          <path
            d="M 180 0 C 320 40, 440 95, 580 140"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.55"
            fill="none"
          />
          <path
            d="M 220 0 C 350 45, 460 98, 600 140"
            stroke="url(#shc-blue-cyan)"
            strokeWidth="1.2"
            strokeOpacity="0.38"
            fill="none"
          />
          <path
            d="M 270 0 C 385 45, 490 95, 630 140"
            stroke="#38BDF8"
            strokeWidth="0.9"
            strokeOpacity="0.30"
            fill="none"
          />
          <path
            d="M 330 0 C 430 48, 520 95, 660 140"
            stroke="url(#shc-cyan-blue)"
            strokeWidth="1"
            strokeOpacity="0.32"
            fill="none"
          />

          {/* Cross-curving graceful wave lines */}
          <path
            d="M 320 140 C 410 95, 500 45, 680 15"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M 370 140 C 450 100, 530 52, 680 32"
            stroke="#0284C7"
            strokeWidth="0.9"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M 430 140 C 500 105, 570 65, 680 50"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.30"
            fill="none"
          />

          {/* Translucent parallel micro-ribbon paths */}
          <path
            d="M 250 0 C 370 42, 475 96, 615 140"
            stroke="#BAE6FD"
            strokeWidth="0.75"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M 290 0 C 400 44, 505 97, 645 140"
            stroke="#E0F2FE"
            strokeWidth="0.75"
            strokeOpacity="0.30"
            fill="none"
          />

          {/* ── Floating Luminous Nodes & Ambient Light Orbs ── */}
          <circle cx="490" cy="75" r="14" fill="#38BDF8" fillOpacity="0.07" />
          <circle cx="490" cy="75" r="8" fill="#38BDF8" fillOpacity="0.14" />
          <circle cx="490" cy="75" r="4" fill="#0284C7" fillOpacity="0.55" />
          <circle cx="490" cy="75" r="2" fill="#FFFFFF" fillOpacity="0.8" />

          <circle cx="560" cy="52" r="10" fill="#0284C7" fillOpacity="0.08" />
          <circle cx="560" cy="52" r="3.5" fill="#38BDF8" fillOpacity="0.5" />
          <circle cx="560" cy="52" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />

          <circle cx="430" cy="98" r="3" fill="#0284C7" fillOpacity="0.4" />
          <circle cx="370" cy="48" r="2.5" fill="#38BDF8" fillOpacity="0.35" />
          <circle cx="525" cy="112" r="3.5" fill="#0284C7" fillOpacity="0.35" />
          <circle cx="615" cy="85" r="4" fill="#38BDF8" fillOpacity="0.4" />
          <circle cx="640" cy="38" r="3" fill="#0284C7" fillOpacity="0.3" />
          <circle cx="460" cy="30" r="2.5" fill="#38BDF8" fillOpacity="0.35" />
          <circle cx="330" cy="22" r="2" fill="#0284C7" fillOpacity="0.25" />

          <line x1="370" y1="48" x2="490" y2="75" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.20" />
          <line x1="490" y1="75" x2="560" y2="52" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.22" />
          <line x1="490" y1="75" x2="525" y2="112" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.20" />
          <line x1="560" y1="52" x2="615" y2="85" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.20" />
        </g>
      </svg>

      {/* ── Content on the LEFT (elevated above graphic) ── */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 min-w-0 pr-2">
          {displaySubheading && (
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#1672E8] dark:text-[#2DD4F0] mb-1">
              {displaySubheading}
            </p>
          )}
          {displayHeading && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D1733] dark:text-[#F8FAFC] tracking-tight mb-2">
              {displayHeading}
            </h2>
          )}
          {description && (
            <p className="section-heading-description text-sm sm:text-base font-medium text-[#0D1733] dark:text-[#CBD5E1] max-w-3xl leading-relaxed mt-1">
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Optional Right Content (e.g. badge, action, or custom count) */}
        {rightContent && (
          <div className="shrink-0 self-start md:self-center">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
}
