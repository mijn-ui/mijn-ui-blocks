import { Archive } from "lucide-react";
import { Icons } from "@/app/components/ui/icons";
import Link from "next/link";

interface BlockPreviewProps {
  title: string;
  description?: string;
  technology?: "react" | "tailwind" | "laravel";
  variantCount?: number;
  category: string;
}

export function BlockPreviewSkeleton({
  title,
  description,
  technology,
  variantCount,
  category,
}: BlockPreviewProps) {
  const renderSkeleton = () => {
    switch (category) {
      case "calendar":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg p-2">
            {/* Header with navigation */}
            <div className="flex justify-between items-center mb-2">
              <div className="h-2 bg-muted-foreground/30 rounded w-12"></div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-muted rounded"></div>
                <div className="h-2 bg-muted-foreground/20 rounded w-8"></div>
                <div className="w-3 h-3 bg-muted rounded"></div>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 bg-muted-foreground/20 rounded"></div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 21 }).map((_, i) => (
                <div key={i} className="h-4 bg-muted/50 rounded relative">
                  {/* Date number */}
                  <div className="absolute top-0 left-0 w-2 h-1 bg-muted-foreground/30 rounded text-[6px]"></div>
                  {/* Events */}
                  {i === 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded"></div>
                  )}
                  {i === 4 && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded"></div>
                  )}
                  {i === 8 && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500/60 rounded"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "kanban":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg p-3">
            {/* Column header */}
            <div className="flex justify-between items-center mb-2">
              <div className="h-2 bg-muted-foreground/30 rounded w-12"></div>
              <div className="w-4 h-4 bg-muted/50 rounded-full flex items-center justify-center">
                <div className="text-[6px] text-muted-foreground">3</div>
              </div>
            </div>

            {/* Task cards */}
            <div className="space-y-2">
              {/* First task card */}
              <div className="bg-muted/30 border border-border rounded p-2">
                <div className="h-2 bg-muted-foreground/20 rounded w-full mb-1"></div>
                <div className="flex justify-between items-center mb-1">
                  <div className="h-1 bg-muted-foreground/15 rounded w-8"></div>
                  <div className="text-[6px] text-muted-foreground">3/4</div>
                </div>
                <div className="h-1 bg-orange-500 rounded w-3/4 mb-1"></div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                  </div>
                  <div className="text-[6px] text-muted-foreground">3d</div>
                </div>
              </div>

              {/* Second task card */}
              <div className="bg-muted/30 border border-border rounded p-2">
                <div className="h-2 bg-muted-foreground/20 rounded w-4/5 mb-1"></div>
                <div className="flex justify-between items-center">
                  <div className="w-2 h-2 bg-muted rounded-full"></div>
                  <div className="text-[6px] text-muted-foreground">5d</div>
                </div>
              </div>
            </div>

            {/* Add new item */}
            <div className="mt-2 pt-1 border-t border-border">
              <div className="h-1 bg-muted-foreground/15 rounded w-16"></div>
            </div>
          </div>
        );

      case "screen-state":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg flex flex-col items-center justify-center p-3">
            <div className="w-8 h-8 bg-muted rounded-full mb-2 flex items-center justify-center">
              <Archive className="w-4 h-4 text-muted-foreground/60" />
            </div>
            <div className="h-2 bg-muted-foreground/30 rounded w-16 mb-1"></div>
            <div className="h-2 bg-muted-foreground/20 rounded w-24"></div>
          </div>
        );

      case "drawer":
        return (
          <div className="w-full aspect-video bg-muted/50 border border-border rounded-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-background border-l border-border p-2">
              <div className="h-2 bg-muted-foreground/30 rounded w-12 mb-2"></div>
              <div className="space-y-1">
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded w-3/4"></div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 h-2 bg-muted-foreground/20 rounded"></div>
            </div>
          </div>
        );

      case "gantt-chart":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg p-3">
            {/* Header with timeline */}
            <div className="flex mb-2">
              <div className="w-20 h-2 bg-muted-foreground/30 rounded mr-3"></div>
              <div className="flex-1 grid grid-cols-12 gap-px">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-2 bg-muted/50 rounded-sm"></div>
                ))}
              </div>
            </div>

            {/* Gantt rows */}
            <div className="space-y-1">
              {/* Task 1 */}
              <div className="flex items-center">
                <div className="w-20 h-2 bg-muted-foreground/20 rounded mr-3"></div>
                <div className="flex-1 relative h-2 bg-muted/30 rounded">
                  <div className="absolute left-1 top-0 w-4 h-2 bg-orange-500 rounded"></div>
                </div>
              </div>

              {/* Task 2 */}
              <div className="flex items-center">
                <div className="w-20 h-2 bg-muted-foreground/20 rounded mr-3"></div>
                <div className="flex-1 relative h-2 bg-muted/30 rounded">
                  <div className="absolute left-3 top-0 w-6 h-2 bg-orange-500/70 rounded"></div>
                </div>
              </div>

              {/* Task 3 */}
              <div className="flex items-center">
                <div className="w-20 h-2 bg-muted-foreground/20 rounded mr-3"></div>
                <div className="flex-1 relative h-2 bg-muted/30 rounded">
                  <div className="absolute left-6 top-0 w-3 h-2 bg-muted-foreground/40 rounded"></div>
                </div>
              </div>

              {/* Task 4 */}
              <div className="flex items-center">
                <div className="w-20 h-2 bg-muted-foreground/20 rounded mr-3"></div>
                <div className="flex-1 relative h-2 bg-muted/30 rounded">
                  <div className="absolute left-8 top-0 w-2 h-2 bg-muted-foreground/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "dashboard":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg p-3">
            <div className="grid grid-cols-3 gap-2 h-full">
              {[
                { icon: "📊", trend: "+12%" },
                { icon: "👥", trend: "+19%" },
                { icon: "🛒", trend: "+5%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-muted/50 border border-border rounded p-2 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <div className="w-4 h-4 bg-muted rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-muted-foreground/40 rounded"></div>
                    </div>
                    <div className="text-[8px] text-orange-500 font-medium">
                      {item.trend}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-muted-foreground/30 rounded w-12"></div>
                    <div className="h-3 bg-muted-foreground/20 rounded w-8"></div>
                    <div className="h-1 bg-muted-foreground/15 rounded w-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "header":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg overflow-hidden">
            <div className="h-8 bg-muted/50 border-b border-border px-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
                <div className="h-2 bg-muted-foreground/30 rounded w-12"></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-muted rounded"></div>
                <div className="w-4 h-4 bg-muted rounded"></div>
                <div className="w-4 h-4 bg-muted rounded-full"></div>
              </div>
            </div>
            <div className="p-3">
              <div className="h-3 bg-muted-foreground/20 rounded w-1/3 mb-2"></div>
              <div className="space-y-1">
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded w-4/5"></div>
              </div>
            </div>
          </div>
        );

      case "sidebar":
        return (
          <div className="w-full aspect-video bg-background border border-border rounded-lg flex overflow-hidden">
            <div className="w-16 bg-muted/50 border-r border-border p-2">
              <div className="h-2 bg-muted-foreground/30 rounded w-10 mb-2"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded"></div>
                  <div className="h-1 bg-muted-foreground/30 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-500 rounded"></div>
                  <div className="h-1 bg-muted-foreground/30 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-muted-foreground/40 rounded"></div>
                  <div className="h-1 bg-muted-foreground/30 rounded flex-1"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-2">
              <div className="h-2 bg-muted-foreground/20 rounded w-1/3 mb-2"></div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-8 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full aspect-video bg-muted border border-border rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground/60 text-xs">Preview</div>
          </div>
        );
    }
  };

  const Icon = technology && Icons[technology];

  return (
    <Link
      className="group cursor-pointer"
      href={`/blocks/${technology}/${category}`}>
      <div className="mb-3 transition-transform group-hover:scale-105">
        {renderSkeleton()}
      </div>
      <div className="text-sm font-medium text-foreground mb-1 flex items-center justify-between">
        <p>{title}</p>
        <div className="flex items-center gap-2">
          <div className="text-xs flex items-center gap-1">
            {Icon && <Icon className="size-3.5" />}
            {technology}
          </div>
          <span className="text-[0.625rem] py-1 leading-none px-2 bg-default rounded-full">
            variants: {variantCount}
          </span>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </Link>
  );
}
