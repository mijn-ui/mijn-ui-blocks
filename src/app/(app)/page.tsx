"use client";

import { BlockPreviewSkeleton } from "@/app/components/block-preview-skeleton";
import { TechnologyFilter } from "@/app/components/technology-filter";
import { Title } from "@/app/components/ui/typography";
import { Blocks } from "@/blocks";
import { Badge, Button } from "@mijn-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";

const HomePage = () => {
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
    <div className="min-h-screen">
      <div
        id="hero"
        className="flex w-full justify-center px-5 pt-20 szm:px-8 sm:pt-28 md:px-10 md:pt-20">
        <HeroSection />
      </div>

      <div id="blocks" className="pt-[clamp(60px,15vw,120px)] mb-20">
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
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-start text-left">
      <Badge variant="outlined" className="text-[10px] sm:text-sm">
        🎉 New React & Tailwind Components Available
      </Badge>
      <Title className="mt-2 sm:mt-4">
        Beautiful Components
        <br />
        Ready to Use
      </Title>
      <p className="mt-2 sm:mt-4 text-sm sm:text-medium font-medium text-muted-foreground md:mt-6">
        Professional templates and blocks for React and Tailwind CSS. Build
        faster <br /> with our collection of production-ready components.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-6 w-full">
        <Button asChild color="primary">
          <a href="#blocks">Browse Blocks</a>
        </Button>
        <Button variant="outlined" asChild>
          <Link href="/templates">
            Explore Templates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HomePage;
