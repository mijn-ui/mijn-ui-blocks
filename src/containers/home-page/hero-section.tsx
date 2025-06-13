import { Badge } from "@mijn-ui/react-badge";
import { Button } from "@mijn-ui/react-button";
import { ArrowRight } from "lucide-react";
import { Title } from "@/app/components/ui/typography";

const HeroSection = () => {
  return (
    <section className="flex w-full max-w-4xl flex-col items-start text-left sm:items-center sm:text-center">
      <Badge variant="outlined" className="text-xs sm:text-sm">
        🎉 New React & Tailwind Components Available
      </Badge>
      <Title className="mt-4">
        Beautiful Components
        <br />
        Ready to Use
      </Title>
      <p className="mt-4 text-medium font-medium text-muted-foreground md:mt-6">
        Professional templates and blocks for React and Tailwind CSS. Build
        faster <br /> with our collection of production-ready components.
      </p>
      <div className="mt-4 flex flex-col gap-2 justify-center sm:flex-row md:mt-6">
        <Button color="primary">Browse Blocks</Button>
        <Button variant="outlined">
          Explore Templates <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
