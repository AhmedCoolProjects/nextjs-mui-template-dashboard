import { Metadata } from "next";
import InputBar from "./components/inputBar";
import MessageDisplay from "./components/messageDisplay";
import messages from "./data.json";
import ChatBar from "./components/chatBar";

export const metadata: Metadata = {
  title: "MUI Template Chat",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <main
      style={{
        height: "calc(100vh - 112px)",
      }}
      className=" flex flex-col "
    >
      <div className="flex flex-col flex-1 relative">
        <ChatBar />
        <MessageDisplay messages={messages} />
      </div>
      <InputBar />
    </main>
  );
}
