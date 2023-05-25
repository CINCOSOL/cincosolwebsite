import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContactUs from "./contactus.jsx";
import Services from "./services.jsx";
import Career from "./career.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
],{basename:'/cincosolwebsite'});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
