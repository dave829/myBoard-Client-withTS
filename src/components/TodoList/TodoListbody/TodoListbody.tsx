import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Todo } from "../Todo/Todo";
import { TodoInput } from "../TodoInput/TodoInput";
import { TfiFaceSad } from "react-icons/tfi";

type TodoListBodyValue = {
  filter: string;
  updated: string;
  id: string;
  delete: string;
};

type Filter = {
  todo: any;
  onUpdate: Function;
  onDelete: Function;
  // id: any;
  // text: string;
  // status: string;
};
interface TodoListbody {
  filter: string;
}

export const TodoListbody: React.FC<TodoListbody> = ({ filter }) => {
  //complete
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo: TodoListBodyValue) => setTodos([...todos, todo]);

  const handleUpdate = (updated: TodoListBodyValue) => {
    //console.log(updated);
    setTodos(
      todos.map((t: TodoListBodyValue) => (t.id === updated.id ? updated : t))
    );
  };

  const handleDelete = (deleted: TodoListBodyValue) =>
    setTodos(todos.filter((t: TodoListBodyValue) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter); //complete
  //console.log(filtered);

  // type Filter = {
  //   key: any;
  //   todo: any;
  //   onUpdate: Function;
  //   onDelete: Function;
  //   id: any;
  //   text: string;
  //   status: string;
  //item: string;
  // };

  return (
    <>
      <StyledContainer>
        <StyledUl>
          {filtered.length ? (
            filtered.map((item: any) => (
              <Todo
                key={item.id}
                todo={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <NoItems>
              no list on this board yet <TfiFaceSad />
            </NoItems>
          )}
        </StyledUl>
        <TodoInput onAdd={handleAdd} />
      </StyledContainer>
    </>
  );
};

function readTodosFromLocalStorage() {
  //console.log("readTodosFromLocalStorage");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

interface GetFilterdItems {
  todos: todo[];
  filter_: string;
  //filter: any;
}

type todo = {
  status: string;
  filter: string;
  todo: string[];
  //(todo : string[]) => string;
};

function getFilteredItems(todos: any, filter_: any) {
  // console.log(todos[0].status + "투두");
  // console.log(filter + "필터");
  if (filter_ === "all") {
    return todos;
  }
  //return todos.filter((todo) => todo.status === filter);

  return todos.filter((todo: any) => todo.status === filter_);
}

const StyledContainer = styled.div`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  /* background-color: var(--color-bg); */
`;

const StyledUl = styled.ul`
  flex: 1 1 auto;
  overflow-y: auto;
`;

const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 6rem auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;
