import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import Typography from "@material-ui/core/Typography";
import EnrollmentApi from "../../../services/EnrollmentApi";
import BookingContext from "../../../contexts/BookingContext";
import populateMessageText from "./utils/populateMessageText";

import { Message } from "./styles";

export default function Activities() {
  const { bookingData } = useContext(BookingContext);

  const [isLoading, setIsLoading] = useState(true);

  const [isEnroll, setIsEnroll] = useState(null);
  const [isPaid, setIsPaid] = useState(bookingData?.isPaid.type);
  const [isOnline, setIsOnline] = useState(
    bookingData?.modality.type === "Online"
  );

  const [messageText, setMessageText] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const enrollmentAPI = new EnrollmentApi();

  useEffect(() => {
    enrollmentAPI
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
        <Message show={showMessage}>{messageText}</Message>
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
