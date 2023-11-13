import React from "react";
import styled from "styled-components";

//const title = ["Home", "Board", "Todo List", "Habit Tracker"];

export const Title = () => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>{}</StyledTitle>
    </StyledTitleWrapper>
  );
};

const StyledTitleWrapper = styled.div`
  height: 5.5rem;
  display: flex;
  align-items: center;
  background-color: #ffffff34;
  border-radius: 10px;
  box-shadow: #86d7bf00;
`;

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 65px;
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 15px;
  /* width: 50%; */
`;
