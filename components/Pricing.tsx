import React from 'react';

export const Pricing = () => {
  const pricing = [
    { cat: "Airport Transfers", price: "€90 – €120", sub: "Standard Sedan" },
    { cat: "MPV Airport Transfer", price: "€140 – €180", sub: "Mercedes V-Class" },
    { cat: "Half-Day Hire", price: "€280 – €350", sub: "4–5 Hours" },
    { cat: "Full-Day Tour", price: "€450 – €600", sub: "8–10 Hours" },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-slate-500">Competitive, fixed rates for all vehicle types.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricing.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:border-amber-200 transition">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">{p.cat}</span>
              <span className="text-2xl font-bold text-slate-900 mb-1">{p.price}</span>
              <span className="text-xs text-slate-400">{p.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
