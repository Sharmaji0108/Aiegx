import React, { useState, useEffect, useRef } from 'react';
import Logo from '../common/Logo';
import ProductsMegaMenu from './ProductsMegaMenu';
import ApplicationsMegaMenu from './ApplicationsMegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import AboutUsMegaMenu from './AboutUsMegaMenu';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [applicationsMenuOpen, setApplicationsMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.location.pathname !== '/') {
        setActiveNav('products');
        return;
      }

      const sections = [
        { id: 'contact', name: 'contact' },
        { id: 'engineering-capabilities', name: 'company' },
        { id: 'industries', name: 'industries' },
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

  const hoverTimeoutRef = useRef(null);
  const appsHoverTimeoutRef = useRef(null);
  const solutionsHoverTimeoutRef = useRef(null);
  const aboutHoverTimeoutRef = useRef(null);

  const clearAllTimeouts = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (appsHoverTimeoutRef.current) clearTimeout(appsHoverTimeoutRef.current);
    if (solutionsHoverTimeoutRef.current) clearTimeout(solutionsHoverTimeoutRef.current);
    if (aboutHoverTimeoutRef.current) clearTimeout(aboutHoverTimeoutRef.current);
  };

  const closeOtherMenus = (current) => {
    if (current !== 'products') setMegaMenuOpen(false);
    if (current !== 'apps') setApplicationsMenuOpen(false);
    if (current !== 'solutions') setSolutionsMenuOpen(false);
    if (current !== 'about') setAboutMenuOpen(false);
  };

  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setApplicationsMenuOpen(false);
    setSolutionsMenuOpen(false);
    setAboutMenuOpen(false);
  };

  // Hover handlers for Products
  const handleProductsMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('products');
    setMegaMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 280);
  };

  const handleMegaMenuMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleMegaMenuMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 280);
  };

  // Hover handlers for Industries (mapped to Applications Mega Menu)
  const handleAppsMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('apps');
    setApplicationsMenuOpen(true);
  };

  const handleAppsMouseLeave = () => {
    appsHoverTimeoutRef.current = setTimeout(() => {
      setApplicationsMenuOpen(false);
    }, 280);
  };

  const handleAppsMegaMenuMouseEnter = () => {
    if (appsHoverTimeoutRef.current) clearTimeout(appsHoverTimeoutRef.current);
  };

  const handleAppsMegaMenuMouseLeave = () => {
    appsHoverTimeoutRef.current = setTimeout(() => {
      setApplicationsMenuOpen(false);
    }, 280);
  };

  // Hover handlers for Solutions
  const handleSolutionsMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('solutions');
    setSolutionsMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsHoverTimeoutRef.current = setTimeout(() => {
      setSolutionsMenuOpen(false);
    }, 280);
  };

  const handleSolutionsMegaMenuMouseEnter = () => {
    if (solutionsHoverTimeoutRef.current) clearTimeout(solutionsHoverTimeoutRef.current);
  };

  const handleSolutionsMegaMenuMouseLeave = () => {
    solutionsHoverTimeoutRef.current = setTimeout(() => {
      setSolutionsMenuOpen(false);
    }, 280);
  };

  // Hover handlers for Company (mapped to About Us Mega Menu)
  const handleAboutMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('about');
    setAboutMenuOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutHoverTimeoutRef.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, 280);
  };

  const handleAboutMegaMenuMouseEnter = () => {
    if (aboutHoverTimeoutRef.current) clearTimeout(aboutHoverTimeoutRef.current);
  };

  const handleAboutMegaMenuMouseLeave = () => {
    aboutHoverTimeoutRef.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, 280);
  };

  return (
    <>
      {/* Navbar Container: Edge-to-edge layout with small 16-24px padding (no max-w-7xl auto-centering constraint) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-5 lg:px-6 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/92 dark:bg-[#0D1733]/92 border-b border-slate-200/80 dark:border-[#24355A]/80 shadow-lg shadow-slate-200/40 dark:shadow-black/20 py-2 sm:py-2.5' 
          : 'bg-white/70 dark:bg-[#0D1733]/40 backdrop-blur-[4px] border-b border-slate-200/50 dark:border-[#24355A]/30 py-2.5 sm:py-3.5'
      }`}>
        <div className="w-full flex items-center justify-between">
          
          {/* Extreme Left: Larger 64-72px Logo Icon, Brand Name & Tagline */}
          <div className="flex-shrink-0 flex items-center">
            <Logo showTagline={true} tagline="EMBEDDED & EDGE AI" />
          </div>

          {/* Right: Clean Horizontal Navigation Row (6 items matching sketch) */}
          <nav 
            className="hidden lg:flex items-center gap-7 lg:gap-8 xl:gap-10 bg-transparent shadow-none border-none"
            aria-label="Main Navigation"
          >
            {/* 1. Home */}
            <button
              onClick={() => {
                closeAllMenus();
                window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`nav-link text-[14.5px] tracking-wide transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none border-none focus:outline-none cursor-pointer ${
                activeNav === 'home'
                  ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold' 
                  : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
              }`}
              title="AIEGX Homepage"
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
                id="navbar-products-toggle"
                onClick={() => {
                  closeOtherMenus('products');
                  setMegaMenuOpen(!megaMenuOpen);
                }}
                className={`nav-link text-[14.5px] tracking-wide transition-colors duration-200 flex items-center gap-1.5 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none border-none focus:outline-none cursor-pointer ${
                  megaMenuOpen || activeNav === 'products'
                    ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold' 
                    : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                }`}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                title="Browse Product Architecture & Hardware Platforms"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  megaMenuOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400 dark:text-white/40'
                }`} />
              </button>
            </div>

            {/* 3. Solutions Dropdown Trigger */}
            <div 
              className="relative bg-transparent"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button
                id="navbar-solutions-toggle"
                onClick={() => {
                  closeOtherMenus('solutions');
                  setSolutionsMenuOpen(!solutionsMenuOpen);
                }}
                className={`nav-link text-[14.5px] tracking-wide transition-colors duration-200 flex items-center gap-1.5 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none border-none focus:outline-none cursor-pointer ${
                  solutionsMenuOpen || activeNav === 'solutions'
                    ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold' 
                    : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                }`}
                aria-expanded={solutionsMenuOpen}
                aria-haspopup="true"
                title="Browse Integrated Embedded Solutions"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsMenuOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400 dark:text-white/40'
                }`} />
              </button>
            </div>

            {/* 4. Industries Dropdown Trigger */}
            <div 
              className="relative bg-transparent"
              onMouseEnter={handleAppsMouseEnter}
              onMouseLeave={handleAppsMouseLeave}
            >
              <button
                id="navbar-applications-toggle"
                onClick={() => {
                  closeOtherMenus('apps');
                  setApplicationsMenuOpen(!applicationsMenuOpen);
                }}
                className={`nav-link text-[14.5px] tracking-wide transition-colors duration-200 flex items-center gap-1.5 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none border-none focus:outline-none cursor-pointer ${
                  applicationsMenuOpen || activeNav === 'industries'
                    ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold' 
                    : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                }`}
                aria-expanded={applicationsMenuOpen}
                aria-haspopup="true"
                title="Browse Industries We Serve"
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  applicationsMenuOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400 dark:text-white/40'
                }`} />
              </button>
            </div>

            {/* 5. Company Dropdown Trigger */}
            <div 
              className="relative bg-transparent"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button
                id="navbar-about-toggle"
                onClick={() => {
                  closeOtherMenus('about');
                  setAboutMenuOpen(!aboutMenuOpen);
                }}
                className={`nav-link text-[14.5px] tracking-wide transition-colors duration-200 flex items-center gap-1.5 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none border-none focus:outline-none cursor-pointer ${
                  aboutMenuOpen || activeNav === 'company'
                    ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold' 
                    : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
                }`}
                aria-expanded={aboutMenuOpen}
                aria-haspopup="true"
                title="Learn About AIEGX Company & Engineering"
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutMenuOpen ? 'rotate-180 text-[#089EC2] dark:text-[#2DD4F0]' : 'text-slate-400 dark:text-white/40'
                }`} />
              </button>
            </div>

            {/* 6. Contact Link */}
            <a
              href="#contact"
              onClick={closeAllMenus}
              className={`nav-link text-[14.5px] tracking-wide transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent shadow-none border-none focus:outline-none cursor-pointer ${
                activeNav === 'contact'
                  ? 'active text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                  : 'text-slate-600 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] font-medium'
              }`}
              title="Contact AIEGX Engineering Team"
            >
              <span>Contact</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 dark:text-[#AAB6D0] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] rounded-xl bg-slate-100 dark:bg-[#17264A]/60 border border-slate-200 dark:border-[#24355A] focus:outline-none focus:ring-2 focus:ring-[#2DD4F0] cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900 dark:text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 w-full px-4 py-4 rounded-2xl bg-white/98 dark:bg-[#0D1733]/98 backdrop-blur-2xl border border-slate-200 dark:border-[#24355A] shadow-2xl text-slate-800 dark:text-white animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Drawer Header with Logo & Tagline */}
            <div className="pb-3 mb-3 border-b border-slate-200 dark:border-[#24355A] flex items-center justify-between">
              <Logo 
                showTagline={true} 
                tagline="EMBEDDED & EDGE AI" 
                imgClassName="w-10 h-10 sm:w-11 sm:h-11"
                onClick={() => setMobileMenuOpen(false)} 
              />
              <span className="text-[10px] font-mono text-[#089EC2] dark:text-[#2DD4F0] uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#17264A] border border-slate-200 dark:border-[#24355A] font-semibold">
                Menu
              </span>
            </div>

            {/* 6 Mobile Navigation Links in exact order */}
            <div className="flex flex-col space-y-2">
              {/* 1. Home */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                  window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left ${
                  activeNav === 'home'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </button>

              {/* 2. Products */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('products');
                  setMegaMenuOpen(true);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left ${
                  activeNav === 'products'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                }`}
              >
                <span>Products & Hardware Platforms</span>
                <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </button>

              {/* 3. Solutions */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('solutions');
                  setSolutionsMenuOpen(true);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left ${
                  activeNav === 'solutions'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                }`}
              >
                <span>Solutions</span>
                <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </button>

              {/* 4. Industries */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('apps');
                  setApplicationsMenuOpen(true);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left ${
                  activeNav === 'industries'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                }`}
              >
                <span>Industries We Serve</span>
                <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </button>

              {/* 5. Company */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('about');
                  setAboutMenuOpen(true);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between text-left ${
                  activeNav === 'company'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                }`}
              >
                <span>Company & Capabilities</span>
                <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </button>

              {/* 6. Contact */}
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeNav === 'contact'
                    ? 'text-[#089EC2] dark:text-[#2DD4F0] bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/40 dark:border-[#2DD4F0]/40'
                    : 'text-slate-700 dark:text-[#AAB6D0] bg-slate-50 dark:bg-[#17264A]/60 hover:bg-slate-100 dark:hover:bg-[#17264A] border border-slate-200 dark:border-[#24355A]'
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-[#089EC2] dark:text-[#2DD4F0]" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Products Mega Menu Component */}
      <ProductsMegaMenu 
        isOpen={megaMenuOpen} 
        onClose={() => setMegaMenuOpen(false)} 
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
      />

      {/* Applications (Industries) Mega Menu Component */}
      <ApplicationsMegaMenu 
        isOpen={applicationsMenuOpen} 
        onClose={() => setApplicationsMenuOpen(false)} 
        onMouseEnter={handleAppsMegaMenuMouseEnter}
        onMouseLeave={handleAppsMegaMenuMouseLeave}
      />

      {/* Solutions Mega Menu Component */}
      <SolutionsMegaMenu 
        isOpen={solutionsMenuOpen} 
        onClose={() => setSolutionsMenuOpen(false)} 
        onMouseEnter={handleSolutionsMegaMenuMouseEnter}
        onMouseLeave={handleSolutionsMegaMenuMouseLeave}
      />

      {/* About Us (Company) Mega Menu Component */}
      <AboutUsMegaMenu 
        isOpen={aboutMenuOpen} 
        onClose={() => setAboutMenuOpen(false)} 
        onMouseEnter={handleAboutMegaMenuMouseEnter}
        onMouseLeave={handleAboutMegaMenuMouseLeave}
      />
    </>
  );
}
