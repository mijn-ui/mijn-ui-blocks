"use client";

import { Suspense } from "react";
import { BlocksSection } from "./blocks-section";
import HeroSection from "./hero-section";
import ScrollToTop from "@/app/components/scroll-to-top";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div
        id="hero"
        className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-36">
        <HeroSection />
      </div>

      <div className="mt-[clamp(60px,15vw,120px)]">
        <div
          id="blocks"
          className="relative flex size-full flex-col items-center justify-center pb-32 py-16 opacity-100 transition ease-in-out transition-color duration-300">
          <Suspense fallback={<div className="px-5 py-8">Loading...</div>}>
            <BlocksSection />
          </Suspense>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default HomePage;
