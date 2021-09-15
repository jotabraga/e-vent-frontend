import { toast } from "react-toastify";
import styled from "styled-components";
import { chooseIcon, calculateHeight } from "./utils/utils";

import useApi from "../../hooks/useApi";

export default function Activity({
  title,
  startHour,
  endHour,
  seats,
  isRegistered,
  id,
  setUserActivities,
  userActivities,
  userActivitiesByDate,
}) {
  const { activity } = useApi();
  function checkActivities() {
    const userActivitiesClone = userActivities;
    setUserActivities([...userActivities, id]);
    const body = { id };
    activity
      .activitySubscription(body)
      .then(() => toast("Inscrição efetuada"))
      .catch((err) => {
        toast("Não foi possível efetuar a inscrição");
        setUserActivities(userActivitiesClone);
      });
  }

  return (
    <Container
      isRegistered={isRegistered}
      isRed={seats === 0}
      height={calculateHeight(startHour, endHour)}
      onClick={() => {
        const conflict = userActivitiesByDate.find((item) => {
          if (
            (item.start_hour <= startHour && startHour < item.end_hour) ||
            (item.start_hour < endHour && endHour <= item.end_hour) ||
            (item.start_hour > startHour && endHour > item.end_hour)
          ) {
            return item;
          }
        });
        if (conflict) {
          if (conflict.id === id) {
            return toast("Atividade já inscrita");
          } else {
            return toast("Conflito de horário");
          }
        }
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
