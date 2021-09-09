import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import StyledCard from "../../../components/Payment/StyledCard";
import { useState } from "react";

export default function CreditCard(props) {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleInputFocus(e) {
    setFocused(e.target.name);
  };

  function payTheBill(e) {
    e.preventDefault();
  };

  return (
    <StyledCard>
      <form onSubmit={payTheBill}>
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
              minlength="16"
              maxlength="16"
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
                minlength="5"
                maxlength="5"
                required
                type="text"
                pattern="[0-3][0-9]/[0-9][0-9]"
                name="expiry"
                placeholder="Valid Thru"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={handleInputFocus}
              />
              <input
                minlength="3"
                maxlength="3"
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
        {props.button}
      </form>
    </StyledCard>
  );
};
