import HomePage from "@/containers/home-page";
import React from "react";
import Announcement from "./components/announcement";
import { Navbar } from "./components/layout/navbar";

const Page = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HomePage />
    </>
  );
};

export default Page;
