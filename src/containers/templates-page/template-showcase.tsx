"use client";

import { TechnologyFilter } from "@/app/components/technology-filter";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useQueryState } from "nuqs";
import React, { useEffect, useState } from "react";
import { GithubLinkButton } from "./components/github-link-button";
import { PreviewLinkButton } from "./components/preview-link-button";
import { Templates } from "./data";

const TemplateShowcase = () => {
  const [filter, setFilter] = useQueryState("filter");

  const filteredGroups = filter
    ? Templates.filter((group) => group.group === filter)
    : Templates;

  const filteredTemplates = filteredGroups.flatMap((group) => group.templates);

  const templateGroups = Templates.map((templateGroup) => templateGroup.group);

  return (
    <>
      <TechnologyFilter
        technologyGroup={templateGroups}
        selectedFilter={filter}
        onFilterChange={setFilter}
      />

      <div className="space-y-12 py-12 max-w-screen-xl text-center md:text-left">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <div key={`${template.name}-${template.id}`} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {template.images.map((image, index) => (
                  <a
                    href={image.link}
                    target="_blank"
                    key={index}
                    rel="noopener noreferrer"
                    className="relative aspect-video w-full overflow-hidden rounded-medium border">
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
                    <GithubLinkButton href={template.githubURL} />
                  )}

                  {template.previewURL && (
                    <PreviewLinkButton href={template.previewURL} />
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
          ))
        ) : (
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-semibold">
              More templates are coming soon!
            </p>
            <p className="text-sm">
              We are currently in beta and actively working on adding more
              templates to showcase the full potential of our design system.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export { TemplateShowcase };

type ThemeImageProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
} & Omit<React.ComponentProps<typeof Image>, "src">;

export const ThemeImage = ({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  ...props
}: ThemeImageProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Dynamically set the src based on the theme
  const src = theme === "dark" ? darkSrc : lightSrc;

  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={src}
      className={className}
      {...props}
    />
  );
};
