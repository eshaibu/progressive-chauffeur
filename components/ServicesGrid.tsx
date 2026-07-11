import React from 'react';
import { Plane, Map, Briefcase, Heart, CheckCircle2 } from 'lucide-react';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Executive Airport Transfers",
      icon: <Plane className="w-8 h-8" />,
      desc: "Dublin Airport transfers with fixed premium pricing and full flight tracking.",
      details: ["Punctual Meet & Greet", "Live Flight Tracking", "Direct Passenger Comms", "Comfort Guarantee"]
    },
    {
      title: "Private Day Tours",
      icon: <Map className="w-8 h-8" />,
      desc: "Scenic day tours across Ireland, tailored to your exact pacing requirements.",
      details: ["Local Irish Knowledge", "Custom Day-Trip Routes", "V-Class Group Options", "Door-to-Door Service"]
    },
    {
      title: "Corporate Hire & Roadshows",
      icon: <Briefcase className="w-8 h-8" />,
      desc: "Dedicated daily or half-day transport packages for business VIPs.",
      details: ["Discreet & Reliable Drivers", "Seamless Route Planning", "Pristine Onboard Presentation", "Flexible Stops"]
    },
    {
      title: "Weddings & Celebrations",
      icon: <Heart className="w-8 h-8" />,
      desc: "Exquisite transport to frame your special occasions beautifully.",
      details: ["Immaculate Vehicles", "Polite Professional Dress", "Accurate Route Coordination", "Optional Ribbons"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Luxury Services</h2>
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
