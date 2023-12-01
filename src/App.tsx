import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { BoardPage } from "./route/BoardPage";
import { ColorPage } from "./route/ColorPage";
import { MainHomePage } from "./route/MainHomePage";
import { NotFoundPage } from "./route/NotFoundPage";
import { QrCodesPage } from "./route/QrCodesPage";
import { RootPage } from "./route/RootPage";
import { MainImgProvider } from "./context/MainImgContext";
import { NavProvider } from "./context/NavContext";
import { AnyProvider } from "./context/AnyContext";
import { TodoListPage } from "./route/TodoListPage";
import { Provider } from "react-redux";

import { store } from "./redux-toolkitStore/store";
import { HabitTrackerPage } from "./route/HabitTrackerPage";
import { RecoilRoot } from "recoil";
import { Login } from "./route/Login";
import { Page } from "./route/Page";
import { BoardListNew } from "./components/BoardListNew/BoardListNew";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainHomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/boardmain", element: <BoardPage /> },
      { path: "/page/:pageId", element: <Page /> },
      { path: "/todoList", element: <TodoListPage /> },
      { path: "/habittracker", element: <HabitTrackerPage /> },
      { path: "/BoardListNew", element: <BoardListNew /> },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Provider store={store}>
            <MainImgProvider>
              <NavProvider>
                <AnyProvider>
                  <RouterProvider router={router} />
                  <ReactQueryDevtools initialIsOpen={true} />
                </AnyProvider>
              </NavProvider>
            </MainImgProvider>
          </Provider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
