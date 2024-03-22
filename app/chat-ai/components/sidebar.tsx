"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
} from "@mui/material";
import { ScrollArea } from "@/components/ui/scroll-area";

import { CONVERSATIONS } from "../data/conversations";

import ListItem from "./listItem";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pb-6 justify-between bg-background rounded-xl flex flex-col ml-2 my-2 h-[calc(100vh_-_16px)] max-h-screen",
        className
      )}
    >
      <div className="space-y-4 py-4">
        {/* head */}
        <div className="px-3 py-2">
          <h2 className="mb-6 px-4 text-lg font-semibold tracking-tight">
            AI Assistant
          </h2>
          <div className="space-x-4 flex flex-row items-center justify-center">
            <MuiButton
              variant="contained"
              className="bg-ai-assi-primary text-white rounded-full w-full"
              startIcon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 9H15.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 15.75V2.25"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            >
              New Chat
            </MuiButton>
            <MuiIconButton className="bg-black hover:bg-black">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white"
              >
                <path
                  d="M8.25 15C11.9779 15 15 11.9779 15 8.25C15 4.52208 11.9779 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.375 16.5C15.9963 16.5 16.5 15.9963 16.5 15.375C16.5 14.7537 15.9963 14.25 15.375 14.25C14.7537 14.25 14.25 14.7537 14.25 15.375C14.25 15.9963 14.7537 16.5 15.375 16.5Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </MuiIconButton>
          </div>
        </div>
        {/* your conversations */}
        <div className="py-2">
          <div className="mb-3 px-4 tracking-tight border border-x-0 py-2 flex flex-row justify-between items-center">
            <h2 className=" text-[13px] tracking-tight">Your Conversations</h2>

            <Button className="text-blue-600" variant="link">
              Clear All
            </Button>
          </div>

          <ScrollArea className="space-y-1 h-[200px] px-3 relative">
            {CONVERSATIONS.map((conversation, i) => (
              <ListItem key={i} text={conversation.title} />
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
          </ScrollArea>
        </div>
        {/* last 7 days */}
        <div className="py-2">
          <div className="mb-3 px-4 tracking-tight border border-x-0 py-4 flex flex-row justify-between items-center">
            <h2 className=" text-[13px] tracking-tight">Last 7 Days</h2>
          </div>

          <ScrollArea className="space-y-1 h-[110px] px-3 relative">
            {CONVERSATIONS.map((conversation, i) => (
              <ListItem key={i} text={conversation.title} />
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
          </ScrollArea>
        </div>
      </div>
      {/* settings button */}
      <Button
        variant="ghost"
        className="w-auto mx-3 py-6 border rounded-full justify-start "
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2  -ml-1"
        >
          <rect width="34" height="34" rx="17" fill="#EFEFEF" />
          <path
            d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3335 17.5867V16.4133C10.3335 15.72 10.9002 15.1467 11.6002 15.1467C12.8068 15.1467 13.3002 14.2933 12.6935 13.2467C12.3468 12.6467 12.5535 11.8667 13.1602 11.52L14.3135 10.86C14.8402 10.5467 15.5202 10.7333 15.8335 11.26L15.9068 11.3867C16.5068 12.4333 17.4935 12.4333 18.1002 11.3867L18.1735 11.26C18.4868 10.7333 19.1668 10.5467 19.6935 10.86L20.8468 11.52C21.4535 11.8667 21.6602 12.6467 21.3135 13.2467C20.7068 14.2933 21.2002 15.1467 22.4068 15.1467C23.1002 15.1467 23.6735 15.7133 23.6735 16.4133V17.5867C23.6735 18.28 23.1068 18.8533 22.4068 18.8533C21.2002 18.8533 20.7068 19.7067 21.3135 20.7533C21.6602 21.36 21.4535 22.1333 20.8468 22.48L19.6935 23.14C19.1668 23.4533 18.4868 23.2667 18.1735 22.74L18.1002 22.6133C17.5002 21.5667 16.5135 21.5667 15.9068 22.6133L15.8335 22.74C15.5202 23.2667 14.8402 23.4533 14.3135 23.14L13.1602 22.48C12.5535 22.1333 12.3468 21.3533 12.6935 20.7533C13.3002 19.7067 12.8068 18.8533 11.6002 18.8533C10.9002 18.8533 10.3335 18.28 10.3335 17.5867Z"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span className="flex max-w-full text-overflow-ellipsis">Settings</span>
      </Button>
    </div>
  );
}
