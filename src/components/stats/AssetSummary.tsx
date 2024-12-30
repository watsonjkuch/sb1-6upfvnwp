import React from 'react';

interface AssetSummaryProps {
  title: string;
  count: number;
}

export function AssetSummary({ title, count }: AssetSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <p className="text-3xl font-bold text-blue-600 mt-2">{count}</p>
      </div>
    </div>
  );
}