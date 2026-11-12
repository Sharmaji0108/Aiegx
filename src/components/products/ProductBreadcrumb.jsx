import React from 'react';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import { navigateTo } from '../../utils/navigation';

/**
 * Reusable Breadcrumb navigation consistent with Aiegx page hierarchy.
 */
export default function ProductBreadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-[#52627C] dark:text-[#AAB6D0]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isFirst = idx === 0;

          return (
            <React.Fragment key={`${item.label}-${idx}`}>
              {idx > 0 && (
                <li aria-hidden="true" className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] dark:text-[#64748B]" />
                </li>
              )}
              <li>
                {item.path && !isLast ? (
                  <a
                    href={item.path}
                    onClick={(e) => navigateTo(item.path, e)}
                    className="inline-flex items-center gap-1.5 hover:text-[#089EC2] dark:hover:text-[#2DD4F0] transition-colors rounded-sm py-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#089EC2] dark:focus-visible:ring-[#2DD4F0]"
                  >
                    {isFirst && (
                      <HomeIcon className="w-3.5 h-3.5 text-[#089EC2] dark:text-[#2DD4F0]" />
                    )}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <span
                    className={
                      isLast
                        ? 'text-[#089EC2] dark:text-[#2DD4F0] font-semibold'
                        : 'text-[#52627C] dark:text-[#AAB6D0]'
                    }
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

