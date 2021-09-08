import styled from "styled-components";

export default function reviewHotelCard({ hotel }) {
  return (
    <Card>
      <img src={hotel.image} alt={hotel.name} />
      <h1>{hotel.name}</h1>
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
