import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewBoardList, getBoardListApi } from "../api/firebase";

export default function useBoard() {
  const queryClient = useQueryClient();

  //Get
  const boardListQuery = useQuery({
    queryKey: ["boardList"],
    // @ts-ignore
    queryFn: () => getBoardListApi(boardList),
    // {
    //     enabled: !!boardList,
    // }
  });

  //add, update
  const addOrUpdateboardList = useMutation({
    mutationFn: (boardList) => addNewBoardList(boardList),
    onSuccess: () => queryClient.invalidateQueries(["boardList"]),
  });

  //remove
  const removeboardList = useMutation({
    //mutationFn: (id) => removeFromCart(uid, id),
    //onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  // return
  return { boardListQuery, addOrUpdateboardList, removeboardList };
}
