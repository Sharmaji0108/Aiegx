import React, { useState, useEffect, useRef } from 'react';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import ProductsMegaMenu from './ProductsMegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import AboutUsMegaMenu from './AboutUsMegaMenu';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Building2,
  ShieldCheck,
  Layers,
  Cpu,
  Server,
  Zap,
  Monitor,
  Eye,
  Factory,
  Bot,
  Sparkles,
  Target
} from 'lucide-react';
import { SOLUTIONS_CATEGORIES } from '../../data/solutionsData';
import { navigateTo } from '../../utils/navigation';

const mobileProductCategories = [
  {
    id: 'som',
    name: 'System on Modules',
    icon: Cpu,
    items: [
      { name: 'RZ/G2L', href: '/products/rz-g2l' },
      { name: 'RZ/G2N', href: '/products/rz-g2n' },
      { name: 'RZ/V2L', href: '/products/rz-v2l' },
      { name: 'RZ/V2H', href: '/products/rz-v2h' },
    ],
  },
  {
    id: 'sbc',
    name: 'Single Board Computers',
    icon: Server,
    items: [
      { name: 'RZ/G2L SBC (Development Platform)', href: '/products/rzg2l/complete-sbc/' },
      { name: 'RZ/G2N SBC (Development Platform)', href: '/products/rz-g2n/sbc' },
      { name: 'RZ/V2L SBC (Development Platform)', href: '/products/rzv2l/complete-sbc/' },
      { name: 'RZ/V2H SBC (Development Platform)', href: '/products/rzv2h/complete-sbc/' },
    ],
  },
  {
    id: 'solutions',
    name: 'Embedded Solutions',
    icon: Zap,
    items: [
      { name: 'Vehicle & Mobility Solutions', href: '/vehicle-mobility' },
      { name: 'Video & Surveillance Solutions', href: '/solutions/video-surveillance' },
      { name: 'Industrial & Machine Vision Solutions', href: '/solutions/industrial-machine-vision' },
      { name: 'Defence & Advanced Vision Solutions', href: '/solutions/defence-advanced-vision' },
    ],
  },
  {
    id: 'software',
    name: 'Software',
    icon: Layers,
    items: [
      { name: 'Linux BSP & Yocto', href: '#developers' },
      { name: 'Real-Time OS (RTOS)', href: '#developers' },
      { name: 'AI Model Zoo & Neural SDK', href: '#developers' },
      { name: 'Fleet Ops & OTA Updates', href: '#developers' },
      { name: 'Developer Tools & IDE Extensions', href: '#developers' },
    ],
  },
];

