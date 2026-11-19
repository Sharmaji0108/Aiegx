import React, { useEffect } from 'react';
import SolutionCategoryTemplate from '../../components/solutions/SolutionCategoryTemplate';
import { DEFENCE_VISION_DATA } from '../../data/solutionCategoriesData';

export default function DefenceVisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SolutionCategoryTemplate data={DEFENCE_VISION_DATA} />;
}
