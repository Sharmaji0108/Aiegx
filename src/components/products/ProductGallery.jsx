import React, { useState, useRef } from 'react';
import SOM3DViewer from './SOM3DViewer';

/**
 * Interactive Product Image Gallery with thumbnail switcher,
 * prev/next controls, and touch swipe support for mobile.
 */
export default function ProductGallery({ images = [], productName = 'Product' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  if (!images || images.length === 0) return null;

  const current = images[activeIndex] || images[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const is3DView = Boolean(current.model3d);

  const onTouchStart = (e) => {
    if (is3DView) return;
    if (e.targetTouches && e.targetTouches[0]) {
      touchStartX.current = e.targetTouches[0].clientX;
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const onTouchMove = (e) => {
    if (is3DView) return;
    if (e.targetTouches && e.targetTouches[0]) {
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const onTouchEnd = () => {
    if (is3DView) return;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Main Large Product Image Container */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative w-full select-none"
      >
        <div
          className={`relative aspect-[4/3] w-full rounded-xl bg-[#F8FAFD] dark:bg-[#101936] border border-[#E2EAF4] dark:border-[#24355A] flex items-center justify-center overflow-hidden ${
            is3DView ? 'p-1 sm:p-2' : 'p-4 sm:p-6'
          }`}
        >
          {is3DView ? (
            <SOM3DViewer
              modelUrl={current.model3d}
              fallbackSrc={current.src}
              fallbackAlt={current.alt || productName}
            />
          ) : (
            <img
              src={current.src}
              alt={current.alt || productName}
              className="max-h-full max-w-full object-contain transition-all duration-300"
            />
          )}
        </div>
      </div>
    </div>
  );
}

