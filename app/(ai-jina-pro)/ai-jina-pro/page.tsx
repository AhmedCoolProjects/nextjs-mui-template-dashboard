import { Metadata } from "next";
import AIJinaProMain from "./main";

export const metadata: Metadata = {
  title: "AI Jina Pro",
  description: "AI Jina Pro",
  keywords: "AI Jina Pro",
};

export default function AIJinaProPage() {
  return <AIJinaProMain />;
}
