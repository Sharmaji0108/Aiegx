import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import QualcommBrand from './pages/QualcommBrand';
import NxpBrand from './pages/NxpBrand';
import TiBrand from './pages/TiBrand';
import Type1Product from './pages/Type1Product';
import RZG2LPlatform from './pages/products/RZG2LPlatform';
import RZG2LSMARCSoM from './pages/products/RZG2LSMARCSoM';
import RZG2NPlatform from './pages/products/RZG2NPlatform';
import RZG2NSBC from './pages/products/RZG2NSBC';
import RZV2LPlatform from './pages/products/RZV2LPlatform';
import RZV2LSBC from './pages/products/RZV2LSBC';
import RZV2HPlatform from './pages/products/RZV2HPlatform';
import RZV2HSBC from './pages/products/RZV2HSBC';
import RZV2HProduct from './pages/products/RZV2HProduct';
import Footer from './components/common/Footer';
import ThemeToggle from './components/common/ThemeToggle';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      if (p === '/products/rz-g2l/sbc' || p === '/products/rzg2l/sbc') {
        window.history.replaceState({}, '', '/products/rzg2l/complete-sbc/');
        return '/products/rzg2l/complete-sbc/';
      }
      if (p === '/products/rz-v2l/sbc' || p === '/products/rzv2l/sbc') {
        window.history.replaceState({}, '', '/products/rzv2l/complete-sbc/');
        return '/products/rzv2l/complete-sbc/';
      }
      if (p === '/products/rz-v2h/sbc' || p === '/products/rzv2h/sbc') {
        window.history.replaceState({}, '', '/products/rzv2h/complete-sbc/');
        return '/products/rzv2h/complete-sbc/';
      }
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleNavigate = (e) => {
      let targetPath = e.detail;
      if (targetPath) {
        const p = targetPath.split('#')[0].split('?')[0].toLowerCase().replace(/\/+$/, '');
        if (p === '/products/rz-g2l/sbc' || p === '/products/rzg2l/sbc') {
          targetPath = '/products/rzg2l/complete-sbc/';
        } else if (p === '/products/rz-v2l/sbc' || p === '/products/rzv2l/sbc') {
          targetPath = '/products/rzv2l/complete-sbc/';
        } else if (p === '/products/rz-v2h/sbc' || p === '/products/rzv2h/sbc') {
          targetPath = '/products/rzv2h/complete-sbc/';
        }
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
  const isRzg2lSbcPage =
    cleanPath === '/products/rzg2l/complete-sbc' ||
    cleanPath === '/products/rz-g2l/complete-sbc' ||
    cleanPath === '/products/rz-g2l/sbc' ||
    cleanPath === '/products/rzg2l/sbc';
  const isRzg2nPlatformPage =
    cleanPath === '/products/rz-g2n' || cleanPath === '/products/rzg2n' || cleanPath === '/rz-g2n';
  const isRzg2nSbcPage =
    cleanPath === '/products/rz-g2n/sbc' ||
    cleanPath === '/products/rzg2n-sbc' ||
    cleanPath === '/products/rz-g2n/development-platform';
  const isRzv2lPlatformPage =
    cleanPath === '/products/rz-v2l' || cleanPath === '/products/rzv2l' || cleanPath === '/rz-v2l' || cleanPath === '/rzv2l';
  const isRzv2lSomPage =
    cleanPath === '/products/rzv2l/som' ||
    cleanPath === '/products/rz-v2l/som' ||
    cleanPath === '/products/rzv2l/smarc-som' ||
    cleanPath === '/products/rz-v2l/smarc-som';
  const isRzv2lSbcPage =
    cleanPath === '/products/rzv2l/complete-sbc' ||
    cleanPath === '/products/rz-v2l/complete-sbc' ||
    cleanPath === '/products/rz-v2l/sbc' ||
    cleanPath === '/products/rzv2l/sbc';
  const isRzv2lDevKitPage =
    cleanPath === '/products/rzv2l/development-kit' ||
    cleanPath === '/products/rz-v2l/development-kit' ||
    cleanPath === '/products/rzv2l/dev-kit' ||
    cleanPath === '/products/rz-v2l/dev-kit';
  const isRzv2hPlatformPage =
    cleanPath === '/products/rz-v2h' || cleanPath === '/products/rzv2h' || cleanPath === '/rz-v2h' || cleanPath === '/rzv2h';
  const isRzv2hSbcPage =
    cleanPath === '/products/rzv2h/complete-sbc' ||
    cleanPath === '/products/rz-v2h/complete-sbc' ||
    cleanPath === '/products/rz-v2h/sbc' ||
    cleanPath === '/products/rzv2h/sbc';
  const isType1Page = cleanPath === '/products/type-1' || cleanPath === '/type-1';
  const isQualcommPage = cleanPath === '/brands/qualcomm';
  const isNxpPage = cleanPath === '/brands/nxp' || cleanPath === '/brands/nxp-imx';
  const isTiPage = cleanPath === '/brands/ti' || cleanPath === '/brands/ti-am6x';

  const renderContent = () => {
    if (isRzg2lPlatformPage) return <RZG2LPlatform />;
    if (isRzg2lSmarcSomPage) return <RZG2LSMARCSoM productSlug="smarc-som" />;
    if (isRzg2lCarrierPage) return <RZG2LSMARCSoM productSlug="carrier-board" />;
    if (isRzg2lSbcPage) return <RZG2LSMARCSoM productSlug="sbc" />;
    if (isRzg2nPlatformPage) return <RZG2NPlatform />;
    if (isRzg2nSbcPage) return <RZG2NSBC />;
    if (isRzv2lPlatformPage) return <RZV2LPlatform />;
    if (isRzv2lSomPage) return <RZV2LSBC productSlug="som" />;
    if (isRzv2lSbcPage) return <RZV2LSBC productSlug="sbc" />;
    if (isRzv2lDevKitPage) return <RZV2LSBC productSlug="dev-kit" />;
    if (isRzv2hPlatformPage) return <RZV2HPlatform />;
    if (isRzv2hSbcPage) return <RZV2HSBC />;
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
