"use client";

import Logo from "@/app/components/ui/logo";
import ThemeToggler from "@/app/components/ui/theme-toggler";
import {
  Badge,
  Button,
  cn,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator,
} from "@mijn-ui/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Icons } from "../ui/icons";

const PAGES = [
  {
    title: "Templates",
    href: "/templates",
  },
  {
    title: "Blocks",
    href: "#blocks",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderPages = PAGES.map((page) => (
    <Link
      key={page.title}
      className="text-small text-muted-foreground hover:text-secondary"
      href={page.href}>
      {page.title}
    </Link>
  ));

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-40 h-12 border-b-border w-full flex-col items-center justify-center border-b md:flex bg-background/10 backdrop-blur",
        className
      )}>
      <nav className="flex w-full max-w-screen-xl items-center justify-between px-5 py-2">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="flex items-center gap-2 font-bold">
            <Logo className="size-5 items-center fill-fd-foreground" />
            MijnUI
          </Link>
          <Badge
            size="xs"
            className="bg-primary/20 text-primary hover:bg-primary/20 hover:text-primary">
            v0.1.0
          </Badge>
        </div>
        <div className="hidden items-center gap-4 md:flex ">
          {renderPages}
          <div className="flex items-center gap-2">
            <Button
              size={"sm"}
              variant="ghost"
              iconOnly
              className="px-2 text-muted-foreground"
              radius="full"
              asChild>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={"https://github.com/mijn-ui/mijn-ui-blocks"}>
                <Icons.github className="text-lg" />
              </a>
            </Button>
            <ThemeToggler />
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden">
          <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <Collapsible open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <CollapsibleTrigger className="flex size-8 items-center justify-center text-muted-foreground transition duration-200 hover:text-secondary">
                <ChevronDown className="text-large" />
              </CollapsibleTrigger>
              <CollapsibleContent className="top-[calc(var(--navbar-height)] absolute inset-x-0 mt-2 overflow-hidden bg-card text-small transition-[height] data-[state=closed]:animate-collapsible-close data-[state=open]:animate-collapsible-open">
                <div className="relative flex w-full flex-col items-start justify-between space-y-2 px-4 py-2">
                  <div className="flex w-fit flex-col gap-2">{renderPages}</div>
                  <Separator />

                  <div className="flex w-full items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary"
                      target="_blank"
                      href={"https://github.com/mijn-ui/mijn-ui-blocks"}>
                      Github <ExternalLink />
                    </Link>
                    <ThemeToggler />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ClickAwayListener>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
