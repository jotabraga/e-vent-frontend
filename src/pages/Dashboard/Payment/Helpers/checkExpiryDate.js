export default function checkExpiryDate(str) {
  const month = Number(str.substring(0, 2));
  const year = Number(str.substring(2, 4));

  if ( month < 0 || month > 12 ) return false;
  if ( year < 21) return false;

  return true;
}
