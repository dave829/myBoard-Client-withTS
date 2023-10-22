import { useEffect, useState } from "react";

export default function useBoardList({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [boardLists, setBoardLists] = useState([]);
  useEffect(() => {
    console.log("fetching....");
    setLoading(true);
    setError(undefined);
    fetch("data/listDate.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 데이터를 네트워크에서 받아옴");
        setBoardLists(data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [boardLists]);

  return [loading, error, boardLists];
}
