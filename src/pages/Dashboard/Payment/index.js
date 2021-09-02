import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { getPersonalInformations } from "../../../services/EnrollmentApi";

export default function Payment() {
  const clientEnrollment = getClientEnrollment();

  function getClientEnrollment() {
    getPersonalInformations();
  }

  return (<StyledTypography variant="h4">
    Ingresso e pagamento
  </StyledTypography>)(
    clientEnrollment === undefined ? (
      <h1>
        Você precisa completar sua inscrição antes de prosseguir pra escolha de
        ingresso
      </h1>
    ) : (
      <>
        <TicketGenre>
          <h2>Primeiro, escolha sua modalidade de ingresso</h2>
          <div className='tickets'>Presencial</div>
          <div className='tickets'>Online</div>
        </TicketGenre>
        <TicketGenre>
          <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
          <div className='tickets'>Sem Hotel</div>
          <div className='tickets'>Com Hotel</div>
        </TicketGenre>
      </>
    )
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const TicketGenre = styled.div``;
