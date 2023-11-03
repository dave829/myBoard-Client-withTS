import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./reducers/darkmodeReducer";
import boardListData from "./reducers/boardListDataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoSlice from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    boardListData: boardListData,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
