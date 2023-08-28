import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// pages
import Home from "./Home";
import Register from "./auth/Register";
import Login from "./auth/Login";


const router = createBrowserRouter([
  {
    path: "/home",
    element: < Home />
  },
  {
    path: "/register",
    element: < Register />
  },
  {
    path: "/",
    element: < Login />,
  },
])

const App = () => {
  return <main className="mt-28">
    <RouterProvider router={router} />
  </main>;
};

export default App;
