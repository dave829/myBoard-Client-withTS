import { createContext, useEffect, useState } from "react";

export const MainImgContext = createContext({});

const image = [
  { value: "assets/calendar.mp4" },
  { value: "assets/clock.mp4" },
  { value: "assets/customer.mp4" },
  { value: "assets/diagram.mp4" },
  { value: "assets/idea.mp4" },
  { value: "assets/location.mp4" },
  { value: "assets/rocket.mp4" },
  { value: "assets/checklist.mp4" },
];

export const MainImgProvider = ({ children }) => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    setImgs(image);
  }, []);

  const imgsMap = imgs.map((v) => v.value);

  return (
    <MainImgContext.Provider value={{ imgsMap, imgs }}>
      {children}
    </MainImgContext.Provider>
  );
};
