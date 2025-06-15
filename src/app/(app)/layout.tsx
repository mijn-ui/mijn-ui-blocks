import React from "react";
import Announcement from "../components/announcement";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Announcement />
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
