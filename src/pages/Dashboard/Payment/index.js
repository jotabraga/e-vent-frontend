import Typography from "@material-ui/core/Typography";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import EnrollmentApi from "../../../services/EnrollmentApi";
import { toast } from "react-toastify";
import TicketOption from "./TicketOption";
import BookingContext from "../../../contexts/BookingContext";
import OrderButton from "../../../components/Payment/OrderButton";
import ChoiceSession from "../../../components/Payment/ChoiceSession";
import Loading from "../../../components/Loading/";
import BookingApi from "../../../services/BookingApi";

export default function Payment() {
  const [isLoading, setIsLoading] = useState(true);
  const [userEnrollment, setUserenrollment] = useState(null);
  const enrollementAPI = new EnrollmentApi();
  const bookingApi = new BookingApi();
  const { bookingData } = useContext(BookingContext);

  useEffect(() => {
    const request = enrollementAPI.getPersonalInformations();
    request.then((response) => {
      setUserenrollment(response.data);
      setIsLoading(false);
    });
    request.catch((error) => {
      /* eslint-disable-next-line no-console */
      console.log(error);
      toast.error("Não foi possível carregar os dados!");
    });
  }, []);

  function saveBooking() {
    const bookingUserInformation = getBookingInfo();
    bookingApi.confirmBooking(bookingUserInformation);               
  }

  function getBookingInfo() {
    const { modality, lodge } = bookingData;
    const modalityId = modality.id;
    const lodgeId = lodge?.id;
    const value = getBookingPrice();
    const bookingInfo = { 
      modalityId, 
      lodgeId,
      value
    };
    return bookingInfo;
  }

  function getBookingPrice() {
    const { modality, lodge } = bookingData;
    if (lodge === undefined) return modality.price;
    return modality.price + lodge.price;
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
      </Content>

      {bookingData?.modality?.type === "Online" ? (
        <>
          <ChoiceSession>
            <h2>
              Fechado! O total ficou em R$ { bookingData?.modality?.price }. Agora é só
              confirmar:
            </h2>
          </ChoiceSession>
          <OrderButton onClick={() => saveBooking()} >
            <h2>RESERVAR INGRESSO</h2>
          </OrderButton>
        </>
      ) : (
        <>
          {bookingData?.lodge?.type === "Com Hotel" || bookingData?.lodge?.type === "Sem Hotel" ? 
            (
              <>
                <ChoiceSession>
                  <h2>
                  Fechado! O total ficou em R$ { bookingData?.modality?.price + bookingData?.lodge?.price }. Agora é
                  só confirmar:
                  </h2>
                </ChoiceSession>
                <OrderButton onClick={() => saveBooking()} >
                  <h2>RESERVAR INGRESSO</h2>
                </OrderButton>
              </>
            ) : (
              <></>
            )}
        </>
      )} 
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
