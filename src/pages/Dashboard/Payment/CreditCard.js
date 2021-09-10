import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import  StyledCard  from "../../../components/Payment/StyledCard";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import BookingApi from "../../../services/BookingApi";
import BookingContext from "../../../contexts/BookingContext";
import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";
import checkCardData from "./Helpers/checkCardData";
import checkExpiryDate from "./Helpers/checkExpiryDate";

export default function CreditCard(props) {
  const bookingApi = new BookingApi();
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { bookingData, setBookingData } = useContext(BookingContext);
  const { setIsSendingInfo } = props;

  function handleChange(e, setter) {
    const discardedChars = [".", "/", "_"];
    setter(e.target.value.split("").filter(item => discardedChars.includes(item)===false).join(""));
  }

  function payBooking(e) {
    e.preventDefault();
    setIsSendingInfo(true);
    if (!checkCardData(number, name, cvc, expiry)) {
      toast.error("Dados do cartão preenchidos incorretamente");
      setIsSendingInfo(false);
      return;
    }

    if (!checkExpiryDate(String(expiry))) {
      toast.error("Data de validade inválida");
      setIsSendingInfo(false);
      return false;
    }
    const request = bookingApi.payBooking();
    request.then(() => {
      setBookingData( { ...bookingData, isPaid: true } );
      setIsSendingInfo(false);
      toast.success("Sua reserva foi paga com sucesso!");
    });
    request.catch((error) => {
      setIsSendingInfo(false);
      toast.error(error.response?.data?.message || "Algo deu errado. Tente mais tarde.");
    });               
  }

  return (
    <StyledCard>
      <div className="card-container">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
      </div>
      <form id="cc-form" onSubmit={payBooking}>      
        <div className="inputs-container">
          <InputMask 
            mask="9999.9999.9999.9999"
            value={number}
            onChange={(e) => handleChange(e, setNumber)}
            onFocus={(e) => setFocus(e.target.name)}
          >
            {(inputProps) => 
              <TextField
                {...inputProps}  
                variant="outlined"
                label="Card Number"
                error={false}
                helperText="Eg.: 49..., 51..., 36..., 37..."
                name="number"
                value={number}
                size = "small"
                required
              />
            }
          </InputMask>
          <TextField  
            style = {{ marginTop: 15 }}
            variant="outlined"
            label="Name"
            error={false}
            name="name"
            inputProps={{ maxLength: 30 }}
            value={name}
            onChange={(e) => handleChange(e, setName)}
            onFocus={(e) => setFocus(e.target.name)}
            size = "small"
            required
          />
          <div className="double-input">
            <InputMask 
              id = "valid"
              mask="99/99"
              value={expiry}
              onChange={(e) => handleChange(e, setExpiry)}
              onFocus={(e) => setFocus(e.target.name)}
            >
              {(inputProps) => 
                <TextField
                  {...inputProps}  
                  style = {{ marginTop: 15 }}
                  variant="outlined"
                  label="Valid Thru"
                  name="expiry"
                  value={expiry}
                  size = "small"
                  required
                />
              }
            </InputMask>
            <TextField  
              style = {{ marginTop: 15 }}
              id="cvc"
              name="cvc"
              variant="outlined"
              label="CVC"
              error={false}
              value={cvc}
              inputProps={{ maxLength: 3 }}
              onChange={(e) => handleChange(e, setCvc)}
              onFocus={(e) => setFocus(e.target.name)}
              size = "small"
              required
            />
          </div>
        </div>
      </form>
    </StyledCard>
  );
};

