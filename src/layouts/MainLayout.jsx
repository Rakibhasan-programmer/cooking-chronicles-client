import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
      <NavigationBar />
      <div style={{minHeight: "60vh"}}>
        <Outlet />
      </div>
      <Toaster />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
