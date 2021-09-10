export default function checkCardData(number, name, cvc, expiry) {
  if (String(number).length < 16 || String(cvc).length < 3 || String(expiry).length < 4 ) {
    return false;
  }

  return true;
};
