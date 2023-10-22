import React from "react";
import styles from "./TodoListbody.module.css";
import { Todo } from "../Todo/Todo";

export const TodoListbody = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}></ul>
      {/* <AddTodo onAdd={handleAdd} /> */}
    </section>
  );
};
