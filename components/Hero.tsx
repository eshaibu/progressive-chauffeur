import React from 'react';
import { ShieldCheck, MessageSquare } from 'lucide-react';
import { businessInfo } from '@/config/constants';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#475569', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0f172a', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grad1)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Premium Fleet • Dublin • Nationwide</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Elite Chauffeur & <br/>
              <span className="text-amber-500 font-serif italic">Fleet</span> Hire
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              From pristine executive sedans to luxury multi-passenger carriers, we deliver reliable and discreet transport solutions tailored to elite schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${businessInfo.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition shadow-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
