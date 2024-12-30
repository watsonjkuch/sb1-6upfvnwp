import React, { useState } from 'react';
import { AssetStats } from './AssetStats';
import { AssetTable } from './AssetTable';
import { Modal } from './modals/Modal';
import { AssetForm } from './forms/AssetForm';
import { GradeClassFilter } from './GradeClassFilter';
import { AssetDistributionChart } from './charts/AssetDistributionChart';
import { useAssets } from '../context/AssetContext';
import { PlusIcon } from 'lucide-react';
import { Grade, ClassSection } from '../types/classroom';

export function Dashboard() {
  const { assets } = useAssets();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<Grade | undefined>();
  const [selectedSection, setSelectedSection] = useState<ClassSection | undefined>();

  const filteredAssets = assets.filter(asset => {
    if (!selectedGrade && !selectedSection) return true;
    if (!asset.classroom) return false;
    
    const gradeMatch = !selectedGrade || asset.classroom.grade === selectedGrade;
    const sectionMatch = !selectedSection || asset.classroom.section === selectedSection;
    
    return gradeMatch && sectionMatch;
  });

  const handleFilterChange = (grade?: Grade, section?: ClassSection) => {
    setSelectedGrade(grade);
    setSelectedSection(section);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">School Asset Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Asset
        </button>
      </div>
      
      <GradeClassFilter
        selectedGrade={selectedGrade}
        selectedSection={selectedSection}
        onFilterChange={handleFilterChange}
      />
      
      <AssetStats assets={filteredAssets} />
      
      <div className="mb-6">
        <AssetDistributionChart assets={filteredAssets} />
      </div>
      
      <AssetTable assets={filteredAssets} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Asset"
      >
        <AssetForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}