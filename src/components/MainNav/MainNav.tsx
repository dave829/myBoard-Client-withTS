import { useContext, useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import styles from "./MainNav.module.css";
import { NavContext } from "../../context/NavContext";

export const MainNav = () => {
  const { navName } = useContext(NavContext);

  return (
    <div className={styles.boxTitle}>
      <h1 className={styles.toDoBox}>{navName}</h1>
      <span className={styles.backForward}>
        <IoChevronBackCircleOutline />
        <IoChevronForwardCircleOutline />
      </span>
    </div>
  );
};
