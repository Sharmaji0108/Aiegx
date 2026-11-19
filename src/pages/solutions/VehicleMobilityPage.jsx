import React, { useEffect } from 'react';
import SolutionCategoryTemplate from '../../components/solutions/SolutionCategoryTemplate';
import { VEHICLE_MOBILITY_DATA } from '../../data/solutionCategoriesData';

export default function VehicleMobilityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SolutionCategoryTemplate data={VEHICLE_MOBILITY_DATA} />;
}
