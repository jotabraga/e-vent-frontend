import { useEffect } from "react";
import { useState } from "react";
import ModalityApi from "../../services/ModalityApi";
import LodgeApi from "../../services/LodgeApi";
import { toast } from "react-toastify";
import Options from "./Options";
import ChoiceSession from "./ChoiceSession";

export default function TicketOption(props) {
  const [ticketOptions, setTicketsOptions] = useState(null);
  const { apiPath } = props;
  useEffect(() => {
    let request;

    const requestByApiPath = {
      modalities: function () {
        ModalityApi.getModalities();
      },
      lodges: function () {
        LodgeApi.getLodgeOptions();
      },
      default: function () {
        throw new Error("No api path data");
      },
    };

    request = requestByApiPath[apiPath ?? "default"];
    request.then((response) => {
      setTicketsOptions(response.data);
    });
    request.catch((error) => {
      toast("Não foi possível carregar os dados!");
    });
  }, [apiPath]);
  return (
    <ChoiceSession>
      {props.children}
      <div className="optionBox">
        {ticketOptions?.map((ticket) => (
          <Options key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </ChoiceSession>
  );
}
