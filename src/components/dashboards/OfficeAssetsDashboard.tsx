import React from 'react';
import { AssetCategory } from '../../types/assets';
import { useAssets } from '../../context/AssetContext';
import { CategoryDashboard } from './CategoryDashboard';

export function OfficeAssetsDashboard() {
  const { assets } = useAssets();
  const officeAssets = assets.filter(asset => asset.category === AssetCategory.OFFICE);

  return <CategoryDashboard category={AssetCategory.OFFICE} assets={officeAssets} />;
}