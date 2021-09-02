import styled from "styled-components";

export default function HotelCard({ hotel }) {
  return (
    <Card>
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
  background: #f1f1f1;
  border-radius: 10px;
  padding: 15px;
  font-family: "Roboto";
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
