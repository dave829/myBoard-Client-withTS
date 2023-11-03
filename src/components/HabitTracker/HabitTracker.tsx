import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  HabitTrackerAtom,
  QuantityHabitSelector,
  TotalHabitSelectorCount,
} from "../../recoil/HabitTrackerAtom";

export const HabitTracker = () => {
  const [value, setValue] = useRecoilState(HabitTrackerAtom);

  const justhabitValue = useRecoilValue(HabitTrackerAtom);
  const justSethabitValue = useSetRecoilState(HabitTrackerAtom);

  const habitValue = useRecoilValue(QuantityHabitSelector);
  const TotalHabitSelectorCounts = useRecoilValue(TotalHabitSelectorCount);

  return (
    <div>
      <h1>HabitTracker coming soon!</h1>
    </div>
  );
};
