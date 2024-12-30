import React from 'react';
import { Asset, AssetCategory, Location, AssetStatus, AssetCondition } from '../../types/assets';
import { Grade, ClassSection } from '../../types/classroom';
import { useAssets } from '../../context/AssetContext';
import { ClassroomSelector } from './ClassroomSelector';

interface AssetFormProps {
  initialData?: Asset;
  onClose: () => void;
  defaultCategory?: AssetCategory;
}

export function AssetForm({ initialData, onClose, defaultCategory }: AssetFormProps) {
  const { addAsset, updateAsset } = useAssets();
  const [formData, setFormData] = React.useState<Partial<Asset>>(
    initialData || {
      name: '',
      category: defaultCategory || AssetCategory.CLASSROOM,
      location: Location.CLASSROOM,
      status: AssetStatus.AVAILABLE,
      condition: AssetCondition.GOOD,
      quantity: 1,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAsset: Asset = {
      id: initialData?.id || `asset-${Date.now()}`,
      ...formData as Omit<Asset, 'id'>
    };
    
    if (initialData) {
      updateAsset(newAsset);
    } else {
      addAsset(newAsset);
    }
    onClose();
  };

  const handleClassroomChange = (grade: Grade | undefined, section: ClassSection | undefined) => {
    setFormData(prev => ({
      ...prev,
      classroom: grade && section ? { grade, section } : undefined
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {!defaultCategory && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as AssetCategory })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {Object.values(AssetCategory).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      )}

      {(formData.category === AssetCategory.CLASSROOM || defaultCategory === AssetCategory.CLASSROOM) && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Assign to Classroom</label>
          <ClassroomSelector
            selectedGrade={formData.classroom?.grade}
            selectedSection={formData.classroom?.section}
            onChange={handleClassroomChange}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <select
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value as Location })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {Object.values(Location).map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as AssetStatus })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {Object.values(AssetStatus).map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Condition</label>
        <select
          value={formData.condition}
          onChange={(e) => setFormData({ ...formData, condition: e.target.value as AssetCondition })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {Object.values(AssetCondition).map((condition) => (
            <option key={condition} value={condition}>{condition}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          min="1"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          {initialData ? 'Update' : 'Add'} Asset
        </button>
      </div>
    </form>
  );
}