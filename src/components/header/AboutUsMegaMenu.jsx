import React, { useEffect, useRef } from 'react';
import {
  X,
  ChevronRight,
  ArrowRight,
  Building2,
  Sparkles,
  Cpu,
  Target
} from 'lucide-react';
import { navigateTo } from '../../utils/navigation';

const aboutUsItems = [
  {
    name: 'Company Overview',
    href: '#engineering-capabilities',
    icon: Building2,
  },
  {
    name: 'Why AIEGX',
    href: '#why-aiegx',
    icon: Sparkles,
  },
  {
    name: 'Our Expertise',
    href: '#expertise',
    icon: Cpu,
  },
  {
    name: 'Our Approach',
    href: '#our-approach',
    icon: Target,
  },
];

export default function AboutUsMegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }) {
  const menuRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const toggleBtn = document.getElementById('navbar-about-toggle');
        if (toggleBtn && toggleBtn.contains(e.target)) return;
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (href, e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    onClose();
    if (!href) return;
    navigateTo(href, e);
  };

  return (
    <>
      {/* Dark Ambient Backdrop Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Single-Column Mega Menu Panel */}
      <div
        ref={menuRef}
        id="about-mega-menu"
        className="mega-menu-dropdown-wrapper !max-w-[580px] animate-in fade-in slide-in-from-top-2 duration-200"
        role="dialog"
        aria-label="About Us Mega Menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="mega-menu-dropdown-card bg-white/95 dark:bg-[#101936]/98 backdrop-blur-2xl border border-[#DCE6F3] dark:border-white/10 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/80 text-slate-900 dark:text-white p-5 sm:p-6 lg:p-7">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#DCE6F3] dark:border-white/10">
            <a
              href="/about-us"
              onClick={(e) => handleLinkClick('/about-us', e)}
              className="group inline-flex items-center gap-2 py-1.5 px-2.5 -ml-2.5 rounded-xl text-xs font-mono font-bold tracking-widest text-[#079BD4] dark:text-[#2DD4F0] uppercase hover:bg-[#EBF6FC] dark:hover:bg-[#17264D]/60 hover:text-[#0582b3] dark:hover:text-[#5ce1f7] transition-all cursor-pointer select-none"
              title="Navigate to About Us Overview"
              aria-label="Navigate to About Us overview page"
            >
              <span>ABOUT US</span>
              <ChevronRight className="w-4 h-4 text-[#079BD4] dark:text-[#2DD4F0] transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#079BD4] dark:focus-visible:ring-[#2DD4F0] cursor-pointer"
              aria-label="Close menu"
              title="Close Menu (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Single-Column Layout: Expanded to available width */}
          <div className="space-y-2">
            {aboutUsItems.map((item, iIdx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={iIdx}
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.href, e)}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl bg-[#F8FAFD] dark:bg-[#142347]/50 hover:bg-[#F0F7FF] dark:hover:bg-[#1E3360] border border-slate-200/80 dark:border-white/10 hover:border-[#C5DDF5] dark:hover:border-[#244277] shadow-xs hover:shadow-sm transition-all duration-150 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EBF6FC] dark:bg-[#17264D] text-[#079BD4] dark:text-[#2DD4F0] border border-[#D0E7F7] dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#079BD4] group-hover:text-white dark:group-hover:bg-[#2DD4F0] dark:group-hover:text-[#0D1733] transition-all duration-150">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-[#14213D] dark:text-[#E2E8F0] group-hover:text-[#079BD4] dark:group-hover:text-[#2DD4F0] group-hover:translate-x-0.5 transition-all duration-150">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/40 group-hover:text-[#079BD4] dark:group-hover:text-[#2DD4F0] group-hover:translate-x-1 transition-all duration-150 shrink-0" />
                  </a>
                );
              })}
            </div>

          {/* Bottom Section */}
          <div className="mt-6 pt-4 border-t border-[#DCE6F3] dark:border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#14213D] dark:text-white">
                Building reliable embedded technology.
              </p>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                Discover our company, engineering capabilities and commitment.
              </p>
            </div>
            <a
              href="/about-us"
              onClick={(e) => handleLinkClick('/about-us', e)}
              className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-[#079BD4] dark:text-[#2DD4F0] hover:text-[#067fae] dark:hover:text-[#5ce1f7] hover:underline group shrink-0 cursor-pointer"
            >
              <span>Explore AIEGX</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
