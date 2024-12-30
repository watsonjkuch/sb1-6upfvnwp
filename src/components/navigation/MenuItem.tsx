import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  icon: React.ElementType;
  path?: string;
  subItems?: { label: string; path: string }[];
  onClick?: () => void;
}

export function MenuItem({ label, icon: Icon, path, subItems, onClick }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = path ? location.pathname === path : 
    subItems?.some(item => location.pathname === item.path);
  
  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (subItems) {
      setIsOpen(!isOpen);
    } else if (onClick) {
      onClick();
    }
  };
  
  return (
    <div className="mb-1">
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between px-2 py-3 rounded-lg hover:bg-gray-800 transition-colors ${
          isActive ? 'bg-gray-800 text-blue-400' : 'text-gray-300'
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </div>
        {subItems && (
          isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
        )}
      </button>
      
      {isOpen && subItems && (
        <div className="ml-4 mt-1 space-y-1">
          {subItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full text-left px-2 py-2 text-sm hover:text-white hover:bg-gray-800 rounded-lg ${
                location.pathname === item.path ? 'bg-gray-800 text-blue-400' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}