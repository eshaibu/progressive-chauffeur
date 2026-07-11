import React from 'react';
import { Users } from 'lucide-react';

export const businessInfo = {
  name: "Progressive Chauffeur Services",
  // logoUrl: "", // Ensure this image is in your /public folder
  logoUrl: "/progressive_chauffeur_logo.png",
  logoDarkBgUrl: "/progressive_chauffeur_logo_dark.png",
  logoShieldUrl: "/progressive_chauffeur_shield.png",
  dispatch: [
    { name: "Mercedes-Benz V-Class", phone: "+353 87 133 1516", tag: "6 Passengers Space" },
    { name: "BMW 5 Series", phone: "+353 87 439 9772", tag: "Premium Executive Comfort" },
    { name: "Mercedes-Benz E-Class", phone: "+353 89 983 8604", tag: "Cream Leather Interior" },
    { name: "Audi A6 Black 2023", phone: "+353 87 344 3633", tag: "Sport Executive Elegance" }
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
    luggage: "Generous high-capacity storage for baggage and gear",
    phone: "+353 87 133 1516",
    desc: "The gold standard for group travel. Features a spacious leather layout with ample executive workspace for up to six passengers.",
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
    capacity: "3 Passengers",
    luggage: "2 Standard Bags & 2 Hand Luggage",
    phone: "+353 87 439 9772",
    desc: "Discreet and luxurious executive travel. Sports dark performance aesthetics, customized leather seating, and advanced climate zones.",
    images: [
      { url: "/fleets/BMW-Front.webp", label: "Front" },
      { url: "/fleets/BMW-Back.webp", label: "Rear" },
      { url: "/fleets/BMW-Inside.webp", label: "Cabin" }
    ],
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "mercedesE",
    name: "Mercedes-Benz E-Class",
    type: "Premium Sedan",
    capacity: "3 Passengers",
    luggage: "2 Standard Bags & 2 Hand Luggage",
    phone: "+353 89 983 8604",
    desc: "Impeccable executive travel. Outfitted with a premium cream leather interior cabin designed for VIP comfort.",
    images: [
      { url: "/fleets/Mercedes-E-class-Front.webp", label: "Front" },
      { url: "/fleets/Mercedes-E-class-Black.webp", label: "Rear" },
      { url: "/fleets/Mercedes-E-class-Inside.webp", label: "Cabin" }
    ],
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "audiA6",
    name: "Audi A6 Black 2023",
    type: "Executive Sedan",
    capacity: "3 Passengers",
    luggage: "2 Standard Bags & 2 Hand Luggage",
    phone: "+353 87 344 3633",
    desc: "The pinnacle of modern executive performance. Features sleek blacked-out accents, digital cockpit, and dynamic highway control.",
    images: [
      { url: "/fleets/Audi-A6-Front.webp", label: "Front" },
      { url: "/fleets/Audi-A6-Back.webp", label: "Rear" },
      { url: "/fleets/Audi-A6-Inside.webp", label: "Cabin" }
    ],
    icon: <Users className="w-5 h-5" />
  }
];
