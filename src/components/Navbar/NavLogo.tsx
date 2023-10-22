import React from "react";
import styles from "./NavLogo.module.css";

export const NavLogo = () => {
  return (
    <div className={styles.container}>
      <button className={styles.logo}>Dave's Blog</button>
      <p className={styles.text}>dave의 블로그</p>
    </div>
  );
};
