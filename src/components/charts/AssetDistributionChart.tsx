import React from 'react';
import { Asset, AssetCategory } from '../../types/assets';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AssetDistributionChartProps {
  assets: Asset[];
}

export function AssetDistributionChart({ assets }: AssetDistributionChartProps) {
  const categoryData = Object.values(AssetCategory).map(category => ({
    category,
    count: assets.filter(asset => asset.category === category)
      .reduce((acc, asset) => acc + asset.quantity, 0)
  }));

  const data = {
    labels: categoryData.map(d => d.category),
    datasets: [
      {
        label: 'Number of Assets',
        data: categoryData.map(d => d.count),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Asset Distribution by Category'
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <Bar options={options} data={data} />
    </div>
  );
}