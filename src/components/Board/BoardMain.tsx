import { useState } from "react";
// import styled from "styled-components";
import styles from "./BoardMain.module.css";
import { MainNav } from "./MainNav";
import { BoardList } from "../BoardList/BoardList";

export const BoardMain = () => {
  const [name, setName] = useState("Board");

  return (
    <>
      <section className={styles.container}>
        <MainNav name={name} />
        <BoardList />
      </section>
    </>
  );
};
