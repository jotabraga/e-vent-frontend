import { useContext, useEffect, useRef, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import HotelContext from "../../../contexts/HotelContext";
import { toast } from "react-toastify";
import RoomOptions from "../../../components/Hotel/RoomOptions";
import HotelOptions from "../../../components/Hotel/HotelOptions";
import Button from "../../../components/Form/Button";
import BookingContext from "../../../contexts/BookingContext";
import DeniedMessage from "../../../components/Hotel/DeniedMessage";
import Loading from "../../../components/Loading";
import ReservationReview from "./ReservationReview";

export default function Hotel() {
  const { hotelData } = useContext(HotelContext);
  const { bookingData } = useContext(BookingContext);
  const { hotel } = useApi();
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const hotelRef = useRef();
  const [review, setReview] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const result = hotel.GetHotelsInformation();
    result.then((res) => {
      setHotels(res.data);
      setIsLoading(false);
    });
    result.catch((err) => {
      toast(err.response.data.message);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (hotelData !== null) {
      setIsSelected(true);
    } else setIsSelected(false);
  }, [hotelData]);
  function makeReservation() {
    const result = hotel.makeHotelReservartion(
      hotelData.id,
      hotelData.roomSelected.id
    );
    result.then(() => {
      toast("Hotel reserved");
      setReview(true);
    });
    result.catch((err) => {
      toast(err.response.data.message);
    });
  }
  if (isLoading) return <Loading isLoading={isLoading} />;
  if (!bookingData?.isPaid) {
    const messages = [
      "Você precisa ter confirmado pagamento antes",
      "de fazer a escolha de hospedagem",
    ];
    return <DeniedMessage messages={messages} />;
  }
  if (
    bookingData?.lodge?.type === "Sem Hotel" ||
    bookingData?.modality?.type === "Online"
  ) {
    const messages = [
      "Sua modalidade de ingresso não inclui hospedagem",
      "Prossiga para a escolha de atividades",
    ];
    return <DeniedMessage messages={messages} />;
  }
  return (
    <Body ref={hotelRef}>
      <h1>Escolha de hotel e quarto</h1>
      {review && <ReservationReview setReview={setReview} />}
      {!review && (
        <>
          <h2>Primeiro, escolha seu hotel</h2>
          <HotelOptions hotels={hotels} />
        </>
      )}
      {isSelected && !review && <RoomOptions hotelData={hotelData} />}
      {hotelData?.roomSelected && !review && (
        <RoomButton onClick={makeReservation}>RESERVAR QUARTO</RoomButton>
      )}
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
