import React, { useState } from 'react';
import { Asset, AssetCategory } from '../types/assets';
import { AssetTable } from './AssetTable';
import { Modal } from './modals/Modal';
import { AssetForm } from './forms/AssetForm';
import { useAssets } from '../context/AssetContext';
import { PlusIcon, Pencil, Trash2 } from 'lucide-react';

interface CategoryAssetsProps {
  category: AssetCategory;
}

export function CategoryAssets({ category }: CategoryAssetsProps) {
  const { assets, deleteAsset } = useAssets();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<Asset | undefined>();

  const categoryAssets = assets.filter(asset => asset.category === category);

  const handleEdit = (asset: Asset) => {
    setEditingAsset(asset);
    setIsModalOpen(true);
  };

  const handleDelete = (assetId: string) => {
    if (window.confirm('Are you sure you want to delete this asset?')) {
      deleteAsset(assetId);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAsset(undefined);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{category}</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add {category}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categoryAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${asset.status === 'Available' ? 'bg-green-100 text-green-800' :
                      asset.status === 'In Use' ? 'bg-blue-100 text-blue-800' :
                      asset.status === 'Under Maintenance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${asset.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                      asset.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                      asset.condition === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'}`}>
                      {asset.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(asset)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(asset.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${editingAsset ? 'Edit' : 'Add'} ${category}`}
      >
        <AssetForm
          initialData={editingAsset}
          onClose={handleCloseModal}
          defaultCategory={category}
        />
      </Modal>
    </div>
  );
}