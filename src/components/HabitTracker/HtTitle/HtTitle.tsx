import React from "react";
import styled from "styled-components";

export const HtTitle = () => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>Habit Tracker</StyledTitle>
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
`;
