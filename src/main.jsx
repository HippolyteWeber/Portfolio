import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Contact from "./Pages/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Presentation from "./Pages/Presentation.jsx";
import ProjectList from "./components/ProjectList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Presentation />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Projets",
        element: <ProjectList />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
