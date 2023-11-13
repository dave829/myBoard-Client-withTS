import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BoardListData } from "../../model/boardListdata";

export const boardListData: BoardListData[] = [
  {
    title: "2004",
    url: "assets/checklist.mp4",
    desc: ["테스트입니다.1"],
  },
  {
    title: "2005",
    url: "assets/calendar.mp4",
    desc: ["테스트입니다.2"],
  },
  {
    title: "2010",
    url: "assets/verified.mp4",
    desc: ["테스트입니다.3"],
  },
  {
    title: "2020",
    url: "assets/target.mp4",
    desc: ["테스트입니다.4"],
  },
];

const initialState = {
  boardListData: boardListData,
};

const boardListDataSlice = createSlice({
  name: "boardListData",
  initialState,
  reducers: {},
});

export default boardListDataSlice.reducer;
