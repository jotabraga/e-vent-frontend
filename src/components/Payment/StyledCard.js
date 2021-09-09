import styled from "styled-components";

const StyledCard = styled.div`
  form {
    diplay: flex;
    flex-flow: column nowrap;
    .payment {
      display: flex;
      margin: 20px 0;
      > div {
        margin: 0 30px 0 0;
        padding: 0;
      }
      .double {
        display: flex;
        input {
          :first-of-type {
            flex: 3;
            margin-right: 5px;
          }
          :last-of-type {
            flex: 2;
            margin-left: 5px;
          }
        }
      }
    }
    input {
      width: 100%;
      height: 40px;
      padding: 5px;
      margin: 5px 0;
      border: 1px solid #e8e8e8;
      border-radius: 5px;
      ::placeholder {
        color: #aeaeae;
        padding-left: 5px;
      }
      ::focus {
        border-color: #8e8e8e;
      }
    }
  }
`;
export default StyledCard;
