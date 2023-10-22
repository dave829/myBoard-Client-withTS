import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import styles from "./DarkMode.module.css";

import { setDarkmode } from "../../redux-toolkitStore/reducers/darkmodeReducer";
import { useAppDispatch, useAppSelector } from "../../redux-toolkitStore/store";

export const DarkMode = () => {
  //redux-toolkit
  const darkmode = useAppSelector((state) => state.darkmode).darkmode;
  const dispatch = useAppDispatch();

  const clickhandler = () => {
    //resux-toolkit part
    dispatch(setDarkmode(!darkmode));
  };

  const onchangehandler = () => {
    clickhandler();
  };

  return (
    <>
      <span
        className={`${
          darkmode
            ? `${styles.container} ${styles.containerDarkmode}`
            : styles.container
        }`}
        onClick={clickhandler}
      >
        <input
          type="checkbox"
          className={`${
            darkmode
              ? `${styles.toggle} ${styles.toggleDarkmode}`
              : styles.toggle
          }`}
          checked={darkmode}
          onChange={onchangehandler}
        />
        <span className={styles.moon}>
          <BsMoon />
        </span>
        <span className={styles.sun}>
          <BsSun />
        </span>
      </span>
    </>
  );
};