const mobileAboutItems = [
  { name: 'Company Overview', href: '/about-us#company-overview', icon: Building2 },
  { name: 'Why AIEGX', href: '/about-us#why-aiegx', icon: Sparkles },
  { name: 'Our Expertise', href: '/about-us#our-expertise', icon: Cpu },
  { name: 'Our Approach', href: '/about-us#our-approach', icon: Target },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState('som');

  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileSolutionsCategoryOpen, setMobileSolutionsCategoryOpen] = useState('vehicle-mobility');

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const [activeNav, setActiveNav] = useState('home');
  const headerRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    updateNavbarHeight();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && headerRef.current) {
      resizeObserver = new ResizeObserver(updateNavbarHeight);
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('resize', updateNavbarHeight);
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/about-us') || path === '/about') {
        setActiveNav('company');
        return;
      }
      if (path.startsWith('/solutions') || path === '/vehicle-mobility') {
        setActiveNav('solutions');
        return;
      }
      if (path !== '/') {
        setActiveNav('products');
        return;
      }

      const sections = [
        { id: 'contact', name: 'contact' },
        { id: 'engineering-capabilities', name: 'company' },
        { id: 'integrated-solutions', name: 'solutions' },
        { id: 'hardware-platforms', name: 'products' },
      ];

      if (window.scrollY < 260) {
        setActiveNav('home');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 80) {
            setActiveNav(section.name);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        closeAllMenus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const hoverTimeoutRef = useRef(null);
  const solutionsHoverTimeoutRef = useRef(null);
  const aboutHoverTimeoutRef = useRef(null);

  const CLOSE_DELAY_MS = 220;

  const clearAllTimeouts = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (solutionsHoverTimeoutRef.current) clearTimeout(solutionsHoverTimeoutRef.current);
    if (aboutHoverTimeoutRef.current) clearTimeout(aboutHoverTimeoutRef.current);
  };

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  const closeOtherMenus = (current) => {
    if (current !== 'products') setMegaMenuOpen(false);
    if (current !== 'solutions') setSolutionsMenuOpen(false);
    if (current !== 'about') setAboutMenuOpen(false);
  };

  const closeAllMenus = () => {
    clearAllTimeouts();
    setMegaMenuOpen(false);
    setSolutionsMenuOpen(false);
    setAboutMenuOpen(false);
  };

  // Mobile Navigation Action Handler
  const handleMobileNavigate = (href) => {
    setMobileMenuOpen(false);
    closeAllMenus();

    if (!href) return;

    if (href.startsWith('/') || href.startsWith('#')) {
      navigateTo(href);
    }
  };

  // Hover handlers for Products
  const handleProductsMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('products');
    setMegaMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    clearAllTimeouts();
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, CLOSE_DELAY_MS);
  };

  const handleMegaMenuMouseEnter = () => {
    clearAllTimeouts();
  };

  const handleMegaMenuMouseLeave = () => {
    clearAllTimeouts();
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, CLOSE_DELAY_MS);
  };

  // Hover handlers for Solutions
  const handleSolutionsMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('solutions');
    setSolutionsMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    clearAllTimeouts();
    solutionsHoverTimeoutRef.current = setTimeout(() => {
      setSolutionsMenuOpen(false);
    }, CLOSE_DELAY_MS);
  };

  const handleSolutionsMegaMenuMouseEnter = () => {
    clearAllTimeouts();
  };

  const handleSolutionsMegaMenuMouseLeave = () => {
    clearAllTimeouts();
    solutionsHoverTimeoutRef.current = setTimeout(() => {
      setSolutionsMenuOpen(false);
    }, CLOSE_DELAY_MS);
  };

  // Hover handlers for Company (mapped to About Us Mega Menu)
  const handleAboutMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('about');
    setAboutMenuOpen(true);
  };

  const handleAboutMouseLeave = () => {
    clearAllTimeouts();
    aboutHoverTimeoutRef.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, CLOSE_DELAY_MS);
  };

  const handleAboutMegaMenuMouseEnter = () => {
    clearAllTimeouts();
  };

  const handleAboutMegaMenuMouseLeave = () => {
    clearAllTimeouts();
    aboutHoverTimeoutRef.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, CLOSE_DELAY_MS);
  };

  return (
    <>
      {/* Navbar Container */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2.5 pt-2 sm:px-4 sm:pt-2.5 md:p-0 pointer-events-none md:pointer-events-auto"
      >
        <div className="w-full transition-all duration-300 flex items-center justify-between gap-2 sm:gap-4 pointer-events-auto bg-white/95 dark:bg-[#0D1733]/95 backdrop-blur-md border border-slate-200/90 dark:border-[#24355A]/90 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] px-3 py-2 sm:px-4 sm:py-2.5 md:max-w-none md:rounded-none md:border-x-0 md:border-t-0 md:border-b md:border-slate-200/80 dark:md:border-[#24355A]/80 md:shadow-xs md:px-6 lg:px-8 xl:px-12 md:py-2.5 lg:py-3">

          {/* Extreme Left: Logo Icon, Brand Name & Tagline */}
          <div className="flex-shrink-0 flex items-center">
            <Logo showTagline={true} tagline="EMBEDDED & EDGE AI" />
          </div>

          {/* Right: Clean Horizontal Navigation Row (Desktop) */}
          <nav
            className="hidden md:flex flex-1 items-center justify-end gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 bg-transparent shadow-none border-none"
            aria-label="Main Navigation"
          >
            {/* 1. Home */}
            <button
              type="button"
              onMouseEnter={closeAllMenus}
              onClick={() => {
                closeAllMenus();
                window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`nav-link inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 text-sm lg:text-base tracking-normal transition-all duration-200 cursor-pointer ${activeNav === 'home'
                ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                }`}
              title="Return to AIEGX Homepage"
            >
              <span>Home</span>
            </button>

            {/* 2. Products Dropdown Trigger */}
            <div
              className="relative bg-transparent"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                type="button"
                id="navbar-products-toggle"
                onClick={() => {
                  closeOtherMenus('products');
                  setMegaMenuOpen(!megaMenuOpen);
                }}
                className={`nav-link inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 text-sm lg:text-base tracking-normal transition-all duration-200 cursor-pointer ${megaMenuOpen || activeNav === 'products'
                  ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                  : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                  }`}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                title="Browse System on Modules & Single Board Computers"
              >
                <span>Products</span>
              </button>
            </div>

            {/* 3. Solutions Dropdown Trigger */}
            <div
              className="relative bg-transparent"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button
                type="button"
                id="navbar-solutions-toggle"
                onClick={() => {
                  closeOtherMenus('solutions');
                  setSolutionsMenuOpen(!solutionsMenuOpen);
                }}
                className={`nav-link inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 text-sm lg:text-base tracking-normal transition-all duration-200 cursor-pointer ${solutionsMenuOpen || activeNav === 'solutions'
                  ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                  : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                  }`}
                aria-expanded={solutionsMenuOpen}
                aria-haspopup="true"
                title="Browse Integrated Embedded Solutions"
              >
                <span>Solutions</span>
              </button>
            </div>

            {/* 4. About Us Dropdown Trigger */}
            <div
              className="relative bg-transparent"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button
                type="button"
                id="navbar-about-toggle"
                onClick={() => {
                  closeOtherMenus('about');
                  setAboutMenuOpen(!aboutMenuOpen);
                }}
                className={`nav-link inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 text-sm lg:text-base tracking-normal transition-all duration-200 cursor-pointer ${aboutMenuOpen || activeNav === 'company' || activeNav === 'about'
                  ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                  : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                  }`}
                aria-expanded={aboutMenuOpen}
                aria-haspopup="true"
                title="Learn About AIEGX Company & Engineering"
              >
                <span>About Us</span>
              </button>
            </div>

            {/* 5. Contact Link */}
            <a
              href="#contact"
              onMouseEnter={closeAllMenus}
              onClick={closeAllMenus}
              className={`nav-link inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 md:px-3 md:py-2 text-sm lg:text-base tracking-normal transition-all duration-200 cursor-pointer ${activeNav === 'contact'
                ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                }`}
              title="Contact AIEGX Engineering Team"
            >
              <span>Contact</span>
            </a>
          </nav>

          {/* Mobile Right Controls: Compact Pill Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 md:hidden ml-auto shrink-0 flex-nowrap">
            {/* Center-Right: Compact Pill Theme Toggle */}
            <ThemeToggle variant="navbar" />

            {/* Extreme-Right: Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 text-slate-800 dark:text-white hover:text-[#089EC2] dark:hover:text-[#2DD4F0] rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-[#17264A] dark:hover:bg-[#1E3360] border border-slate-200 dark:border-[#24355A] focus:outline-none focus:ring-2 focus:ring-[#089EC2] dark:focus:ring-[#2DD4F0] cursor-pointer transition-colors flex items-center justify-center shrink-0 touch-manipulation"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-800 dark:text-white" strokeWidth={2.2} />
              ) : (
                <Menu className="w-5 h-5 text-slate-800 dark:text-white" strokeWidth={2.2} />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Mobile Backdrop Overlay to close drawer when tapping outside */}
            <div
              className="fixed inset-0 z-[-1] bg-black/40 backdrop-blur-xs pointer-events-auto md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <div className="md:hidden mt-2 w-full max-h-[calc(100vh-90px)] overflow-y-auto p-3 sm:p-4 rounded-2xl bg-white/98 dark:bg-[#0D1733]/98 backdrop-blur-2xl border border-slate-200 dark:border-[#24355A] shadow-2xl text-slate-800 dark:text-white animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto relative z-10 touch-manipulation">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2">
                {/* 1. Home */}
                <button
                  type="button"
                  onClick={() => handleMobileNavigate('/')}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left cursor-pointer ${activeNav === 'home'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                    }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                </button>

                {/* 2. Products & Hardware Platforms Accordion */}
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left cursor-pointer ${mobileProductsOpen || activeNav === 'products'
                      ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50/80 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                      : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                      }`}
                    aria-expanded={mobileProductsOpen}
                  >
                    <span>Products & Hardware Platforms</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400 dark:text-slate-500'
                        }`}
                    />
                  </button>

                  {/* Expandable Product Categories */}
                  {mobileProductsOpen && (
                    <div className="mt-2 ml-1 mr-1 flex flex-col space-y-1.5 pl-2 border-l-2 border-[#089EC2]/30 dark:border-[#2DD4F0]/30 animate-in fade-in duration-150">
                      {mobileProductCategories.map((cat) => {
                        const isCatOpen = mobileCategoryOpen === cat.id;
                        const CatIcon = cat.icon;
                        return (
                          <div key={cat.id} className="flex flex-col">
                            {/* Category Header Button */}
                            <button
                              type="button"
                              onClick={() => setMobileCategoryOpen(isCatOpen ? null : cat.id)}
                              className={`w-full px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-between text-left cursor-pointer ${isCatOpen
                                ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 border border-[#089EC2]/30 dark:border-[#2DD4F0]/30'
                                : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:bg-slate-100/70 dark:hover:bg-[#17264A]/50 border border-transparent'
                                }`}
                            >
                              <div className="flex items-center gap-2">
                                <CatIcon className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                                <span>{cat.name}</span>
                              </div>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400'
                                  }`}
                              />
                            </button>

                            {/* Submenu Links under Category */}
                            {isCatOpen && (
                              <div className="ml-5 pl-2 py-1 my-1 flex flex-col space-y-1 border-l border-slate-200 dark:border-[#24355A] animate-in fade-in duration-150">
                                {cat.items.map((item, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleMobileNavigate(item.href)}
                                    className="px-2.5 py-1.5 rounded-md text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:bg-slate-100/60 dark:hover:bg-[#1E3360]/40 transition-colors flex items-center justify-between text-left group cursor-pointer"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span>{item.name}</span>
                                      {item.badge && (
                                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider ${item.badge === 'In Development'
                                          ? 'bg-blue-50 text-[#089EC2] dark:bg-[#17264D] dark:text-[#2DD4F0]'
                                          : 'bg-slate-100 text-slate-600 dark:bg-[#17264D] dark:text-slate-300'
                                          }`}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 text-[#089EC2] dark:text-[#2DD4F0] transition-all" />
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Solutions Accordion */}
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left cursor-pointer ${mobileSolutionsOpen || activeNav === 'solutions'
                      ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50/80 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                      : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                      }`}
                    aria-expanded={mobileSolutionsOpen}
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400 dark:text-slate-500'
                        }`}
                    />
                  </button>

                  {/* Expandable Solutions Categories */}
                  {mobileSolutionsOpen && (
                    <div className="mt-2 ml-1 mr-1 flex flex-col space-y-1.5 pl-2 border-l-2 border-[#089EC2]/30 dark:border-[#2DD4F0]/30 animate-in fade-in duration-150">
                      {SOLUTIONS_CATEGORIES.map((cat) => {
                        const isCatOpen = mobileSolutionsCategoryOpen === cat.id;
                        const CatIcon = cat.icon;
                        return (
                          <div key={cat.id} className="flex flex-col">
                            {/* Category Header Button */}
                            <button
                              type="button"
                              onClick={() => setMobileSolutionsCategoryOpen(isCatOpen ? null : cat.id)}
                              className={`w-full px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-between text-left cursor-pointer ${isCatOpen
                                ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 border border-[#089EC2]/30 dark:border-[#2DD4F0]/30'
                                : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:bg-slate-100/70 dark:hover:bg-[#17264A]/50 border border-transparent'
                                }`}
                            >
                              <div className="flex items-center gap-2">
                                <CatIcon className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                                <span>{cat.name}</span>
                              </div>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400'
                                  }`}
                              />
                            </button>

                            {/* Submenu Links under Category */}
                            {isCatOpen && (
                              <div className="ml-5 pl-2 py-1 my-1 flex flex-col space-y-1 border-l border-slate-200 dark:border-[#24355A] animate-in fade-in duration-150">
                                {cat.items.map((item, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleMobileNavigate(item.href)}
                                    className="px-2.5 py-1.5 rounded-md text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:bg-slate-100/60 dark:hover:bg-[#1E3360]/40 transition-colors flex items-center justify-between text-left group cursor-pointer"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span>{item.name}</span>
                                      {item.badge && (
                                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider ${item.badge === 'In Development'
                                          ? 'bg-blue-50 text-[#089EC2] dark:bg-[#17264D] dark:text-[#2DD4F0]'
                                          : 'bg-slate-100 text-slate-600 dark:bg-[#17264D] dark:text-slate-300'
                                          }`}>
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 text-[#089EC2] dark:text-[#2DD4F0] transition-all" />
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 4. About Us Accordion */}
                <div className="flex flex-col">
                  <div className={`w-full rounded-xl transition-all flex items-center justify-between ${mobileAboutOpen || activeNav === 'company' || activeNav === 'about'
                    ? 'bg-blue-50/80 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'bg-slate-50 dark:bg-[#17264A]/60 border border-slate-200 dark:border-[#24355A]'
                    }`}>
                    <button
                      type="button"
                      onClick={() => handleMobileNavigate('/about-us')}
                      className="flex-1 px-4 py-3 text-sm font-semibold transition-colors flex items-center justify-between text-left cursor-pointer group"
                      title="Navigate to About Us Overview"
                    >
                      <span className={mobileAboutOpen || activeNav === 'company' || activeNav === 'about'
                        ? 'text-[#089EC2] dark:text-[#2DD4F0]'
                        : 'text-slate-700 dark:text-[#AAB6D0] group-hover:text-[#089EC2] dark:group-hover:text-[#2DD4F0]'
                        }>
                        About Us
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mr-1" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="p-3 text-slate-400 dark:text-slate-500 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] cursor-pointer transition-colors border-l border-slate-200/60 dark:border-white/10"
                      aria-label="Toggle About Us submenu items"
                      aria-expanded={mobileAboutOpen}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : ''
                          }`}
                      />
                    </button>
                  </div>

                  {/* Expandable About Us Links */}
                  {mobileAboutOpen && (
                    <div className="mt-2 ml-1 mr-1 flex flex-col space-y-1.5 pl-2 border-l-2 border-[#089EC2]/30 dark:border-[#2DD4F0]/30 animate-in fade-in duration-150">
                      {/* Top-level clickable ABOUT US link in mobile dropdown */}
                      <button
                        type="button"
                        onClick={() => handleMobileNavigate('/about-us')}
                        className="w-full px-3 py-2 rounded-lg text-xs font-mono font-bold tracking-widest uppercase text-[#089EC2] dark:text-[#2DD4F0] hover:bg-blue-50/60 dark:hover:bg-[#17264A]/60 flex items-center justify-between text-left group cursor-pointer"
                        title="Navigate to About Us Overview"
                      >
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                          <span>ABOUT US</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>

                      {/* 4 Submenu Links */}
                      <div className="flex flex-col space-y-1 my-1">
                        {mobileAboutItems.map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleMobileNavigate(item.href)}
                              className="px-2.5 py-1.5 rounded-md text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:bg-slate-100/60 dark:hover:bg-[#1E3360]/40 transition-colors flex items-center justify-between text-left group cursor-pointer"
                            >
                              <div className="flex items-center gap-2">
                                <ItemIcon className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                                <span>{item.name}</span>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 text-[#089EC2] dark:text-[#2DD4F0] transition-all" />
                            </button>
                          );
                        })}
                      </div>

                      {/* Explore AIEGX Bottom link on mobile */}
                      <button
                        type="button"
                        onClick={() => handleMobileNavigate('/about-us')}
                        className="mt-1 px-3 py-2 rounded-lg text-xs font-semibold text-[#089EC2] dark:text-[#2DD4F0] hover:bg-blue-50/50 dark:hover:bg-[#17264A]/50 flex items-center justify-between text-left cursor-pointer"
                      >
                        <span>Explore AIEGX</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* 5. Contact */}
                <button
                  type="button"
                  onClick={() => handleMobileNavigate('#contact')}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left cursor-pointer ${activeNav === 'contact'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                    }`}
                >
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
                </button>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Products Mega Menu Component (Desktop) */}
      <ProductsMegaMenu
        isOpen={megaMenuOpen}
        onClose={() => setMegaMenuOpen(false)}
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
      />

      {/* Solutions Mega Menu Component (Desktop) */}
      <SolutionsMegaMenu
        isOpen={solutionsMenuOpen}
        onClose={() => setSolutionsMenuOpen(false)}
        onMouseEnter={handleSolutionsMegaMenuMouseEnter}
        onMouseLeave={handleSolutionsMegaMenuMouseLeave}
      />

      {/* About Us (Company) Mega Menu Component (Desktop) */}
      <AboutUsMegaMenu
        isOpen={aboutMenuOpen}
        onClose={() => setAboutMenuOpen(false)}
        onMouseEnter={handleAboutMegaMenuMouseEnter}
        onMouseLeave={handleAboutMegaMenuMouseLeave}
      />
    </>
  );
}
