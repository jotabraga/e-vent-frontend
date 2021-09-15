import styled from "styled-components";
import Activity from "./Activity";

export default function Location(props) {
  const { name, activitiesByLocation, userActivities, setUserActivities, userActivitiesByDate } =
    props;

  return (
    <DayLocation>
      <h3>{name}</h3>
      <div>
        {activitiesByLocation.map((item, i) => (
          <Activity
            key={i}
            startHour={item.start_hour}
            endHour={item.end_hour}
            seats={item.remaining_seats}
            title={item.title}
            id={item.id}
            isRegistered={userActivities.includes(item.id)}
            setUserActivities={setUserActivities}
            userActivities={userActivities}
            userActivitiesByDate={userActivitiesByDate}
          />
        ))}
      </div>
    </DayLocation>
  );
}

const DayLocation = styled.div`
  width: 283px;
  height: 424px;

  flex-shrink: 0;

  margin-top: 61px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;

  & > h3 {
    font-size: 17px;
    color: #7b7b7b;
  }

  & > div {
    width: 100%;
    height: 392px;

    border: 1px solid #d7d7d7;

    padding: 10px 9px;
  }
`;
