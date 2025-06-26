"use client";

import type React from "react";

import { Button, cn } from "@mijn-ui/react";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "../hooks/use-scroll-position";

interface ScrollToTopProps {
  threshold?: number;
  smooth?: boolean;
  className?: string;
}

const ScrollToTop = ({
  threshold = 300,
  smooth = true,
  className = "",
}: ScrollToTopProps) => {
  const isVisible = useScrollPosition(threshold);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={cn(
        "fixed bottom-6 rounded-full right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ring-offset-background animate-in fade-in slide-in-from-bottom-2",
        className
      )}
      iconOnly
      aria-label="Scroll to top"
      title="Scroll to top">
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;
