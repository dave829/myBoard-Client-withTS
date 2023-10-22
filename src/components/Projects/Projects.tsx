import React, { useContext } from "react";
import { MainImgContext } from "../../context/MainImgContext";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

export const Projects = ({ val }) => {
  return (
    <div className={styles.itemContainer}>
      <ul className={`${styles.itembox}`}>
        <li key={val} className={styles.item}>
          <Link to="#">
            <video autoPlay muted playsInline width="100%" height="100%">
              <source src={val} type="video/mp4" />
            </video>
            <label htmlFor="">{val}</label>
          </Link>
        </li>
      </ul>
    </div>
  );
};
