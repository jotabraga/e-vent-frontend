import Payment from "./Payment";
import Booking from "./Booking";
import React from "react";
import { useState, useEffect, useContext } from "react";
import BookingApi from "../../../services/BookingApi";
import { toast } from "react-toastify";
import BookingContext from "../../../contexts/BookingContext";

export default function PaymentUserFlow() {
  const [isBooked, setIsBooked ] = useState(false);
  const bookingApi = new BookingApi();
  const { setBookingData } = useContext(BookingContext);

  useEffect(() => {
    const request = bookingApi.getBookingInfo();
    request.then((response) => {
      setBookingData(response.data);  
      if (response.data) return setIsBooked(true);
    });
    request.catch((error) => {
      toast.error("Não foi possível carregar os dados!");
    });
  }, []);

  return(
    <>      
      {isBooked ? (
        <Payment />
      ) : (
        <Booking setIsBooked={setIsBooked} />
      )}
    </>
  );
}
