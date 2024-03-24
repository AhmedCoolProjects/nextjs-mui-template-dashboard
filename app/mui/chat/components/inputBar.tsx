"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { FiSend as SendIcon } from "react-icons/fi";

export default function InputBar() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // onSendMessage(message);
    setMessage("");
  };

  return (
    <OutlinedInput
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      fullWidth
      endAdornment={
        <IconButton disabled={!message}>
          <SendIcon onClick={handleSend} />
        </IconButton>
      }
    />
  );
}
