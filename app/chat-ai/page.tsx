import { Metadata } from "next";
import { Sidebar } from "./components/sidebar";
import { playlists } from "./data/playlists";

export const metadata: Metadata = {
  title: "Chat AI",
  description: ".",
};

export default function ChatAIPage() {
  return (
    <div className="hidden md:block">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar />
            <div className="col-span-3 lg:col-span-4 lg:border-l"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
