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
  const [isPaid, setIsPaid] = useState(null);
  const [isOnline, setIsOnline] = useState(null);

  const [messageText, setMessageText] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const { enrollment } = useApi();

  const [dayIsSelected, setDayIsSelected] = useState(false);

  useEffect(() => {
    enrollment
      .getPersonalInformations()
      .then((res) => {
        setIsEnroll(!!res.data);
        setIsLoading(false);
        setIsPaid(bookingData?.isPaid);
        setIsOnline(bookingData?.modality?.type === "Online");
        populateMessageText(isEnroll, isPaid, isOnline, setShowMessage, setMessageText);
      })
      .catch((err) => {
        toast("Não foi possível carregar os dados!");
      });
  }, [isPaid, bookingData]);

  return (
    <>
      <Loading isLoading={isLoading} className="loading" />
      <Container show={!isLoading}>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <Message show={showMessage}>{messageText}</Message>
        <SubContainer show={!showMessage} h2Show={dayIsSelected}>
          <h2>Primeiro, filtre pelo dia do evento: </h2>
          <ActivitiesDates setDayIsSelected={setDayIsSelected} dayIsSelected={dayIsSelected} />
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

    display: ${(props) => (props.h2Show ? "none" : "block")};
  }
`;
