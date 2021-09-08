export default function getBookingPrice(obj) {
  const { modality, lodge } = obj;
  if (!lodge) return modality.price;
  return modality.price + lodge.price;
}
