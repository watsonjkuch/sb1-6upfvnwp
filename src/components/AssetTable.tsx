import React from 'react';
import { Asset } from '../types/assets';
import { formatClassroomId } from '../utils/classroom';

interface AssetTableProps {
  assets: Asset[];
}

export function AssetTable({ assets }: AssetTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Asset Inventory</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Name</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Category</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Location</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Classroom</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Condition</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <span className="font-medium text-gray-900">{asset.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-500">{asset.category}</td>
                <td className="py-3 px-4 text-gray-500">{asset.location}</td>
                <td className="py-3 px-4 text-gray-500">
                  {asset.classroom ? 
                    `Grade ${asset.classroom.grade}-${asset.classroom.section}` : 
                    '-'}
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${asset.status === 'Available' ? 'bg-green-100 text-green-800' :
                    asset.status === 'In Use' ? 'bg-blue-100 text-blue-800' :
                    asset.status === 'Under Maintenance' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}>
                    {asset.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${asset.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                    asset.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                    asset.condition === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}>
                    {asset.condition}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{asset.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}