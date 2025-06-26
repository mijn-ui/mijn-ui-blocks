import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement>;

export type TechnologyGroup = "react" | "tailwind" | "laravel";

export type Template = {
  id: string;
  name: string;
  status?: string;
  description: string;
  cover: {
    light: string;
    dark: string;
  };
  images: { light: string; dark: string; link: string }[];
  technologies?: string[];
  previewURL: string;
  githubURL?: string;
};

export type Templates = {
  group: TechnologyGroup;
  templates: Template[];
};

export const TemplateGroups: Array<TechnologyGroup> = [
  "react",
  "tailwind",
  "laravel",
] as const;

export const Templates: Templates[] = [
  {
    group: "react",
    templates: [
      {
        id: "1",
        name: "RAG AI Chatbot Template",
        status: "beta",
        description:
          "A template for creating a chatbot that can answer questions using a knowledge base.",
        cover: {
          light: "/images/templates/rag-chat/light/cover.png",
          dark: "/images/templates/rag-chat/dark/cover.png",
        },
        images: [
          {
            light: "/images/templates/rag-chat/light/01.png",
            dark: "/images/templates/rag-chat/dark/01.png",
            link: "https://mijnui-ai-chat-template.vercel.app",
          },
          {
            light: "/images/templates/rag-chat/light/02.png",
            dark: "/images/templates/rag-chat/dark/02.png",
            link: "https://mijnui-ai-chat-template.vercel.app/balance-sheet-overview/76ab68a3-34e1-499e-8147-bb266739c6e8",
          },
          {
            light: "/images/templates/rag-chat/light/03.png",
            dark: "/images/templates/rag-chat/dark/03.png",
            link: "https://mijnui-ai-chat-template.vercel.app/accounts-payable-summary/c8a5899b-d581-45f5-bc1a-ed4f3c19a9f5",
          },
        ],
        technologies: [
          "Next.js v15",
          "React.js v19",
          "next-auth v5",
          "next-themes v0.4",
          "Tailwind.css v3.4",
          "react-query v5",
          "react-hook-form v7",
          "zod v3",
          "mijn-ui v0.1.0",
        ],
        previewURL: "https://mijnui-ai-chat-template.vercel.app",
        githubURL: "https://github.com/mijn-ui/ai-chat-template",
      },
      {
        id: "2",
        name: "ERP Template",
        status: "beta",
        description:
          "A template for creating a point of sale system for an ERP application.",
        cover: {
          light: "/images/templates/erp/light/cover.png",
          dark: "/images/templates/erp/dark/cover.png",
        },
        images: [
          {
            dark: "/images/templates/erp/dark/01.png",
            light: "/images/templates/erp/light/01.png",
            link: "https://mijnui-erp-template.vercel.app/admin/app-panel",
          },
          {
            dark: "/images/templates/erp/dark/02.png",
            light: "/images/templates/erp/light/02.png",
            link: "https://mijnui-erp-template.vercel.app/contacts/customers",
          },
          {
            dark: "/images/templates/erp/dark/03.png",
            light: "/images/templates/erp/light/03.png",
            link: "https://mijnui-erp-template.vercel.app/contacts/customers/create",
          },
        ],

        technologies: [
          "Next.js v15",
          "React.js v19",
          "next-themes v0.4",
          "mijn-ui v0.1.0",
        ],
        previewURL: "https://mijnui-erp-template.vercel.app",
        githubURL: "https://github.com/mijn-ui/erp-template",
      },
      {
        id: "3",
        name: "Dashboard Template",
        status: "beta",
        description:
          "A template for creating a dashboard for an ERP application.",
        cover: {
          light: "/images/templates/dashboard/light/cover.png",
          dark: "/images/templates/dashboard/dark/cover.png",
        },
        images: [
          {
            dark: "/images/templates/dashboard/dark/01.png",
            light: "/images/templates/dashboard/light/01.png",
            link: "https://mijnui-dashboard-template.vercel.app/dashboard/overview",
          },
          {
            dark: "/images/templates/dashboard/dark/02.png",
            light: "/images/templates/dashboard/light/02.png",
            link: "https://mijnui-dashboard-template.vercel.app/dashboard/kanban",
          },
          {
            dark: "/images/templates/dashboard/dark/03.png",
            light: "/images/templates/dashboard/light/03.png",
            link: "https://mijnui-dashboard-template.vercel.app/dashboard/product",
          },
        ],
        technologies: [
          "next.js",
          "next-auth v5",
          "next-themes v0.4",
          "react-hook-form v7",
          "mijn-ui v0.1.0",
        ],
        previewURL: "https://mijnui-dashboard-template.vercel.app",
        githubURL: "https://github.com/mijn-ui/dashboard-template",
      },
    ],
  },
  {
    group: "tailwind",
    templates: [],
  },
  {
    group: "laravel",
    templates: [
      {
        id: "1",
        name: "Lab Device Manager",
        status: "beta",
        description: "",
        cover: {
          light: "/images/templates/laravel/light/cover.png",
          dark: "/images/templates/laravel/light/cover.png",
        },
        images: [
          {
            light: "/images/templates/laravel/light/01.png",
            dark: "/images/templates/laravel/light/01.png",
            link: "https://iot.mijnui.com/login",
          },
          {
            light: "/images/templates/laravel/light/02.png",
            dark: "/images/templates/laravel/light/02.png",
            link: "https://iot.mijnui.com/home",
          },
          {
            light: "/images/templates/laravel/light/03.png",
            dark: "/images/templates/laravel/light/03.png",
            link: "https://iot.mijnui.com/users",
          },
        ],
        previewURL: "https://iot.mijnui.com",
      },
    ],
  },
];
