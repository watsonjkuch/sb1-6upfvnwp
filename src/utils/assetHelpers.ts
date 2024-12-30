import { Asset, AssetCondition, AssetStatus } from '../types/assets';

export function getAssetStats(assets: Asset[]) {
  const totalAssets = assets.reduce((sum, asset) => sum + asset.quantity, 0);

  const conditionData = Object.values(AssetCondition).reduce((acc, condition) => {
    acc[condition] = assets
      .filter(asset => asset.condition === condition)
      .reduce((sum, asset) => sum + asset.quantity, 0);
    return acc;
  }, {} as Record<string, number>);

  const statusData = Object.values(AssetStatus).reduce((acc, status) => {
    acc[status] = assets
      .filter(asset => asset.status === status)
      .reduce((sum, asset) => sum + asset.quantity, 0);
    return acc;
  }, {} as Record<string, number>);

  return {
    totalAssets,
    conditionData,
    statusData,
  };
}