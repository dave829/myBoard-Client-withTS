import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { ImClipboard } from "react-icons/im";
import { NavLogo } from "./NavLogo";

import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";

import { useSelector } from "react-redux";
import { DarkModeProps } from "../../model/darkmode";

export const Navbar = () => {
  const darkmode = useSelector((state: DarkModeProps) => state.darkmode);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navlogo}>
        <NavLogo />
      </div>
      <div className={styles.inputContainer}>
        <input placeholder="&#61442;   Search" className={styles.input} />
      </div>
      <div className={styles.navbarContainer}>
        <ul className={styles.sideBarList}>
          <li>
            <Link to="/">
              <span className={styles.icon}>
                <HiOutlineHome />
              </span>
              <span className={styles.navListTitle}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/BoardMain">
              <span className={styles.icon}>
                <ImClipboard />
              </span>
              <span className={styles.navListTitle}>Board</span>
            </Link>
          </li>
          <li>
            <Link to="/TodoList">
              <span className={styles.icon}>
                <LuListTodo />
              </span>
              <span className={styles.navListTitle}>TodoList</span>
            </Link>
          </li>
          <li>
            <Link to="/HabitTracker">
              <span className={styles.icon}>
                <ImClipboard />
              </span>
              <span className={styles.navListTitle}>HabitTracker</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/BoardMain">
              <span className={styles.icon}>
                <ImClipboard />
              </span>
              <span className={styles.navListTitle}>
                <del>Board</del>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/BoardMain">
              <span className={styles.icon}>
                <ImClipboard />
              </span>
              <span className={styles.navListTitle}>
                <del>Board</del>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/BoardMain">
              <span className={styles.icon}>
                <ImClipboard />
              </span>
              <span className={styles.navListTitle}>
                <del>Board</del>
              </span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className={styles.copyrightContainer}>
        <ul className={styles.copyrightbox}>
          <li className={styles.notice}>
            <p>
              This site has been deployed, <br /> but still under construction!
            </p>
          </li>
          <li className={styles.copyrightlogo}>
            <span>
              <AiOutlineMail />
            </span>
            <span>
              <BsGithub />
            </span>
            <span>
              <AiFillLinkedin />
            </span>
          </li>
          <li>
            <p>2023 • dave 블로그</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};
