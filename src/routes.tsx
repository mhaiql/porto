import { Navigate, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import HomePage from "./pages/home";
import About from "./pages/home/sections/about";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default routerApp;
