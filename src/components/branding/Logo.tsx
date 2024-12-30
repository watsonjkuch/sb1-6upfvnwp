import React from 'react';

interface LogoProps {
  src?: string;
}

export function Logo({ src }: LogoProps) {
  // If no custom logo is provided, use a default styled text
  if (!src) {
    return (
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="text-xl font-bold text-white">Asset Manager</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-2">
      <img src={src} alt="Logo" className="w-8 h-8 object-contain" />
      <span className="text-xl font-bold text-white">Asset Manager</span>
    </div>
  );
}