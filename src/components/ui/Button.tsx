import React from "react";

interface button {
  text: string;
  //onClick: () => Function;
}

export const Button = ({ text }: button) => {
  return (
    <button
      className="bg-teal-500 py-2 text-white px-4 rounded-sm hover:brightness-110 "
      //onClick={onClick}
    >
      {text}
    </button>
  );
};
