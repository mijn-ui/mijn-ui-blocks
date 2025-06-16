"use client";

import BlocksSection from "@/containers/home-page/blocks-section";
import HeroSection from "@/containers/home-page/hero-section";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div
        id="hero"
        className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-20">
        <HeroSection />
      </div>

      <div id="blocks" className="pt-[clamp(60px,15vw,120px)] mb-20">
        <Suspense fallback={<div className="px-5 py-8">Loading...</div>}>
          <BlocksSection />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
