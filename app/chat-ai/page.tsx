import { Metadata } from "next";
import Suggestions from "./components/suggestions";

export const metadata: Metadata = {
  title: "Chat AI",
  description: ".",
};

export default function ChatAIPage() {
  return <Suggestions />;
}
