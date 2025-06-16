import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/blocks";
import { LoaderCircle } from "lucide-react";
import path from "path";
import fs from "fs";

/* -------------------------------------------------------------------------- */
/*                              Generate Metadata                             */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    tech: string;
    name: string;
  }>;
}): Promise<Metadata> {
  const { tech, name } = await params;

  const variant = findVariant(tech, name);

  if (!variant) {
    return {
      title: "Not Found",
      description: "The requested block variant could not be found.",
    };
  }

  return {
    title: variant.title,
    description: variant.description,
  };
}

/* -------------------------------------------------------------------------- */
/*                           Generate Static Params                           */
/* -------------------------------------------------------------------------- */
export const generateStaticParams = () => {
  return Blocks.flatMap((group) =>
    group.blocks.flatMap((block) =>
      block.variants.map((variant) => ({
        tech: group.group,
        name: variant.name,
      }))
    )
  );
};

/* -------------------------------------------------------------------------- */
/*                                Block Page                                  */
/* -------------------------------------------------------------------------- */
const BlockPage = async ({
  params,
}: {
  params: Promise<{
    tech: "react" | "tailwind" | "laravel";
    name: string;
  }>;
}) => {
  const { tech, name } = await params;

  const variant = findVariant(tech, name);

  if (!variant) {
    return notFound();
  }

  if (tech === "react") {
    return renderReactComponent(
      variant.component as React.LazyExoticComponent<() => React.JSX.Element>
    );
  }

  if (tech === "tailwind" || tech === "laravel") {
    return renderHTMLContent(variant.component as string);
  }

  return notFound();
};

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Finds a variant by tech and name.
 *
 * @param tech - The technology group (e.g., "react", "tailwind", "laravel").
 * @param name - The name of the variant.
 * @returns The matching variant or undefined.
 */
function findVariant(tech: string, name: string) {
  const group = Blocks.find((blockGroup) => blockGroup.group === tech);
  const block = group?.blocks.find((block) =>
    block.variants.some((variant) => variant.name === name)
  );
  return block?.variants.find((variant) => variant.name === name);
}

/**
 * Renders a React component with a suspense fallback.
 *
 * @param Component - The React component to render.
 * @returns A JSX element rendering the component.
 */
function renderReactComponent(
  Component: React.LazyExoticComponent<() => React.JSX.Element>
) {
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

/**
 * Renders HTML content from a file path.
 *
 * @param contentPath - The path to the HTML file.
 * @returns A JSX element rendering the HTML content.
 */
function renderHTMLContent(contentPath: string) {
  const content = getHTMLContent(contentPath);

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

/**
 * Gets HTML content as a string, ready for rendering with dangerouslySetInnerHTML.
 *
 * @param contentPath - Path to the HTML file.
 * @returns HTML content as a cleaned string.
 */
function getHTMLContent(contentPath: string): string {
  try {
    const absolutePath = path.join(process.cwd(), contentPath);
    return fs.readFileSync(absolutePath, "utf8");
  } catch (error) {
    console.error(`Failed to get HTML content: ${contentPath}`, error);
    return `<div class="text-red-500">The requested content is not available.</div>`;
  }
}

export default BlockPage;
