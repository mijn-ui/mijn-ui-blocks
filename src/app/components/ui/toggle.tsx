"use client";

import {
  createTVUnstyledSlots,
  tv,
  UnstyledProps,
  type VariantProps,
} from "@mijn-ui/react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as React from "react";

const toggleStyles = tv({
  slots: {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-default data-[state=on]:text-default-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  },
  variants: {
    variant: {
      default: "bg-transparent",
      outline:
        "border border-input bg-transparent hover:bg-secondary hover:text-foreground",
    },
    size: {
      default: "h-10 px-3 min-w-10",
      sm: "h-9 px-2.5 min-w-9",
      lg: "h-11 px-5 min-w-11",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ToggleVariantProps = VariantProps<typeof toggleStyles>;
export type ToggleSlots = keyof ReturnType<typeof toggleStyles>;

/* -------------------------------------------------------------------------- */

type ToggleProps = React.ComponentPropsWithRef<typeof TogglePrimitive.Root> &
  ToggleVariantProps &
  UnstyledProps;

const Toggle = ({
  className,
  variant,
  size,
  unstyled,
  ...props
}: ToggleProps) => {
  const styles = toggleStyles({ variant, size });
  const { base } = createTVUnstyledSlots(styles, unstyled);

  return (
    <TogglePrimitive.Root
      className={base({ variant, size, className })}
      {...props}
    />
  );
};

export { Toggle, toggleStyles };
