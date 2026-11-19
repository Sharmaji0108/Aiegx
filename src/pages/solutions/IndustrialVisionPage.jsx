import React, { useEffect } from 'react';
import SolutionCategoryTemplate from '../../components/solutions/SolutionCategoryTemplate';
import { INDUSTRIAL_VISION_DATA } from '../../data/solutionCategoriesData';

export default function IndustrialVisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SolutionCategoryTemplate data={INDUSTRIAL_VISION_DATA} />;
}
