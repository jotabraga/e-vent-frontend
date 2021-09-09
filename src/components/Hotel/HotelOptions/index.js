import styled from "styled-components";
import HotelCard from "./HotelCard";

export default function HotelOptions({ hotels }) {
  return (
    <Body>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotelCard={hotel} />
      ))}
    </Body>
  );
}
const Body = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
`;
