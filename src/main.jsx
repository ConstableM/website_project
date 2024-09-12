import * as React from "react";
import * as ReactDOM from "react-dom/client";
import OuterBorder from "./Components/Homepage/OuterBorder.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <OuterBorder/>

  },



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

  
);

// src/main.js or src/App.jsx
