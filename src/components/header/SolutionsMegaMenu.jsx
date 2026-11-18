import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronRight,
  Monitor,
  Eye,
  Factory,
  Bot
} from 'lucide-react';
import { SOLUTIONS_CATEGORIES } from '../../data/solutionsData';

export default function SolutionsMegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }) {
  const [selectedCategory, setSelectedCategory] = useState('vehicle-mobility');
  const [mobileStep, setMobileStep] = useState(1); // 1 = Categories, 2 = Items
  const menuRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const toggleBtn = document.getElementById('navbar-solutions-toggle');
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

  const currentCategory =
    SOLUTIONS_CATEGORIES.find((c) => c.id === selectedCategory) || SOLUTIONS_CATEGORIES[0];

  const handleLinkClick = (href, e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    onClose();
    if (!href) return;
    if (href.startsWith('/')) {
      window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: href }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: `/${href}` }));
      } else {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Dark Ambient Backdrop Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Two-Column Mega Menu Panel */}
      <div
        ref={menuRef}
        id="solutions-mega-menu"
        className="mega-menu-dropdown-wrapper !max-w-4xl animate-in fade-in slide-in-from-top-2 duration-200"
        role="dialog"
        aria-label="Solutions Mega Menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="mega-menu-dropdown-card bg-white/95 dark:bg-[#101936]/98 backdrop-blur-2xl border border-[#DCE6F3] dark:border-white/10 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/80 text-slate-900 dark:text-white min-h-[340px]">

          {/* Mobile Drill-Down Bar (Shown on small screens) */}
          <div className="lg:hidden flex items-center justify-between p-3.5 bg-[#F1F6FC] dark:bg-[#0b1226] border-b border-[#DCE6F3] dark:border-white/10">
            <div className="flex items-center gap-2">
              {mobileStep > 1 && (
                <button
                  type="button"
                  onClick={() => setMobileStep(1)}
                  className="px-2.5 py-1 text-xs text-[#089EC2] dark:text-[#2DD4F0] bg-white dark:bg-[#17264D] rounded-lg border border-[#DCE6F3] dark:border-white/10 flex items-center gap-1 font-mono font-semibold cursor-pointer"
                >
                  &larr; Back
                </button>
              )}
              <span className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white tracking-wider">
                {mobileStep === 1 ? 'Solutions' : currentCategory.name}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0">

            {/* COLUMN 1 — Main Categories (Left Sidebar, approx 34% width: 280-300px) */}
            <div
              className={`lg:w-[280px] xl:w-[300px] flex-shrink-0 bg-[#F1F6FC] dark:bg-[#0e1630] border-b lg:border-b-0 lg:border-r border-[#DCE6F3] dark:border-white/10 flex flex-col p-4 sm:p-5 min-h-0 overflow-y-auto mega-menu-scroll ${
                mobileStep !== 1 ? 'hidden lg:flex' : 'flex'
              }`}
            >
              {/* Column 1 Header with Close Icon & SOLUTIONS heading */}
              <div className="hidden lg:flex items-center justify-between pb-3.5 mb-4 border-b border-[#DCE6F3] dark:border-white/10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#089EC2] dark:text-[#2DD4F0] uppercase">
                  SOLUTIONS
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#089EC2] dark:focus-visible:ring-[#2DD4F0] cursor-pointer"
                  aria-label="Close menu"
                  title="Close Menu (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Categories Navigation Cards */}
              <nav className="space-y-2" aria-label="Solutions Categories">
                {SOLUTIONS_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={(e) => {
                        setSelectedCategory(cat.id);
                        if (window.innerWidth < 1024) {
                          setMobileStep(2);
                        } else if (cat.items && cat.items[0]) {
                          handleLinkClick(cat.items[0].href, e);
                        }
                      }}
                      onMouseEnter={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#089EC2] dark:focus-visible:ring-[#2DD4F0] cursor-pointer ${
                        isSelected
                          ? 'bg-white dark:bg-[#17264D] text-[#089EC2] dark:text-[#2DD4F0] font-bold shadow-xs border-l-3 border-[#089EC2] dark:border-[#2DD4F0]'
                          : 'text-[#14213D] dark:text-[#E2E8F0] hover:bg-white/60 dark:hover:bg-[#17264D]/50 hover:text-[#089EC2] dark:hover:text-[#2DD4F0]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 ${
                            isSelected
                              ? 'text-[#089EC2] dark:text-[#2DD4F0]'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}
                        />
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSelected
                            ? 'text-[#089EC2] dark:text-[#2DD4F0] translate-x-0.5'
                            : 'text-slate-400 dark:text-white/30'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* COLUMN 2 — Subcategories (Right Panel, approx 66% width) */}
            <div
              className={`flex-1 bg-white dark:bg-[#101936] p-5 sm:p-6 lg:p-7 flex flex-col min-h-0 overflow-y-auto mega-menu-scroll ${
                mobileStep !== 2 ? 'hidden lg:flex' : 'flex'
              }`}
            >
              {/* Category Heading Header */}
              <div className="pb-3.5 mb-4 border-b border-[#DCE6F3] dark:border-white/10 flex items-center justify-between">
                <a
                  href={currentCategory.items[0]?.href}
                  onClick={(e) => handleLinkClick(currentCategory.items[0]?.href, e)}
                  className="text-sm font-mono font-bold tracking-wider text-[#14213D] dark:text-[#F8FAFC] uppercase hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>{currentCategory.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Subcategories List: Individual white rounded cards with right-facing chevrons */}
              <div className="space-y-2 sm:space-y-2.5">
                {currentCategory.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.href, e)}
                    className="group w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#14213D] dark:text-[#E2E8F0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] bg-white dark:bg-[#17264D]/60 hover:bg-[#F0F7FF] dark:hover:bg-[#1E3360] border border-slate-200/80 dark:border-white/10 hover:border-[#C5DDF5] dark:hover:border-[#244277] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                            item.badge === 'In Development'
                              ? 'bg-blue-50 text-[#089EC2] border border-[#089EC2]/30 dark:bg-[#17264D] dark:text-[#2DD4F0] dark:border-[#2DD4F0]/30'
                              : 'bg-slate-100 text-slate-600 border border-slate-200 dark:bg-[#17264D]/60 dark:text-slate-300 dark:border-white/10'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/40 group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </a>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
