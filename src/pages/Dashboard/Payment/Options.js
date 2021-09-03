import styled from "styled-components";
export default function Options(props) {
  const { ticket, modality, setModalityTypes } = props;
  return (
    <StyledCardOption onClick={() => setModalityTypes(ticket)} background={modality?.type === ticket.type ? "#FFEED2" : "#FFF" }>
      <h3>{ticket.type}</h3>
      <h4>R$ {ticket.price}</h4>
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
