import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import HotelCard from "../../../components/HotelCard";
import styled from "styled-components";

export default function Hotel() {
  const { hotel } = useApi();
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const result = hotel.GetHotelsInformation();
    result.then((res) => {
      setHotels(res.data);
    });
    result.catch(() => {}); //fazer o catch com toastify
  }, []);
  return (
    <Body>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <HotelOptions>
        {hotels.map((h) => (
          <HotelCard key={h.id} hotel={h} />
        ))}
      </HotelOptions>
    </Body>
  );
}
const HotelOptions = styled.div`
  display: flex;
  gap: 20px;
`;
const Body = styled.div`
  font-family: "Roboto";
  & > h1 {
    color: #000;
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 40px;
  }
  & > h2 {
    color: #8e8e8e;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 18px;
  }
`;
