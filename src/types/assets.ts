import { Classroom } from './classroom';

export interface Asset {
  id: string;
  name: string;
  category: AssetCategory;
  location: Location;
  status: AssetStatus;
  condition: AssetCondition;
  quantity: number;
  classroom?: Classroom; // Optional classroom assignment
}

export enum AssetCategory {
  CLASSROOM = 'Classroom Assets',
  OFFICE = 'Office Assets',
  STAFF_ROOM = 'Staff Room Assets',
  LIBRARY = 'Library Assets',
  COMPUTER_LAB = 'Computer Lab Assets',
  OTHER = 'Other Assets'
}

export enum Location {
  CLASSROOM = 'Classroom',
  OFFICE = 'Principal Office',
  STAFF_ROOM = 'Staff Room',
  LIBRARY = 'Library',
  COMPUTER_LAB = 'Computer Lab',
  OTHER = 'Other'
}

export enum AssetStatus {
  AVAILABLE = 'Available',
  IN_USE = 'In Use',
  MAINTENANCE = 'Under Maintenance',
  DAMAGED = 'Damaged'
}

export enum AssetCondition {
  EXCELLENT = 'Excellent',
  GOOD = 'Good',
  FAIR = 'Fair',
  POOR = 'Poor'
}