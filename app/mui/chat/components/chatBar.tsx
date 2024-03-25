"use client";

import {
  AppBar,
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
} from "@mui/material";
import { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import AccountPopover from "./accountPopover";

function ChatBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar
      color="secondary"
      className="rounded-full overflow-hidden h-14 flex flex-row items-center justify-between pr-3 "
      position="absolute"
    >
      <ListItem className="p-0" alignItems="center">
        <ListItemButton
          aria-describedby={id}
          //   @ts-ignore
          onClick={(e) => handleClick(e)}
          className="w-fit"
        >
          <ListItemAvatar>
            <Avatar alt="Ahmed Bargady" src="/logos/me.webp" />
          </ListItemAvatar>
          <ListItemText
            primary="Ahmed Bargady"
            secondary="Data Sientist, Full Stack Developer"
            secondaryTypographyProps={{
              className: "text-gray-300 text-xs",
            }}
          />
        </ListItemButton>
      </ListItem>
      <IconButton>
        <BiFoodMenu color="#fff" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <AccountPopover />
      </Popover>
    </AppBar>
  );
}

export default ChatBar;
