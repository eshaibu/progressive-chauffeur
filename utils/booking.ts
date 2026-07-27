const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export const DEFAULT_DRIVER_PHONE = "+353874399772";
export const DEFAULT_CAR_NAME = "BMW 5 Series";

export type BookingDetails = {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  driverPhone: string;
  carName: string;
  service: string;
  date: string;
  time: string;
  pickup: string;
  dropoff: string;
  passengers: string;
  notes: string;
};

export const createWhatsAppMessage = ({
  guestName,
  guestEmail,
  guestPhone,
  carName,
  service,
  date,
  time,
  pickup,
  dropoff,
  passengers,
  notes,
}: BookingDetails): string => {
  return `
*🚘 NEW RESERVATION REQUEST*

*Guest Details*
👤 *Name:* ${guestName}
✉️ *Email:* ${guestEmail}
📞 *Phone:* ${guestPhone}

*Reservation Details*
🚗 *Vehicle:* ${carName}
🛎️ *Service:* ${service}
📅 *Date:* ${date}
🕒 *Time:* ${time}
👥 *Passengers:* ${passengers}

*Journey*
📍 *Pickup:* ${pickup}
🏁 *Drop-off:* ${dropoff}
${notes ? `\n📝 *Special Request:*\n${notes}` : ""}

━━━━━━━━━━━━━━━━━━━━
_Automated reservation alert_
_A confirmation was also sent to info@progressivechauffeurs.ie_
`.trim();
};

export const createWhatsAppUrl = (
  driverPhone: string,
  message: string,
): string => {
  const cleanedPhone = driverPhone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
};

export const sendBookingEmail = async (
  booking: BookingDetails,
): Promise<void> => {
  // if (
  //   !EMAILJS_SERVICE_ID ||
  //   !EMAILJS_TEMPLATE_ID ||
  //   !EMAILJS_PUBLIC_KEY
  // ) {
  //   throw new Error(
  //     "EmailJS environment variables have not been configured.",
  //   );
  // }
  //
  // await emailjs.send(
  //   EMAILJS_SERVICE_ID,
  //   EMAILJS_TEMPLATE_ID,
  //   {
  //     to_email: "info@progressivechauffeurs.ie",
  //
  //     driver_phone: booking.driverPhone,
  //     car_name: booking.carName,
  //
  //     guest_name: booking.guestName,
  //     guest_email: booking.guestEmail,
  //     guest_phone: booking.guestPhone,
  //
  //     booking_service: booking.service,
  //     booking_date: booking.date,
  //     booking_time: booking.time,
  //
  //     pickup: booking.pickup,
  //     dropoff: booking.dropoff,
  //     passengers: booking.passengers,
  //     notes: booking.notes || "No special requests provided.",
  //   },
  //   {
  //     publicKey: EMAILJS_PUBLIC_KEY,
  //   },
  // );
};

export const createBookingDispatch = (
  booking: BookingDetails,
) => {
  const whatsappMessage = createWhatsAppMessage(booking);

  return {
    whatsappMessage,
    whatsappUrl: createWhatsAppUrl(
      booking.driverPhone,
      whatsappMessage,
    ),
    sendEmail: () => sendBookingEmail(booking),
  };
};
