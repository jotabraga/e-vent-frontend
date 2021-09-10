import styled from "styled-components";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";

export default function Button(props) {
  const {
    day,
    setSelectedDay,
    selectedDay,
    unformattedDate,
    setActivitiesByDate,
  } = props;
  const selected = selectedDay.includes(day);
  const { activity } = useApi();

  function onSelect() {
    setSelectedDay([day]);
    const body = { date: unformattedDate.date };
    activity
      .getActivitiesByDate(body)
      .then((res) => {
        setActivitiesByDate(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
        toast.error("Não foi possível carregar os dados!");
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
