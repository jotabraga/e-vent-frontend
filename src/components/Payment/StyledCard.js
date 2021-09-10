import styled from "styled-components";

const StyledCard = styled.div` 
  height: 225px; 
  display: flex;
  gap: 25px; 
  

  #valid{
    width: 22em !important;
  }
  #cvc{
    width: 10em !important;
  }
  .inputs-container{
    display: flex;
    flex-direction: column;
    border-style: none;
  }
  .double-input{
    display: flex ;
    justify-content: space-between ;
    width: 100% ;
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
    border-radius: 5px;              
    :focus {         
      border-color: #8e8e8e;       
      }     
    }     
  }      

`;

export default StyledCard;
