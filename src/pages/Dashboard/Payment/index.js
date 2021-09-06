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

export default function Payment() {
  const [isLoading, setIsLoading] = useState(true);
  const [userEnrollment, setUserenrollment] = useState(null);
  const enrollementAPI = new EnrollmentApi();
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
          {bookingData?.modality === "Presencial" ? (
            <TicketOption apiPath={"lodges"}>
              <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
            </TicketOption>
          ) : (
            ""
          )}
        </CardsSection>
      </Content>

      {bookingData?.modality === "Online" ? (
        <>
          <ChoiceSession>
            <h2>
              Fechado! O total ficou em R$ {bookingData?.price}. Agora é só
              confirmar:
            </h2>
          </ChoiceSession>
          <OrderButton>
            <h2>RESERVAR INGRESSO</h2>
          </OrderButton>
        </>
      ) : (
        <>
          {bookingData?.lodge === "Com Hotel" ||
          bookingData?.lodge === "Sem Hotel" ? (
              <>
                <ChoiceSession>
                  <h2>
                  Fechado! O total ficou em R$ {bookingData?.price + bookingData?.price}. Agora é
                  só confirmar:
                  </h2>
                </ChoiceSession>
                <OrderButton>
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
