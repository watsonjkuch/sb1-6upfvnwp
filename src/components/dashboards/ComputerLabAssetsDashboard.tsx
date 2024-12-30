import React from 'react';
import { AssetCategory } from '../../types/assets';
import { useAssets } from '../../context/AssetContext';
import { CategoryDashboard } from './CategoryDashboard';

export function ComputerLabAssetsDashboard() {
  const { assets } = useAssets();
  const computerLabAssets = assets.filter(asset => asset.category === AssetCategory.COMPUTER_LAB);

  return <CategoryDashboard category={AssetCategory.COMPUTER_LAB} assets={computerLabAssets} />;
}