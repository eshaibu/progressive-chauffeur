"use client";

import React, { useState } from 'react';
import { Briefcase, Copy, CheckCircle2 } from 'lucide-react';
import { businessInfo } from "@/config/constants";

export const PartnerToolkit = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, section: string) => {
    // Basic copy fallback for better browser support
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <section id="toolkit" className="py-24 bg-amber-50 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-8">
          <Briefcase className="w-8 h-8 text-amber-600" />
          <h2 className="text-3xl font-bold text-slate-900">Partner Portal</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold mb-1 text-slate-900">Google Business Description</h3>
              <button
                onClick={() => handleCopy(businessInfo.googleDescription, 'google')}
                className="p-2 bg-slate-50 hover:bg-amber-100 rounded-lg text-amber-600 transition"
                aria-label="Copy Description"
              >
                {copiedSection === 'google' ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-600 border border-slate-100 italic leading-relaxed">
              "{businessInfo.googleDescription}"
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-200">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold mb-1 text-slate-900">Hotel Pitch Email</h3>
              <button
                onClick={() => handleCopy(businessInfo.hotelEmail.body, 'email')}
                className="p-2 bg-slate-50 hover:bg-amber-100 rounded-lg text-amber-600 transition"
                aria-label="Copy Email"
              >
                {copiedSection === 'email' ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-100 max-h-48 overflow-y-auto whitespace-pre-line leading-relaxed">
              {businessInfo.hotelEmail.body}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
