import BookingApi from "../../../services/BookingApi";
import BookingContext from "../../../contexts/BookingContext";
import { useContext } from "react";

export default function Activities() {
  const { bookingData } = useContext(BookingContext);
  return <h1 onClick={() => console.log(bookingData)}>ATVIDIADE EM BREVE</h1>;
}
