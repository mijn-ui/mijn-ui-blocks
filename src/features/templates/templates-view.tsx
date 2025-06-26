import { Title } from "@/app/components/ui/typography";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TemplatesDisplay } from "./templates";

const TemplatesView = () => {
  return (
    <>
      <div className="min-h-screen">
        <section
          id="hero"
          className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-36">
          <div className="flex w-full max-w-screen-xl flex-col items-start text-left">
            <Link
              href={"/"}
              className="mb-2 w-fit items-center gap-1 text-sm text-secondary-foreground underline hover:text-foreground flex">
              <ArrowLeft />
              Go Back Home
            </Link>
            <Title className="text-left">Templates</Title>
            <p className="max-w-screen-md px-2 text-left text-sm text-muted-foreground md:text-base">
              These templates are currently in beta. They showcase the
              capabilities of our components and design system. More templates
              are coming soon, but we recommend not using them in production
              environments yet.
            </p>
          </div>
        </section>

        <div className="mt-[clamp(60px,15vw,120px)]">
          <div
            id="templates"
            className="relative flex size-full flex-col items-center justify-center pb-32 py-16 opacity-100 transition ease-in-out transition-color duration-300">
            <TemplatesDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplatesView;
