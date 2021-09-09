import styled from "styled-components";

export default function DeniedMessage({ messages }) {
  return (
    <Body>
      {messages.map((message) => (
        <span>{message}</span>
      ))}
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  color: #8e8e8e;
  font-size: 20px;
  font-family: "Roboto";
`;
