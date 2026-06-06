import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { businessInfo } from '@/config/constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold uppercase mb-4">
              Progressive <span className="text-amber-500">Chauffeurs</span>
            </h3>
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
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Dispatch</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {businessInfo.phones.map((p, i) => (
                <li key={i} className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-amber-500" />
                  <a href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-white transition">{p}</a>
                </li>
              ))}
              <li className="flex items-center pt-2">
                <Mail className="w-4 h-4 mr-3 text-amber-500" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition">{businessInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. Fully Licensed & Insured SPSV Operator.</p>
        </div>
      </div>
    </footer>
  );
};
