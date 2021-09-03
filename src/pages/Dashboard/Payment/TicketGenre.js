import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import TicketApi from "../../../services/ModalityApi";
import { toast } from "react-toastify";

export default function TicketGenre( props ) {
  const [ticketOptions, setTicketsOptions] = useState(null);
  useEffect(() => {
    const request = TicketApi.getTicketsOptions();
    request.then((response) => {
      setTicketsOptions(response.data);
    });
    request.catch((error) => {
      /* eslint-disable-next-line no-console */
      console.log(error);
    
      toast.error("Não foi possível carregar os dados!");
    });
  }, []);
  return(
    <>
      {props.children}
      <div className="optionBox">
        {ticketOptions.map((t) => (
          <TicketOption price={t.price} name={t.name} />
        ))}
      </div>
    </>
  );
}
const TicketOption = styled.div`
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
