import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SOM3DViewer from './SOM3DViewer';

/**
 * Interactive Product Image Gallery / 3D Viewer.
 * When displaying a 3D model, renders strictly the clean interactive 3D model canvas.
 * For standard multi-image products, provides thumbnail switcher, prev/next controls, and captions.
 */
export default function ProductGallery({ images = [], productName = 'Product', badge = null }) {
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
    <div className="w-full flex flex-col gap-3 select-none">
      {/* Main Large Product Container */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`relative w-full rounded-2xl bg-white dark:bg-[#17264A] border border-[#DBE4F0] dark:border-[#24355A] shadow-[0_12px_36px_rgba(15,23,42,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${
          is3DView || !current.caption ? 'p-3 sm:p-4' : 'p-4 sm:p-5'
        }`}
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
              className="max-h-full max-w-full object-contain transition-all duration-300 drop-shadow-md"
            />
          )}

          {/* Prev / Next navigation arrows if multi-image and not 3D model */}
          {!is3DView && images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 dark:bg-[#17264A]/85 hover:bg-white dark:hover:bg-[#1F3360] border border-[#DCE8F5] dark:border-[#24355A] text-[#14213D] dark:text-[#F8FAFC] flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 cursor-pointer z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 dark:bg-[#17264A]/85 hover:bg-white dark:hover:bg-[#1F3360] border border-[#DCE8F5] dark:border-[#24355A] text-[#14213D] dark:text-[#F8FAFC] flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 cursor-pointer z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Status Information Bar (Hidden if no caption or 3D view) */}
        {!is3DView && current.caption && (
          <div className="mt-3.5 pt-3 border-t border-[#E2E8F0] dark:border-[#24355A] flex items-center justify-between text-xs gap-3">
            <span className="font-medium text-[#52627C] dark:text-[#AAB6D0] truncate">
              {current.caption}
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#089EC2] dark:text-[#2DD4F0] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#089EC2] dark:bg-[#2DD4F0]" />
              {badge || 'Production Ready'}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails row if multiple images and not 3D model */}
      {!is3DView && images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto py-1 px-0.5 no-scrollbar">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={img.src || idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View image ${idx + 1}`}
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg bg-white dark:bg-[#17264A] border overflow-hidden p-1 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-[#089EC2] dark:border-[#2DD4F0] ring-2 ring-[#089EC2]/40 dark:ring-[#2DD4F0]/40 shadow-xs'
                    : 'border-[#DCE8F5] dark:border-[#24355A] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt || `Thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
                {img.model3d && (
                  <span className="absolute bottom-0.5 right-0.5 px-1 rounded bg-[#0D1733]/90 text-[8px] font-mono text-[#2DD4F0]">
                    3D
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
