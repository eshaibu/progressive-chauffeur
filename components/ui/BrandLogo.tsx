"use client";

import React, { useState } from 'react';

interface BrandLogoProps {
  src: string;
  className?: string;
}

export const BrandLogo = ({ src, className }: BrandLogoProps) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg flex items-center justify-center text-amber-500 font-bold text-xl shadow-lg border border-amber-500/20">
          P
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="Progressive Chauffeur Logo"
      className={className}
      onError={() => setError(true)}
    />
  );
};
