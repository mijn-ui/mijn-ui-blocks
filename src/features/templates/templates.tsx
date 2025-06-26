"use client";

import { TechnologyFilter } from "@/app/components/technology-filter";
import { ThemeImage } from "@/app/components/theme-image";
import { Icons } from "@/app/components/ui/icons";
import { Template, Templates } from "@/templates";
import { Button } from "@mijn-ui/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { createContext, useContext } from "react";

type TemplateContextType = {
  filter: string;
  setFilter: (value: string) => void;
  templateCategories: Template[];
};

const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);

const TemplateProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useQueryState("filter", {
    defaultValue: "all",
  });

  const filteredGroups =
    filter && filter !== "all"
      ? Templates.filter((templateGroup) => templateGroup.group === filter)
      : Templates;

  const templateCategories = filteredGroups.flatMap((group) => group.templates);

  return (
    <TemplateContext.Provider
      value={{
        filter,
        setFilter,
        templateCategories,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */

const useTemplateContext = () => {
  const ctx = useContext(TemplateContext);

  if (!ctx) {
    throw new Error("useTemplateContext must be used within BlockProvider.");
  }

  return ctx;
};

/* -------------------------------------------------------------------------- */

const TemplatesFilter = () => {
  const { filter, setFilter } = useTemplateContext();
  const blocksGroup = Templates.map((blockCategory) => blockCategory.group);

  return (
    <TechnologyFilter
      selectedFilter={filter}
      onFilterChange={setFilter}
      technologyGroup={blocksGroup}
    />
  );
};

/* -------------------------------------------------------------------------- */

const TemplatesGroupDisplay = () => {
  const { templateCategories } = useTemplateContext();

  if (templateCategories.length <= 0) {
    return (
      <div className="text-center text-muted-foreground">
        <p className="text-lg font-semibold">More templates are coming soon!</p>
        <p className="text-sm">
          We are currently in beta and actively working on adding more templates
          to showcase the full potential of our design system.
        </p>
      </div>
    );
  }

  return templateCategories.map((template) => (
    <div key={`${template.name}-${template.id}`} className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{template.name}</h3>
        <p className="text-sm text-muted-foreground">{template.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {template.images.map((image, index) => (
          <a
            href={image.link}
            target="_blank"
            key={index}
            rel="noopener noreferrer"
            className="relative aspect-video w-full overflow-hidden rounded-md border">
            <ThemeImage
              lightSrc={image.light}
              darkSrc={image.dark}
              alt={`${template.name} Preview ${index + 1}`}
              width={1920}
              height={1080}
              className="object-cover"
            />
          </a>
        ))}
      </div>
      <div className="mt-4 flex w-full items-start justify-center gap-2 md:justify-between">
        <div className="mt-4 flex items-center gap-2">
          {template.githubURL && (
            <Button asChild size="sm" className="text-xs" variant="default">
              <Link
                href={template.githubURL}
                target="_blank"
                rel="noopener noreferrer">
                <Icons.github />
                Github
              </Link>
            </Button>
          )}

          {template.previewURL && (
            <Button size="sm" asChild variant="ghost" className="text-xs">
              <a
                href={template.previewURL}
                target="_blank"
                rel="noopener noreferrer">
                Preview
                <ExternalLink />
              </a>
            </Button>
          )}
        </div>

        <div className="hidden min-w-96 space-y-2 p-5 md:block">
          {template.technologies && <h4>Built With:</h4>}
          <ul className="grid w-full max-w-md grid-cols-2 gap-2 px-5 text-muted-foreground">
            {template.technologies?.map((tech) => (
              <li className="list-disc text-sm" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));
};

/* -------------------------------------------------------------------------- */

const TemplatesDisplay = () => {
  return (
    <TemplateProvider>
      <div className="w-full flex items-center justify-center sticky top-12 bg-background left-0 z-20">
        <div className="w-full max-w-screen-xl flex items-center justify-end">
          <TemplatesFilter />
        </div>
      </div>

      <div className="space-y-12 py-12 max-w-screen-xl text-center md:text-left px-5 xl:px-0">
        <TemplatesGroupDisplay />
      </div>
    </TemplateProvider>
  );
};

export {
  TemplatesDisplay,
  TemplatesFilter,
  TemplatesGroupDisplay,
  TemplateProvider,
  TemplateContext,
  useTemplateContext,
  type TemplateContextType,
};
