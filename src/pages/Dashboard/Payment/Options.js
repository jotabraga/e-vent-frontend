import styled from "styled-components";
import BookingContext from "../../../contexts/BookingContext";
import { useContext } from "react";

export default function Options(props) {
  const { ticket } = props;
  const { bookingData, setBookingData } = useContext(BookingContext);
  const type = ticket.type;

  function handleClick() {
    if (type === "Com Hotel" || type === "Sem Hotel") {
      if (bookingData?.lodge === type) {
        setBookingData({ ...bookingData, lodge: undefined });
      } else {
        setBookingData({ ...bookingData, lodge: type });
      }
    }

    if (type === "Online" || type === "Presencial") {
      if (bookingData?.modality === type) {
        setBookingData({
          ...bookingData,
          modality: undefined,
          lodge: undefined,
        });
      } else {
        setBookingData({ ...bookingData, modality: type, lodge: undefined });
      }
    }
  }

  return (
    <StyledCardOption
      onClick={handleClick}
      isSelected={type === bookingData?.lodge || type === bookingData?.modality}
    >
      <h3>{ticket.type}</h3>
      <h4>R$ {ticket.price}</h4>
    </StyledCardOption>
  );
}
const StyledCardOption = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px #cecece solid;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => (props.isSelected ? "#FFEED2" : "#FFFFFF")};
`;
