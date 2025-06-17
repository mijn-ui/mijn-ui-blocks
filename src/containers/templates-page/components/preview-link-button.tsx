import React from "react";
import { Button } from "@mijn-ui/react";
import { ExternalLink } from "lucide-react";

const PreviewLinkButton = ({ href }: { href: string }) => {
  return (
    <Button size="xs" asChild className="text-xs">
      <a href={href} target="_blank" rel="noopener noreferrer">
        Preview
        <ExternalLink />
      </a>
    </Button>
  );
};

export { PreviewLinkButton };
