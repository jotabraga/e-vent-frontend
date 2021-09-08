import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import Typography from "@material-ui/core/Typography";
import EnrollmentApi from "../../../services/EnrollmentApi";

export default function Activities() {
  const [isLoading, setIsLoading] = useState(true);
  const [userEnrollment, setUserEnrollment] = useState(null);
  const enrollmentAPI = new EnrollmentApi();

  useEffect(() => {
    enrollmentAPI
      .getPersonalInformations()
      .then((res) => {
        setUserEnrollment(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        /* eslint-disable-next-line no-console */
        console.log(err);
        toast.error("Não foi possível carregar os dados!");
      });
  });

  return (
    <>
      <Loading isLoading={isLoading} className="loading" />
      <Container show={!isLoading}>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <NoEnrollmentMessage show={!userEnrollment}>
          Você precisa completar sua inscrição antes <br /> de prosseguir pra
          escolha de atividades
        </NoEnrollmentMessage>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
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
