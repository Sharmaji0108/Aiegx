import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

/**
 * Functional Day/Night Theme Switch Component
 * Supports:
 * - variant="navbar": Compact pill-shaped toggle for navbar with sun/moon icon and theme label
 * - variant="floating": Original fixed toggle widget at bottom-right
 */
export default function ThemeToggle({ variant = 'floating', className = '' }) {
  const { toggleTheme, isDark } = useTheme();

  // 1. Compact Navbar Pill Variant
  if (variant === 'navbar') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none bg-slate-100 hover:bg-slate-200/80 dark:bg-[#17264A] dark:hover:bg-[#1E3360] border border-slate-200 dark:border-[#24355A] text-slate-700 dark:text-slate-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#089EC2] dark:focus-visible:ring-[#2DD4F0] shrink-0 ${className}`}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDark ? (
          <>
            <Moon className="w-3.5 h-3.5 text-[#2DD4F0] fill-current" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide">Dark</span>
          </>
        ) : (
          <>
            <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-700">Light</span>
          </>
        )}
      </button>
    );
  }

  // 2. Original Floating Widget Variant (Keyboard accessibility handler for Space & Enter)
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div 
      className={`theme-switch-container ${className}`} 
      role="region" 
      aria-label="Theme switcher"
    >
      <label 
        className="theme-switch" 
        htmlFor="theme-day-night-toggle"
        title={isDark ? "Switch to Light Mode (Day)" : "Switch to Dark Mode (Night)"}
      >
        <input
          id="theme-day-night-toggle"
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          onKeyDown={handleKeyDown}
          aria-label="Switch between light and dark themes"
        />
        
        {/* Switch Slider Track */}
        <span className="theme-switch-slider">
          
          {/* Day Mode Clouds (Right side of track in Light Mode) */}
          <span className="theme-switch-clouds" aria-hidden="true">
            <svg 
              viewBox="0 0 24 13" 
              width="24" 
              height="13" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4.5 12h15a3 3 0 0 0 .5-5.96A4.5 4.5 0 0 0 12 3a4.5 4.5 0 0 0-4.3 3.1A3.5 3.5 0 0 0 4.5 12Z" 
                fill="#FFFFFF" 
                fillOpacity="0.75" 
              />
            </svg>
          </span>

          {/* Night Mode Stars (Left side of track in Dark Mode) */}
          <span className="theme-switch-stars" aria-hidden="true">
            <svg 
              viewBox="0 0 22 20" 
              width="22" 
              height="20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="0.9" fill="#FFFFFF" fillOpacity="0.9" />
              <circle cx="12" cy="4" r="0.7" fill="#73C0FC" fillOpacity="0.8" />
              <circle cx="8" cy="13" r="1.1" fill="#FFFFFF" fillOpacity="0.85" />
              <circle cx="16" cy="11" r="0.7" fill="#FFFFFF" fillOpacity="0.75" />
              <path 
                d="M13 8.5 L13.6 10 L15.1 10.6 L13.6 11.2 L13 12.7 L12.4 11.2 L10.9 10.6 L12.4 10 Z" 
                fill="#73C0FC" 
                fillOpacity="0.7" 
              />
            </svg>
          </span>

          {/* Sliding Knob (30px x 30px) */}
          <span className="theme-switch-knob">
            
            {/* Sun Icon (Visible in Light Mode / Left position) */}
            <span className="theme-switch-icon theme-switch-sun" aria-hidden={isDark}>
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5" fill="#FFB703" stroke="#FB8500" strokeWidth="1" />
                <path 
                  d="M12 2V4M12 20V22M4 12H2M22 12H20M5.636 5.636L7.05 7.05M16.95 16.95L18.364 18.364M5.636 18.364L7.05 16.95M16.95 7.05L18.364 5.636" 
                  stroke="#FB8500" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>

            {/* Moon Icon (Visible in Dark Mode / Right position) */}
            <span className="theme-switch-icon theme-switch-moon" aria-hidden={!isDark}>
              <svg 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
                  fill="#73C0FC" 
                  stroke="#38BDF8" 
                  strokeWidth="1" 
                />
              </svg>
            </span>

          </span>

        </span>
      </label>
    </div>
  );
}
