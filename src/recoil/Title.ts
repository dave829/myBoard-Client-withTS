import { atom, selector } from "recoil";

export const Title = atom({
  key: "Title",
  default: ["Home", "Board", "Todo List"],
});
