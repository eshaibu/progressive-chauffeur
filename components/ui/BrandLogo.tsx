"use client";

import React, { useState } from 'react';
import { businessInfo } from '@/config/constants';

interface BrandLogoProps {
  src?: string;
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export const BrandLogo = ({
  src,
  className = "h-12 w-auto",
  textClassName = "text-slate-900",
  showText = true
}: BrandLogoProps) => {
  const [imageError, setImageError] = useState(false);

  const logoSource = src || businessInfo.logoUrl;

  if (logoSource && !imageError) {
    return (
      <img
        src={logoSource}
        alt={`${businessInfo.name} Logo`}
        className={`${className} object-contain`}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <div
        className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-950 rounded-lg flex items-center justify-center text-amber-500 font-bold text-xl shadow-lg border border-amber-500/20 shrink-0">
        P
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`text-lg font-bold tracking-tight uppercase ${textClassName}`}>
            Progressive
          </span>
          <span className="text-xs font-semibold tracking-[0.15em] text-amber-600 uppercase -mt-1">
            Chauffeur Services
          </span>
        </div>
      )}
    </div>
  );
};
