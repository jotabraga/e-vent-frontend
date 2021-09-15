import styled from "styled-components";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Button(props) {
  const {
    day,
    setSelectedDay,
    selectedDay,
    unformattedDate,
    setActivitiesByDate,
    setUserActivities,
    setNewInterval,
    newInterval,
  } = props;
  const selected = selectedDay.includes(day);
  const { activity } = useApi();

  function onSelect() {
    if (newInterval) clearInterval(newInterval);
    setSelectedDay([day]);
    getActivitiesByDate(unformattedDate);

    const interval = setInterval(() => {
      getActivitiesByDate(unformattedDate);
    }, 3000);

    setNewInterval(interval);
  }

  function getActivitiesByDate(unformattedDate) {
    const body = { date: unformattedDate.date };
    activity
      .getActivitiesByDate(body)
      .then((res) => {
        setActivitiesByDate(res.data.activities);
        setUserActivities(res.data.userActivities);
      })
      .catch((err) => {
        toast("Não foi possível carregar os dados!");
      });
  }

  return (
    <DayButton onClick={onSelect} selected={selected}>
      {day}
    </DayButton>
  );
}

const DayButton = styled.button`
  width: 131px;
  height: 37px;

  margin-right: 17px;
  margin-bottom: 10px;

  background-color: ${(props) => (props.selected ? "#ffd37d" : "#E0E0E0")};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 4px;

  color: #000;
  font-size: 14px;

  text-align: center;
`;
