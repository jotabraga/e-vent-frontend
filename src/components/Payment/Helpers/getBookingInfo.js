import getBookingPrice from "./getBookingPrice";

export default function getBookingInfo(obj) {
  const { modality, lodge } = obj;
  const modalityId = modality.id;
  const lodgeId = lodge?.id;
  const value = getBookingPrice(obj);
  const bookingInfo = { 
    modalityId, 
    lodgeId,
    value
  };
  return bookingInfo;
}
