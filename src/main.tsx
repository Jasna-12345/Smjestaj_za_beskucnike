import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import AllHomeless from "./routes/AllHomeless";
import ErrorPage from "./components/ErrorPage";
import { Header } from "./components/Header";


export type RouteType = RouteObject & { path: "/" | "/all-homeless" };
//Definicija 2 rute koje imamo za sada
const routes: RouteType[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/all-homeless",
    element: <AllHomeless />,
  },
];

export const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header routes={routes} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
