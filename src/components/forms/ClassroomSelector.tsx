import React from 'react';
import { Grade, ClassSection } from '../../types/classroom';
import { grades, classSections } from '../../utils/classroom';

interface ClassroomSelectorProps {
  selectedGrade?: Grade;
  selectedSection?: ClassSection;
  onChange: (grade: Grade | undefined, section: ClassSection | undefined) => void;
  required?: boolean;
}

export function ClassroomSelector({
  selectedGrade,
  selectedSection,
  onChange,
  required = false
}: ClassroomSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Grade</label>
        <select
          value={selectedGrade || ''}
          onChange={(e) => {
            const grade = e.target.value ? parseInt(e.target.value) as Grade : undefined;
            onChange(grade, undefined); // Reset section when grade changes
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required={required}
        >
          <option value="">Select Grade</option>
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              Grade {grade}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Section</label>
        <select
          value={selectedSection || ''}
          onChange={(e) => {
            const section = e.target.value ? e.target.value as ClassSection : undefined;
            onChange(selectedGrade, section);
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required={required}
          disabled={!selectedGrade}
        >
          <option value="">Select Section</option>
          {classSections.map((section) => (
            <option key={section} value={section}>
              Section {section}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}