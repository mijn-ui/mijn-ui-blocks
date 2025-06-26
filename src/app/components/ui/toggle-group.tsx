"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { toggleStyles, ToggleVariantProps } from "./toggle";
import { cn, VariantProps } from "@mijn-ui/react";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleStyles>
>({
  size: "default",
  variant: "default",
});

type ToggleGroupProps = React.ComponentPropsWithRef<
  typeof ToggleGroupPrimitive.Root
> &
  ToggleVariantProps;

const ToggleGroup = ({
  className,
  variant,
  size,
  children,
  ...props
}: ToggleGroupProps) => (
  <ToggleGroupPrimitive.Root
    className={cn(
      "flex items-center justify-center gap-1 bg-background rounded-md p-1",
      className
    )}
    {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
);

type ToggleGroupItemProps = React.ComponentPropsWithRef<
  typeof ToggleGroupPrimitive.Item
> &
  ToggleVariantProps;

const ToggleGroupItem = ({
  className,
  children,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        toggleStyles({
          variant: context.variant || variant,
          size: context.size || size,
        }).base(),
        className
      )}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

export { ToggleGroup, ToggleGroupItem };
