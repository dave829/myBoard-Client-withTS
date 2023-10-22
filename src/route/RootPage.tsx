import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "./RootPage.module.css";
import { NavMenus } from "../components/Navbar/NavMenus";

import { useAppSelector } from "../redux-toolkitStore/store";

export const RootPage = () => {
  const darkmode = useAppSelector((state) => state.darkmode).darkmode;

  return (
    <div
      className={`${
        darkmode
          ? `${styles.rootcontainer} ${styles.darkmode}`
          : styles.rootcontainer
      }`}
    >
      <section className={styles.navbarContainer}>
        <Navbar />
      </section>
      <section className={styles.outletContainer}>
        <div className={styles.outletBox}>
          <NavMenus />
          <div
            className={`${
              darkmode
                ? `${styles.outletCover} ${styles.outletCoverDarkmode}`
                : styles.outletCover
            }`}
          >
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};
