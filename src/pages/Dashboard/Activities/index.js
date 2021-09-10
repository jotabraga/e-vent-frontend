import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import Typography from "@material-ui/core/Typography";
import BookingContext from "../../../contexts/BookingContext";
import populateMessageText from "./utils/populateMessageText";
import ActivitiesDates from "../../../components/Activities/ActivitiesDates";

import useApi from "../../../hooks/useApi";

import { Message } from "./styles";

export default function Activities() {
  const { bookingData } = useContext(BookingContext);

  const [isLoading, setIsLoading] = useState(true);

  const [isEnroll, setIsEnroll] = useState(null);
  const [isPaid, setIsPaid] = useState(bookingData?.isPaid);
  const [isOnline, setIsOnline] = useState(
    bookingData?.modality.type === "Online"
  );

  const [messageText, setMessageText] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const { enrollment } = useApi();

  useEffect(() => {
    enrollment
      .getPersonalInformations()
      .then((res) => {
        setIsEnroll(!!res.data);
        setIsLoading(false);
        populateMessageText(
          isEnroll,
          isPaid,
          isOnline,
          setShowMessage,
          setMessageText
        );
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
        <Message show={!showMessage}>{messageText}</Message>
        <SubContainer show={showMessage}>
          <h2>Primeiro, filtre pelo dia do evento: </h2>
          <ActivitiesDates />
        </SubContainer>
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

const SubContainer = styled.div`
  width: 100%;
  height: 100%;

  display: ${(props) => (props.show ? "block" : "none")};

  h2 {
    color: #8e8e8e;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 18px;
  }
`;
