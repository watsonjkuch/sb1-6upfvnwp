import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Asset, AssetCondition, AssetStatus } from '../../../types/assets';

interface AssetChartsProps {
  assets: Asset[];
}

export function AssetCharts({ assets }: AssetChartsProps) {
  // Prepare data for condition chart
  const conditionData = Object.values(AssetCondition).reduce((acc, condition) => {
    acc[condition] = assets
      .filter(asset => asset.condition === condition)
      .reduce((sum, asset) => sum + asset.quantity, 0);
    return acc;
  }, {} as Record<string, number>);

  // Prepare data for status chart
  const statusData = Object.values(AssetStatus).reduce((acc, status) => {
    acc[status] = assets
      .filter(asset => asset.status === status)
      .reduce((sum, asset) => sum + asset.quantity, 0);
    return acc;
  }, {} as Record<string, number>);

  const conditionChartData = {
    labels: Object.keys(conditionData),
    datasets: [
      {
        data: Object.values(conditionData),
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const statusChartData = {
    labels: Object.keys(statusData),
    datasets: [
      {
        data: Object.values(statusData),
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Assets by Condition</h2>
        <div className="h-64">
          <Pie data={conditionChartData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Assets by Status</h2>
        <div className="h-64">
          <Pie data={statusChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}