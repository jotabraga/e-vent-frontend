import { createContext, useState, useEffect } from "react";
import BookingApi from "../../src/services/BookingApi";
import { toast } from "react-toastify";

const BookingContext = createContext();
export default BookingContext;

export function BookingProvider({ children }) {
  const [bookingData, setBookingData] = useState(null);
  const bookingApi = new BookingApi();

  useEffect(() => {
    const request = bookingApi.getBookingInfo();
    request.then((response) => {
      setBookingData(response.data);
    });
    request.catch(() => {
      toast("Não foi possível carregar os dados!");
    });
  }, []);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
}
