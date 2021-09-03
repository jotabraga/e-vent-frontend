import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EnrollmentApi from "../../../services/EnrollmentApi";
import { toast } from "react-toastify";
import TicketOption from "./TicketOption";

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
          <TicketOption apiPath={"modalities"} >
            <h2>Primeiro, escolha sua modalidade de ingresso</h2>
          </TicketOption>
          <TicketOption apiPath={"lodges"}>
            <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
          </TicketOption>
        </>
      )}
    </>
  );
}
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
