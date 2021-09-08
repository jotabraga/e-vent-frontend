import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import styled from "styled-components";
import BookingContext from "../../../contexts/BookingContext";
import OrderButton from "../../../components/Payment/OrderButton";
import BookingApi from "../../../services/BookingApi";

export default function Payment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <NewSession >
        <h2>Ingresso escolhido</h2>
      </NewSession>
      <NewSession >
        <h2>Pagamento</h2>
      </NewSession>
      <OrderButton >
        RESERVAR INGRESSO
      </OrderButton>
    </>  
  );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const NewSession = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    margin-bottom: 15px;
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
    gap: 35px;
  }
`;
