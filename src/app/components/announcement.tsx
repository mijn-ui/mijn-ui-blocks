import React from "react";

const Announcement = () => {
  return (
    <div className="z-50 flex w-full items-center justify-center bg-neutral-200 px-5 text-center text-foreground dark:bg-neutral-800">
      <div className="flex items-center justify-center overflow-x-auto py-1 md:h-8 md:p-0">
        <p className="text-xs">
          A new design systems components are coming soon! Please consider
          starring the repo on{" "}
          <a
            href="https://github.com/mijn-ui/mijn-ui-blocks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline hover:text-primary/80">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Announcement;
