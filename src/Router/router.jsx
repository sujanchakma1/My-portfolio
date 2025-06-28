import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component:Home
      }
    ]
  }
])