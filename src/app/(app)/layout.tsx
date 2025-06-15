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

      <Footer>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Created by{" "}
          <a
            href="https://github.com/HTLA380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#46427c] underline dark:text-[#8f8bb4]">
            Htet Aung Lin
          </a>{" "}
          at{" "}
          <a
            href="https://www.linkedin.com/company/picoinno"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Pico
          </a>
        </p>
      </Footer>
    </>
  );
};

export default Layout;
