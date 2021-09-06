import styled from "styled-components";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
export default function Room({ room }) {
  const roomPeople = [];
  let isFull = room.ocuppiedVacancies === room.roomVacancies;
  for (let i = 0; i < room.roomVacancies; i++) {
    if (i >= room.ocuppiedVacancies) roomPeople.push("IoPersonOutline");
    else roomPeople.push("IoPerson");
  }
  return (
    <Body isFull={isFull} disabled={isFull}>
      <span>{room.number}</span>
      <div>
        {roomPeople.map((p) =>
          p === "IoPersonOutline" ? <IoPersonOutline /> : <IoPerson />
        )}
      </div>
    </Body>
  );
}
const Body = styled.button`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  cursor: pointer;
  background-color: #fff;
  span {
    color: ${(props) => !props.isFull && "#454545"};
    font-weight: 700;
    text-align: center;
    font-size: 20px;
    line-height: 23px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
