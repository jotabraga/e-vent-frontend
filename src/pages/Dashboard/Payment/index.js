import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EnrollmentApi from "../../../services/EnrollmentApi";

export default function Payment() {
  const [userEnrollment, setUserenrollment] = useState(null);
  const enrollementAPI = new EnrollmentApi();

  useEffect(() => {
    enrollementAPI.getPersonalInformations().then(response => {
      setUserenrollment(response.data);
    });
  }, []); 
  
  return (  
    <>      
      <StyledTypography variant="h4">
          Ingresso e pagamento
      </StyledTypography>     
      {userEnrollment === null || userEnrollment === undefined ? 
        (
          <NoEnrollmentMessage>
          Você precisa completar sua inscrição antes <br/> de prosseguir pra escolha de ingresso
          </NoEnrollmentMessage>
        ) :
        (
          <>
            <TicketGenre>
              <h2>Primeiro, escolha sua modalidade de ingresso</h2>
              <div className='optionBox'>
                <TicketOptions>
                  <h3>Presencial</h3>
                  <h4>R$ 250</h4>
                </TicketOptions>
                <TicketOptions >
                  <h3>Online</h3>
                  <h4>R$ 100</h4>
                </TicketOptions> 
              </div>         
            </TicketGenre>
            <TicketGenre>
              <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
              <div className='optionBox'>
                <TicketOptions >
                  <h3>Sem Hotel</h3>
                  <h4>+R$ 0</h4>
                </TicketOptions>
                <TicketOptions>
                  <h3>Com Hotel</h3>
                  <h4>+R$ 350</h4>
                </TicketOptions>
              </div>
            </TicketGenre>
          </>
        ) 
      } 
    </>
  );
}

const NoEnrollmentMessage = styled.h1`
  font-size: 20px;
  color: #8E8E8E;
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

const TicketGenre = styled.div`
  display: flex;
  flex-direction: column;  
  h2{
    font-size: 20px;
    font-weight: 400;
    color: #8E8E8E;  
    margin-bottom: 17px; 
  }
  h3{
    color: #454545;
    font-size: 16px;
    line-height: 22px;
  }
  h4{
    font-size: 14px;
    color: #898989;
  }
  .optionBox{
    display: flex;
    margin-bottom: 44px;
  }
`;

const TicketOptions = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px #CECECE solid;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.background || "#FFFFFF"};
`;
