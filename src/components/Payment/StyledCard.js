import styled from "styled-components";

const StyledCard = styled.div` 
  width: 100%;
  height: 225px; 
  display: flex;
  gap: 25px; 
  .inputs-container{
    display: flex;
    flex-direction: column;
    border-style: none;
  }
  .double-inputs{
    justify-content: space-between;
  }
  form {     
  width: 100%;
  display: flex;     
  flex-flow: column nowrap;
  flex-direction: column;
  input {       
    width: 100%;       
    height: 20px;       
    padding: 5px;       
    margin: 5px 0;       
    border: 1px solid #e8e8e8;       
    border-radius: 5px;              
    :focus {         
      border-color: #8e8e8e;       
    }     }     
    .payment-info 
    {              
      margin: 0;       
      > div 
      {         
        margin: 0 30px 0 0;         
        padding: 0;       
      } 
    }
  }      
`;

export default StyledCard;
