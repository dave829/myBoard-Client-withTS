import { createContext, useEffect, useState } from "react";

export const NavContext = createContext<any>({} as any);

export const NavProvider = ({ children }) => {
  const [navName, setNavName] = useState("");
  useEffect(() => {
    setNavName("Menu");
  }, []);
  return (
    <NavContext.Provider value={{ navName, setNavName }}>
      {children}
    </NavContext.Provider>
  );
};
