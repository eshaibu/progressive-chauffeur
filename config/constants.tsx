import React from 'react';
import { Users, Car, ShieldCheck, Briefcase } from 'lucide-react';

export const businessInfo = {
  name: "Progressive Chauffeur Services",
  logoUrl: "", // Ensure this image is in your /public folder
  phones: [
    "+353 87 439 9772",
    "+353 87 133 1516",
    "+353 87 344 3633",
    "+353 89 983 8604"
  ],
  email: "info@progressivechauffeurs.ie",
  googleDescription: "Progressive Chauffeur Services provides premium private transfers, airport transfers, and corporate travel across Ireland. Our elite fleet includes the BMW 5 Series, Mercedes-Benz V-Class (MPV), Audi A6 Black 2023, and Mercedes E-Class.",
  hotelEmail: {
    subject: "Premium Private Chauffeur Fleet for Your Guests",
    body: `Dear Concierge / Guest Services Team,\n\nMy name is [Your Name] from Progressive Chauffeur Services. We are a Dublin-based executive transport provider offering a diverse fleet of luxury vehicles including the Mercedes V-Class, BMW 5 Series, and Audi A6.\n\nWe provide reliable, pristine, and discreet chauffeur services for airport transfers, corporate roadshows, and private day tours.\n\nWe would love to partner with your hotel to ensure your guests receive the highest standard of premium transport during their stay.\n\nKind regards,\nProgressive Chauffeur Services\nContact: +353 87 439 9772\nEmail: info@progressivechauffeurs.ie`
  }
};

export const fleet = [
  {
    id: "vClass",
    name: "Mercedes-Benz V-Class",
    type: "Business MPV / People Carrier",
    capacity: "6 Passengers",
    desc: "The pinnacle of luxury group travel. Pristine leather executive layout offering unparalleled workspace and relaxation on the move.",
    images: [
      { url: "/fleets/Mercedes-V-class-Front.webp", label: "Front" },
      { url: "/fleets/Mercedes-V-class-Back.webp", label: "Rear" },
      { url: "/fleets/Mercedes-V-class-Inside.webp", label: "VIP Cabin" }
    ],
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "bmw",
    name: "BMW 5 Series",
    type: "Executive Sedan",
    capacity: "4 Passengers",
    desc: "The gold standard for discreet, comfortable executive travel. Equipped with a sporty black leather interior and advanced climate control.",
    images: [
      { url: "/fleets/BMW-Front.webp", label: "Front" },
      { url: "/fleets/BMW-Back.webp", label: "Rear" },
      { url: "/fleets/BMW-Inside.webp", label: "Cabin" }
    ],
    icon: <Car className="w-5 h-5" />
  },
  {
    id: "mercedesE",
    name: "Mercedes-Benz E-Class",
    type: "Premium Sedan",
    capacity: "4 Passengers",
    desc: "An exceptional luxury saloon featuring a rare and breathtaking cream leather cabin design, ideal for high-profile business clients and VIPs.",
    images: [
      { url: "/fleets/Mercedes-E-class-Front.webp", label: "Front" },
      { url: "/fleets/Mercedes-E-class-Black.webp", label: "Rear" },
      { url: "/fleets/Mercedes-E-class-Inside.webp", label: "Cabin" }
    ],
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: "audiA6",
    name: "Audi A6 Black 2023",
    type: "Executive Sedan",
    capacity: "4 Passengers",
    desc: "A stunning, dark-themed sport luxury sedan with deep black contours, modern digital cockpit, and ultra-smooth highway cruising performance.",
    images: [
      { url: "/fleets/Audi-A6-Front.webp", label: "Front" },
      { url: "/fleets/Audi-A6-Back.webp", label: "Rear" },
      { url: "/fleets/Audi-A6-Inside.webp", label: "Cabin" }
    ],
    icon: <Briefcase className="w-5 h-5" />
  }
];
