import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '', id = 'theme-toggle-btn' }) {
  const { theme, toggleTheme, isDark } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  const label = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <div className="relative inline-flex items-center">
      <button
        id={id}
        onClick={toggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        type="button"
        aria-label={label}
        title={label}
        className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#42D9F5] group ${
          isDark
            ? 'bg-[#17264D]/60 hover:bg-[#17264D] text-white/80 hover:text-white border border-white/10 shadow-sm hover:border-[#42D9F5]/40 hover:shadow-[0_0_16px_rgba(66,217,245,0.25)]'
            : 'bg-white/90 hover:bg-white text-slate-700 hover:text-[#2563EB] border border-slate-200/90 shadow-sm hover:border-[#2563EB]/40 hover:shadow-[0_0_16px_rgba(37,99,235,0.2)]'
        } ${className}`}
      >
        {/* Animated Moon Icon (visible in Dark Mode) */}
        <span
          className={`absolute flex items-center justify-center transition-all duration-300 ease-in-out transform ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100 text-[#42D9F5]' 
              : 'opacity-0 -rotate-90 scale-50 pointer-events-none text-slate-400'
          }`}
          aria-hidden={!isDark}
        >
          <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12" />
        </span>

        {/* Animated Sun Icon (visible in Light Mode) */}
        <span
          className={`absolute flex items-center justify-center transition-all duration-300 ease-in-out transform ${
            !isDark 
              ? 'opacity-100 rotate-0 scale-100 text-amber-500' 
              : 'opacity-0 rotate-90 scale-50 pointer-events-none text-amber-400'
          }`}
          aria-hidden={isDark}
        >
          <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </button>

      {/* Accessible Futuristic Tooltip */}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[11px] font-medium tracking-wide whitespace-nowrap pointer-events-none shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md transition-colors"
          style={{
            backgroundColor: isDark ? 'rgba(16, 25, 54, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            color: isDark ? '#F5F7FC' : '#0F172A',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(203, 213, 225, 0.9)',
            boxShadow: isDark 
              ? '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 12px rgba(66, 217, 245, 0.2)' 
              : '0 10px 25px -5px rgba(37, 99, 235, 0.15), 0 0 12px rgba(37, 99, 235, 0.1)'
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
