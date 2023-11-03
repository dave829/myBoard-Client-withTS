import React from "react";
import styled from "styled-components";

export const TodoNav = () => {
  return (
    <StyledTodoNavWrapper>
      <StyledTodoTitle>TodoList</StyledTodoTitle>
    </StyledTodoNavWrapper>
  );
};

const StyledTodoNavWrapper = styled.div`
  height: 5.5rem;
  display: flex;
  align-items: center;
  background-color: #ffffff34;

  border-radius: 10px;

  box-shadow: #86d7bf00;
`;

const StyledTodoTitle = styled.h1`
  color: #fff;
  font-size: 65px;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 15px;
  width: 50%;
`;
