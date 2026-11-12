import React, { useState } from 'react';

const DETAIL_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'interfaces', label: 'Interfaces' },
  { id: 'software-support', label: 'Software Support' },
  { id: 'applications', label: 'Applications' },
  { id: 'documents', label: 'Documents' },
];

/**
 * Sticky horizontal Product Navigation Tabs bar.
 * Controls active tab view exclusively without page reload.
 */
export default function ProductTabs({
  tabs = DETAIL_TABS,
  activeTab: controlledActiveTab,
  onTabChange,
}) {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || 'overview');
  const activeTab = controlledActiveTab ?? internalActiveTab;

  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };

  return (
    <div
      className="sticky z-30 w-full bg-white/95 dark:bg-[#0D1733]/95 backdrop-blur-md border-y border-[#DBE4F0] dark:border-[#24355A] shadow-xs transition-colors duration-300"
      style={{ top: 'var(--navbar-height, 64px)' }}
    >
      <div className="section-container">
        <nav
          role="tablist"
          aria-label="Product sections"
          className="flex items-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`shrink-0 py-3.5 text-xs sm:text-sm border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#089EC2] ${
                  isActive
                    ? 'border-[#089EC2] dark:border-[#2DD4F0] text-[#089EC2] dark:text-[#2DD4F0] font-bold'
                    : 'border-transparent text-[#52627C] dark:text-[#AAB6D0] hover:text-[#14213D] dark:hover:text-[#F8FAFC] font-medium'
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
