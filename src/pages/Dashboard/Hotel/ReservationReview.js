import styled from "styled-components";
import ReviewHotelCard from "../../../components/Hotel/ReviewReservation";

export default function ReservationReview({ hotel }) {
  return (
    <Container>
      <h2>Você já escolheu seu quarto</h2>
      <ReviewHotelCard hotel={hotel}/>
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
