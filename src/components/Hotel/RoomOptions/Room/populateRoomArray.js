export default function populateRoomArray(isSelected, room) {
  let iconSelected = false;
  const roomArray = Array.from({ length: room.roomVacancies }, (_, index) => {
    if (index >= room.ocuppiedVacancies) {
      if (isSelected && !iconSelected) {
        iconSelected = true;
        return "IoSelected";
      } else return "IoPersonOutline";
    } else {
      return "IoPerson";
    }
  });
  roomArray.reverse();
  return roomArray;
}
