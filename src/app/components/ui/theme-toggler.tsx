"use client";

import { useEffect, useState } from "react";
import { Button, ButtonProps, cn } from "@mijn-ui/react";
import { useTheme } from "next-themes";
import { Icons } from "./icons";

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ className, ...props }: ButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "dark") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("light")}
        className={cn("rounded-full", className)}
        iconOnly
        {...props}>
        <Icons.sun className="text-base" />
      </Button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("dark")}
        className={cn("rounded-full", className)}
        iconOnly
        {...props}>
        <Icons.moon className="text-sm" />
      </Button>
    );
  }
};

export default ThemeToggler;
