import { atom, selector } from "recoil";

// export type HabitTrackerAtom = {
//     id: number;
//     text: string;
//     isComplete: boolean;
// };

export const HabitTrackerAtom = atom({
  key: "HabitTrackerAtom",
  default: ["sleep", "watching Youtube"],
});

export const QuantityHabitSelector = selector({
  key: "QuantityHabitSelector",
  get: ({ get }) => {
    const CurrentItem = get(HabitTrackerAtom);
    return CurrentItem.toLocaleString();
  },
});

export const TotalHabitSelectorCount = selector({
  key: "TotalHabitSelectorCount",
  get: ({ get }) => {
    const HabitItem = get(HabitTrackerAtom);
    return HabitItem.length;
  },
});
