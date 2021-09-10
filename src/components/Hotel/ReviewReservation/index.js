import styled from "styled-components";

export default function reviewHotelCard({ hotelReservationData }) {
  return (
    <Card>
      <img src={hotelReservationData.hotel.image} alt={hotelReservationData.hotel.name} />
      <h1>{hotelReservationData.hotel.name}</h1>
      <Property>
        <Title>Quarto reservado</Title>
        <span>{`${hotelReservationData.room.number} (${hotelReservationData.roomType})`} </span>
      </Property>
      <Property>
        <Title>Pessoas no seu quarto</Title>
        {hotelReservationData.otherPeopleInRoom === 0
          ? <span>Somente você</span> 
          : <span>Você e mais {hotelReservationData.otherPeopleInRoom}</span>
        }
      </Property>
    </Card>
  );
}

const Card = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  padding: 15px;
  font-family: "Roboto";
  background-color: #FFEED2;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h1 {
    font-size: 20px;
    line-height: 23px;
    margin-top: 10px;
  }
`;

const Property = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  color: #3c3c3c;
`;

const Title = styled.span`
  font-weight: 700;
  margin-bottom: 2px;
`;
