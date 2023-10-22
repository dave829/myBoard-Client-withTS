import React from "react";
import styles from "./TodoList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setDarkmode } from "../../redux-toolkitStore/reducers/darkmodeReducer";
import { DarkModeProps } from "../../model/darkmode";

export const TodoList = () => {
  const darkmode = useSelector((state: DarkModeProps) => state.darkmode);

  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setDarkmode(!darkmode));
  };

  return (
    <div>
      <h1>TodoList</h1>
    </div>
  );
};
