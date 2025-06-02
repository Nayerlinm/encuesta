import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar";

function RootLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default RootLayout;
