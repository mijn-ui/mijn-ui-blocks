import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/blocks";
import { LoaderCircle } from "lucide-react";
import path from "path";
import fs from "fs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    tech: string;
    name: string;
  }>;
}): Promise<Metadata> {
  const { tech, name } = await params;

  const group = Blocks.find((blockGroup) => blockGroup.group === tech);

  if (!group) {
    return {};
  }

  const block = group.blocks.find((b) => b.name === name);

  if (!block) {
    return {};
  }

  const { title, description } = block;

  return {
    title,
    description,
  };
}

export const generateStaticParams = () => {
  return Blocks.flatMap((group) =>
    Object.keys(group.blocks).map((blockName) => ({
      tech: group.group,
      name: blockName,
    }))
  );
};

const BlockPage = async ({
  params,
}: {
  params: Promise<{
    tech: "react" | "tailwind" | "laravel";
    name: string;
  }>;
}) => {
  const { tech, name } = await params;
  if (tech === "react") {
    const Component = getBlockComponent(name, tech);

    if (!Component) {
      return notFound();
    }

    return (
      <div className="h-screen w-screen overflow-hidden">
        <React.Suspense
          fallback={
            <div className="flex w-full items-center justify-center text-small text-muted-foreground">
              <LoaderCircle className="mr-2 size-4 animate-spin" />
              Loading...
            </div>
          }>
          <Component />
        </React.Suspense>
      </div>
    );
  }

  if (tech === "tailwind" || tech === "laravel") {
    const currentHTML = Blocks.find(
      (group) => group.group === tech
    )?.blocks.find((block) => block.name === name)?.component;

    if (!currentHTML) {
      return notFound();
    }

    const content = getHTMLContent(currentHTML as string);

    return (
      <div className="h-screen w-screen overflow-hidden tailwind-theme-wrapper">
        <React.Suspense
          fallback={
            <div className="flex w-full items-center justify-center text-small text-muted-foreground">
              <LoaderCircle className="mr-2 size-4 animate-spin" />
              Loading...
            </div>
          }>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </React.Suspense>
      </div>
    );
  }

  return notFound();
};

const getBlockComponent = (
  name: string,
  tech: "react" | "tailwind" | "laravel"
) => {
  const blockGroup = Blocks.find((group) => group.group === tech);
  return (
    blockGroup?.blocks.find((block) => block.name === name)?.component || null
  );
};

/**
 * Gets HTML content as a string, ready for rendering with dangerouslySetInnerHTML
 *
 * @param contentPath - Path to the HTML file
 * @param options - Configuration options for the file path
 * @returns HTML content as a cleaned string
 */
export function getHTMLContent(contentPath: string): string {
  try {
    const absolutePath = path.join(process.cwd(), contentPath);

    return fs.readFileSync(absolutePath, "utf8");
  } catch (error) {
    console.error(`Failed to get HTML content: ${contentPath}`, error);
    return `<div class="text-red-500">The requested content is not available.</div>`;
  }
}

export default BlockPage;
