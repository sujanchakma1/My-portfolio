import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { Router } from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={Router}>
      </RouterProvider>
    </div>
  </StrictMode>
);
