import React from 'react';

/**
 * SectionHeadingContainer
 * Reusable full-width section header container with:
 * - Pure White 0-70% -> Subtle Light Pastel Cyan 78-86% -> Soft Pastel Blue 94-100%
 * - 3px soft pastel cyan-to-blue gradient border along bottom edge (#8CD3DC -> #8CB3ED)
 * - Rounded-2xl corners, subtle border, and soft elevation shadow.
 */
export default function SectionHeadingContainer({ 
  children, 
  className = '', 
  id 
}) {
  return (
    <div 
      id={id}
      className={`section-heading-container relative w-full mb-4 sm:mb-5 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
