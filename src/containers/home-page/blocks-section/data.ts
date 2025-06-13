export type TechnologyGroup = "react" | "tailwind" | "laravel";

export const BLOCK_GROUPS: Array<TechnologyGroup> = [
  "react",
  "tailwind",
  "laravel",
] as const;

export type BlockType = {
  group: TechnologyGroup;
  items: {
    name: string;
    description: string;
    url: string;
    tech: "react" | "tailwind" | "laravel" | "next";
  }[];
};

export const BLOCK_DATA: BlockType[] = [
  {
    group: "react",
    items: [
      {
        name: "Calendar Full",
        description:
          "A comprehensive calendar component for displaying and managing events in a full calendar view.",
        url: "https://mijn-ui.vercel.app/react/view/calendar-full",
        tech: "next",
      },
      {
        name: "Kanban Column",
        description:
          "A Kanban board component with draggable columns and cards for task management.",
        url: "https://mijn-ui.vercel.app/react/view/kanban-column",
        tech: "next",
      },
    ],
  },
  {
    group: "tailwind",
    items: [
      {
        name: "Dashboard Layout",
        description:
          "A responsive application layout with sidebar navigation, top navbar, and card components for building admin interfaces or dashboards.",
        url: "https://mijn-ui.vercel.app/tailwind/view/dashboard-layout-01",
        tech: "tailwind",
      },
      {
        name: "Header",
        description:
          "Navigation header at the top of the UI that provides access to key sections and features.",
        url: "https://mijn-ui.vercel.app/tailwind/view/header-01",
        tech: "tailwind",
      },
    ],
  },
];
