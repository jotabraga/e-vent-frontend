import loading from "../../assets/images/loading.gif";
import styled from "styled-components";
export default function Loading() {
  return (
    <ContainerLoading>
      <img className="loading" height="200" src={loading} alt="loading"></img>
    </ContainerLoading>
  );
}

const ContainerLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
