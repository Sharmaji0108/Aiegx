import React, { useEffect } from 'react';
import SubSolutionPage from '../../components/solutions/subsolutions/SubSolutionPage';

/**
 * SolutionDetail
 * Renders the standardized sub-solution page template with unique,
 * dynamic content for any selected sub-solution.
 */
export default function SolutionDetail({ slug }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  return <SubSolutionPage slug={slug} />;
}
