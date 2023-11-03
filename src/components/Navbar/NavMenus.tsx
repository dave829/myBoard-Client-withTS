import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenus.module.css";
import { DarkMode } from "../DarkMode/DarkMode";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";

export const NavMenus = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navMenusBox}>
        <li>
          <Link to="/">
            <span>
              <AiOutlineInfoCircle />
            </span>
            <span className={styles.navMenuName}>About</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <BiBookAlt />
            </span>
            <span className={styles.navMenuName}>Blog</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/">
            <span>
              <HiOutlineHome />
            </span>
            <span className={styles.navMenuName}>Projects</span>
          </Link>
        </li> */}
        <li>
          <Link to="/">
            <span>
              <AiOutlineTags />
            </span>
            <span className={styles.navMenuName}>Tags</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>
              <BiLogIn />
            </span>
            <span className={styles.navMenuName}>Login</span>
          </Link>
        </li>
        <li style={{ color: "#fafafa" }}>
          <DarkMode />
        </li>
      </ul>
    </div>
  );
};
