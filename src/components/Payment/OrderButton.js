import styled from "styled-components";

const OrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.pay ? "182px" : "162px")};
  height: 37px;
  background: #E0E0E0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  align-items: center;
  margin-top: 17px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 13px;
  color: #000;
  font-weight: 400;
  :hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  `;

export default OrderButton;
