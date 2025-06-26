import React from "react";
import { cn } from "@mijn-ui/react";

const SubTitle = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h3
    className={cn(
      "bg-gradient-to-br from-foreground to-secondary-foreground/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold",
      className
    )}
    {...props}
  />
);

const Title = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h1
    className={cn(
      "xs:text-4xl/[1.2] bg-gradient-to-br from-foreground to-secondary-foreground/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent sm:font-extrabold md:text-5xl/[1.2]",
      className
    )}
    {...props}
  />
);

export { Title, SubTitle };
