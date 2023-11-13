import React, { useState } from "react";
import { TodoListbody } from "./TodoListbody/TodoListbody";
import { Header } from "./Header/Header";
import { TodoTemplate } from "./TodoTemplate";
import { useAppSelector } from "../../redux-toolkitStore/store";

type Props = {
  // filter: (value: number) => void;
};

export const TodoList: React.FC = () => {
  const filters = useAppSelector<string[]>((state) => state.todo.filters);
  const [filter, setFilter] = useState<string>(filters[0]);
  //console.log(filter); //초기값 all string

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
