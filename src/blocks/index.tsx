import * as React from "react";

type BlockBase = {
  name: string;
  title: string;
  description: string;
  iframeHeight?: number;
};

type BlockVariant = BlockBase & {
  component: React.LazyExoticComponent<() => React.JSX.Element> | string;
};

type BlockGroup = {
  category: string;
  title: string;
  description: string;
  variants: BlockVariant[];
};

export type BlocksType = {
  group: "react" | "tailwind" | "laravel";
  blocks: BlockGroup[];
};

export const Blocks: BlocksType[] = [
  {
    group: "react",
    blocks: [
      {
        category: "calendar",
        title: "Calendar",
        description:
          "Comprehensive calendar components for displaying and managing events.",
        variants: [
          {
            name: "calendar-full",
            title: "Calendar Full",
            description:
              "A comprehensive calendar component for displaying and managing events in a full calendar view.",
            component: React.lazy(() => import("./react/calendar-full")),
            iframeHeight: 840,
          },
        ],
      },
      {
        category: "kanban",
        title: "Kanban",
        description:
          "Task management components with draggable columns and cards.",
        variants: [
          {
            name: "kanban-column",
            title: "Kanban Column",
            description:
              "A Kanban board component with draggable columns and cards for task management.",
            component: React.lazy(() => import("./react/kanban-column")),
            iframeHeight: 720,
          },
        ],
      },
      {
        category: "screen-state",
        title: "Screen States",
        description:
          "Components for displaying different UI states and conditions.",
        variants: [
          {
            name: "screen-state",
            title: "Screen State",
            description:
              "A component that displays the current state of the screen with a customizable message.",
            component: React.lazy(() => import("./react/screen-state")),
            iframeHeight: 480,
          },
        ],
      },
    ],
  },
  {
    group: "tailwind",
    blocks: [
      {
        category: "drawer",
        title: "Drawers",
        description:
          "Sliding panels that appear from different sides of the screen for navigation or forms.",
        variants: [
          {
            name: "drawer-bottom",
            title: "Bottom Drawer",
            description:
              "A panel that slides in from the bottom side of the screen, showing menu items or content without leaving the current page.",
            component: "/src/blocks/tailwind/drawer-bottom.html",
            iframeHeight: 740,
          },
          {
            name: "drawer-form",
            title: "Form Drawer",
            description:
              "A sliding panel containing a form for data entry or editing without navigating away from the current context.",
            component: "/src/blocks/tailwind/drawer-form.html",
            iframeHeight: 740,
          },
          {
            name: "drawer-left",
            title: "Left Drawer",
            description:
              "A panel that slides in from the left side of the screen, showing menu items or content without leaving the current page.",
            component: "/src/blocks/tailwind/drawer-left.html",
            iframeHeight: 740,
          },
          {
            name: "drawer-right",
            title: "Right Drawer",
            description:
              "A panel that slides in from the right side of the screen, showing menu items or content without leaving the current page.",
            component: "/src/blocks/tailwind/drawer-right.html",
            iframeHeight: 740,
          },
          {
            name: "drawer-top",
            title: "Top Drawer",
            description:
              "A panel that slides in from the top side of the screen, showing menu items or content without leaving the current page.",
            component: "/src/blocks/tailwind/drawer-top.html",
            iframeHeight: 740,
          },
          {
            name: "drawer-without-overlay",
            title: "Drawer Without Overlay",
            description:
              "A panel that slides in from the side without dimming the background, allowing interaction with the main content.",
            component: "/src/blocks/tailwind/drawer-without-overlay.html",
            iframeHeight: 740,
          },
        ],
      },
      {
        category: "sidebar",
        title: "Sidebars",
        description:
          "Vertical navigation panels with various styles and configurations for different use cases.",
        variants: [
          {
            name: "sidebar-01",
            title: "Normal Sidebar",
            description:
              "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
            component: "/src/blocks/tailwind/sidebar-01.html",
            iframeHeight: 740,
          },
          {
            name: "sidebar-02",
            title: "Sidebar Without Icons",
            description:
              "Vertical navigation panel with text-only links, providing a clean and minimal side navigation experience.",
            component: "/src/blocks/tailwind/sidebar-02.html",
            iframeHeight: 740,
          },
          {
            name: "sidebar-03",
            title: "Sidebar with Dropdown Items",
            description:
              "Expandable sidebar navigation with dropdown menus for organizing content into hierarchical categories.",
            component: "/src/blocks/tailwind/sidebar-03.html",
            iframeHeight: 740,
          },
          {
            name: "sidebar-04",
            title: "Double Sidebar",
            description:
              "Two-level sidebar layout with primary and secondary navigation panels for complex application structures.",
            component: "/src/blocks/tailwind/sidebar-04.html",
            iframeHeight: 740,
          },
        ],
      },
      {
        category: "dashboard",
        title: "Dashboard Layouts",
        description:
          "Responsive dashboard layouts with sidebar and header navigation for admin interfaces.",
        variants: [
          {
            name: "dashboard-layout-01",
            title: "Dashboard Layout 01",
            description:
              "A responsive dashboard layout with sidebar and header navigation.",
            component: "/src/blocks/tailwind/dashboard-layout-01.html",
            iframeHeight: 740,
          },
          {
            name: "dashboard-layout-02",
            title: "Dashboard Layout 02",
            description:
              "A responsive dashboard layout with sidebar and header navigation.",
            component: "/src/blocks/tailwind/dashboard-layout-02.html",
            iframeHeight: 740,
          },
        ],
      },
      {
        category: "header",
        title: "Headers",
        description:
          "Navigation headers that provide access to key sections and features.",
        variants: [
          {
            name: "header-01",
            title: "Header Navigation",
            description:
              "Navigation header at the top of the UI that provides access to key sections and features.",
            component: "/src/blocks/tailwind/header-01.html",
            iframeHeight: 740,
          },
        ],
      },
      {
        category: "gantt-chart",
        title: "Gantt Charts",
        description:
          "Project management tools that visualize tasks and resources over time.",
        variants: [
          {
            name: "gantt-chart",
            title: "Gantt Chart",
            description:
              "A project management tool that visualizes tasks and resources over time.",
            component: "/src/blocks/tailwind/gantt-chart.html",
            iframeHeight: 740,
          },
        ],
      },
      {
        category: "kanban",
        title: "Kanban Boards",
        description: "Task management boards with draggable columns and cards.",
        variants: [
          {
            name: "kanban",
            title: "Kanban Board",
            description:
              "A Kanban board component with draggable columns and cards for task management.",
            component: "/src/blocks/tailwind/kanban.html",
            iframeHeight: 740,
          },
        ],
      },
      {
        category: "screen-state",
        title: "Screen States",
        description:
          "Components for displaying different UI states like loading, empty, or error conditions.",
        variants: [
          {
            name: "screen-state",
            title: "Screen State",
            description:
              "Component for displaying different UI states like loading, empty, or error conditions.",
            component: "/src/blocks/tailwind/screen-state.html",
            iframeHeight: 480,
          },
        ],
      },
    ],
  },
  {
    group: "laravel",
    blocks: [],
  },
];
