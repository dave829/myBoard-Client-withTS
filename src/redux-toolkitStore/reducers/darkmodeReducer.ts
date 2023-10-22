import { createSlice } from "@reduxjs/toolkit";

let currentMode = JSON.parse(localStorage.getItem("darkmodelocal") || "{}");

interface DarkModeProps {
  darkmode: boolean;
}

const initialState: DarkModeProps = {
  darkmode: currentMode,
};

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    setDarkmode(state, action) {
      state.darkmode = action.payload;
      localStorage.setItem("darkmodelocal", action.payload);
    },
  },
});

export const { setDarkmode } = darkmodeSlice.actions;

export const selectDarkmode = (state: DarkModeProps) => state.darkmode;

export default darkmodeSlice.reducer;
