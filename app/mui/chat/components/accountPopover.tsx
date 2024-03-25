"use client";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function AccountPopover() {
  return (
    <div className="p-6 md:p-4 flex flex-col md:flex-row ">
      <div className="flex text-center flex-col w-full md:w-[300px] items-center">
        <Avatar
          className="w-24 h-24"
          alt="Ahmed Bargady"
          src="/logos/me.webp"
        />
        <h1 className="text-xl mt-3 font-semibold">Ahmed Bargady</h1>
        <span className="mt-2">
          Full Stack Developer since 2018, Data Scientist since 2023
        </span>
      </div>
      <Divider className="flex md:hidden" sx={{ my: 2 }} />
      <Divider
        orientation="vertical"
        className="hidden md:flex"
        flexItem
        sx={{ mx: 2 }}
      />
      <List>
        <ListItem
          className="min-w-[360px]"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <MdOutlineContentCopy />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <IoMailOutline />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="ahmed.bargady@outlook.com" />
        </ListItem>
        <ListItem
          className="min-w-[360px]"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <MdOutlineContentCopy />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <CiPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="0612345678" />
        </ListItem>
        <ListItem
          className="min-w-[360px]"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <MdOutlineContentCopy />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FiLinkedin />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="@ahmed-bargady" />
        </ListItem>
        <ListItem
          className="min-w-[360px]"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <MdOutlineContentCopy />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FiGithub />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="@AhmedCoolProjects" />
        </ListItem>
      </List>
    </div>
  );
}

export default AccountPopover;
