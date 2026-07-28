const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const WEB3FORMS_ENDPOINT =
  "https://api.web3forms.com/submit";

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

type Web3FormsResponse = {
  success: boolean;
  message?: string;
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
*NEW RESERVATION REQUEST*

*GUEST DETAILS*
*Name:* ${guestName}
*Email:* ${guestEmail}
*Phone:* ${guestPhone}

*RESERVATION DETAILS*
*Vehicle:* ${carName}
*Service:* ${service}
*Date:* ${date}
*Time:* ${time}
*Passengers:* ${passengers}

*JOURNEY DETAILS*
*Pickup:* ${pickup}
*Drop-off:* ${dropoff}
${notes ? `\n*SPECIAL REQUEST*\n${notes}` : ""}

--------------------------------
_Automated reservation alert_
_A copy was also sent to progressivechauffeur@gmail.com_
`.trim();
};

export const createWhatsAppUrl = (
  driverPhone: string,
  message: string,
): string => {
  const cleanedPhone = driverPhone.replace(/\D/g, "");

  return `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(
    message,
  )}`;
};

export const sendBookingEmail = async (
  booking: BookingDetails,
): Promise<void> => {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error(
      "Web3Forms access key has not been configured.",
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,

      subject: `New booking request: ${booking.guestName} — ${booking.date}`,
      from_name: "Progressive Chauffeurs Website",

      email: booking.guestEmail,

      "Guest Name": booking.guestName,
      "Guest Email": booking.guestEmail,
      "Guest Phone": booking.guestPhone,

      Vehicle: booking.carName,
      "Driver Phone": booking.driverPhone,
      Service: booking.service,
      "Journey Date": booking.date,
      "Journey Time": booking.time,
      Passengers: booking.passengers,

      "Pickup Location": booking.pickup,
      "Drop-off Location": booking.dropoff,

      "Flight Number / Special Instructions":
        booking.notes.trim() ||
        "No special requests provided.",
    }),
  });

  const result =
    (await response.json()) as Web3FormsResponse;

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
      "We could not email the booking request.",
    );
  }
};

export const createBookingDispatch = (
  booking: BookingDetails,
) => {
  const whatsappMessage =
    createWhatsAppMessage(booking);

  return {
    whatsappMessage,
    whatsappUrl: createWhatsAppUrl(
      booking.driverPhone,
      whatsappMessage,
    ),
    sendEmail: () => sendBookingEmail(booking),
  };
};
