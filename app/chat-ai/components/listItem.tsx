"use client";

import { Button } from "@/components/ui/button";
import ConversationSvg from "@/components/icons/conversation.svg";

function ListItem({ text }: { text: string }) {
  return (
    <Button variant="ghost" className="w-full  justify-start ">
      <ConversationSvg className="h-4 w-6 " />
      <span className="flex max-w-full text-overflow-ellipsis">{text}</span>
    </Button>
  );
}

export default ListItem;
