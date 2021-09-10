import styled from "styled-components";
import ReviewHotelCard from "../../../components/Hotel/ReviewReservation";
import Button from "../../../components/Form/Button";

export default function ReservationReview({ hotelReservationData, setHotelReservationData }) {
  return (
    <Container>
      <h2>Você já escolheu seu quarto</h2>
      { hotelReservationData && <ReviewHotelCard hotelReservationData={hotelReservationData}/>}
      <ChangeRoomButton onClick={() => setHotelReservationData(null)}>trocar de quarto</ChangeRoomButton>
    </Container>
  );
}

const Container = styled.div`
  & > h2 {
    color: #8e8e8e;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 18px;
  }
`;

const ChangeRoomButton = styled(Button)`
  font-family: "Roboto" !important;
  margin-top: 40px !important;
  color: #000 !important;
`;
