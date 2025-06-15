import { Button } from "@mijn-ui/react";
import { Icons } from "./ui/icons";

interface TechnologyFilterProps {
  technologyGroup: Array<"react" | "tailwind" | "laravel">;
  selectedFilter: string | null;
  onFilterChange: (value: string | null) => void;
}

export function TechnologyFilter({
  technologyGroup,
  selectedFilter,
  onFilterChange,
}: TechnologyFilterProps) {
  return (
    <div className="sticky top-12 z-20 flex w-full bg-background justify-center overflow-hidden px-5">
      <div className="flex w-full max-w-screen-xl items-center gap-0.5 justify-end">
        {technologyGroup.map((group) => {
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
