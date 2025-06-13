import { useQueryState } from "nuqs";
import { SubTitle } from "@/app/components/ui/typography";
import { BlockViewer } from "@/app/components/block-viewer";
import { BLOCK_DATA, BLOCK_GROUPS, type TechnologyGroup } from "./data";
import { Button, cn } from "@mijn-ui/react";
import { Icons } from "@/app/components/ui/icons";

const BlocksSection = () => {
  const [filter, setFilter] = useQueryState("filter");

  const filteredGroups = filter
    ? BLOCK_DATA.filter((group) => group.group === filter)
    : BLOCK_DATA;

  const filteredBlocks = filteredGroups.flatMap((group) => group.items);

  return (
    <section className="relative flex w-full flex-col items-center">
      {/* Horizontal border decorators */}
      <HorizontalBordersDecorator />

      {/* Technology filter */}
      <TechnologyFilter
        selectedFilter={filter as TechnologyGroup | null}
        onFilterChange={setFilter}
      />

      <div className="px-5 w-full flex justify-center">
        {/* Blocks content */}
        <div className="relative sm:mt-12 mt-8 md:mt-16 flex w-full max-w-screen-xl flex-col sm:gap-16 gap-8 md:gap-32">
          {filteredBlocks.length > 0 ? (
            filteredBlocks.map((block) => (
              <div key={block.name} className="w-full">
                <div className="flex items-center justify-between gap-2">
                  <SubTitle>{block.name}</SubTitle>
                  <span className="text-[10px] px-1.5 py-0.5 capitalize bg-default rounded-full">
                    {block.tech}
                  </span>
                </div>
                <p className="mt-2 sm:text-base text-sm text-muted-foreground">
                  {block.description}
                </p>
                <div className="mt-4">
                  <BlockViewer url={block.url} />
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
          <VerticalBorderDecorator />
        </div>
      </div>
    </section>
  );
};

export { BlocksSection };

/* -------------------------------------------------------------------------- */

interface TechnologyFilterProps {
  selectedFilter: TechnologyGroup | null;
  onFilterChange: (value: TechnologyGroup | null) => void;
}

export function TechnologyFilter({
  selectedFilter,
  onFilterChange,
}: TechnologyFilterProps) {
  return (
    <div className="sticky top-12 z-20 flex w-full justify-center bg-background-subtle backdrop-blur overflow-hidden px-5">
      <div className="flex w-full max-w-screen-xl items-center gap-0.5 justify-start divide-x">
        {BLOCK_GROUPS.map((group) => {
          const Icon = Icons[group];
          const active = selectedFilter === group;
          return (
            <Button
              key={group}
              className="sm:gap-2 border-dashed border-gray-600 text-xs capitalize text-muted-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-1.5 sm:px-2.5 gap-1"
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

/* -------------------------------------------------------------------------- */
/*                                 Decorators                                 */
/* -------------------------------------------------------------------------- */

function HorizontalBordersDecorator() {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {[
        { position: "top-[35px]" },
        { position: "-bottom-14" },
        { position: "-top-px" },
        { position: "-bottom-5" },
      ].map((border, index) => (
        <div
          key={index}
          className={cn("absolute inset-x-0 h-px", border.position)}>
          <div className="absolute inset-x-0 top-px h-px opacity-35 dark:opacity-15">
            <svg className="size-full" preserveAspectRatio="none">
              <line
                x1={0}
                y1={0}
                x2="100%"
                y2={0}
                stroke="currentColor"
                strokeWidth={2}
                strokeDasharray="1 3"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

function VerticalBorderDecorator() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 sm:right-px">
      {/* Left border */}
      <div className="absolute -inset-y-12 -left-4 w-px lg:-inset-y-16">
        <div className="absolute -inset-y-12 w-px opacity-35 dark:opacity-15 lg:-inset-y-16">
          <svg className="size-full" preserveAspectRatio="none">
            <line
              x1={0}
              y1={0}
              x2={0}
              y2="100%"
              stroke="currentColor"
              strokeWidth={2}
              strokeDasharray="1 3"
            />
          </svg>
        </div>
      </div>

      {/* Right border */}
      <div className="absolute -inset-y-12 -right-4 w-px lg:-inset-y-16">
        <div className="absolute -inset-y-12 w-px opacity-35 dark:opacity-15 lg:-inset-y-16">
          <svg className="size-full" preserveAspectRatio="none">
            <line
              x1={0}
              y1={0}
              x2={0}
              y2="100%"
              stroke="currentColor"
              strokeWidth={2}
              strokeDasharray="1 3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
