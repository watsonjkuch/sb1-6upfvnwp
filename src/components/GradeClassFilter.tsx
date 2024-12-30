import React from 'react';
import { Grade, ClassSection } from '../types/classroom';
import { grades, classSections } from '../utils/classroom';

interface GradeClassFilterProps {
  selectedGrade?: Grade;
  selectedSection?: ClassSection;
  onFilterChange: (grade?: Grade, section?: ClassSection) => void;
}

export function GradeClassFilter({ 
  selectedGrade, 
  selectedSection, 
  onFilterChange 
}: GradeClassFilterProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Grade and Class</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
          <select
            value={selectedGrade || ''}
            onChange={(e) => {
              const grade = e.target.value ? parseInt(e.target.value) as Grade : undefined;
              onFilterChange(grade, selectedSection);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Grades</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
          <select
            value={selectedSection || ''}
            onChange={(e) => {
              const section = e.target.value as ClassSection || undefined;
              onFilterChange(selectedGrade, section);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Sections</option>
            {classSections.map((section) => (
              <option key={section} value={section}>
                Section {section}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}