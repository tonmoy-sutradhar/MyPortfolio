import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
