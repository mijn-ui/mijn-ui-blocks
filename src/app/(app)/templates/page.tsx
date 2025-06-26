import TemplatesView from "@/features/templates/templates-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MijnUI | Templates",
  description:
    "Browse a collection of templates built with MijnUI components to showcase our design system. This feature is currently in beta.",
};

const TemplatePage = () => {
  return <TemplatesView />;
};

export default TemplatePage;
