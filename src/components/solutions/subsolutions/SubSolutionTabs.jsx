import React from 'react';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'key-features', label: 'Key Features' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'system-architecture', label: 'System Architecture' },
];

export default function SubSolutionTabs({ activeTab = 'overview', onSelectTab }) {
  return (
    <div className="sticky top-[64px] sm:top-[72px] z-30 bg-white/95 dark:bg-[#0D1733]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-white/10 transition-colors duration-300">
      <div className="section-container">
        <nav
          className="flex items-center space-x-1 sm:space-x-8 overflow-x-auto scrollbar-none py-1 -mb-px"
          aria-label="Sub-solution tabs"
          role="tablist"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectTab && onSelectTab(tab.id)}
                className={`whitespace-nowrap py-3.5 px-3 sm:px-1 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-[#089EC2] text-[#089EC2] dark:border-[#2DD4F0] dark:text-[#2DD4F0]'
                    : 'border-transparent text-slate-700 dark:text-[#CBD5E1] hover:text-[#089EC2] dark:hover:text-[#2DD4F0] hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
