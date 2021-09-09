import styled from "styled-components";
import ReviewHotelCard from "../../../components/Hotel/ReviewReservation";
import { useContext, useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import UserContext from "../../../contexts/UserContext";

export default function ReservationReview() {
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
