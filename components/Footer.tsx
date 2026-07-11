import React from 'react';
import { Mail } from 'lucide-react';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { businessInfo } from '@/config/constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          <div>
            {/* Updated BrandLogo usage with subtle backdrop */}
            <div className="inline-block bg-white/5 p-3 rounded-xl backdrop-blur-sm mb-4 border border-white/5">
              <BrandLogo src={businessInfo.logoDarkBgUrl} className="h-10 sm:h-14 w-auto" textClassName="text-white"/>
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Elite private chauffeur fleet based in Dublin. Specializing in executive transfers and luxury travel for individuals and groups.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <SocialIcon name="instagram" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <SocialIcon name="facebook" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <SocialIcon name="linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* The Fleet Footer Listing */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">The Fleet</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#fleet" className="hover:text-amber-500 transition">Mercedes-Benz V-Class</a></li>
              <li><a href="#fleet" className="hover:text-amber-500 transition">BMW 5 Series</a></li>
              <li><a href="#fleet" className="hover:text-amber-500 transition">Audi A6 Black 2023</a></li>
              <li><a href="#fleet" className="hover:text-amber-500 transition">Mercedes-Benz E-Class</a></li>
            </ul>
          </div>

          {/* Direct Vehicle Bookings */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Direct Vehicle Bookings</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {businessInfo.dispatch.map((item, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-xs text-slate-500">{item.name}</span>
                  <a href={`tel:${item.phone.replace(/\s+/g, '')}`} className="hover:text-amber-500 transition font-semibold text-white">
                    {item.phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center pt-2">
                <Mail className="w-4 h-4 mr-3 text-amber-500" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. Fully Licensed & Insured SPSV Operator.</p>
        </div>
      </div>
    </footer>
  );
};
