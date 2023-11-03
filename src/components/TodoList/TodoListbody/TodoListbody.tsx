import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Todo } from "../Todo/Todo";
import { TodoInput } from "../TodoInput/TodoInput";

export const TodoListbody = ({ filter }) => {
  //complete
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) => {
    //console.log(updated);
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter); //complete
  //console.log(filtered);

  return (
    <>
      <StyledContainer>
        <StyledUl>
          {filtered.length ? (
            filtered.map((item) => (
              <Todo
                key={item.id}
                todo={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <NoItems>완료된 일이 없습니다.</NoItems>
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

function getFilteredItems(todos, filter) {
  // console.log(todos[0].status + "투두");
  // console.log(filter + "필터");
  if (filter === "all") {
    return todos;
  }
  //return todos.filter((todo) => todo.status === filter);

  return todos.filter((todo) => todo.status === filter);
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
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;
