import TemplatesView from "@/features/templates/templates-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MijnUI | Templates",
  description: "",
};

const TemplatePage = () => {
  return <TemplatesView />;
};

export default TemplatePage;
