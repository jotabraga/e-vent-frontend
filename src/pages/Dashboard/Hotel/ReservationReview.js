import styled from "styled-components";
import ReviewHotelCard from "../../../components/Hotel/ReviewReservation";
import { useContext, useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import UserContext from "../../../contexts/UserContext";
import Button from "../../../components/Form/Button";

export default function ReservationReview({ setReview }) {
  const [reservationData, setReservationData] = useState(null);

  const { userData } = useContext(UserContext);
  const { hotelReservation } = useApi();
  useEffect(() => {
    const result = hotelReservation.getHotelReservation(userData.user.id);
    result.then((res) => {
      setReservationData(res.data);
    });
  }, []);

  return (
    <Container>
      <h2>Você já escolheu seu quarto</h2>
      { reservationData && <ReviewHotelCard reservation={reservationData}/>}
      <ChangeRoomButton onClick={() => setReview(false)}>trocar de quarto</ChangeRoomButton>
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
