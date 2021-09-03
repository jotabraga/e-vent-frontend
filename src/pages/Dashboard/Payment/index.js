import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EnrollmentApi from "../../../services/EnrollmentApi";
import { toast } from "react-toastify";

export default function Payment() {
  const [userEnrollment, setUserenrollment] = useState(null);
  const enrollementAPI = new EnrollmentApi();

  useEffect(() => {
    const request = enrollementAPI.getPersonalInformations();
    request.then((response) => {
      setUserenrollment(response.data);
    });
    request.catch((error) => {
      /* eslint-disable-next-line no-console */
      console.log(error);
      toast.error("Não foi possível carregar os dados!");
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {userEnrollment === null || userEnrollment === undefined ? (
        <NoEnrollmentMessage>
          Você precisa completar sua inscrição antes <br /> de prosseguir pra
          escolha de ingresso
        </NoEnrollmentMessage>
      ) : (
        <>
          <TicketGenre >
            <h2>Primeiro, escolha sua modalidade de ingresso</h2>
          </TicketGenre>
          <TicketGenre >
            <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
          </TicketGenre>
        </>
      )}
    </>
  );
}
const TicketGenre = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    margin-bottom: 17px;
  }
  h3 {
    color: #454545;
    font-size: 16px;
    line-height: 22px;
  }
  h4 {
    font-size: 14px;
    color: #898989;
  }
  .optionBox {
    display: flex;
    margin-bottom: 44px;
  }
`;
const NoEnrollmentMessage = styled.h1`
  font-size: 20px;
  color: #8e8e8e;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 260px;
  flex-direction: column;
`;
const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
