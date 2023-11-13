import React from "react";
import { createContext, useEffect, useState } from "react";

interface AnyContextType {}

export const AnyContext = createContext<{}>({});

export type boardListTy = {
  title: string;
  url: string;
  desc: string[];
};

export interface boardListIN {
  title: string;
  url: string;
  desc: string[];
}

const boardListData: boardListTy[] = [
  {
    title: "2004",
    url: "assets/checklist.mp4",
    desc: ["테스트입니다.1"],
  },
  {
    title: "2005",
    url: "assets/calendar.mp4",
    desc: ["테스트입니다.1"],
  },
  {
    title: "2010",
    url: "assets/verified.mp4",
    desc: ["테스트입니다.1"],
  },
  {
    title: "2020",
    url: "assets/target.mp4",
    desc: ["테스트입니다.1"],
  },
];

interface Iprovider {
  children: React.ReactNode;
}

export const AnyProvider = ({ children }: Iprovider) => {
  const [menuName, setMenuName] = React.useState("");

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    // setMenuName("Board");

    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, [menuName]);

  return (
    <AnyContext.Provider
      value={{ menuName, boardListData, darkMode, toggleDarkMode }}
    >
      {children}
    </AnyContext.Provider>
  );
};

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
