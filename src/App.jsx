import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import QualcommBrand from './pages/QualcommBrand';
import NxpBrand from './pages/NxpBrand';
import TiBrand from './pages/TiBrand';
import Type1Product from './pages/Type1Product';
import Footer from './components/common/Footer';
import ThemeToggle from './components/common/ThemeToggle';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleNavigate = (e) => {
      const targetPath = e.detail;
      if (targetPath) {
        window.history.pushState({}, '', targetPath);
        setCurrentPath(targetPath);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('aiegx-navigate', handleNavigate);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('aiegx-navigate', handleNavigate);
    };
  }, []);

  const cleanPath = currentPath.split('#')[0].split('?')[0].toLowerCase().replace(/\/+$/, '') || '/';
  const isType1Page = cleanPath === '/products/type-1' || cleanPath === '/type-1';
  const isQualcommPage = cleanPath === '/brands/qualcomm';
  const isNxpPage = cleanPath === '/brands/nxp' || cleanPath === '/brands/nxp-imx';
  const isTiPage = cleanPath === '/brands/ti' || cleanPath === '/brands/ti-am6x';

  const renderContent = () => {
    if (isType1Page) return <Type1Product />;
    if (isQualcommPage) return <QualcommBrand />;
    if (isNxpPage) return <NxpBrand />;
    if (isTiPage) return <TiBrand />;
    return <Home />;
  };

  return (
    <div className="min-h-screen bg-[#F4F8FD] dark:bg-[#0D1733] text-[#0F172A] dark:text-[#F8FAFC] flex flex-col justify-between transition-colors duration-300">
      <Header />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
