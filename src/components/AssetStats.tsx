import React from 'react';
import { Asset, AssetCategory } from '../types/assets';

interface AssetStatsProps {
  assets: Asset[];
}

export function AssetStats({ assets }: AssetStatsProps) {
  const totalAssets = assets.reduce((acc, asset) => acc + asset.quantity, 0);
  const categoryCounts = Object.values(AssetCategory).map(category => ({
    category,
    count: assets.filter(asset => asset.category === category)
      .reduce((acc, asset) => acc + asset.quantity, 0)
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-sm font-medium text-gray-500">Total Assets</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-2xl font-semibold text-gray-900">{totalAssets}</span>
        </div>
      </div>
      {categoryCounts.map(({ category, count }) => (
        <div key={category} className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">{category}</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-semibold text-gray-900">{count}</span>
          </div>
        </div>
      ))}
    </div>
  );
}