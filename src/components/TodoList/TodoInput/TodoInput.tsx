import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAppDispatch } from "../../../redux-toolkitStore/store";
import { setTodolist } from "../../../redux-toolkitStore/reducers/todoSlice";
import { v4 as uuidv4 } from "uuid";

//import { todoListAction } from "../../../redux-toolkitStore/actions/todoAction";

export const TodoInput = ({ onAdd }: any) => {
  const [text, setText] = useState("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setText(e.target.value);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setText(e.target.value);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  //const handleChange = (e) => setText(e.target.value);

  //   const onClickHandler = useCallback(() => {
  //     todoDispatch(함수());
  //   }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (text.trim().length === 0) {
  //     return;
  //   }
  //   let todoList = {
  //     id: uuidv4(),
  //     todo: text,
  //     seleted: false,
  //   };
  //   todoDispatch(setTodolist(todoList));
  //   setText("");
  // };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
        value={text}
      />
      <StyledButton>Add</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  padding: 1.4rem 1rem;
  /* background-color: var(--color-bg-dark); */
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }

`;

const StyledInput = styled.input`
  /* animation: ${fadein} 1.5s linear; */

  flex: 1 0 auto;
  font-size: 1.4rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  &::placeholder {
    color: #9ca3af;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #5d9aab;
  color: var(--color-white);
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0 2rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  &:hover {
    filter: brightness(110%);
  }
`;
