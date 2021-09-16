import { createContext, useState } from "react";

const PictureContext = createContext();
export default PictureContext;

export function PictureProvider({ children }) {
  const [picture, setPicture] = useState(JSON.parse(localStorage.getItem("picture")));

  return (
    <PictureContext.Provider value={{ picture, setPicture }}>
      {children}
    </PictureContext.Provider>
  );
}
