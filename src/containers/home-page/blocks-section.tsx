import { Blocks } from "@/blocks";
import { useQueryState } from "nuqs";
import React from "react";
import { BlockPreviewSkeleton } from "./components/block-preview-skeleton";
import { TechnologyFilter } from "@/app/components/technology-filter";

const BlocksSection = () => {
  const [filter, setFilter] = useQueryState("filter");
  const blocksGroup = Blocks.map((blockGroup) => blockGroup.group);

  const filteredGroups = filter
    ? Blocks.filter((blockGroup) => blockGroup.group === filter)
    : Blocks;

  const blockCategories = filteredGroups.flatMap((blockGroup) =>
    blockGroup.blocks.map((blockCategory) => ({
      category: blockCategory.category,
      title: blockCategory.title,
      description: blockCategory.description,
      technology: blockGroup.group,
      variantCount: blockCategory.variants.length,
      variants: blockCategory.variants,
    }))
  );

  return (
    <div className="max-w-screen-xl mx-auto">
      <TechnologyFilter
        selectedFilter={filter}
        onFilterChange={setFilter}
        technologyGroup={blocksGroup}
      />

      {blockCategories.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {blockCategories.map((blockCategory) => (
            <BlockPreviewSkeleton
              key={`${blockCategory.technology}-${blockCategory.category}`}
              title={blockCategory.title}
              description={blockCategory.description}
              technology={blockCategory.technology}
              variantCount={blockCategory.variantCount}
              category={blockCategory.category}
            />
          ))}
        </div>
      ) : (
        <div className="text-center min-h-96 flex items-center justify-center flex-col text-muted-foreground">
          <p className="text-lg font-semibold">More blocks are coming soon!</p>
          <p className="text-sm">
            We are currently in beta and actively working on adding more blocks
            to showcase the full potential of our design system.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlocksSection;
