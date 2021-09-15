import { useContext, useEffect, useRef, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import HotelContext from "../../../contexts/HotelContext";
import { toast } from "react-toastify";
import RoomOptions from "../../../components/Hotel/RoomOptions";
import HotelOptions from "../../../components/Hotel/HotelOptions";
import Button from "../../../components/Form/Button";
import BookingContext from "../../../contexts/BookingContext";
import HotelReservationContext from "../../../contexts/HotelReservationContext";
import DeniedMessage from "../../../components/Hotel/DeniedMessage";
import Loading from "../../../components/Loading";
import ReservationReview from "./ReservationReview";
import UserContext from "../../../contexts/UserContext";

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const { hotelData, setHotelData } = useContext(HotelContext);
  const { hotelReservationData, setHotelReservationData } = useContext(
    HotelReservationContext
  );
  const { bookingData } = useContext(BookingContext);
  const { hotel } = useApi();
  const { hotelReservation } = useApi();
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const hotelRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    getReservationData();
    saveHotelsData();
    const hotelInterval = setInterval(() => {
      saveHotelsData();
    }, 3000);
    setIsLoading(false);
    return () => clearInterval(hotelInterval);
  }, []);

  function saveHotelsData() {
    const result = hotel.GetHotelsInformation();
    result.then((res) => {
      setHotels(res.data);
    });
    result.catch((err) => {
      toast(err.response.data.message);
    });
  }

  useEffect(() => {
    if (hotelData !== null) {
      setIsSelected(true);
    } else setIsSelected(false);
  }, [hotelData]);

  useEffect(() => {
    const actualHotelData = hotels.find((hotel) => hotel?.id === hotelData?.id);
    if (actualHotelData) {
      setHotelData({
        ...actualHotelData,
        roomSelected: hotelData.roomSelected,
      });
    }
  }, [hotels]);

  function getReservationData() {
    const result = hotelReservation.getHotelReservation(userData.user.id);
    result.then((res) => {
      setHotelReservationData(res.data);
    });
  }

  function makeReservation() {
    const result = hotel.makeHotelReservartion(
      hotelData.id,
      hotelData.roomSelected.id
    );
    result.then(() => {
      toast("Hotel reserved");
      getReservationData();
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
      {hotelReservationData && (
        <ReservationReview
          hotelReservationData={hotelReservationData}
          setHotelReservationData={setHotelReservationData}
        />
      )}
      {!hotelReservationData && (
        <>
          <h2>Primeiro, escolha seu hotel</h2>
          <HotelOptions hotels={hotels} />
        </>
      )}
      {isSelected && !hotelReservationData && (
        <RoomOptions hotelData={hotelData} />
      )}
      {hotelData?.roomSelected && !hotelReservationData && (
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
