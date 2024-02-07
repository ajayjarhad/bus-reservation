import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";
import SeatProvider from "./context/SeatProvider";
import AlertProvider from "./context/AlertProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import Reservation from "./components/Reservation/Reservation";
import addSeatSeed from "./utils/addSeatSeed";

import "./main.css";

addSeatSeed(); // Add seat seed data at the time of initilization

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Reservation /> }, // Redirect home routes to Reservation route
      { path: "dashboard", element: <Dashboard /> },
      { path: "reservation", element: <Reservation /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SeatProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </SeatProvider>
  </React.StrictMode>
);
