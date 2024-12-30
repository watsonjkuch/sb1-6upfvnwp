import React from 'react';
import { Asset, AssetCategory } from '../../types/assets';
import { CategoryAssets } from '../CategoryAssets';
import { AssetSummary } from '../stats/AssetSummary';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../../utils/chartColors';
import { getAssetStats } from '../../utils/assetHelpers';

interface CategoryDashboardProps {
  category: AssetCategory;
  assets: Asset[];
}

export function CategoryDashboard({ category, assets }: CategoryDashboardProps) {
  const { totalAssets, conditionData, statusData } = getAssetStats(assets);

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{category} Overview</h1>
      
      <AssetSummary title={`Total ${category}`} count={totalAssets} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <PieChart
          title="Assets by Condition"
          data={{
            labels: Object.keys(conditionData),
            values: Object.values(conditionData),
            colors: chartColors.condition,
          }}
        />

        <PieChart
          title="Assets by Status"
          data={{
            labels: Object.keys(statusData),
            values: Object.values(statusData),
            colors: chartColors.status,
          }}
        />
      </div>

      <CategoryAssets category={category} />
    </div>
  );
}