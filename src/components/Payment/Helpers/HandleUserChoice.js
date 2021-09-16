export default function handleUserTicketChoice(ticket, bookingData, setBookingData) {
  const { type } = ticket;
  function removeSelection(ticketType) {
    if (ticketType === "lodge") return setBookingData({ ...bookingData, lodge: null });
    if (ticketType === "modality") return setBookingData({ ...bookingData, modality: null, lodge: null });
  }
  function addSelection(ticketType) {
    if (ticketType === "lodge") return setBookingData({ ...bookingData, lodge: ticket });
    if (ticketType === "modality") return setBookingData({ ...bookingData, modality: ticket, lodge: null });
  }
  const isSelected = (ticketType, type) => {
    if (ticketType === "lodge") return (bookingData?.lodge?.type === type);
    if (ticketType === "modality") return (bookingData?.modality?.type === type);
  };
  const isLodgeTicket = (type) => {
    if (type === "Com Hotel" || type === "Sem Hotel") return true;
  };
  const isModalityTicket = (type) => {
    if (type === "Online" || type === "Presencial") return true;
  };
  if (isLodgeTicket(type)) {
    if (isSelected("lodge", type)) return removeSelection("lodge");
    if (!isSelected("lodge", type)) return addSelection("lodge");
  }
  if (isModalityTicket(type)) {
    if (isSelected("modality", type)) return removeSelection("modality");
    if (!isSelected("modality", type)) return addSelection("modality");      
  }
}
