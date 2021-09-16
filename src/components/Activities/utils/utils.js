import { IoCloseCircleOutline, IoCheckmarkCircleOutline, IoEnterOutline } from "react-icons/io5";

export function chooseIcon(seats, isRegistered) {
  if (isRegistered) {
    return (
      <>
        <IoCheckmarkCircleOutline className="icon" color={"#078632"} height="38px" width="38px" />
        {"Inscrito"}
      </>
    );
  }
  if (seats === 0) {
    return (
      <>
        <IoCloseCircleOutline className="icon" color={"#00000"} height="38px" width="38px" />
        {"Esgotado"}
      </>
    );
  } else {
    return (
      <>
        <IoEnterOutline className="icon" color={"#078632"} height="38px" width="38px" />
        {seats + " vagas"}
      </>
    );
  }
}

export function calculateHeight(startHour, endHour) {
  const hourDiff = endHour.split(":")[0] - startHour.split(":")[0];
  const minutesDiff = Math.abs(endHour.split(":")[1] - startHour.split(":")[1]) / 60;
  const height = 80 * (hourDiff + minutesDiff);

  return height;
}
