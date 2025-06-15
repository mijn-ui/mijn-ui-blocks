import { BlockViewer } from "@/app/components/block-viewer";
import { TechnologyFilter } from "@/app/components/technology-filter";
import { SubTitle } from "@/app/components/ui/typography";
import { Blocks } from "@/blocks";
import { useQueryState } from "nuqs";

const BlocksSection = () => {
  const [filter, setFilter] = useQueryState("filter");

  const filteredGroups = filter
    ? Blocks.filter((blockGroup) => blockGroup.group === filter)
    : Blocks;

  const filteredBlocks = filteredGroups.flatMap((blockGroup) =>
    blockGroup.blocks.map((block) => ({
      ...block,
      tech: blockGroup.group,
    }))
  );

  const blocksGroup = Blocks.map((blockGroup) => blockGroup.group);

  return (
    <section className="relative flex w-full flex-col items-center">
      {/* <SubTitle className="mb-8">Blocks</SubTitle> */}
      {/* Technology filter */}
      <TechnologyFilter
        selectedFilter={filter}
        onFilterChange={setFilter}
        technologyGroup={blocksGroup}
      />

      <div className="px-5 w-full flex justify-center">
        {/* Blocks content */}
        <div className="relative sm:mt-12 mt-8 md:mt-16 flex w-full max-w-screen-xl flex-col sm:gap-16 gap-16 md:gap-32">
          {filteredBlocks.length > 0 ? (
            filteredBlocks.map((block) => (
              <div key={`${block.component}-${block.name}`} className="w-full">
                <div className="flex items-center justify-between gap-2">
                  <SubTitle>{block.title}</SubTitle>
                  <span className="text-[10px] px-1.5 py-0.5 capitalize bg-default rounded-full">
                    {block.tech}
                  </span>
                </div>
                <p className="mt-2 sm:text-base text-sm text-muted-foreground">
                  {block.description}
                </p>
                <div className="mt-4">
                  <BlockViewer
                    iframeHeight={block.iframeHeight || 930}
                    url={`/view/${block.tech}/${block.name}`}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center min-h-96 flex items-center justify-center flex-col text-muted-foreground">
              <p className="text-lg font-semibold">
                More blocks are coming soon!
              </p>
              <p className="text-sm">
                We are currently in beta and actively working on adding more
                blocks to showcase the full potential of our design system.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { BlocksSection };
