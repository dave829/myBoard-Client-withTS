import React from "react";
import styled, { css } from "styled-components";
import { TodoNav } from "./Nav/TodoNav";
import { useAppSelector } from "../../redux-toolkitStore/store";

export const TodoTemplate = ({ children }: { children: JSX.Element[] }) => {
  const darkmode = useAppSelector((state) => state.darkmode.darkmode);
  //console.log(darkmode);
  return (
    <>
      <StyledTodoWrapper>
        <TodoNav />
        <StyledTodoTemplate>
          <StyledTodoContent selected={!darkmode}>{children}</StyledTodoContent>
        </StyledTodoTemplate>
      </StyledTodoWrapper>
    </>
  );
};

const StyledTodoWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const StyledTodoTemplate = styled.article`
  @media (max-width: 1920px) {
    width: 512px;
    height: 100%;
    margin: 3rem auto;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 100vh;
    margin: 4rem auto;
    border-radius: 2px;
  }
`;

const StyledTodoContent = styled.section<{ selected: any }>`
  width: 100%;
  height: 60%;
  max-width: 500px;
  /* background-color: var(--color-bg-dark); */
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 9px 13px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 9px 13px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 9px 13px -1px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  box-shadow: 9px 14px 17px 0px rgb(145 198 190 / 57%);
  background: linear-gradient(0deg, rgb(34 193 195 / 23%) 0%, #43727f 100%);

  ${(props) =>
    props.selected &&
    css`
      background: rgb(145 198 190);
    `};
`;
