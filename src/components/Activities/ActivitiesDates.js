import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import Button from "./DateButton";
import Location from "./Location";
import useApi from "../../hooks/useApi";

export default function ActivitiesDates(props) {
  const { setDayIsSelected, dayIsSelected } = props;
  const [dates, setDates] = useState([]);
  const [activitiesByDate, setActivitiesByDate] = useState([]);
  const { activity } = useApi();

  const [selectedDay, setSelectedDay] = useState([]);

  useEffect(() => {
    if (selectedDay.length === 1) setDayIsSelected(true);
  }, [selectedDay]);

  const allLocations = activitiesByDate.map((item) => item.location.name);
  const differentsLocations = allLocations.filter(
    (item, i) => allLocations.indexOf(item) === i
  );

  useEffect(() => {
    activity
      .getAllDates()
      .then((res) => {
        setDates(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
        toast.error("Não foi possível carregar os dados!");
      });
  }, []);

  return (
    <>
      {dates.map((day, i) => {
        let text = new Date(day.date)
          .toLocaleDateString("br-PT", { weekday: "long" })
          .split("-", 1);
        text =
          text +
          ", " +
          new Date(day.date).toLocaleDateString("br-PT").slice(0, 5);
        const finalText = text[0].toUpperCase() + text.substr(1);
        return (
          <Button
            key={i}
            unformattedDate={day}
            day={finalText}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            setActivitiesByDate={setActivitiesByDate}
          />
        );
      })}
      <Locations show={dayIsSelected}>
        {differentsLocations.map((item, i) => (
          <Location name={item} key={i} />
        ))}
      </Locations>
    </>
  );
}

const Locations = styled.div`
  overflow: auto;
  display: ${(props) => (props.show ? "flex" : "none")};
`;
