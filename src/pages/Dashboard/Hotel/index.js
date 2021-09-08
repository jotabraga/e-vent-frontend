import { useContext, useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import HotelCard from "../../../components/Hotel/HotelCard";
import styled from "styled-components";
import HotelContext from "../../../contexts/HotelContext";
import Rooms from "../../../components/Hotel/Rooms";
import { toast } from "react-toastify";
import ReservationReview from "./ReservationReview";

export default function Hotel() {
  const { hotelData } = useContext(HotelContext);
  const { hotel } = useApi();
  const [hotels, setHotels] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [review, setReview] = useState(true);

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
    if (hotelData !== null) setIsSelected(true);
    else setIsSelected(false);
  }, [hotelData]);

  return (
    <Body>
      <h1>Escolha de hotel e quarto</h1>
      { review && isSelected
        ? <ReservationReview hotel={hotelData}/>
        : 
        <>
          <h2>Primeiro, escolha seu hotel</h2>
          <HotelOptions>
            {hotels.map((h) => (
              <HotelCard key={h.id} hotel={h} />
            ))}
          </HotelOptions>
        </>
      }
      {/* {isSelected && (
        <>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <Rooms hotel={hotelData} />
        </>
      )} */}
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
