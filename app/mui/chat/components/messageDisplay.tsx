"use client";

import { Box, Fab, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function MessageDisplay({
  messages,
}: {
  messages: { text: string; isMine: boolean }[];
}) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const isAtBottom =
      // @ts-ignore
      chatContainerRef.current.scrollHeight -
        1 -
        // @ts-ignore
        chatContainerRef.current.scrollTop <=
      // @ts-ignore
      chatContainerRef.current.clientHeight;
    setShowScrollButton(!isAtBottom);
    // @ts-ignore
    console.log("clientHeight", chatContainerRef.current.clientHeight);
    // @ts-ignore
    console.log("scrollHeight", chatContainerRef.current.scrollHeight);
    // @ts-ignore
    console.log("scrollTop", chatContainerRef.current.scrollTop);
    console.log("----------------------");
  };

  useEffect(() => {
    scrollToBottom();
    // Optional: You might want to limit this effect to only run when certain conditions are met,
    // like when a new message is added, by adding dependencies to the useEffect hook.
  }, []);

  return (
    <>
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="flex flex-col messages-container overflow-y-auto p-3 space-y-4 max-h-[70vh]"
      >
        {messages.map((msg, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              maxWidth: "60%",
              padding: "10px",
              marginLeft: msg.isMine ? "auto" : 0,
              backgroundColor: msg.isMine ? "#e0f7fa" : "#fff",
              width: "fit-content",
            }}
          >
            <Typography variant="body1">{msg.text}</Typography>
            <span className="text-xs text-gray-500 justify-end items-end flex w-full">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </Paper>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex flex-row items-end justify-end">
        {showScrollButton && (
          <Fab
            onClick={scrollToBottom}
            size="small"
            sx={{
              bgcolor: "secondary",
              right: 0,
            }}
            aria-label="add"
          >
            <RxDoubleArrowDown />
          </Fab>
        )}
      </div>
    </>
  );
}
