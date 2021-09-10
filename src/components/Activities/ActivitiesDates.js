import { useEffect, useState } from "react";
import styled from "styled-components";

import useApi from "../../hooks/useApi";

export default function ActivitiesDates() {
  const [dates, setDates] = useState([]);
  const { activity } = useApi();

  console.log(
    new Date(dates[0].date).toLocaleDateString("br-PT", { weekday: "long" })
  );

  useEffect(() => {
    activity
      .getAllDates()
      .then((res) => {
        setDates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Button onClick={() => console.log("mudar cor e faz requisição")}>
        Sexta, 22/10
      </Button>
      <Button>Sábado, 22/10</Button>
      <Button>Sexta, 22/10</Button>
      <Button>Sábado, 22/10</Button>
      <Button>Sexta, 22/10</Button>
    </>
  );
}

const Button = styled.button`
  width: 131px;
  height: 37px;

  margin-right: 17px;
  margin-bottom: 10px;

  background-color: #ffd37d;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  border: none;
  border-radius: 4px;

  color: #000;
  font-size: 14px;

  text-align: center;
`;
