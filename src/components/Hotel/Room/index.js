import styled from "styled-components";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import HotelContext from "../../../contexts/HotelContext";
import populateRoomArray from "./populateRoomArray";
export default function Room({ room }) {
  const { hotelData, setHotelData } = useContext(HotelContext);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (hotelData.roomSelected?.id === room.id) setIsSelected(true);
    else setIsSelected(false);
  }, [hotelData]);
  let isFull = room.ocuppiedVacancies === room.roomVacancies;
  const roomPeople = populateRoomArray(isSelected, room);
  function toggleRoom() {
    if (room.id === hotelData.roomSelected?.id) {
      setIsSelected(false);
      setHotelData({ ...hotelData, roomSelected: null });
    } else {
      setHotelData({ ...hotelData, roomSelected: room });
      setIsSelected(true);
    }
  }
  return (
    <Body
      isFull={isFull}
      disabled={isFull}
      isSelected={isSelected}
      onClick={toggleRoom}
    >
      <span>{room.number}</span>
      <div>
        {roomPeople.map((p) =>
          p === "IoPerson" ? (
            <IoPerson />
          ) : p === "IoSelected" ? (
            <IoSelected />
          ) : (
            <IoPersonOutline />
          )
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.isSelected ? "#FFEED2" : "#fff")};
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

const IoSelected = styled(IoPerson)`
  color: #ff4791;
`;
