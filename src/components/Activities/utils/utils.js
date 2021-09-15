import { CloseCircleOutline, CheckmarkCircleOutline, EnterOutline } from "react-ionicons";

export function chooseIcon(seats, isRegistered) {
  if (isRegistered) {
    return (
      <>
        <CheckmarkCircleOutline className="icon" color={"#078632"} height="16px" width="16px" />
        {"Inscrito"}
      </>
    );
  }
  if (seats === 0) {
    return (
      <>
        <CloseCircleOutline className="icon" color={"#00000"} height="16px" width="16px" />
        {"Esgotado"}
      </>
    );
  } else {
    return (
      <>
        <EnterOutline className="icon" color={"#078632"} height="16px" width="16px" />
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
