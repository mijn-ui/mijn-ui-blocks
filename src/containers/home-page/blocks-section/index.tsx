import { BlockViewer } from "@/app/components/block-viewer";
import { Icons } from "@/app/components/ui/icons";
import { SubTitle } from "@/app/components/ui/typography";
import { Blocks } from "@/blocks";
import { Button } from "@mijn-ui/react";
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

  return (
    <section className="relative flex w-full flex-col items-center">
      {/* <SubTitle className="mb-8">Blocks</SubTitle> */}
      {/* Technology filter */}
      <TechnologyFilter selectedFilter={filter} onFilterChange={setFilter} />

      <div className="px-5 w-full flex justify-center">
        {/* Blocks content */}
        <div className="relative sm:mt-12 mt-8 md:mt-16 flex w-full max-w-screen-lg flex-col sm:gap-16 gap-16 md:gap-32">
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

/* -------------------------------------------------------------------------- */

interface TechnologyFilterProps {
  selectedFilter: string | null;
  onFilterChange: (value: string | null) => void;
}

export function TechnologyFilter({
  selectedFilter,
  onFilterChange,
}: TechnologyFilterProps) {
  const blockGroups = Blocks.map((blockGroup) => blockGroup.group);

  return (
    <div className="sticky top-12 z-20 flex w-full bg-background justify-center overflow-hidden px-5">
      <div className="flex w-full max-w-screen-lg items-center gap-0.5 justify-end">
        {blockGroups.map((group) => {
          const Icon = Icons[group];
          const active = selectedFilter === group;
          return (
            <Button
              key={group}
              className="sm:gap-2 text-xs capitalize text-muted-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-1.5 sm:px-2.5 gap-1"
              size="sm"
              variant="ghost"
              radius="none"
              data-state={active ? "active" : "inactive"}
              onClick={() => onFilterChange(group)}>
              <Icon />
              {group}
            </Button>
          );
        })}

        <Button
          className="gap-2 border-dashed border-gray-600 text-xs capitalize text-muted-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-2 sm:px-2.5"
          size="sm"
          variant="ghost"
          radius="none"
          data-state={selectedFilter === null ? "active" : "inactive"}
          onClick={() => onFilterChange(null)}>
          All
        </Button>
      </div>
    </div>
  );
}
