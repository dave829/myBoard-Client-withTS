import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import styles from "./MainNav.module.css";

export const MainNav = ({ name }) => {
  return (
    <div className={styles.boxTitle}>
      <h1 className={styles.toDoBox}>{name}</h1>
      <span className={styles.backForward}>
        <IoChevronBackCircleOutline />
        <IoChevronForwardCircleOutline />
      </span>
    </div>
  );
};
