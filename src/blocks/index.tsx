import * as React from "react";

type BlocksType = {
  group: "react" | "tailwind" | "laravel";
  blocks: Record<
    string,
    {
      name: string;
      title: string;
      description: string;
      component: React.LazyExoticComponent<() => React.JSX.Element>;
      iframeHeight?: number;
    }
  >;
};

export const Blocks: BlocksType[] = [
  {
    group: "react",
    blocks: {
      "calendar-full": {
        name: "calendar-full",
        title: "Calendar Full",
        description:
          "A comprehensive calendar component for displaying and managing events in a full calendar view.",
        component: React.lazy(() => import("./react/calendar-full")),
        iframeHeight: 840,
      },
      "kanban-column": {
        name: "kanban-column",
        title: "Kanban Column",
        description:
          "A Kanban board component with draggable columns and cards for task management.",
        component: React.lazy(() => import("./react/kanban-column")),
        iframeHeight: 720,
      },
      "screen-state": {
        name: "screen-state",
        title: "Screen State",
        description:
          "A component that displays the current state of the screen with a customizable message.",
        component: React.lazy(() => import("./react/screen-state")),
        iframeHeight: 480,
      },
    },
  },
];
