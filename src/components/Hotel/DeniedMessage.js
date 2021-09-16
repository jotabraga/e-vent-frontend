import styled from "styled-components";

export default function DeniedMessage({ messages }) {
  return (
    <Body>
      <h1>Escolha de hotel e quarto</h1>
      <div>
        {messages.map((message, index) => (
          <span key={index}>{message}</span>
        ))}
      </div>
    </Body>
  );
}

const Body = styled.div`
  font-family: "Roboto";

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: #8e8e8e;
    font-size: 20px;
    margin-top: 30vh;
  }

  & > h1 {
    color: #000;
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 40px;
  }
`;
