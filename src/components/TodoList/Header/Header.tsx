import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux-toolkitStore/store";
import { v4 as uuidv4 } from "uuid";
//import styles from "./Header.module.css";
import { setFilter } from "../../../redux-toolkitStore/reducers/todoSlice";

export const Header = ({ filters, filter, onChangeFilter }) => {
  return (
    <TodoTitleHeader>
      <TodoTitleUl>
        {filters.map((filterVal, index) => (
          <TodoTitleLi key={index}>
            <TodoTitleButton
              selected={filterVal === filter}
              onClick={() => onChangeFilter(filterVal)}
            >
              {filterVal}
            </TodoTitleButton>
          </TodoTitleLi>
        ))}
      </TodoTitleUl>
    </TodoTitleHeader>
  );
};

const TodoTitleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  align-items: center;
  /* background-color: var(--color-bg-dark); */

  border-bottom: 1px solid var(--color-grey);
`;

const TodoTitleUl = styled.ul`
  display: flex;
`;

const TodoTitleLi = styled.li``;

const TodoTitleButton = styled.button<{ selected: any }>`
  font-size: 1.4rem;
  margin: 0.3rem;
  text-transform: capitalize;
  background-color: transparent;
  color: var(--color-accent);
  opacity: 0.8;
  font-weight: bold;

  &:hover {
    opacity: 1;
  }

  ${(props) =>
    props.selected &&
    css`
      &::after {
        content: "";
        display: block;
        margin-top: 0.2rem;
        border: 1px solid var(--color-text);
      }
    `};
`;
