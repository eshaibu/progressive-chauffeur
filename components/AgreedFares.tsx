import React from 'react';
import { Map, MessageSquare, ShieldCheck } from 'lucide-react';
import { DispatchDropdown } from '@/components/ui/DispatchDropdown';

export const AgreedFares = () => {
  const agreedFares = [
    { car: "BMW 5 Series", airport: "€50", outside: "€80", tag: "Premium Sport" },
    { car: "Audi A6 Black 2023", airport: "€50", outside: "€80", tag: "Sleek Performance" },
    { car: "Mercedes-Benz E-Class", airport: "€70", outside: "€90", tag: "Cream Leather Cabin" },
    { car: "Mercedes-Benz V-Class", airport: "€70", outside: "€80", tag: "6 Passengers Luxury" }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Corporate & Organisation Rates</h2>
          <p className="text-slate-500">Fixed schedules agreed for Dublin airport transit and major city transfers.</p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {agreedFares.map((fare, idx) => (
            <div key={idx}
                 className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-2">{fare.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4">{fare.car}</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-semibold leading-tight">Airport ↔ City Center</span>
                    <span className="text-base font-bold text-slate-900">{fare.airport}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-semibold leading-tight">Outside Journeys</span>
                    <span className="text-base font-bold text-slate-900">{fare.outside}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/40 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bray, Kilcock, K Club, Naas</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-12 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 shrink-0">
            <ShieldCheck className="w-5 h-5"/>
          </span>
          <p className="text-sm font-medium text-slate-700">
            <span className="font-bold text-slate-900">Road Toll Policy:</span> Please note that any standard route toll
            charges incurred during transit are payable by the customer/passenger and will be added to the final journey
            charge.
          </p>
        </div>

        {/* Inter City Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 relative shadow-lg max-w-5xl mx-auto">

          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <Map className="w-80 h-80 text-amber-500"/>
            </div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 block animate-pulse">Long Distance Airport Transfers</span>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Inter-City Travel Packages</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Smooth, luxurious nationwide journeys departing from Dublin Airport. Fully tailored schedules with complete wait-and-return flexibility. Rates are highly customized and negotiated based on stops.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase">To Cork</span>
                  <span className="text-lg font-bold text-amber-500">€350</span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase">To Galway</span>
                  <span className="text-lg font-bold text-amber-500">€270</span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase">To Limerick</span>
                  <span className="text-lg font-bold text-amber-500">€270</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <DispatchDropdown
                type="whatsapp"
                label="Negotiate Custom Route"
                icon={<MessageSquare className="w-4 h-4 mr-2" />}
                wrapperClassName="w-full sm:w-auto"
                buttonClassName="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition"
                dropdownClassName="right-0 mt-2 w-full sm:w-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
