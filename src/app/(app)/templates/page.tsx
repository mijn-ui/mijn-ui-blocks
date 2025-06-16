"use client";

import HeroSection from "@/containers/templates-page/hero-section";
import { Suspense } from "react";
import { TemplateShowcase } from "@/containers/templates-page/template-showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MijnUI | Templates",
  description: "",
};

const TemplatePage = () => {
  return (
    <>
      <div className="min-h-screen">
        <div
          id="hero"
          className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-36">
          <HeroSection />
        </div>

        <div className="mt-[clamp(60px,15vw,120px)]">
          <div
            id="templates"
            className="relative flex size-full flex-col items-center justify-center pb-32 py-16 opacity-100 transition ease-in-out transition-color duration-300">
            <Suspense fallback={<div className="px-5 py-8">Loading...</div>}>
              <TemplateShowcase />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
