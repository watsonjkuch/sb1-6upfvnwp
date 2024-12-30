import React from 'react';
import { AssetCategory } from '../../types/assets';
import { useAssets } from '../../context/AssetContext';
import { CategoryDashboard } from './CategoryDashboard';

export function StaffRoomAssetsDashboard() {
  const { assets } = useAssets();
  const staffRoomAssets = assets.filter(asset => asset.category === AssetCategory.STAFF_ROOM);

  return <CategoryDashboard category={AssetCategory.STAFF_ROOM} assets={staffRoomAssets} />;
}