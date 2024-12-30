import React from 'react';
import { AssetCategory } from '../../types/assets';
import { useAssets } from '../../context/AssetContext';
import { CategoryDashboard } from './CategoryDashboard';

export function LibraryAssetsDashboard() {
  const { assets } = useAssets();
  const libraryAssets = assets.filter(asset => asset.category === AssetCategory.LIBRARY);

  return <CategoryDashboard category={AssetCategory.LIBRARY} assets={libraryAssets} />;
}