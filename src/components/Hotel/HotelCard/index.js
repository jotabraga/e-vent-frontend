import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HotelContext from "../../../contexts/HotelContext";

export default function HotelCard({ hotel }) {
  const { hotelData, setHotelData } = useContext(HotelContext);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (hotelData?.id === hotel.id) setIsSelected(true);
    else setIsSelected(false);
  }, [hotelData]);
  function toggleHotelData() {
    if (hotelData?.id === hotel.id) setHotelData(null);
    else setHotelData(hotel);
  }
  return (
    <Card onClick={toggleHotelData} isSelected={isSelected}>
      <img src={hotel.image} alt={hotel.name} />
      <h1>{hotel.name}</h1>
      <Property>
        <Title>Tipos de acomodação:</Title>
        <span>
          {hotel.allRoomsTypes.map((t, i) => (
            <span key={i}>
              {t}
              {i < hotel.allRoomsTypes.length - 1 && ","}{" "}
            </span>
          ))}
        </span>
      </Property>
      <Property>
        <Title>Vagas disponíveis:</Title>
        <span>{hotel.totalvacancies}</span>
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
  background-color: ${(props) => (props.isSelected ? "#FFEED2" : "#f1f1f1")};
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
