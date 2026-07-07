"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { businessInfo } from '@/config/constants';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Our Fleet', href: '#fleet' },
  { name: 'Pricing', href: '#pricing' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPhoneList, setShowPhoneList] = useState(false);

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
            <div className="relative">
              <button
                onClick={() => setShowPhoneList(!showPhoneList)}
                className="flex items-center text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition shadow-md"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${showPhoneList ? 'rotate-180' : ''}`} />
              </button>
              {showPhoneList && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-[60]">
                  {businessInfo.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone}`} className="flex items-center px-4 py-3 hover:bg-slate-50 text-sm font-medium text-slate-700 transition border-b border-slate-50 last:border-0">
                      <Phone className="w-4 h-4 mr-3 text-amber-600" />
                      {phone}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
        </div>
      )}
    </nav>
  );
};
