import styled from "styled-components";
import BookingContext from "../../contexts/BookingContext";
import { useContext } from "react";
import handleUserTicketChoice from "./Helpers/HandleUserChoice";
export default function Options(props) {
  const { ticket } = props;
  const { type } = ticket;
  const { bookingData, setBookingData } = useContext(BookingContext);

  return (
    <StyledCardOption onClick={() => handleUserTicketChoice(ticket, bookingData, setBookingData)} isSelected={type === bookingData?.lodge?.type || type === bookingData?.modality?.type } >
      <h3>{type}</h3>
      <h4>R$ {ticket.price}</h4>
    </StyledCardOption>
  );
}
const StyledCardOption = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px #cecece solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => (props.isSelected ? "#FFEED2" : "#FFFFFF")};
  cursor: pointer;
`;
