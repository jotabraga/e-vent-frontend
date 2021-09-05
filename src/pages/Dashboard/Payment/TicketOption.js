import { useEffect } from "react";
import { useState } from "react";
import ModalityApi from "../../../services/ModalityApi";
import LodgeApi from "../../../services/LodgeApi";
import { toast } from "react-toastify";
import Options from "./Options";
import ChoiceSession from "../../../components/Payment/ChoiceSession";

export default function TicketOption(props) {
  const [ticketOptions, setTicketsOptions] = useState(null);
  const { apiPath, modality, setModalityTypes } = props;

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
    <ChoiceSession>
      {props.children}
      <div className="optionBox">
        {ticketOptions?.map((t) => (
          <Options key={t.id} ticket={t} modality={modality} setModalityTypes={setModalityTypes} />
        ))}
      </div>
    </ChoiceSession>
  );
}

