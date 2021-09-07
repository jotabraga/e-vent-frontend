import { useContext, useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import HotelContext from "../../../contexts/HotelContext";
import { toast } from "react-toastify";
import RoomOptions from "../../../components/Hotel/RoomOptions";
import HotelOptions from "../../../components/Hotel/HotelOptions";
import Button from "../../../components/Form/Button";

export default function Hotel() {
  const { hotelData } = useContext(HotelContext);
  const { hotel } = useApi();
  const [hotels, setHotels] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const result = hotel.GetHotelsInformation();
    result.then((res) => {
      setHotels(res.data);
    });
    result.catch((err) => {
      toast(err.response.data.message);
    });
  }, []);
  useEffect(() => {
    if (hotelData !== null) {
      setIsSelected(true);
    } else setIsSelected(false);
  }, [hotelData]);
  return (
    <Body>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
      <HotelOptions hotels={hotels} />
      {isSelected && <RoomOptions hotelData={hotelData} />}
      {hotelData?.roomSelected && <RoomButton>RESERVAR QUARTO</RoomButton>}
    </Body>
  );
}
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
const RoomButton = styled(Button)`
  font-family: "Roboto" !important;
  margin-top: 40px !important;
  color: #000 !important;
`;
