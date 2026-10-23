import React from 'react';

export default function Logo({ 
  className = '', 
  imgClassName = 'w-10 h-10 sm:w-11 sm:h-11', 
  showText = true, 
  href = '/', 
  _variant = 'default',
  textColor = 'text-slate-900 dark:text-white transition-colors duration-200',
  onClick
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href === '/' || href === '#') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('aiegx-navigate', { detail: '/' }));
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42D9F5] rounded-xl p-0.5 ${className}`}
      aria-label="Aiegx Homepage"
    >
      {/* Official Aiegx Logo Mark: Rounded square with Aiegx symbol */}
      <div className="relative rounded-2xl overflow-hidden shadow-md shadow-[#3478F6]/20 group-hover:shadow-[#42D9F5]/40 transition-all duration-300 transform group-hover:scale-105 flex-shrink-0 border border-white/10">
        <img 
          src="/images/aiegx-logo-official.png" 
          alt="Aiegx Logo" 
          className={`${imgClassName} object-contain rounded-2xl`}
        />
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <span className={`text-[1.35rem] sm:text-2xl font-bold tracking-wider ${textColor} font-mono leading-none select-none`}>
          AIEGX
        </span>
      )}
    </a>
  );
}
