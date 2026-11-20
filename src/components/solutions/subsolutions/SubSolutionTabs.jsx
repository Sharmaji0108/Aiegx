import React, { useState, useEffect } from 'react';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'key-features', label: 'Key Features' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'system-architecture', label: 'System Architecture' },
];

export default function SubSolutionTabs() {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = TABS.length - 1; i >= 0; i--) {
        const tab = TABS[i];
        const el = document.getElementById(tab.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(tab.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (id, e) => {
    e.preventDefault();
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-[64px] sm:top-[72px] z-30 bg-white/95 dark:bg-[#0D1733]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-white/10 transition-colors duration-300">
      <div className="section-container">
        <nav
          className="flex items-center space-x-1 sm:space-x-8 overflow-x-auto scrollbar-none py-1 -mb-px"
          aria-label="Sub-solution navigation tabs"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => handleTabClick(tab.id, e)}
                className={`whitespace-nowrap py-3.5 px-3 sm:px-1 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-[#089EC2] text-[#089EC2] dark:border-[#2DD4F0] dark:text-[#2DD4F0]'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
