"use client";

import { TechnologyFilter } from "@/app/components/technology-filter";
import { Blocks, BlockVariant } from "@/blocks";
import { useQueryState } from "nuqs";
import { createContext, useContext } from "react";
import { BlockPreviewSkeleton } from "./components/block-preview-skeleton";

type BlocksContextType = {
  filter: string;
  setFilter: (value: string) => void;
  blockCategories: {
    category: string;
    title: string;
    description: string;
    technology: "react" | "tailwind" | "laravel";
    variantCount: number;
    variants: BlockVariant[];
  }[];
};

const BlocksContext = createContext<BlocksContextType | undefined>(undefined);

const BlocksProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useQueryState("filter", {
    defaultValue: "all",
  });

  const filteredGroups =
    filter && filter !== "all"
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
    <BlocksContext.Provider
      value={{
        filter,
        setFilter,
        blockCategories,
      }}>
      {children}
    </BlocksContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */

const useBlockContext = () => {
  const ctx = useContext(BlocksContext);

  if (!ctx) {
    throw new Error("useBlockContext must be used within BlockProvider.");
  }

  return ctx;
};

/* -------------------------------------------------------------------------- */

const BlocksFilter = () => {
  const { filter, setFilter } = useBlockContext();
  const blocksGroup = Blocks.map((blockCategory) => blockCategory.group);

  return (
    <TechnologyFilter
      selectedFilter={filter}
      onFilterChange={setFilter}
      technologyGroup={blocksGroup}
    />
  );
};

/* -------------------------------------------------------------------------- */

const BlocksGroupDisplay = () => {
  const { blockCategories } = useBlockContext();

  if (blockCategories.length <= 0) {
    return (
      <div className="text-center min-h-96 flex items-center justify-center flex-col text-muted-foreground">
        <p className="text-lg font-semibold">More blocks are coming soon!</p>
        <p className="text-sm">
          We are currently in beta and actively working on adding more blocks to
          showcase the full potential of our design system.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blockCategories.map((block) => (
        <BlockPreviewSkeleton
          key={`${block.technology}-${block.category}`}
          title={block.title}
          description={block.description}
          technology={block.technology}
          variantCount={block.variantCount}
          category={block.category}
        />
      ))}
    </div>
  );
};

const BlocksDisplay = () => {
  return (
    <BlocksProvider>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full flex items-center justify-end sticky top-12 left-0 bg-background">
          <BlocksFilter />
        </div>
        <div className="mt-12 px-8">
          <BlocksGroupDisplay />
        </div>
      </div>
    </BlocksProvider>
  );
};

/* -------------------------------------------------------------------------- */

export {
  BlocksDisplay,
  BlocksFilter,
  BlocksGroupDisplay,
  BlocksContext,
  BlocksProvider,
  useBlockContext,
  type BlocksContextType,
};
