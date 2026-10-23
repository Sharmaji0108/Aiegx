import React, { useState, useEffect, useRef } from 'react';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import ProductsMegaMenu from './ProductsMegaMenu';
import ApplicationsMegaMenu from './ApplicationsMegaMenu';
import DevelopersMegaMenu from './DevelopersMegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import AboutUsMegaMenu from './AboutUsMegaMenu';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck 
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [applicationsMenuOpen, setApplicationsMenuOpen] = useState(false);
  const [developersMenuOpen, setDevelopersMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Aiegx NeuroCore X1 Dev Kit',
      type: 'Edge NPU Module (32 TOPS)',
      price: 349,
      quantity: 1,
      badge: 'Bestseller'
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for global custom events to open cart from products
  useEffect(() => {
    const handleAddProduct = (e) => {
      const product = e.detail;
      setCartItems(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        }
        return [...prev, { ...product, quantity: 1 }];
      });
      setCartOpen(true);
    };

    const handleOpenSearch = () => setSearchOpen(true);

    window.addEventListener('aiegx-add-cart', handleAddProduct);
    window.addEventListener('aiegx-open-search', handleOpenSearch);
    return () => {
      window.removeEventListener('aiegx-add-cart', handleAddProduct);
      window.removeEventListener('aiegx-open-search', handleOpenSearch);
    };
  }, []);

  const hoverTimeoutRef = useRef(null);
  const appsHoverTimeoutRef = useRef(null);
  const devsHoverTimeoutRef = useRef(null);
  const solutionsHoverTimeoutRef = useRef(null);
  const aboutHoverTimeoutRef = useRef(null);

  const clearAllTimeouts = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (appsHoverTimeoutRef.current) clearTimeout(appsHoverTimeoutRef.current);
    if (devsHoverTimeoutRef.current) clearTimeout(devsHoverTimeoutRef.current);
    if (solutionsHoverTimeoutRef.current) clearTimeout(solutionsHoverTimeoutRef.current);
    if (aboutHoverTimeoutRef.current) clearTimeout(aboutHoverTimeoutRef.current);
  };

  const closeOtherMenus = (current) => {
    if (current !== 'products') setMegaMenuOpen(false);
    if (current !== 'apps') setApplicationsMenuOpen(false);
    if (current !== 'devs') setDevelopersMenuOpen(false);
    if (current !== 'solutions') setSolutionsMenuOpen(false);
    if (current !== 'about') setAboutMenuOpen(false);
  };

  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setApplicationsMenuOpen(false);
    setDevelopersMenuOpen(false);
    setSolutionsMenuOpen(false);
    setAboutMenuOpen(false);
  };

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

  const handleDevsMouseEnter = () => {
    clearAllTimeouts();
    closeOtherMenus('devs');
    setDevelopersMenuOpen(true);
  };

  const handleDevsMouseLeave = () => {
    devsHoverTimeoutRef.current = setTimeout(() => {
      setDevelopersMenuOpen(false);
    }, 280);
  };

  const handleDevsMegaMenuMouseEnter = () => {
    if (devsHoverTimeoutRef.current) clearTimeout(devsHoverTimeoutRef.current);
  };

  const handleDevsMegaMenuMouseLeave = () => {
    devsHoverTimeoutRef.current = setTimeout(() => {
      setDevelopersMenuOpen(false);
    }, 280);
  };

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

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  const searchResults = [
    { title: 'NeuroCore X1 Accelerator', category: 'Hardware Module', href: '#products' },
    { title: 'Aiegx Synapse Edge Gateway', category: 'Industrial Systems', href: '#products' },
    { title: 'Embedded Vision Pipeline SDK', category: 'Developer Tool', href: '#developers' },
    { title: 'Autonomous Mobility Telemetry', category: 'Application', href: '#applications' },
    { title: 'Sub-millisecond Inferencing API', category: 'Documentation', href: '#developers' }
  ].filter(item => 
    !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating Header Wrapper */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'backdrop-blur-xl bg-[#101936]/80 border-b border-white/10 shadow-lg py-2.5' : 'bg-transparent py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Wordmark */}
          <Logo variant="navbar" />

          {/* Desktop Navigation Bar (Floating Island) */}
          <nav 
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-5 py-2 rounded-full bg-[#101936]/70 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20"
            aria-label="Main Navigation"
          >
            {/* Products Mega Menu Trigger Button */}
            <div 
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                id="navbar-products-toggle"
                onClick={() => {
                  setApplicationsMenuOpen(false);
                  setDevelopersMenuOpen(false);
                  setMegaMenuOpen(!megaMenuOpen);
                }}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#42D9F5] ${
                  megaMenuOpen 
                    ? 'text-[#42D9F5] bg-white/10 shadow-sm font-semibold' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
                title="Browse Product Architecture & Lineup"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  megaMenuOpen ? 'rotate-180 text-[#42D9F5]' : 'text-white/40'
                }`} />
              </button>
            </div>

            {/* Applications Mega Menu Trigger Button */}
            <div 
              className="relative"
              onMouseEnter={handleAppsMouseEnter}
              onMouseLeave={handleAppsMouseLeave}
            >
              <button
                id="navbar-applications-toggle"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setDevelopersMenuOpen(false);
                  setApplicationsMenuOpen(!applicationsMenuOpen);
                }}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#42D9F5] ${
                  applicationsMenuOpen 
                    ? 'text-[#42D9F5] bg-white/10 shadow-sm font-semibold' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={applicationsMenuOpen}
                aria-haspopup="true"
                title="Browse Applications by Industry & Case Studies"
              >
                <span>Applications</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  applicationsMenuOpen ? 'rotate-180 text-[#42D9F5]' : 'text-white/40'
                }`} />
              </button>
            </div>

            {/* Developers Mega Menu Trigger Button */}
            <div 
              className="relative"
              onMouseEnter={handleDevsMouseEnter}
              onMouseLeave={handleDevsMouseLeave}
            >
              <button
                id="navbar-developers-toggle"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setApplicationsMenuOpen(false);
                  setDevelopersMenuOpen(!developersMenuOpen);
                }}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#42D9F5] ${
                  developersMenuOpen 
                    ? 'text-[#42D9F5] bg-white/10 shadow-sm font-semibold' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={developersMenuOpen}
                aria-haspopup="true"
                title="Browse Developers Hub, Carrier Board Design & Support"
              >
                <span>Developers</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  developersMenuOpen ? 'rotate-180 text-[#42D9F5]' : 'text-white/40'
                }`} />
              </button>
            </div>

            {/* Solutions Dropdown Trigger Button */}
            <div 
              className="relative"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button
                id="navbar-solutions-toggle"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setApplicationsMenuOpen(false);
                  setDevelopersMenuOpen(false);
                  setAboutMenuOpen(false);
                  setSolutionsMenuOpen(!solutionsMenuOpen);
                }}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#42D9F5] ${
                  solutionsMenuOpen 
                    ? 'text-[#42D9F5] bg-white/10 shadow-sm font-semibold' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={solutionsMenuOpen}
                aria-haspopup="true"
                title="Browse Solutions by Industry & Architecture"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsMenuOpen ? 'rotate-180 text-[#42D9F5]' : 'text-white/40'
                }`} />
              </button>
            </div>

            {/* About Us Dropdown Trigger Button */}
            <div 
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button
                id="navbar-about-toggle"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setApplicationsMenuOpen(false);
                  setDevelopersMenuOpen(false);
                  setSolutionsMenuOpen(false);
                  setAboutMenuOpen(!aboutMenuOpen);
                }}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#42D9F5] ${
                  aboutMenuOpen 
                    ? 'text-[#42D9F5] bg-white/10 shadow-sm font-semibold' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={aboutMenuOpen}
                aria-haspopup="true"
                title="Learn About Aiegx Technologies"
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutMenuOpen ? 'rotate-180 text-[#42D9F5]' : 'text-white/40'
                }`} />
              </button>
            </div>

            {/* Shop */}
            <a
              href="#products"
              onClick={closeAllMenus}
              className="px-3.5 py-1.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              Shop
            </a>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button (Between Shop menu item and Search icon) */}
            <ThemeToggle id="navbar-theme-toggle" />

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-white/80 hover:text-white hover:bg-white/10 bg-[#17264D]/60 rounded-full border border-white/10 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42D9F5]"
              aria-label="Search site"
              title="Quick Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 bg-[#17264D]/60 rounded-full border border-white/10 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#42D9F5]"
              aria-label="Shopping Cart"
              title="View Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#3478F6] to-[#42D9F5] text-white text-[11px] font-bold flex items-center justify-center shadow-md shadow-[#3478F6]/40">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Login Link Button */}
            <button
              onClick={() => setLoginOpen(true)}
              className="hidden sm:inline-flex items-center text-sm font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              Login
            </button>

            {/* Get Started CTA */}
            <a
              href="#products"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] hover:from-[#5ce1f8] hover:to-[#4185ff] rounded-full shadow-lg shadow-[#3478F6]/30 hover:shadow-[#42D9F5]/40 transition-all duration-300 group"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-white/80 hover:text-white rounded-lg bg-[#17264D]/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#42D9F5]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-7xl mx-auto px-4 py-5 rounded-2xl bg-[#101936]/95 backdrop-blur-2xl border border-white/15 shadow-2xl text-white animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Drawer Header with Logo */}
            <div className="pb-3.5 mb-3 border-b border-white/10 flex items-center justify-between">
              <Logo variant="navbar" onClick={() => setMobileMenuOpen(false)} />
              <span className="text-[10px] font-mono text-[#42D9F5] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#17264D] border border-white/10 font-semibold">
                Menu
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              {/* Mobile Products Mega Menu Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('products');
                  setMegaMenuOpen(true);
                }}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#17264D]/70 hover:bg-[#17264D] border border-white/10 transition-colors flex items-center justify-between text-left"
              >
                <span>Browse Products Mega Menu</span>
                <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
              </button>

              {/* Mobile Applications Mega Menu Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('apps');
                  setApplicationsMenuOpen(true);
                }}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#17264D]/70 hover:bg-[#17264D] border border-white/10 transition-colors flex items-center justify-between text-left"
              >
                <span>Browse Applications Mega Menu</span>
                <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
              </button>

              {/* Mobile Developers Mega Menu Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('devs');
                  setDevelopersMenuOpen(true);
                }}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#17264D]/70 hover:bg-[#17264D] border border-white/10 transition-colors flex items-center justify-between text-left"
              >
                <span>Browse Developers Mega Menu</span>
                <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
              </button>

              {/* Mobile Solutions Mega Menu Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('solutions');
                  setSolutionsMenuOpen(true);
                }}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#17264D]/70 hover:bg-[#17264D] border border-white/10 transition-colors flex items-center justify-between text-left"
              >
                <span>Browse Solutions Menu</span>
                <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
              </button>

              {/* Mobile About Us Mega Menu Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeOtherMenus('about');
                  setAboutMenuOpen(true);
                }}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#17264D]/70 hover:bg-[#17264D] border border-white/10 transition-colors flex items-center justify-between text-left"
              >
                <span>Browse About Us Menu</span>
                <ChevronRight className="w-4 h-4 text-[#42D9F5]" />
              </button>

              {/* Shop Link */}
              <a
                href="#products"
                onClick={() => {
                  setMobileMenuOpen(false);
                  closeAllMenus();
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>Shop</span>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </a>

              {/* Mobile Drawer Theme Switcher */}
              <div className="px-4 py-2 rounded-xl bg-[#17264D]/50 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">Theme</span>
                <ThemeToggle id="mobile-drawer-theme-toggle" />
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginOpen(true);
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-white bg-[#17264D] hover:bg-[#1f3468] border border-white/10 rounded-xl transition-colors font-mono"
                >
                  Login
                </button>
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center text-sm font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] rounded-xl shadow-lg shadow-[#3478F6]/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-white/60 hover:text-white bg-[#17264D]/50 border border-white/10 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#42D9F5]" />
                  <span>Search Catalog & Docs</span>
                </button>
              </div>
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

      {/* Applications Mega Menu Component */}
      <ApplicationsMegaMenu 
        isOpen={applicationsMenuOpen} 
        onClose={() => setApplicationsMenuOpen(false)} 
        onMouseEnter={handleAppsMegaMenuMouseEnter}
        onMouseLeave={handleAppsMegaMenuMouseLeave}
      />

      {/* Developers Mega Menu Component */}
      <DevelopersMegaMenu 
        isOpen={developersMenuOpen} 
        onClose={() => setDevelopersMenuOpen(false)} 
        onMouseEnter={handleDevsMegaMenuMouseEnter}
        onMouseLeave={handleDevsMegaMenuMouseLeave}
      />

      {/* Solutions Mega Menu Component */}
      <SolutionsMegaMenu 
        isOpen={solutionsMenuOpen} 
        onClose={() => setSolutionsMenuOpen(false)} 
        onMouseEnter={handleSolutionsMegaMenuMouseEnter}
        onMouseLeave={handleSolutionsMegaMenuMouseLeave}
      />

      {/* About Us Mega Menu Component */}
      <AboutUsMegaMenu 
        isOpen={aboutMenuOpen} 
        onClose={() => setAboutMenuOpen(false)} 
        onMouseEnter={handleAboutMegaMenuMouseEnter}
        onMouseLeave={handleAboutMegaMenuMouseLeave}
      />

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#101936]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl rounded-2xl bg-[#17264D] border border-[#42D9F5]/30 p-5 shadow-2xl shadow-cyan-500/10 text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5 flex-1">
                <Search className="w-5 h-5 text-[#42D9F5]" />
                <input
                  type="text"
                  placeholder="Search edge hardware, models, docs, SDKs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-white/40 text-sm focus:outline-none"
                />
              </div>
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-white/50 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-4 space-y-2 max-h-72 overflow-y-auto pr-1">
              {searchResults.length > 0 ? (
                searchResults.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#42D9F5] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/50">{item.category}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#42D9F5] group-hover:translate-x-1 transition-all" />
                  </a>
                ))
              ) : (
                <p className="text-center py-6 text-sm text-white/50">No matching results found for "{searchQuery}"</p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
              <span>Press ESC to dismiss</span>
              <span className="font-mono text-[#42D9F5]">Aiegx Neural Search v2.4</span>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Slide-over Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#101936] border-l border-white/10 shadow-2xl flex flex-col text-white">
              
              {/* Cart Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#17264D]/80">
                <div className="flex items-center gap-2.5">
                  <ShoppingCart className="w-5 h-5 text-[#42D9F5]" />
                  <h3 className="text-lg font-bold text-white">Hardware Cart ({totalCartCount})</h3>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#101936]">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="p-4 rounded-xl bg-[#17264D]/60 border border-white/10 flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                            {item.badge && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3478F6]/20 text-[#42D9F5] border border-[#3478F6]/30 font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-white/50 mt-0.5">{item.type}</p>
                        </div>
                        <span className="text-sm font-mono font-bold text-[#42D9F5]">
                          ${item.price}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-white/50">
                        <div className="flex items-center gap-2">
                          <span>Qty:</span>
                          <button
                            onClick={() => {
                              if (item.quantity <= 1) {
                                setCartItems(prev => prev.filter(i => i.id !== item.id));
                              } else {
                                setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i));
                              }
                            }}
                            className="w-6 h-6 rounded bg-[#101936] border border-white/10 hover:bg-white/10 flex items-center justify-center text-white font-bold"
                          >
                            -
                          </button>
                          <span className="font-mono text-white font-semibold px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => {
                              setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
                            }}
                            className="w-6 h-6 rounded bg-[#101936] border border-white/10 hover:bg-white/10 flex items-center justify-center text-white font-bold"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => setCartItems(prev => prev.filter(i => i.id !== item.id))}
                          className="text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-white/40 text-sm">Your hardware cart is empty.</p>
                    <a
                      href="#products"
                      onClick={() => setCartOpen(false)}
                      className="mt-4 inline-block text-xs font-semibold text-[#42D9F5] hover:underline"
                    >
                      Browse Edge Modules & Developer Kits &rarr;
                    </a>
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              <div className="p-6 border-t border-white/10 bg-[#17264D]/90">
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-white/60">Estimated Total:</span>
                  <span className="text-xl font-bold font-mono text-white">${totalCartPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    alert('Order request submitted! An Aiegx enterprise hardware specialist will connect with you.');
                    setCartOpen(false);
                  }}
                  disabled={cartItems.length === 0}
                  className="w-full py-3 text-center text-sm font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] rounded-xl shadow-lg shadow-[#3478F6]/30 hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Secure Checkout
                </button>
                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-white/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#42D9F5]" />
                  <span>Encrypted enterprise procurement & global expedited shipping</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Developer / Enterprise Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#101936]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-[#17264D] border border-[#42D9F5]/30 p-6 shadow-2xl relative text-white">
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <div className="inline-flex rounded-2xl overflow-hidden shadow-md shadow-[#3478F6]/20 mb-3 border border-white/10">
                <img 
                  src="/images/aiegx-logo-official.png" 
                  alt="Aiegx Logo" 
                  className="w-14 h-14 object-contain rounded-2xl" 
                />
              </div>
              <h3 className="text-xl font-bold text-white">Aiegx Ecosystem Access</h3>
              <p className="text-xs text-white/50 mt-1">Authenticate for Developer Cloud, Device Fleet, and Model Zoo</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Logged in successfully!'); setLoginOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Corporate or Developer Email</label>
                <input
                  type="email"
                  required
                  placeholder="engineer@enterprise.ai"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#101936] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#42D9F5]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Hardware Fleet Token or Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#101936] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#42D9F5]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-sm font-semibold text-[#101936] bg-gradient-to-r from-[#42D9F5] to-[#3478F6] rounded-xl shadow-lg shadow-[#3478F6]/30 hover:opacity-95 transition-opacity"
              >
                Sign In to Aiegx Console
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-xs text-white/50">Need device provisioning access? </span>
              <a href="#why-aiegx" onClick={() => setLoginOpen(false)} className="text-xs text-[#42D9F5] hover:underline font-semibold">
                Request Partner Access
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
