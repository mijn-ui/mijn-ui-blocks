import { Title } from "@/app/components/ui/typography";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex w-full max-w-screen-xl flex-col items-start text-left">
      <Link
        href={"/"}
        className="mb-2 hidden w-fit items-center gap-1 text-sm text-secondary underline hover:text-foreground md:flex">
        <ArrowLeft />
        Go Back Home
      </Link>
      <Title className="text-left">Templates</Title>
      <p className="max-w-screen-md px-2 text-left text-small text-muted-foreground md:text-medium">
        These templates are currently in beta. They showcase the capabilities of
        our components and design system. More templates are coming soon, but we
        recommend not using them in production environments yet.
      </p>
    </section>
  );
};

export default HeroSection;
