import Payment from "./Payment";
import Booking from "./Booking";
import React from "react";
import { useContext } from "react";
import BookingContext from "../../../contexts/BookingContext";

export default function PaymentUserFlow() {
  const { bookingData } = useContext(BookingContext);

  return(
    <>      
      {bookingData.isPaid !== undefined ? (
        <Payment />
      ) : (
        <Booking />
      )}
    </>
  );
}
