import loading from "../../assets/images/loading.gif";
import styled from "styled-components";
export default function Loading(props) {
  const { isLoading } = props;
  return (
    <ContainerLoading show={isLoading}>
      <img className="loading" src={loading} alt="loading"></img>
    </ContainerLoading>
  );
}

const ContainerLoading = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    height: 200px;
  }
`;
