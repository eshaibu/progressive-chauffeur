import React from 'react';
import { ShieldCheck, Map, MessageSquare } from 'lucide-react';
import { businessInfo } from '@/config/constants';

export const AgreedFares = () => {
  const agreedFares = [
    { tag: "Standard Executive", car: "BMW 5 Series / Audi A6", airport: "€90", outside: "€110" },
    { tag: "Premium Executive", car: "Mercedes E-Class", airport: "€100", outside: "€120" },
    { tag: "Luxury Carrier", car: "Mercedes V-Class", airport: "€140", outside: "€160" },
    { tag: "Hourly Rate", car: "As Directed", airport: "€70/hr", outside: "€70/hr" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Agreed Corporate & Organization Fares</h2>
          <p className="text-slate-500">Fixed-rate schedule agreed for organization transfers and routes.</p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agreedFares.map((fare, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-2">{fare.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4">{fare.car}</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-semibold leading-tight">Airport ↔ City Center</span>
                    <span className="text-base font-bold text-slate-900">{fare.airport}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-semibold leading-tight">Outside City Center</span>
                    <span className="text-base font-bold text-slate-900">{fare.outside}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/40 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fixed Route Rate</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-12 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <p className="text-sm font-medium text-slate-700">
            <span className="font-bold text-slate-900">Road Toll Policy:</span> Please note that any standard route toll charges incurred during transit are payable by the customer/passenger and will be added to the final journey charge.
          </p>
        </div>

        {/* Inter City Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 relative overflow-hidden shadow-lg max-w-5xl mx-auto">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
            <Map className="w-80 h-80 text-amber-500" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 block">Nationwide Journeys</span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Inter-City Travel</h3>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                Long-distance or multi-city travel between Dublin and nationwide points. Pricing depends strictly on route negotiation. Contact our dispatch team for a custom quote.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={`https://wa.me/${businessInfo.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Negotiate Inter-City Rate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
