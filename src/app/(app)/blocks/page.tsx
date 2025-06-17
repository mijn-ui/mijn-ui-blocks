import { Title } from "@/app/components/ui/typography";
import BlocksSection from "@/containers/home-page/blocks-section";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const BlocksPage = () => {
  return (
    <div className="min-h-screen pb-24">
      <div
        id="hero"
        className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-36">
        <section className="flex w-full max-w-screen-xl flex-col items-start text-left">
          <Link
            href={"/"}
            className="mb-2 hidden w-fit items-center gap-1 text-sm text-secondary underline hover:text-foreground md:flex">
            <ArrowLeft />
            Go Back Home
          </Link>
          <Title className="text-left">Blocks</Title>
          <p className="max-w-screen-md px-2 text-left text-small text-muted-foreground md:text-medium">
            These blocks are currently in beta. They showcase the capabilities
            of our components and design system. More blocks are coming soon,
            but we recommend not using them in production environments yet.
          </p>
        </section>
      </div>

      <div className="mt-[clamp(60px,15vw,120px)]">
        <Suspense fallback={<div>Loading...</div>}>
          <BlocksSection />
        </Suspense>
      </div>
    </div>
  );
};

export default BlocksPage;
