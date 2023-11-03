import React, { useState } from "react";
import { TodoListbody } from "./TodoListbody/TodoListbody";
import { Header } from "./Header/Header";
import { TodoTemplate } from "./TodoTemplate";
import { useAppSelector } from "../../redux-toolkitStore/store";

export const TodoList = () => {
  const filters = useAppSelector((state) => state.todo.filters);
  const [filter, setFilter] = useState(filters[0]);
  //console.log(filter); //초기값 all

  return (
    <>
      <TodoTemplate>
        <Header filters={filters} filter={filter} onChangeFilter={setFilter} />
        <TodoListbody filter={filter} />
      </TodoTemplate>
    </>
  );
};

React.memo(TodoList);
