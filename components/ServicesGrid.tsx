import React from 'react';
import { Plane, Map, Briefcase, Heart, CheckCircle2 } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Executive Airport Transfers",
      icon: <Plane className="w-8 h-8" />,
      desc: "Dublin Airport to city & nationwide. Meet & greet service with fixed pricing.",
      details: ["Meet & Greet", "Flight Tracking", "Fixed Pricing", "Large Fleet Availability"]
    },
    {
      title: "Private Day Tours",
      icon: <Map className="w-8 h-8" />,
      desc: "Bespoke itineraries for Wicklow, Kilkenny, and the Cliffs of Moher.",
      details: ["V-Class Group Tours", "Local Knowledge", "Custom Routes", "Door-to-Door"]
    },
    {
      title: "Corporate & VIP Hire",
      icon: <Briefcase className="w-8 h-8" />,
      desc: "Discreet service for business meetings. MPV options for team travel.",
      details: ["Hourly/Daily Rates", "Privacy Guaranteed", "Punctuality First", "Wait & Return"]
    },
    {
      title: "Weddings & Events",
      icon: <Heart className="w-8 h-8" />,
      desc: "Elegant transport for your special day. Fleet options for guests.",
      details: ["Bridal Car (E-Class)", "Guest MPVs (V-Class)", "Polite Chauffeurs", "Bespoke Ribbons"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group p-8 bg-white border border-slate-200/60 rounded-2xl hover:shadow-xl hover:border-amber-200 transition duration-300 flex flex-col">
              <div className="w-16 h-16 bg-slate-50 shadow-sm rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{s.desc}</p>

              <ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
                {s.details.map((d, i) => (
                  <li key={i} className="flex items-center text-xs font-semibold text-slate-500">
                    <CheckCircle2 className="w-3 h-3 text-amber-500 mr-2" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
