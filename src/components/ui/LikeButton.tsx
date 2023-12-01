import React from "react";
import { GrLike } from "react-icons/gr";

export const LikeButton = () => {

  

  return (
    // <button onClick={() => mutation.mutate()} disabled={mutation.isLoading}>
    //   {mutation.isLoading ? "Liking..." : "Like"}
    // </button>
    <button>
      <GrLike />
    </button>
  );
};
