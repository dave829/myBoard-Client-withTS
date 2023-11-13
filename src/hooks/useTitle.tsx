import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Title } from "../recoil/Title";

export const useTitle = ({ titles }: any) => {
  //const [title, setTitle] = useRecoilState(Title);

  const [habitTracker, setHabitTracker] = useState();

  // const habitTrackerTitle = () => {
  //   return <Title />;
  // };

  //return [mainTitle, boardTitle, todoTitle];
  return [];
};
