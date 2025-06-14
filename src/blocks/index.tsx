import * as React from "react";

type BlockBase = {
  name: string;
  title: string;
  description: string;
  iframeHeight?: number;
};

export type BlocksType =
  | {
      group: "react";
      blocks: (BlockBase & {
        component: React.LazyExoticComponent<() => React.JSX.Element>;
      })[];
    }
  | {
      group: "tailwind" | "laravel";
      blocks: (BlockBase & {
        component: string;
      })[];
    };

export const Blocks: BlocksType[] = [
  {
    group: "react",
    blocks: [
      {
        name: "calendar-full",
        title: "Calendar Full",
        description:
          "A comprehensive calendar component for displaying and managing events in a full calendar view.",
        component: React.lazy(() => import("./react/calendar-full")),
        iframeHeight: 840,
      },
      {
        name: "kanban-column",
        title: "Kanban Column",
        description:
          "A Kanban board component with draggable columns and cards for task management.",
        component: React.lazy(() => import("./react/kanban-column")),
        iframeHeight: 720,
      },
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
  {
    group: "tailwind",
    blocks: [
      {
        name: "drawer-bottom",
        component: "/src/blocks/tailwind/drawer-bottom.html",
        title: "Bottom Drawer",
        description:
          "A panel that slides in from the bottom side of the screen, showing menu items or content without leaving the current page.",
        iframeHeight: 740,
      },
      {
        name: "drawer-form",
        component: "/src/blocks/tailwind/drawer-form.html",
        title: "Form Drawer",
        description:
          "A sliding panel containing a form for data entry or editing without navigating away from the current context.",
        iframeHeight: 740,
      },
      {
        name: "drawer-left",
        component: "/src/blocks/tailwind/drawer-left.html",
        title: "Left Drawer",
        description:
          "A panel that slides in from the left side of the screen, showing menu items or content without leaving the current page.",
        iframeHeight: 740,
      },
      {
        name: "drawer-right",
        component: "/src/blocks/tailwind/drawer-right.html",
        title: "Right Drawer",
        description:
          "A panel that slides in from the right side of the screen, showing menu items or content without leaving the current page.",
        iframeHeight: 740,
      },
      {
        name: "drawer-top",
        component: "/src/blocks/tailwind/drawer-top.html",
        title: "Top Drawer",
        description:
          "A panel that slides in from the top side of the screen, showing menu items or content without leaving the current page.",
        iframeHeight: 740,
      },
      {
        name: "drawer-without-overlay",
        component: "/src/blocks/tailwind/drawer-without-overlay.html",
        title: "Drawer Without Overlay",
        description:
          "A panel that slides in from the side without dimming the background, allowing interaction with the main content.",
        iframeHeight: 740,
      },
      {
        name: "gantt-chart",
        component: "/src/blocks/tailwind/gantt-chart.html",
        title: "Gantt Chart",
        description:
          "A project management tool that visualizes tasks and resources over time.",
        iframeHeight: 740,
      },
      {
        name: "kanban",
        component: "/src/blocks/tailwind/kanban.html",
        title: "Kanban Column",
        description:
          "A Kanban board component with draggable columns and cards for task management.",
        iframeHeight: 740,
      },
      {
        name: "screen-state",
        component: "/src/blocks/tailwind/screen-state.html",
        title: "Screen State",
        description:
          "Component for displaying different UI states like loading, empty, or error conditions.",
        iframeHeight: 480,
      },
      {
        name: "dashboard-layout-01",
        component: "/src/blocks/tailwind/dashboard-layout-01.html",
        title: "Dashboard Layout",
        description:
          "A responsive dashboard layout with sidebar and header navigation.",
        iframeHeight: 740,
      },
      {
        name: "dashboard-layout-02",
        component: "/src/blocks/tailwind/dashboard-layout-02.html",
        title: "Dashboard Layout",
        description:
          "A responsive dashboard layout with sidebar and header navigation",
        iframeHeight: 740,
      },
      {
        name: "header-01",
        component: "/src/blocks/tailwind/header-01.html",
        title: "Header",
        description:
          "Navigation header at the top of the UI that provides access to key sections and features.",
        iframeHeight: 740,
      },
      {
        name: "sidebar-01",
        component: "/src/blocks/tailwind/sidebar-01.html",
        title: "Sidebar",
        description:
          "Vertical navigation panel for site or app sections, typically positioned at the side of the screen.",
        iframeHeight: 740,
      },
      {
        name: "sidebar-02",
        component: "/src/blocks/tailwind/sidebar-02.html",
        title: "Sidebar without icons",
        description:
          "Vertical navigation panel with text-only links, providing a clean and minimal side navigation experience.",
        iframeHeight: 740,
      },
      {
        name: "sidebar-03",
        component: "/src/blocks/tailwind/sidebar-03.html",
        title: "Sidebar with Dropdown Items",
        description:
          "Expandable sidebar navigation with dropdown menus for organizing content into hierarchical categories.",
        iframeHeight: 740,
      },
      {
        name: "sidebar-04",
        component: "/src/blocks/tailwind/sidebar-04.html",
        title: "Double Sidebar",
        description:
          "Two-level sidebar layout with primary and secondary navigation panels for complex application structures.",
        iframeHeight: 740,
      },
    ],
  },
  {
    group: "laravel",
    blocks: [],
  },
];
