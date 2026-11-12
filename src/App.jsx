import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import QualcommBrand from './pages/QualcommBrand';
import NxpBrand from './pages/NxpBrand';
import TiBrand from './pages/TiBrand';
import Type1Product from './pages/Type1Product';
import RZG2LPlatform from './pages/products/RZG2LPlatform';
import RZG2LSMARCSoM from './pages/products/RZG2LSMARCSoM';
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
  const isRzg2lPlatformPage =
    cleanPath === '/products/rz-g2l' || cleanPath === '/products/rzg2l' || cleanPath === '/rz-g2l';
  const isRzg2lSmarcSomPage =
    cleanPath === '/products/rz-g2l/smarc-som' ||
    cleanPath === '/products/rzg2l-smarc-som' ||
    cleanPath === '/products/rz-g2l/som';
  const isRzg2lCarrierPage = cleanPath === '/products/rz-g2l/carrier-board';
  const isRzg2lSbcPage = cleanPath === '/products/rz-g2l/sbc';
  const isType1Page = cleanPath === '/products/type-1' || cleanPath === '/type-1';
  const isQualcommPage = cleanPath === '/brands/qualcomm';
  const isNxpPage = cleanPath === '/brands/nxp' || cleanPath === '/brands/nxp-imx';
  const isTiPage = cleanPath === '/brands/ti' || cleanPath === '/brands/ti-am6x';

  const renderContent = () => {
    if (isRzg2lPlatformPage) return <RZG2LPlatform />;
    if (isRzg2lSmarcSomPage) return <RZG2LSMARCSoM productSlug="smarc-som" />;
    if (isRzg2lCarrierPage) return <RZG2LSMARCSoM productSlug="carrier-board" />;
    if (isRzg2lSbcPage) return <RZG2LSMARCSoM productSlug="sbc" />;
    if (isType1Page) return <Type1Product />;
    if (isQualcommPage) return <QualcommBrand />;
    if (isNxpPage) return <NxpBrand />;
    if (isTiPage) return <TiBrand />;
    return <Home />;
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip min-w-0 bg-[#F4F8FD] dark:bg-[#0D1733] text-[#0F172A] dark:text-[#F8FAFC] flex flex-col justify-between transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full max-w-full overflow-x-clip min-w-0">
        {renderContent()}
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
