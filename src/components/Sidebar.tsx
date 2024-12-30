import React from 'react';
import { 
  LayoutDashboard, BoxesIcon, UsersIcon, SettingsIcon, 
  BarChart3Icon, AlertCircleIcon
} from 'lucide-react';
import { MenuItem } from './navigation/MenuItem';
import { Logo } from './branding/Logo';
import { AssetCategory } from '../types/assets';

const menuItems = [
  { 
    icon: LayoutDashboard, 
    label: 'Dashboard',
    path: '/'
  },
  { 
    icon: BoxesIcon, 
    label: 'Assets',
    subItems: Object.values(AssetCategory).map(category => ({
      label: category,
      path: `/assets/${category.toLowerCase().replace(/ /g, '-')}`
    }))
  },
  { icon: UsersIcon, label: 'Users' },
  { 
    icon: BarChart3Icon, 
    label: 'Reports',
    subItems: [
      { label: 'Asset Summary', path: '/reports/summary' },
      { label: 'Usage Reports', path: '/reports/usage' },
      { label: 'Maintenance Log', path: '/reports/maintenance' },
    ]
  },
  { icon: AlertCircleIcon, label: 'Alerts' },
  { icon: SettingsIcon, label: 'Settings' }
];

interface SidebarProps {
  logoSrc?: string;
}

export function Sidebar({ logoSrc }: SidebarProps) {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <Logo src={logoSrc} />
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
}