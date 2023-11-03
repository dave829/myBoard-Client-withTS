import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let todoData = [
  {
    id: uuidv4(),
    todo: "청소하기",
    status: "active",
  },
  {
    id: uuidv4(),
    todo: "밥먹기",
    status: "active",
  },
  {
    id: uuidv4(),
    todo: "공부하기",
    status: "active",
  },
];

export interface init {
  todo: todoList[];
  filters: string[];
  test: testname[];
  todos: string[];
}

export interface testname {
  name: string;
}

export type todoList = {
  id: string;
  todo: string;
  status: string;
};

//이니셜 스테이트
const initialState: init = {
  todo: todoData,
  filters: ["all", "active", "completed"],
  test: [{ name: "Tom" }],
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setFilter(state, action): any {
      state.todo.map((todo) => {
        console.log(action.payload[0].id);
        todo.id === action.payload ? action.payload.id : todo;
      });
    },
    setTodolist(state, action) {
      state.todo.push(action.payload);
      //console.log(current(state.todo));
    },
  },
});

export default todoSlice.reducer;

export const { setTodolist, setFilter } = todoSlice.actions;

//export const todoListActions = todoSlice.actions;
