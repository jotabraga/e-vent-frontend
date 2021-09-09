import styled from "styled-components";
import Room from "./Room";

export default function RoomOptions({ hotelData }) {
  return (
    <>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <Rooms>
        {hotelData?.rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </Rooms>
    </>
  );
}
const Rooms = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;
