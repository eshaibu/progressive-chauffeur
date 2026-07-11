"use client";

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { DispatchDropdown } from '@/components/ui/DispatchDropdown';
import { businessInfo } from '@/config/constants';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Our Fleet', href: '#fleet' },
  { name: 'Pricing', href: '#pricing' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <BrandLogo className="h-10 sm:h-14 w-auto" />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-amber-600 transition"
              >
                {link.name}
              </a>
            ))}

            <DispatchDropdown
              type="phone"
              label="Contact Us"
              icon={<Phone className="w-4 h-4 mr-2 text-amber-500" />}
              buttonClassName="flex items-center text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition shadow-md"
              dropdownClassName="right-0 w-72"
              menuLabel="Connect with Car Owner:"
            />
          </div>

          <button className="lg:hidden p-2 text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-slate-800 hover:text-amber-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Dispatch Contacts:</p>
            {businessInfo.dispatch.map((item, i) => (
              <div key={i} className="py-1">
                <span className="text-xs font-bold text-slate-500 block mb-0.5">{item.name}</span>
                <a href={`tel:${item.phone.replace(/\s+/g, '')}`} className="flex items-center text-amber-600 font-bold text-base hover:underline">
                  <Phone className="w-4 h-4 mr-2" /> {item.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
