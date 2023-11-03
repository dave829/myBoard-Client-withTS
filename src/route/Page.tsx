import React from "react";
import { useParams } from "react-router-dom";

export const Page = () => {
  const { pageId } = useParams();
  return (
    <div>
      Page
      {pageId}
    </div>
  );
};
