import { Tabs, TabsList, TabsTrigger } from "@mijn-ui/react";
import { Icons } from "./ui/icons";

interface TechnologyFilterProps {
  technologyGroup: Array<"react" | "tailwind" | "laravel">;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
}

export function TechnologyFilter({
  technologyGroup,
  selectedFilter,
  onFilterChange,
}: TechnologyFilterProps) {
  return (
    <div className="z-20 flex bg-background overflow-hidden px-5">
      <Tabs
        className="flex w-full items-center gap-0.5"
        value={selectedFilter}
        onValueChange={onFilterChange}>
        <TabsList className="flex-row">
          {technologyGroup.map((group) => {
            const Icon = Icons[group];
            return (
              <TabsTrigger className="capitalize" key={group} value={group}>
                <Icon />
                {group}
              </TabsTrigger>
            );
          })}

          <TabsTrigger className="capitalize" value={"all"}>
            All
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
