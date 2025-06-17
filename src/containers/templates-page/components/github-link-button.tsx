import React from "react";
import { Button } from "@mijn-ui/react";
import { Icons } from "@/app/components/ui/icons";
import Link from "next/link";

const GithubLinkButton = ({ href }: { href: string }) => {
  return (
    <Button asChild size="xs" className="text-xs" variant="outlined">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icons.github />
        Github
      </Link>
    </Button>
  );
};

export { GithubLinkButton };
