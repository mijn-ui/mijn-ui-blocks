import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/blocks";
import { LoaderCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    tech: string;
    name: string;
  }>;
}): Promise<Metadata> {
  const { tech, name } = await params;

  const group = Blocks.find((blockGroup) => blockGroup.group === tech);

  if (!group) {
    return {};
  }

  const block = group.blocks[name];

  if (!block) {
    return {};
  }

  const { title, description } = block;

  return {
    title,
    description,
  };
}

export const generateStaticParams = () => {
  return Blocks.flatMap((group) =>
    Object.keys(group.blocks).map((blockName) => ({
      tech: group.group,
      name: blockName,
    }))
  );
};

const BlockPage = async ({
  params,
}: {
  params: Promise<{
    tech: "react" | "tailwind" | "laravel";
    name: string;
  }>;
}) => {
  const { tech, name } = await params;
  const Component = getBlockComponent(name, tech);

  if (!Component) {
    return notFound();
  }

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
};

const getBlockComponent = (
  name: string,
  tech: "react" | "tailwind" | "laravel"
) => {
  return (
    Blocks.find((blockGroup) => blockGroup.group === tech)?.blocks[name]
      .component || null
  );
};

export default BlockPage;
