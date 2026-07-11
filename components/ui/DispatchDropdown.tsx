"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { businessInfo } from '@/config/constants';

interface DispatchDropdownProps {
  type: 'phone' | 'whatsapp';
  label: string;
  icon?: React.ReactNode;
  wrapperClassName?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  chevronClassName?: string;
  menuLabel?: string;
}

export const DispatchDropdown = ({
   type,
   label,
   icon,
   wrapperClassName = "",
   buttonClassName = "",
   dropdownClassName = "left-0 w-full",
   chevronClassName = "w-4 h-4",
   menuLabel
 }: DispatchDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // This brilliantly handles closing the dropdown when clicking anywhere else
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const defaultMenuLabel = type === 'whatsapp' ? "Message Driver Directly:" : "Call Driver Directly:";
  const finalMenuLabel = menuLabel || defaultMenuLabel;

  return (
    <div className={`relative ${wrapperClassName}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName}
      >
        {icon}
        {label}
        <ChevronDown className={`ml-2 transition-transform duration-200 ${chevronClassName} ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-2 bg-white text-slate-900 rounded-xl shadow-2xl py-2 z-50 text-left ${dropdownClassName}`}>
          <p className="text-[10px] font-bold text-slate-400 px-4 pb-2 border-b border-slate-100 uppercase tracking-widest">
            {finalMenuLabel}
          </p>
          {businessInfo.dispatch.map((item, i) => {
            const cleanPhone = item.phone.replace(/\s+/g, '');
            const href = type === 'whatsapp' ? `https://wa.me/${cleanPhone}` : `tel:${cleanPhone}`;
            const targetProps = type === 'whatsapp' ? { target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <a
                key={i}
                href={href}
                {...targetProps}
                className="block px-4 py-2 hover:bg-amber-50 text-sm font-bold border-b border-slate-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xs text-slate-500 block font-normal">{item.name}</span>
                <div className="flex items-center mt-0.5 text-slate-900 font-bold">
                  {type === 'phone' && <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-600" />}
                  {item.phone}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
