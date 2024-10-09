import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path:'/',
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
