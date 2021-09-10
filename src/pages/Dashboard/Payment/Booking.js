import Typography from "@material-ui/core/Typography";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import EnrollmentApi from "../../../services/EnrollmentApi";
import { toast } from "react-toastify";
import TicketOption from "./TicketOption";
import BookingContext from "../../../contexts/BookingContext";
import OrderButton from "../../../components/Payment/OrderButton";
import ChoiceSession from "../../../components/Payment/ChoiceSession";
import Loading from "../../../components/Loading";
import BookingApi from "../../../services/BookingApi";
import getBookingPrice from "./Helpers/getBookingPrice";
import getBookingInfo from "./Helpers/getBookingInfo";
import Loader from "react-loader-spinner";

export default function Booking() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSendingInfo, setIsSendingInfo] = useState(false);
  const [userEnrollment, setUserenrollment] = useState(null);
  const enrollementAPI = new EnrollmentApi();
  const bookingApi = new BookingApi();
  const { bookingData, setBookingData } = useContext(BookingContext);

  useEffect(() => {
    const request = enrollementAPI.getPersonalInformations();
    request.then((response) => {
      setUserenrollment(response.data);
      setIsLoading(false);
    });
    request.catch((error) => {
      toast.error("Não foi possível carregar os dados!");
    });
  }, []);

  function saveBooking() {
    setIsSendingInfo(true);
    const bookingUserInformation = getBookingInfo(bookingData);
    const request = bookingApi.confirmBooking(bookingUserInformation);
    request.then(() => {
      setIsSendingInfo(false);
      setBookingData( { ...bookingData, isPaid: false, value: getBookingPrice(bookingData) } );
    });
    request.catch((error) => {
      setIsSendingInfo(false);
      toast.error(error.response?.data?.message || "Algo deu errado. Tente mais tarde.");
    });               
  }

  return (
    <>
      <Loading isLoading={isLoading} className="loading" />
      <Content show={!isLoading}>
        <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        <NoEnrollmentMessage show={!userEnrollment}>
          Você precisa completar sua inscrição antes <br /> de prosseguir pra
          escolha de ingresso
        </NoEnrollmentMessage>
        <CardsSection show={userEnrollment}>
          <TicketOption apiPath={"modalities"}>
            <h2>Primeiro, escolha sua modalidade de ingresso</h2>
          </TicketOption>
          {bookingData?.modality?.type === "Presencial" ? (
            <TicketOption apiPath={"lodges"}>
              <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
            </TicketOption>
          ) : (
            ""
          )}
        </CardsSection>
        {bookingData?.modality?.type === "Online" || 
        bookingData?.lodge?.type === "Com Hotel" || 
        bookingData?.lodge?.type === "Sem Hotel" ?
          (<ChoiceSession>
            <h2>
              Fechado! O total ficou em R$ { getBookingPrice(bookingData) }. Agora é só
              confirmar:
            </h2>
            <OrderButton disabled={isSendingInfo} onClick={() => saveBooking()} >
              <Loader
                visible={isSendingInfo}
                type="ThreeDots"
                color="#111"
                height={50}
                width={50}
              />
              {isSendingInfo ? "": "RESERVAR INGRESSO"}
            </OrderButton>
          </ChoiceSession>)
          :""}
      </Content>
    </>  
  );
}

const Content = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;
const CardsSection = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;
const NoEnrollmentMessage = styled.h1`
  font-size: 20px;
  color: #8e8e8e;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 200px;
  flex-direction: column;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
