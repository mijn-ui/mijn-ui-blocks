"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import Link from "next/link";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@mijn-ui/react";
import {
  ArrowDownCircle,
  EllipsisVertical,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  X,
} from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable";
import { toggleStyles } from "@/app/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/app/components/ui/toggle-group";

type BlockViewerContextType = {
  url: string;
  iframeKey: number;
  setIframeKey: React.Dispatch<React.SetStateAction<number>>;
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null>;
};

/* -------------------------------------------------------------------------- */
/*                                   Context                                  */
/* -------------------------------------------------------------------------- */

const BlockViewerContext = createContext<BlockViewerContextType | null>(null);

const useBlockViewerContext = () => {
  const context = useContext(BlockViewerContext);
  if (!context) {
    throw new Error(
      "useBlockViewerContext must be used within a BlockViewerProvider"
    );
  }
  return context;
};

/* -------------------------------------------------------------------------- */

type BlockViewerProps = {
  url: string;
  iframeHeight: number;
};

const BlockViewer = ({ url, iframeHeight }: BlockViewerProps) => {
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <BlockViewerContext.Provider
      value={{ url, iframeKey, setIframeKey, resizablePanelRef }}>
      <div
        className="w-full"
        style={
          {
            "--iframe-height": `${iframeHeight}px`,
          } as React.CSSProperties
        }>
        <Tabs defaultValue="preview" className="relative gap-4 flex flex-col">
          <BlockViewerToolbar />
          <BlockViewerContent />
          <BlockViewerSourceCode />
        </Tabs>
      </div>
    </BlockViewerContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */

const BlockViewerToolbar = () => {
  const { url, setIframeKey } = useBlockViewerContext();
  const [isOpen, setIsOpen] = useState(false);
  const { resizablePanelRef } = useBlockViewerContext();

  const handleRefresh = () => setIframeKey((key: number) => key + 1);

  return (
    <div className="w-full h-10 flex items-center justify-between gap-4">
      <TabsList className="w-fit">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="source">Source</TabsTrigger>
      </TabsList>

      <div className="hidden lg:flex items-center gap-1">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex items-center">
          <CollapsibleContent
            asChild
            className="data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
            <ToggleGroup
              type="single"
              defaultValue="100"
              onValueChange={(value) => {
                if (value && resizablePanelRef?.current) {
                  resizablePanelRef.current.resize(parseInt(value));
                }
              }}>
              <ToggleGroupItem size="sm" value="100" title="Desktop">
                <Monitor className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem size="sm" value="60" title="Tablet">
                <Tablet className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem size="sm" value="30" title="Mobile">
                <Smartphone className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <Separator orientation="vertical" className="h-4" />
              <Button
                className={toggleStyles({ size: "sm" }).base()}
                asChild
                title="Open in New Tab">
                <Link href={url} target="_blank">
                  <span className="sr-only">Open in New Tab</span>
                  <Fullscreen className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button
                className={toggleStyles({ size: "sm" }).base()}
                onClick={handleRefresh}
                title="Refresh Preview">
                <RotateCw />
                <span className="sr-only">Refresh Preview</span>
              </Button>
            </ToggleGroup>
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <Button size="xs" variant="ghost">
              {isOpen ? (
                <X className="h-4 w-4 transition-transform duration-200" />
              ) : (
                <EllipsisVertical className="h-4 w-4 transition-transform duration-200" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        <Button
          onClick={() =>
            alert("This feature is not available yet. Coming soon!")
          }
          size="sm"
          className="text-sm"
          variant="outlined">
          <ArrowDownCircle size={16} />
          Download .Zip File
        </Button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

const BlockViewerContent = () => {
  const { url, iframeKey, resizablePanelRef } = useBlockViewerContext();

  return (
    <TabsContent value="preview">
      <ResizablePanelGroup direction="horizontal" className="relative z-10">
        <ResizablePanel
          className="relative aspect-[4/2.5] rounded-xl border-small bg-background md:aspect-auto"
          defaultSize={100}
          minSize={30}
          ref={resizablePanelRef}>
          <iframe
            key={iframeKey}
            src={url}
            className="relative z-20 w-full bg-background h-[var(--iframe-height)]"
          />
        </ResizablePanel>
        <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
        <ResizablePanel defaultSize={0} minSize={0} />
      </ResizablePanelGroup>
    </TabsContent>
  );
};

/* -------------------------------------------------------------------------- */

const BlockViewerSourceCode = () => {
  return (
    <TabsContent value="source">
      <div className="flex w-full items-center justify-center aspect-[4/2.5] md:h-[var(--iframe-height)] rounded-xl border-small bg-accent text-center p-4">
        <p className="text-muted-foreground text-sm">
          Source code for this block is not available.
        </p>
      </div>
    </TabsContent>
  );
};

export { BlockViewer };
