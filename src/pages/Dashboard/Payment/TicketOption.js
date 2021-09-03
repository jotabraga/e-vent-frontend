import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import ModalityApi from "../../../services/ModalityApi";
import LodgeApi from "../../../services/LodgeApi";
import { toast } from "react-toastify";
import Options from "./Options";

export default function TicketOption(props) {
  const [ticketOptions, setTicketsOptions] = useState(null);
  const { apiPath } = props;

  useEffect(() => {
    let request;

    if (apiPath === "modalities") {
      request = ModalityApi.getModalities();
    }
    if (apiPath === "lodges") {
      request = LodgeApi.getLodgeOptions();
    }
    request.then((response) => {
      setTicketsOptions(response.data);
    });
    request.catch((error) => {
      /* eslint-disable-next-line no-console */
      console.log(error);

      toast.error("Não foi possível carregar os dados!");
    });
  }, [apiPath]);
  return (
    <TicketModality>
      {props.children}
      <div className="optionBox">
        {ticketOptions?.map((t) => (
          <Options price={t.price} type={t.type} />
        ))}
      </div>
    </TicketModality>
  );
}
const TicketModality = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    margin-bottom: 17px;
  }
  h3 {
    color: #454545;
    font-size: 16px;
    line-height: 22px;
  }
  h4 {
    font-size: 14px;
    color: #898989;
  }
  .optionBox {
    display: flex;
    margin-bottom: 44px;
  }
`;
