import React from "react";
import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";

const IsPaid = () => {
  return (
    <Body>
      <StyledIcon />
      <div className="text">
        <h2>Pagamento confirmado!</h2>
        <span>Prossiga para escolha de hospedagem e atividades</span>
      </div>
    </Body>
  );
};

export default IsPaid;

const Body = styled.div`
    height: 38px;
    display: flex;
    align-items: center;

    h2{
        font-size: 14px;
        font-weight: 700;
        line-height: 18.75px;
        color: #454545;
    }

    span{
        font-size: 14px;
        font-weight: 400;
        line-height: 18.75px;
        color: #454545;
    }

`; 

const StyledIcon = styled(IoIosCheckmarkCircle)`
    color: #36B853;
    width: 44px;
    height: 44px;
`;
