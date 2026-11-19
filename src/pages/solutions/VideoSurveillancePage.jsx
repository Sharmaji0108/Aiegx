import React, { useEffect } from 'react';
import SolutionCategoryTemplate from '../../components/solutions/SolutionCategoryTemplate';
import { VIDEO_SURVEILLANCE_DATA } from '../../data/solutionCategoriesData';

export default function VideoSurveillancePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SolutionCategoryTemplate data={VIDEO_SURVEILLANCE_DATA} />;
}
