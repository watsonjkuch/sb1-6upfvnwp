import React from 'react';
import { AssetCategory } from '../../types/assets';
import { useAssets } from '../../context/AssetContext';
import { CategoryDashboard } from './CategoryDashboard';

export function ClassroomAssetsDashboard() {
  const { assets } = useAssets();
  const classroomAssets = assets.filter(asset => asset.category === AssetCategory.CLASSROOM);

  return <CategoryDashboard category={AssetCategory.CLASSROOM} assets={classroomAssets} />;
}