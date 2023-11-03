import { todoListActions } from "../reducers/todoSlice";
import { useAppDispatch } from "../store";

// function getTodolist(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch(todoListActions.setTodolist({ data }));
//   };
// }

function getTodolist(dispatch) {
  let data = "";
  dispatch(todoListActions.setTodolist({ data }));
}

export const todoListAction = { getTodolist };
