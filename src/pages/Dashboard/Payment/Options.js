import styled from "styled-components";
import BookingContext from "../../../contexts/BookingContext";
import { useContext } from "react";
export default function Options(props) {
  const { ticket } = props;
  const { bookingData, setBookingData } = useContext(BookingContext);
  const { type } = ticket;

  function handleUserSelection() {
    if (isLodgeTicket(type)) {
      if (bookingData?.lodge?.type === type) {
        setBookingData({ ...bookingData, lodge: undefined });
      } else {
        setBookingData({ ...bookingData, lodge: ticket });
      }
    }
    if (isModalityTicket(type)) {
      if (bookingData?.modality?.type === type) {
        setBookingData({
          ...bookingData,
          modality: undefined,
          lodge: undefined,
        });
      } else {
        setBookingData({ ...bookingData, modality: ticket, lodge: undefined });
      }
    }
  }

  function isLodgeTicket(type) {
    if (type === "Com Hotel" || type === "Sem Hotel") return true;
  }

  function isModalityTicket(type) {
    if (type === "Online" || type === "Presencial") return true;
  }

  return (
    <StyledCardOption onClick={handleUserSelection} isSelected={type === bookingData?.lodge?.type || type === bookingData?.modality?.type } >
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
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => (props.isSelected ? "#FFEED2" : "#FFFFFF")};
  cursor: pointer;
`;
