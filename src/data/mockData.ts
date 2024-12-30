import { Asset, AssetCategory, Location, AssetStatus, AssetCondition } from '../types/assets';

export const assets: Asset[] = [
  // Classroom Assets
  {
    id: 'desk-001',
    name: 'Student Desk',
    category: AssetCategory.CLASSROOM,
    location: Location.CLASSROOM,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.GOOD,
    quantity: 150,
    classroom: { grade: 5, section: 'A' }
  },
  {
    id: 'chair-001',
    name: 'Student Chair',
    category: AssetCategory.CLASSROOM,
    location: Location.CLASSROOM,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.GOOD,
    quantity: 150,
    classroom: { grade: 5, section: 'A' }
  },
  // Office Assets
  {
    id: 'printer-001',
    name: 'Printing Machine',
    category: AssetCategory.OFFICE,
    location: Location.OFFICE,
    status: AssetStatus.AVAILABLE,
    condition: AssetCondition.EXCELLENT,
    quantity: 2
  },
  // Staff Room Assets
  {
    id: 'conf-table-001',
    name: 'Conference Table',
    category: AssetCategory.STAFF_ROOM,
    location: Location.STAFF_ROOM,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.EXCELLENT,
    quantity: 1
  },
  // Library Assets
  {
    id: 'bookshelf-001',
    name: 'Wooden Bookshelf',
    category: AssetCategory.LIBRARY,
    location: Location.LIBRARY,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.GOOD,
    quantity: 20
  },
  // Computer Lab Assets
  {
    id: 'computer-001',
    name: 'Desktop Computer',
    category: AssetCategory.COMPUTER_LAB,
    location: Location.COMPUTER_LAB,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.GOOD,
    quantity: 30
  },
  // Other Assets
  {
    id: 'projector-001',
    name: 'Portable Projector',
    category: AssetCategory.OTHER,
    location: Location.OTHER,
    status: AssetStatus.AVAILABLE,
    condition: AssetCondition.EXCELLENT,
    quantity: 5
  },
  {
    id: 'smartboard-001',
    name: 'Smart Board',
    category: AssetCategory.CLASSROOM,
    location: Location.CLASSROOM,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.EXCELLENT,
    quantity: 10,
    classroom: { grade: 6, section: 'B' }
  },
  {
    id: 'laptop-001',
    name: 'Teacher Laptops',
    category: AssetCategory.STAFF_ROOM,
    location: Location.STAFF_ROOM,
    status: AssetStatus.IN_USE,
    condition: AssetCondition.GOOD,
    quantity: 25
  }
];