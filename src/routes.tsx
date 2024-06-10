import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import HomePage from "./pages/home";

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
