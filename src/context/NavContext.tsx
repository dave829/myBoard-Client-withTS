import { createContext, useEffect, useState } from "react";

export const NavContext = createContext<any>({} as any);

interface Iprovider {
  children: React.ReactNode;
}

export const NavProvider = ({ children }: Iprovider) => {
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
