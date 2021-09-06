export default function populateRoomArray(isSelected, room) {
  const roomArray = [];
  let iconSelected = false;
  for (let i = 0; i < room.roomVacancies; i++) {
    if (i >= room.ocuppiedVacancies) {
      if (isSelected && !iconSelected) {
        roomArray.push("IoSelected");
        iconSelected = true;
      } else roomArray.push("IoPersonOutline");
    } else roomArray.push("IoPerson");
  }
  roomArray.reverse();
  return roomArray;
}
