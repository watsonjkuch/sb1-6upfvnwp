import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { ClassroomAssetsDashboard } from '../components/dashboards/ClassroomAssetsDashboard';
import { OfficeAssetsDashboard } from '../components/dashboards/OfficeAssetsDashboard';
import { StaffRoomAssetsDashboard } from '../components/dashboards/StaffRoomAssetsDashboard';
import { LibraryAssetsDashboard } from '../components/dashboards/LibraryAssetsDashboard';
import { ComputerLabAssetsDashboard } from '../components/dashboards/ComputerLabAssetsDashboard';
import { OtherAssetsDashboard } from '../components/dashboards/OtherAssetsDashboard';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/assets/classroom-assets" element={<ClassroomAssetsDashboard />} />
      <Route path="/assets/office-assets" element={<OfficeAssetsDashboard />} />
      <Route path="/assets/staff-room-assets" element={<StaffRoomAssetsDashboard />} />
      <Route path="/assets/library-assets" element={<LibraryAssetsDashboard />} />
      <Route path="/assets/computer-lab-assets" element={<ComputerLabAssetsDashboard />} />
      <Route path="/assets/other-assets" element={<OtherAssetsDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}