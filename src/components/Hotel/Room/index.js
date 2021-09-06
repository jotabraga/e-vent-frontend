import styled from "styled-components";

export default function Room({ room }) {
  console.log(room);
  return (
    <Body>
      <span>{room.number}</span>
    </Body>
  );
}
const Body = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;
