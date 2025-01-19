import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import SearchApp from "./Components/Search/SearchApp.jsx";
import Help from "./Components/Help/Help.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchApp />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <Login />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
