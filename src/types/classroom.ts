// Grade and class types
export type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ClassSection = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 
                          'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export interface Classroom {
  grade: Grade;
  section: ClassSection;
}

// Utility type for asset assignment
export interface ClassroomAsset {
  classroomId: string; // Format: "grade-section" (e.g., "1-A")
  assetId: string;
  quantity: number;
}