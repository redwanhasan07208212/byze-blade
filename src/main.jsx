// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/Router";
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster/>
  </>
);
