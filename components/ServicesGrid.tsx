import React from 'react';
import { Plane, Map, Briefcase, Heart } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    { title: "Executive Airport Transfers", icon: <Plane className="w-8 h-8" />, desc: "Dublin Airport to city & nationwide. Meet & greet service with fixed pricing." },
    { title: "Private Day Tours", icon: <Map className="w-8 h-8" />, desc: "Bespoke itineraries for Wicklow, Kilkenny, and the Cliffs of Moher." },
    { title: "Corporate & VIP Hire", icon: <Briefcase className="w-8 h-8" />, desc: "Discreet service for business meetings. MPV options for team travel." },
    { title: "Weddings & Events", icon: <Heart className="w-8 h-8" />, desc: "Elegant transport for your special day. Fleet options for guests." }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Our Premium Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-200/60 rounded-2xl hover:shadow-xl hover:border-amber-200 transition duration-300">
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
