import { Title } from "@/app/components/ui/typography";
import { Badge, Button } from "@mijn-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-start text-left">
      <Badge variant="outlined" className="text-[10px] sm:text-sm">
        🎉 New React & Tailwind Components Available
      </Badge>
      <Title className="mt-2 sm:mt-4">
        Beautiful Components
        <br />
        Ready to Use
      </Title>
      <p className="mt-2 sm:mt-4 text-sm sm:text-medium font-medium text-muted-foreground md:mt-6">
        Flexible and editable blocks to help you build React UIs with Tailwind
        CSS
        <br /> without starting from scratch.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-6 w-full">
        <Button asChild color="primary">
          <Link href="/blocks">Browse Blocks</Link>
        </Button>
        <Button variant="outlined" asChild>
          <Link href="/templates">
            Explore Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
