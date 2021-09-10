export default function populateMessageText(
  isEnroll,
  isPaid,
  isOnline,
  setShowMessage,
  setMessageText
) {
  if (isEnroll) {
    if (!isPaid) {
      setMessageText(
        "Você precisa ter confirmado pagamento antes de fazer a escolha de atividades"
      );
    } else {
      if (isOnline) {
        setMessageText(
          "Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades."
        );
      } else {
        setShowMessage(false);
      }
    }
  } else {
    setMessageText(
      "Você precisa completar sua inscrição antes de prosseguir pra escolha de atividades"
    );
  }
}
