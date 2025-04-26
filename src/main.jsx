import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./features/home/Home";
import MyBooking from "./features/myBooking/MyBooking";
import SearchPage from "./features/search/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "my-bookings",
        element: <MyBooking />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
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
