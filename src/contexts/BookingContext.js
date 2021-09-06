import { createContext, useState } from "react";

const BookingContext = createContext();
export default BookingContext;

export function BookingProvider({ children }) {
  const [bookingData, setBookingData] = useState(null);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
}