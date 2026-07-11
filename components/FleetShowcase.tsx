"use client";

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Phone, Luggage } from 'lucide-react';
import { fleet } from '@/config/constants';

export const FleetShowcase = () => {
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  // Store both the car ID and the current image index for the lightbox
  const [lightboxData, setLightboxData] = useState<{ carId: string; index: number } | null>(null);

  const handleImageSelect = (carId: string, index: number) => {
    setActiveImageIndices(prev => ({ ...prev, [carId]: index }));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxData) return;
    const car = fleet.find(c => c.id === lightboxData.carId);
    if (car) {
      setLightboxData({
        carId: car.id,
        index: (lightboxData.index + 1) % car.images.length
      });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxData) return;
    const car = fleet.find(c => c.id === lightboxData.carId);
    if (car) {
      setLightboxData({
        carId: car.id,
        index: (lightboxData.index - 1 + car.images.length) % car.images.length
      });
    }
  };

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Elite Operating Fleet</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Inspect our licensed, meticulously clean executive fleet. Select your preferred vehicle and connect directly with the driver.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {fleet.map((car) => {
            const activeIndex = activeImageIndices[car.id] || 0;
            const currentImg = car.images[activeIndex]?.url;

            return (
              <div key={car.id} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">

                <div className="relative bg-slate-950 flex items-center justify-center h-64 sm:h-72 lg:h-80 w-full overflow-hidden group">
                  <img
                    src={currentImg}
                    alt={`${car.name} - ${car.images[activeIndex]?.label}`}
                    className="w-auto h-full max-w-full object-contain transition-opacity duration-300"
                  />

                  {/* Shadow Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Left overlay tag */}
                  <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow">
                    Actual Vehicle
                  </div>

                  <button
                    onClick={() => setLightboxData({ carId: car.id, index: activeIndex })}
                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/35 backdrop-blur-md p-2 rounded-full text-white shadow opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
                    aria-label="View enlarged image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {car.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 px-4 z-10">
                      {car.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => handleImageSelect(car.id, i)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                            activeIndex === i
                              ? 'bg-amber-50 text-slate-900 shadow-md scale-105'
                              : 'bg-slate-900/80 text-white hover:bg-slate-900'
                          }`}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">{car.name}</h3>
                      <div className="inline-flex items-center text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full self-start">
                        {car.icon}
                        <span className="ml-1.5">{car.capacity}</span>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{car.type}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{car.desc}</p>

                    {/* Space allocation metrics */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/60 mb-6 space-y-3">
                      <div className="flex items-center text-xs text-slate-700 font-semibold">
                        <Luggage className="w-4 h-4 text-amber-500 mr-2.5 shrink-0" />
                        <span>Luggage Capacity: {car.luggage || "2 Standard Bags & 2 Hand Luggage"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct phone route trigger */}
                  <div className="pt-6 border-t border-slate-200/60">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Direct Booking Number:</p>
                    <a
                      href={`tel:${car.phone?.replace(/\s+/g, '')}`}
                      className="inline-flex items-center w-full justify-between bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold p-4 rounded-xl transition duration-300"
                    >
                      <span className="text-sm font-bold tracking-tight">Call {car.name} Driver</span>
                      <div className="flex items-center font-mono text-sm gap-2">
                        <Phone className="w-4 h-4" />
                        {car.phone}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxData && (() => {
        const activeCar = fleet.find(c => c.id === lightboxData.carId);
        if (!activeCar) return null;
        const currentImg = activeCar.images[lightboxData.index];

        return (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxData(null)}
          >
            <button
              onClick={() => setLightboxData(null)}
              className="absolute top-6 right-6 text-white bg-slate-900/50 p-3 rounded-full hover:text-amber-500 transition-colors z-[101]"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white bg-slate-900/50 p-3 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-colors z-[101]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImg.url}
                alt={`${activeCar.name} - ${currentImg.label}`}
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />

              <div className="absolute bottom-8 text-sm font-medium text-white bg-black/60 px-5 py-2 rounded-full backdrop-blur-md">
                {currentImg.label} ({lightboxData.index + 1} / {activeCar.images.length})
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white bg-slate-900/50 p-3 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-colors z-[101]"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        );
      })()}
    </section>
  );
};
