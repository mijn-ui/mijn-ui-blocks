"use client";

import { Suspense } from "react";
import { BlocksSection } from "./blocks-section";
import HeroSection from "./hero-section";
import { Footer } from "@/app/components/layout/footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div
        id="hero"
        className="flex w-full justify-center px-5 pt-20 sm:px-8 sm:pt-28 md:px-10 md:pt-36">
        <HeroSection />
      </div>

      <div className="mt-[clamp(120px,15vw,240px)]">
        <div
          id="blocks"
          className="relative flex size-full flex-col items-center justify-center bg-background-subtle px-5 py-12 opacity-100 transition ease-in-out  sm:px-10 sm:pb-32 sm:pt-24 md:pb-40 md:pt-32 transition-color duration-300">
          <Suspense fallback={<div className="px-5 py-8">Loading...</div>}>
            <BlocksSection />
          </Suspense>
        </div>
      </div>

      <Footer className="flex w-full items-center justify-center border-t">
        <p className="text-sm text-muted-foreground">
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
    </div>
  );
};

export default HomePage;
