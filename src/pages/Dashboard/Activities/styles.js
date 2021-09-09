import styled from "styled-components";

const Message = styled.h1`
  font-size: 20px;
  color: #8e8e8e;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 200px;
  flex-direction: column;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export { Message };
