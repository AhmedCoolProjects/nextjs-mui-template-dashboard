"use client";

import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Popover,
} from "@mui/material";
import { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import ChatBarAccount from "./chatBarAccount";
import { RiUserSearchLine } from "react-icons/ri";

function ChatBar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar
        color="secondary"
        className="rounded-full overflow-hidden h-14 flex flex-row items-center justify-between pr-3 "
        position="absolute"
      >
        <ChatBarAccount />
        <IconButton onClick={toggleDrawer}>
          <BiFoodMenu color="#fff" />
        </IconButton>
      </AppBar>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 350,
          },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        // PaperProps={{ style: { position: "absolute" } }}
        // slotProps={{
        //   backdrop: { style: { position: "absolute" } },
        // }}
        // ModalProps={{
        //   container: document.getElementById("drawer-container"),
        //   style: { position: "absolute" },
        // }}
      >
        <div className="w-full flex flex-col p-4">
          <OutlinedInput
            placeholder="Search..."
            fullWidth
            startAdornment={
              <IconButton>
                <RiUserSearchLine />
              </IconButton>
            }
          />
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              mt: 1,
              bgcolor: "background.paper",
            }}
          >
            <ListItemButton sx={{ p: 0, position: "relative" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Ahmed Bargady" src="/logos/me.webp" />
                </ListItemAvatar>
                <ListItemText primary="Ahmed Bargady" secondary="Bye!" />
                <span className="absolute right-2 bottom-4 text-xs">
                  12:00 PM
                </span>
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ p: 0, position: "relative" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Ahmed Bargady" src="/icons/how_to.png" />
                </ListItemAvatar>
                <ListItemText primary="Ahmed Bargady 2" secondary="Bye!" />
                <span className="absolute right-2 bottom-4 text-xs">
                  12:00 PM
                </span>
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ p: 0, position: "relative" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Ahmed Bargady 3" src="/icons/explain.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Ahmed Bargady"
                  secondary="jklfdsjlfkjs sdljfsd fsd jfklsdf fdsjkj flsjfds f sjfkldsjf !"
                  secondaryTypographyProps={{
                    className: "text-overflow-ellipsis",
                    width: "70%",
                  }}
                />
                <span className="absolute right-2 bottom-4 text-xs">
                  12:00 PM
                </span>
              </ListItem>
            </ListItemButton>
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default ChatBar;
