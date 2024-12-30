import { Grade, ClassSection } from '../types/classroom';

// Generate array of grades from 1 to 12
export const grades: Grade[] = Array.from({ length: 12 }, (_, i) => (i + 1) as Grade);

// Generate array of class sections from A to Z
export const classSections: ClassSection[] = Array.from({ length: 26 }, (_, i) => 
  String.fromCharCode(65 + i) as ClassSection
);

// Format classroom ID
export const formatClassroomId = (grade: Grade, section: ClassSection): string => 
  `${grade}-${section}`;

// Parse classroom ID
export const parseClassroomId = (classroomId: string): { grade: Grade; section: ClassSection } => {
  const [grade, section] = classroomId.split('-');
  return {
    grade: parseInt(grade) as Grade,
    section: section as ClassSection
  };
};