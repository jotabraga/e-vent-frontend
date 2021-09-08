import Payment from "./Payment";
import Booking from "./Booking";
import React from "react";
import { useState } from "react";

export default function PaymentUserFlow() {
  const [isBooked, setIsBooked ] = useState(false);

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
