import React from 'react';
import { AssetCategory } from '../../types/assets';
import { useAssets } from '../../context/AssetContext';
import { CategoryDashboard } from './CategoryDashboard';

export function OtherAssetsDashboard() {
  const { assets } = useAssets();
  const otherAssets = assets.filter(asset => asset.category === AssetCategory.OTHER);

  return <CategoryDashboard category={AssetCategory.OTHER} assets={otherAssets} />;
}