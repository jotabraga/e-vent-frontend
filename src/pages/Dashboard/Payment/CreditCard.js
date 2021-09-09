import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import StyledCard from "../../../components/Payment/StyledCard";
import { useState, useContext } from "react";
import OrderButton from "../../../components/Payment/OrderButton";
import { toast } from "react-toastify";
import BookingApi from "../../../services/BookingApi";
import BookingContext from "../../../contexts/BookingContext";

export default function CreditCard(props) {
  const bookingApi = new BookingApi();
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { bookingData, setBookingData } = useContext(BookingContext);

  function handleInputFocus(e) {
    setFocused(e.target.name);
  };

  function payBooking(e) {
    e.preventDefault();
    const request = bookingApi.payBooking();
    request.then(() => {
      setBookingData( { ...bookingData, isPaid: true } );
      toast.success("Sua reserva foi paga com sucesso!");
    });
    request.catch((error) => {
      toast.error(error.response?.data?.message || "Algo deu errado. Tente mais tarde.");
    });               
  }

  return (
    <StyledCard>
      <form onSubmit={payBooking}>
        <div className="payment">
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focused}
            name={name}
            number={number}
          />
          <div className="inputs">
            <input
              minLength="16"
              maxLength="16"
              required
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={handleInputFocus}
            />
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleInputFocus}
            />
            <div className="double">
              <input
                minLength="4"
                maxLength="5"
                required
                type="text"
                name="expiry"
                placeholder="Valid Thru"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={handleInputFocus}
              />
              <input
                minLength="3"
                maxLength="3"
                required
                type="number"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </div>
        <OrderButton pay={true} type="submit" >
          FINALIZAR PAGAMENTO
        </OrderButton>
      </form>
    </StyledCard>
  );
};
