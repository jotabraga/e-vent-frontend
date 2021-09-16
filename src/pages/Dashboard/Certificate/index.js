import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
import styled from "styled-components";
import EventInfoContext from "../../../contexts/EventInfoContext";
import CertificateFile from "./CertificateCreator";
import { useState } from "react";
import useApi from "../../../hooks/useApi";

export default function Certificate() {
  const { eventInfo } = useContext(EventInfoContext);
  const { enrollment } = useApi();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    enrollment.getPersonalInformations().then(response => {
      if (response.status !== 200) {
        return;
      }
      const { name } = response.data;
      setUsername(name);
    });
  }, []);

  return (
    <Body>
      { eventInfo &&
        <>
          <StyledTypography variant="h4">Certificado</StyledTypography>
          <Container>
            {dayjs().isAfter(dayjs(eventInfo.endDate)) 
              ? <CertificateContainer>
                <PDFDownloadLink 
                  document={<CertificateFile eventInfo={eventInfo} username={username}/>}
                  fileName="certificado_drivent.pdf"
                  style={styles.button}
                  children={
                    <CertificateImage>
                      <CertificateFile eventInfo={eventInfo} username={username}/>
                    </CertificateImage>
                  }
                >
                </PDFDownloadLink>
              </CertificateContainer> 
              : <span>O certificado estará disponível após a conclusão dos eventos</span>
            }  
          </Container>
        </>
      }
    </Body>
  );
}

const styles = StyleSheet.create({
  button: { 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textDecoration: "none"
  }
});

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
  margin-top: 15px;
`;

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 85%;
`;

const CertificateImage = styled.div`
  height: 100%;
  width: 100%;
  border: 5px solid #000;
`;
