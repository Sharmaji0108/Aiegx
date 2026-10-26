import React, { useState, useEffect } from 'react';
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

  // Single React state variable to track the clicked menu (click-only active state)
  const [activeMenu, setActiveMenu] = useState('home');

  // Header background blur/shadow on scroll only - does NOT modify activeMenu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setApplicationsMenuOpen(false);
    setSolutionsMenuOpen(false);
    setAboutMenuOpen(false);
  };

  const toggleMenu = (menuKey) => {
    setActiveMenu(menuKey);
    if (menuKey === 'products') {
      const willOpen = !megaMenuOpen;
      closeAllMenus();
      if (willOpen) {
        setMegaMenuOpen(true);
      }
    } else if (menuKey === 'solutions') {
      const willOpen = !solutionsMenuOpen;
      closeAllMenus();
      if (willOpen) {
        setSolutionsMenuOpen(true);
      }
    } else if (menuKey === 'industries') {
      const willOpen = !applicationsMenuOpen;
      closeAllMenus();
      if (willOpen) {
        setApplicationsMenuOpen(true);
      }
    } else if (menuKey === 'company') {
      const willOpen = !aboutMenuOpen;
      closeAllMenus();
      if (willOpen) {
        setAboutMenuOpen(true);
      }
    }
  };

  return (
    <>
      {/* Navbar Container: Enclosed rectangle with continuous 1px blue border on all 4 sides */}
      <header className={`site-header fixed z-50 transition-all duration-300 px-4 sm:px-5 lg:px-6 ${
        isScrolled 
          ? 'shadow-md shadow-slate-200/40 dark:shadow-black/20 py-2 sm:py-2.5' 
          : 'py-2.5 sm:py-3.5'
      }`}>
        <div className="w-full flex items-center justify-start gap-6 xl:gap-10">
          
          {/* Extreme Left: Larger 64-72px Logo Icon, Brand Name & Tagline */}
          <div className="flex-shrink-0 flex items-center">
            <Logo showTagline={true} tagline="EMBEDDED & EDGE AI" />
          </div>

          {/* Right: Clean Horizontal Navigation Row (6 items matching sketch) */}
          <nav 
            className="hidden lg:flex flex-1 items-center justify-end gap-1.5 xl:gap-3 lg:pr-6 xl:pr-10 bg-transparent shadow-none border-none"
            aria-label="Main Navigation"
          >
            {/* 1. Home */}
            <button
              onClick={() => {
                closeAllMenus();
                setActiveMenu('home');
                if (window.location.pathname !== '/') {
                  window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
                } else {
                  if (window.location.hash) {
                    window.history.pushState({}, '', '/');
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`nav-button nav-link inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-base tracking-normal cursor-pointer transition-all duration-200 ${
                activeMenu === 'home' ? 'nav-button--active font-semibold' : 'font-medium'
              }`}
              title="AIEGX Homepage"
            >
              <span>Home</span>
            </button>

            {/* 2. Products Dropdown Trigger */}
            <div className="relative bg-transparent">
              <button
                id="navbar-products-toggle"
                onClick={() => toggleMenu('products')}
                className={`nav-button nav-link inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-base tracking-normal cursor-pointer transition-all duration-200 ${
                  activeMenu === 'products' ? 'nav-button--active font-semibold' : 'font-medium'
                }`}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                aria-controls="products-mega-menu"
                title="Browse Product Architecture & Hardware Platforms"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  megaMenuOpen ? 'rotate-180' : ''
                }`} aria-hidden="true" />
              </button>
            </div>

            {/* 3. Solutions Dropdown Trigger */}
            <div className="relative bg-transparent">
              <button
                id="navbar-solutions-toggle"
                onClick={() => toggleMenu('solutions')}
                className={`nav-button nav-link inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-base tracking-normal cursor-pointer transition-all duration-200 ${
                  activeMenu === 'solutions' ? 'nav-button--active font-semibold' : 'font-medium'
                }`}
                aria-expanded={solutionsMenuOpen}
                aria-haspopup="true"
                aria-controls="solutions-mega-menu"
                title="Browse Integrated Embedded Solutions"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsMenuOpen ? 'rotate-180' : ''
                }`} aria-hidden="true" />
              </button>
            </div>

            {/* 4. Industries Dropdown Trigger */}
            <div className="relative bg-transparent">
              <button
                id="navbar-applications-toggle"
                onClick={() => toggleMenu('industries')}
                className={`nav-button nav-link inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-base tracking-normal cursor-pointer transition-all duration-200 ${
                  activeMenu === 'industries' ? 'nav-button--active font-semibold' : 'font-medium'
                }`}
                aria-expanded={applicationsMenuOpen}
                aria-haspopup="true"
                aria-controls="applications-mega-menu"
                title="Browse Industries We Serve"
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  applicationsMenuOpen ? 'rotate-180' : ''
                }`} aria-hidden="true" />
              </button>
            </div>

            {/* 5. Company Dropdown Trigger */}
            <div className="relative bg-transparent">
              <button
                id="navbar-about-toggle"
                onClick={() => toggleMenu('company')}
                className={`nav-button nav-link inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-base tracking-normal cursor-pointer transition-all duration-200 ${
                  activeMenu === 'company' ? 'nav-button--active font-semibold' : 'font-medium'
                }`}
                aria-expanded={aboutMenuOpen}
                aria-haspopup="true"
                aria-controls="about-mega-menu"
                title="Learn About AIEGX Company & Engineering"
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutMenuOpen ? 'rotate-180' : ''
                }`} aria-hidden="true" />
              </button>
            </div>

            {/* 6. Contact Link */}
            <a
              href="#contact"
              onClick={(e) => {
                closeAllMenus();
                setActiveMenu('contact');
                if (window.location.pathname !== '/') {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/#contact' }));
                  setTimeout(() => {
                    const contactEl = document.getElementById('contact');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                }
              }}
              className={`nav-button nav-link inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-base tracking-normal cursor-pointer transition-all duration-200 ${
                activeMenu === 'contact' ? 'nav-button--active font-semibold' : 'font-medium'
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
                  setActiveMenu('home');
                  if (window.location.pathname !== '/') {
                    window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
                  } else {
                    if (window.location.hash) {
                      window.history.pushState({}, '', '/');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left ${
                  activeMenu === 'home'
                    ? 'text-white bg-[#089EC2] border border-[#2DD4F0] shadow-[0_2px_10px_rgba(8,158,194,0.35)]'
                    : 'text-[#0D1733] bg-white border border-slate-200 shadow-xs hover:border-[#089EC2]/40'
                }`}
              >
                <span>Home</span>
                <ChevronRight className={`w-4 h-4 ${activeMenu === 'home' ? 'text-white' : 'text-slate-400'}`} />
              </button>

              {/* 2. Products */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                  setMegaMenuOpen(true);
                  setActiveMenu('products');
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left ${
                  activeMenu === 'products'
                    ? 'text-white bg-[#089EC2] border border-[#2DD4F0] shadow-[0_2px_10px_rgba(8,158,194,0.35)]'
                    : 'text-[#0D1733] bg-white border border-slate-200 shadow-xs hover:border-[#089EC2]/40'
                }`}
              >
                <span>Products & Hardware Platforms</span>
                <ChevronRight className={`w-4 h-4 ${activeMenu === 'products' ? 'text-white' : 'text-slate-400'}`} />
              </button>

              {/* 3. Solutions */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                  setSolutionsMenuOpen(true);
                  setActiveMenu('solutions');
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left ${
                  activeMenu === 'solutions'
                    ? 'text-white bg-[#089EC2] border border-[#2DD4F0] shadow-[0_2px_10px_rgba(8,158,194,0.35)]'
                    : 'text-[#0D1733] bg-white border border-slate-200 shadow-xs hover:border-[#089EC2]/40'
                }`}
              >
                <span>Solutions</span>
                <ChevronRight className={`w-4 h-4 ${activeMenu === 'solutions' ? 'text-white' : 'text-slate-400'}`} />
              </button>

              {/* 4. Industries */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                  setApplicationsMenuOpen(true);
                  setActiveMenu('industries');
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left ${
                  activeMenu === 'industries'
                    ? 'text-white bg-[#089EC2] border border-[#2DD4F0] shadow-[0_2px_10px_rgba(8,158,194,0.35)]'
                    : 'text-[#0D1733] bg-white border border-slate-200 shadow-xs hover:border-[#089EC2]/40'
                }`}
              >
                <span>Industries We Serve</span>
                <ChevronRight className={`w-4 h-4 ${activeMenu === 'industries' ? 'text-white' : 'text-slate-400'}`} />
              </button>

              {/* 5. Company */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                  setAboutMenuOpen(true);
                  setActiveMenu('company');
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left ${
                  activeMenu === 'company'
                    ? 'text-white bg-[#089EC2] border border-[#2DD4F0] shadow-[0_2px_10px_rgba(8,158,194,0.35)]'
                    : 'text-[#0D1733] bg-white border border-slate-200 shadow-xs hover:border-[#089EC2]/40'
                }`}
              >
                <span>Company & Capabilities</span>
                <ChevronRight className={`w-4 h-4 ${activeMenu === 'company' ? 'text-white' : 'text-slate-400'}`} />
              </button>

              {/* 6. Contact */}
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                  setActiveMenu('contact');
                  if (window.location.pathname !== '/') {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/#contact' }));
                    setTimeout(() => {
                      const contactEl = document.getElementById('contact');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }, 120);
                  }
                }}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  activeMenu === 'contact'
                    ? 'text-white bg-[#089EC2] border border-[#2DD4F0] shadow-[0_2px_10px_rgba(8,158,194,0.35)]'
                    : 'text-[#0D1733] bg-white border border-slate-200 shadow-xs hover:border-[#089EC2]/40'
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className={`w-4 h-4 ${activeMenu === 'contact' ? 'text-white' : 'text-slate-400'}`} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Products Mega Menu Component */}
      <ProductsMegaMenu 
        isOpen={megaMenuOpen} 
        onClose={() => setMegaMenuOpen(false)} 
      />

      {/* Applications (Industries) Mega Menu Component */}
      <ApplicationsMegaMenu 
        isOpen={applicationsMenuOpen} 
        onClose={() => setApplicationsMenuOpen(false)} 
      />

      {/* Solutions Mega Menu Component */}
      <SolutionsMegaMenu 
        isOpen={solutionsMenuOpen} 
        onClose={() => setSolutionsMenuOpen(false)} 
      />

      {/* About Us (Company) Mega Menu Component */}
      <AboutUsMegaMenu 
        isOpen={aboutMenuOpen} 
        onClose={() => setAboutMenuOpen(false)} 
      />
    </>
  );
}
