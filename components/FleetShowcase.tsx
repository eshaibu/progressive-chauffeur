"use client";

import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { fleet } from '@/config/constants';

export const FleetShowcase = () => {
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleImageSelect = (carId: string, index: number) => {
    setActiveImageIndices(prev => ({ ...prev, [carId]: index }));
  };

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Elite Fleet</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {fleet.map((car) => {
            const activeIndex = activeImageIndices[car.id] || 0;
            const currentImg = car.images[activeIndex]?.url;

            return (
              <div key={car.id} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/60 shadow-md">
                <div className="relative overflow-hidden bg-slate-950 aspect-[4/3] flex items-center justify-center">
                  <img src={currentImg} alt={car.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setLightboxImage(currentImg)}
                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white shadow"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  {car.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 px-4 z-10">
                      {car.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => handleImageSelect(car.id, i)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                            activeIndex === i ? 'bg-amber-500 text-slate-900' : 'bg-slate-900/80 text-white'
                          }`}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{car.name}</h3>
                    <div className="flex items-center text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {car.icon}
                      <span className="ml-1.5">{car.capacity}</span>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{car.type}</p>
                  <p className="text-slate-600 text-sm mb-6">{car.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white bg-slate-900/50 p-3 rounded-full hover:text-amber-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={lightboxImage} alt="Enlarged Fleet Vehicle" className="max-w-full max-h-[85vh] object-contain rounded-xl" />
        </div>
      )}
    </section>
  );
};
