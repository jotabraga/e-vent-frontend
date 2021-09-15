import { Typography } from "@material-ui/core";
import styled from "styled-components";

export default function Certificate() {
  return (
    <Body>
      <StyledTypography variant="h4">Certificado</StyledTypography>
      <Container>
        <span>O certificado estará disponível após a conclusão dos eventos</span>
      </Container>
    </Body>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  text-align: left;
`;

const Body = styled.div`
  display: block;
  position: relative;
  height: 100%;
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: #8e8e8e;
  font-size: 20px;
  font-family: "Roboto";
`;
