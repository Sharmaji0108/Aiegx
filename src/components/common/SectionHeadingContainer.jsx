import React from 'react';

/**
 * SectionHeadingContainer
 * Reusable full-width section header container with:
 * - Pure White 0-68% -> Soft Ice Cyan 74% -> Clear Cyan-Blue 82-91% -> Soft Blue 100%
 * - 3px cyan-to-blue gradient border along the bottom edge (#22D3EE -> #3B82F6)
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
      className={`section-heading-container relative w-full mb-8 sm:mb-10 px-5 py-4 sm:px-7 sm:py-5 overflow-hidden rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
