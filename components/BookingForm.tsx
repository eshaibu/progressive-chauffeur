"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { fleet } from "@/config/constants";
import {
  createBookingDispatch,
  DEFAULT_CAR_NAME,
  DEFAULT_DRIVER_PHONE,
  type BookingDetails,
} from "@/utils/booking";

export const BookingForm = () => {
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingCar, setBookingCar] = useState("bmw");
  const [bookingService, setBookingService] = useState(
    "Airport Transfer",
  );
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingPickup, setBookingPickup] = useState("");
  const [bookingDropoff, setBookingDropoff] = useState("");
  const [bookingPassengers, setBookingPassengers] =
    useState("1");
  const [bookingNotes, setBookingNotes] = useState("");

  const [bookingSuccess, setBookingSuccess] =
    useState(false);
  const [bookingError, setBookingError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetBookingForm = () => {
    setBookingName("");
    setBookingEmail("");
    setBookingPhone("");
    setBookingCar("bmw");
    setBookingService("Airport Transfer");
    setBookingDate("");
    setBookingTime("");
    setBookingPickup("");
    setBookingDropoff("");
    setBookingPassengers("1");
    setBookingNotes("");
  };

  const handleBookingSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setBookingError("");

    const selectedCar = fleet.find(
      (car) => car.id === bookingCar,
    );

    const booking: BookingDetails = {
      guestName: bookingName,
      guestEmail: bookingEmail,
      guestPhone: bookingPhone,
      driverPhone:
        selectedCar?.phone ?? DEFAULT_DRIVER_PHONE,
      carName: selectedCar?.name ?? DEFAULT_CAR_NAME,
      service: bookingService,
      date: bookingDate,
      time: bookingTime,
      pickup: bookingPickup,
      dropoff: bookingDropoff,
      passengers: bookingPassengers,
      notes: bookingNotes,
    };

    const dispatch = createBookingDispatch(booking);

    /*
     * Opening the tab during the submit event helps prevent
     * browsers from blocking it as an unsolicited popup.
     */
    const whatsappWindow = window.open(
      "about:blank",
      "_blank",
    );

    try {
      await dispatch.sendEmail();

      setBookingSuccess(true);
      resetBookingForm();

      if (whatsappWindow) {
        whatsappWindow.opener = null;
        whatsappWindow.location.href = dispatch.whatsappUrl;
      } else {
        window.location.href = dispatch.whatsappUrl;
      }
    } catch (error) {
      if (whatsappWindow) {
        whatsappWindow.close();
      }

      console.error("Booking submission failed:", error);

      setBookingError(
        "We could not send the booking request. Please check your details and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="book-form"
      className="relative bg-slate-800 py-24 text-white"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Request a Booking Quote
          </h2>

          <p className="mx-auto max-w-xl text-sm text-slate-400">
            Submit your itinerary below. The request is
            instantly forwarded to the selected car&apos;s
            driver via WhatsApp and copied to our main office
            for verification.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-slate-700/60 shadow-2xl">
          {bookingSuccess ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                Booking Transmitted!
              </h3>

              <p className="mx-auto mb-8 max-w-md text-sm text-slate-300">
                Your itinerary has been emailed to our office
                and opened in WhatsApp so you can contact your
                selected driver directly.
              </p>

              <button
                type="button"
                onClick={() => {
                  setBookingSuccess(false);
                  setBookingError("");
                }}
                className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 transition hover:bg-amber-400"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleBookingSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Full Name
                  </label>

                  <input
                    type="text"
                    value={bookingName}
                    onChange={(event) =>
                      setBookingName(event.target.value)
                    }
                    placeholder="e.g. Liam Murphy"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={bookingEmail}
                    onChange={(event) =>
                      setBookingEmail(event.target.value)
                    }
                    placeholder="e.g. liam@company.com"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={bookingPhone}
                    onChange={(event) =>
                      setBookingPhone(event.target.value)
                    }
                    placeholder="e.g. +353 87 123 4567"
                    required
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Service Required
                  </label>

                  <select
                    value={bookingService}
                    onChange={(event) =>
                      setBookingService(event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Airport Transfer">
                      Airport Transfer
                    </option>
                    <option value="Corporate Hire">
                      Corporate Hire
                    </option>
                    <option value="Private Day Tour">
                      Private Day Tour
                    </option>
                    <option value="Wedding / Celebration">
                      Wedding / Event
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Select Chauffeur Vehicle
                  </label>

                  <select
                    value={bookingCar}
                    onChange={(event) =>
                      setBookingCar(event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  >
                    {fleet.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Passengers
                  </label>

                  <select
                    value={bookingPassengers}
                    onChange={(event) =>
                      setBookingPassengers(
                        event.target.value,
                      )
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">
                      3 Passengers (Max for Sedan)
                    </option>
                    <option value="4">
                      4 Passengers (Requires V-Class)
                    </option>
                    <option value="5">
                      5 Passengers (Requires V-Class)
                    </option>
                    <option value="6">
                      6 Passengers (Max V-Class)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Pickup Location
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 h-[18px] w-[18px] text-amber-500" />

                    <input
                      type="text"
                      value={bookingPickup}
                      onChange={(event) =>
                        setBookingPickup(event.target.value)
                      }
                      placeholder="e.g. Dublin Airport (Terminal 1)"
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3.5 pl-12 pr-4 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Drop-off Location
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 h-[18px] w-[18px] text-amber-500" />

                    <input
                      type="text"
                      value={bookingDropoff}
                      onChange={(event) =>
                        setBookingDropoff(
                          event.target.value,
                        )
                      }
                      placeholder="e.g. The Westin Hotel, Dublin"
                      required
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3.5 pl-12 pr-4 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Date of Journey
                  </label>

                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(event) =>
                      setBookingDate(event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Time of Journey
                  </label>

                  <input
                    type="time"
                    value={bookingTime}
                    onChange={(event) =>
                      setBookingTime(event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Flight Number &amp; Special Instructions
                </label>

                <textarea
                  rows={3}
                  value={bookingNotes}
                  onChange={(event) =>
                    setBookingNotes(event.target.value)
                  }
                  placeholder="e.g. Flight EI123 from Boston. Need infant seat. Corporate guest profile."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-white transition focus:border-amber-500 focus:outline-none"
                />
              </div>

              {bookingError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {bookingError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-xl bg-amber-500 py-4 text-sm font-bold uppercase tracking-wider text-slate-900 shadow-lg transition-all duration-300 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageSquare className="mr-2.5 h-5 w-5" />

                {isSubmitting
                  ? "Sending Request..."
                  : "Dispatch Secure Request via WhatsApp"}
              </button>

              <p className="mx-auto max-w-md text-center text-[10px] leading-relaxed text-slate-500">
                By submitting, the request is emailed to our
                office and prepared for delivery to the
                selected driver through WhatsApp. Standard
                rates are agreed upon dispatch.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
