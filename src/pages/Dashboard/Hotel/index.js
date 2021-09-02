import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import HotelCard from "../../../components/HotelCard";

export default function Hotel() {
  const { hotel } = useApi();
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const result = hotel.GetHotelsInformation();
    result.then((res) => {
      setHotels(res.data);
    });
  }, []);
  return (
    <div>
      {hotels.map((h) => (
        <HotelCard key={h.id} hotel={h} />
      ))}
    </div>
  );
}
