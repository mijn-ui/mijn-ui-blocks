import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/blocks";
import { SubTitle } from "@/app/components/ui/typography";
import { BlockViewer } from "@/features/blocks/components/block-viewer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollToTop from "@/app/components/scroll-to-top";

/* -------------------------------------------------------------------------- */
/*                              Generate Metadata                             */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string; category: string }>;
}): Promise<Metadata> {
  const { group, category } = await params;
  const blockCategory = findBlockCategory(group, category);

  if (!blockCategory) {
    return {
      title: "Not Found",
      description: "The requested block category could not be found.",
    };
  }

  return {
    title: blockCategory.title,
    description: blockCategory.description,
  };
}

/* -------------------------------------------------------------------------- */
/*                           Generate Static Params                           */
/* -------------------------------------------------------------------------- */
export const generateStaticParams = () => {
  return Blocks.flatMap((group) =>
    group.blocks.map((block) => ({
      group: group.group,
      category: block.category,
    }))
  );
};

/* -------------------------------------------------------------------------- */
/*                                Category Page                               */
/* -------------------------------------------------------------------------- */
const CategoryPage = async ({
  params,
}: {
  params: Promise<{ group: string; category: string }>;
}) => {
  const { group, category } = await params;

  // Find the block category by its name
  const blockCategory = findBlockCategory(group, category);

  if (!blockCategory) {
    return notFound();
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl flex flex-col gap-4 px-4 pt-8 pb-20 min-h-screen">
          <Link
            href={"/"}
            className="mb-2 flex w-fit items-center gap-1 text-sm text-secondary-foreground underline hover:text-foreground">
            <ArrowLeft />
            Go Back Home
          </Link>
          <div className="gap-16 flex flex-col">
            {blockCategory.variants.map((variant) => (
              <div key={variant.title}>
                <SubTitle>{blockCategory.title}</SubTitle>{" "}
                <p className="mt-2 sm:text-base text-sm text-muted-foreground mb-6">
                  {blockCategory.description}
                </p>
                <BlockViewer
                  iframeHeight={variant.iframeHeight || 930}
                  url={`/view/${group}/${variant.name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Finds a block category by its name.
 *
 * @param category - The category name to search for.
 * @returns The matching block category or undefined.
 */
function findBlockCategory(group: string, category: string) {
  // Find the group that matches the given group name
  const blockGroup = Blocks.find((blockGroup) => blockGroup.group === group);

  if (!blockGroup) return undefined;

  // Find the block that matches the given category name
  return blockGroup.blocks.find((block) => block.category === category);
}

export default CategoryPage;
