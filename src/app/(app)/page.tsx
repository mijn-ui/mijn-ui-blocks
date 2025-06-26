"use client";

import {
  BlocksFilter,
  BlocksGroupDisplay,
  BlocksProvider,
} from "@/features/blocks/blocks";
import { Badge, Button } from "@mijn-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Title } from "../components/ui/typography";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* // Have to wrap with the Suspense because the provider uses `useSearchParams()` */}
      <Suspense fallback={<div>Loading...</div>}>
        <BlocksProvider>
          <section
            id="hero"
            className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-20 ">
            <div className="flex w-full max-w-7xl flex-col items-start text-left">
              <Badge
                variant="default-subtle"
                radius="full"
                className="text-[10px] sm:text-sm px-2 sm:mb-4 mb-2">
                🎉 New React & Tailwind Components Available
              </Badge>
              <div className="flex justify-between items-start w-full">
                <Title className="shrink-0">
                  Beautiful Components
                  <br />
                  Ready to Use
                </Title>
                <Suspense>
                  <BlocksFilter />
                </Suspense>
              </div>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base font-medium text-muted-foreground md:mt-6">
                Flexible and editable blocks to help you build React UIs with
                Tailwind CSS
                <br /> without starting from scratch.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-6 w-full">
                <Button asChild>
                  <Link href="/blocks">Browse Blocks</Link>
                </Button>
                <Button variant="primary" asChild>
                  <Link href="/templates">
                    Explore Templates <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="blocks" className="pt-[clamp(60px,15vw,120px)] mb-20">
            <div className="max-w-screen-xl mx-auto">
              <div className="px-5 xl:px-0 mt-12">
                <BlocksGroupDisplay />
              </div>
            </div>
          </section>
        </BlocksProvider>
      </Suspense>
    </div>
  );
};

export default HomePage;
