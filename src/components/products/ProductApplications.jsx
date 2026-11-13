import React from 'react';
import TypicalApplicationsCarousel from './TypicalApplicationsCarousel';

/**
 * ProductApplications
 * Reusable Typical Applications section forwarding directly to TypicalApplicationsCarousel.
 * Maintains backwards compatibility for any existing and future page imports.
 */
export default function ProductApplications(props) {
  return <TypicalApplicationsCarousel {...props} />;
}

export { TypicalApplicationsCarousel };
