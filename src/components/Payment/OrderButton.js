import styled from "styled-components";
export default function OrderButton(props) {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 37px;
  background: #E0E0E0;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  align-itens: center;
  margin-top: 17px;
  h2 {
    font-size: 13px;
    color: #000;
    font-weight: 400;
  }
`;
