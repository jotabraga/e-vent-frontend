import { toast } from "react-toastify";

export default function checkCardData(number, name, cvc, expiry) {
  let isDataCorrect = true;

  if (String(number).length < 16) {
    isDataCorrect = false;
    toast("Número do cartão inválido");
  }

  if (String(cvc).length < 3) {
    isDataCorrect = false;
    toast("CVC incorreto");
  }

  if (String(expiry).length < 4) {
    isDataCorrect = false;
    toast("Data de validade incorreta");
  }

  if (String(name) === "") {
    isDataCorrect = false;
    toast("Por favor, preencha o nome");
  }

  return isDataCorrect;
};
