import styled from "styled-components";

export default function Location(props) {
  const { name } = props;
  return (
    <DayLocation>
      <h3>{name}</h3>
      <div></div>
    </DayLocation>
  );
}

const DayLocation = styled.div`
  width: 283px;
  height: 424px;

  flex-shrink: 0;

  margin-top: 61px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;

  & > h3 {
    font-size: 17px;
    color: #7b7b7b;
  }

  & > div {
    width: 100%;
    height: 392px;

    border: 1px solid #d7d7d7;
  }
`;
