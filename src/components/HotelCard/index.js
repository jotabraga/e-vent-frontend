import styled from "styled-components";

export default function HotelCard({ hotel }) {
  return (
    <Card>
      <img src={hotel.image} alt={hotel.name} />
      <h1>{hotel.name}</h1>
      <Property>
        <span>Tipos de acomodação:</span>
      </Property>
    </Card>
  );
}

const Card = styled.div`
  width: 196px;
  height: 264px;
  background: #f1f1f1;
  border-radius: 10px;
  padding: 15px;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h1 {
    font-size: 20px;
    font-family: "Roboto";
    line-height: 23px;
    margin-top: 10px;
  }
`;
const Property = styled.div`
  font-size: 12px;
`;
