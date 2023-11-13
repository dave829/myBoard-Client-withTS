import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

type TodoListProps = {
  todo: TodoProps;
  onUpdate: Function;
  onDelete: Function;
};

type TodoProps = {
  id: string;
  text: string;
  status: string;
};

export const Todo = ({ todo, onUpdate, onDelete }: TodoListProps) => {
  const { id, text, status }: TodoProps = todo;
  //console.log(id, text, status);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.checked);

    const status = e.target.checked ? "completed" : "active";
    //console.log(status);
    onUpdate({ ...todo, status });
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const selected = e.target.defaultChecked ? "completed" : "active";
  // };

  const handleDelete = () => onDelete(todo);

  return (
    <StyledLi>
      <StyledInput
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
      <StyledSpan>
        <StyledButton onClick={handleDelete}>
          <FaTrashAlt />
        </StyledButton>
      </StyledSpan>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  color: var(--color-text);
`;

const StyledInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledLabel = styled.label`
  flex: 1 1 0%;
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const StyledSpan = styled.span`
  width: 26px;
  height: 26px;
  background-color: var(--color-grey);
  border-radius: 100%;
  transition: all 150ms ease-out;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: var(--color-accent);
    transform: rotate(15deg) scale(1.2);
  }
`;

const StyledButton = styled.button`
  color: var(--color-text);
  background-color: transparent;
  font-size: smaller;
`;
