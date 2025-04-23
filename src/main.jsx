import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </SnackbarProvider>
  </StrictMode>
);
