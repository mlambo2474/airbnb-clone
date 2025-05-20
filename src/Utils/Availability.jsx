// src/utils/availability.js
export const isListingAvailable = (listingId, startDate, endDate, bookings) => {
  if (!startDate || !endDate) return true;

  const selectedStart = new Date(startDate);
  const selectedEnd = new Date(endDate);

  return !bookings.some((booking) => {
    if (booking.listingId !== listingId) return false;

    const bookingStart = new Date(booking.startDate);
    const bookingEnd = new Date(booking.endDate);

    return selectedStart <= bookingEnd && selectedEnd >= bookingStart;
  });
};