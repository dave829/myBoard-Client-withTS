import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenus.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { DarkMode } from "../DarkMode/DarkMode";

export const NavMenus = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navMenusBox}>
        <li>
          <Link to="/">
            <span>
              <HiOutlineHome />
            </span>
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <HiOutlineHome />
            </span>
            <span>Tags</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <HiOutlineHome />
            </span>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <HiOutlineHome />
            </span>
            <span>About</span>
          </Link>
        </li>
        <li style={{ color: "#fafafa" }}>
          <DarkMode />
        </li>
      </ul>
    </div>
  );
};
