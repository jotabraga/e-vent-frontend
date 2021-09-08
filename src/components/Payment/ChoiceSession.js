import styled from "styled-components";
export default function ChoiceSession(props) {
  return <NewSession>{props.children}</NewSession>;
}

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
