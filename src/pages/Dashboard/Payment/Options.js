import styled from "styled-components";
export default function Options(props) {
  const { price, type } = props;
  return (
    <StyledCardOption>
      <h3>{type}</h3>
      <h4>R$ {price}</h4>
    </StyledCardOption>
  );
}
const StyledCardOption = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px #cecece solid;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${(props) => props.background || "#FFFFFF"};
`;
