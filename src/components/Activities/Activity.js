import { toast } from "react-toastify";
import styled from "styled-components";
import { chooseIcon, calculateHeight } from "./utils/utils";

export default function Activity({
  title,
  startHour,
  endHour,
  seats,
  isRegistered,
  id,
  setUserActivities,
  userActivities,
}) {
  function checkActivities() {
    setUserActivities([...userActivities, id]);
  }

  return (
    <Container
      isRegistered={isRegistered}
      isRed={seats === 0}
      height={calculateHeight(startHour, endHour)}
      onClick={() => {
        seats === 0 ? toast("Lotação esgotada") : checkActivities();
      }}
    >
      <div>
        <h1 className="title">{title}</h1>
        <h2 className="hour">{startHour + " - " + endHour}</h2>
      </div>
      <div className="separator"></div>
      <div className="check">{chooseIcon(seats, isRegistered)}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: ${(props) => {
    return props.height + "px";
  }};

  background-color: ${(props) => (props.isRegistered ? "#D0FFDB" : "#f1f1f1")};

  border-radius: 5px;

  margin-bottom: 10px;
  padding: 10px;

  display: flex;

  & > div > .title {
    width: 171px;
    font-size: 12px;

    font-weight: bold;
  }

  & > div > .hour {
    display: block;
    font-size: 12px;

    color: #000;
  }

  .separator {
    width: 1px;
    height: 100%;

    margin: 0px 15px;

    background-color: ${(props) => (props.isRegistered ? "#99E8A1" : "#cfcfcf")};
  }

  .check {
    height: 100%;
    display: flex;

    font-size: 9px;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${(props) => (props.isRed ? "#CC6666" : "#078632")};

    .icon {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 6px;
    }
  }
`;
