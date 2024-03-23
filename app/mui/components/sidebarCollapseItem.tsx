"use client";

import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import SidebarItem from "./sidebarItem";

function SidebarCollapseItem({
  title,
  Icon,
  items,
}: {
  title: string;
  Icon: any;
  items: {
    title: string;
    href: string;
    Icon: any;
  }[];
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </ListItemButton>
      <ListCollapseItems open={open} items={items} />
    </>
  );
}

export default SidebarCollapseItem;

function ListCollapseItems({
  open,
  items,
}: {
  open: boolean;
  items: {
    title: string;
    href: string;
    Icon: any;
  }[];
}) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map(({ href, title, Icon }, index) => (
          <SidebarItem sx={{ pl: 4 }} href={href} title={title} Icon={Icon} />
        ))}
      </List>
    </Collapse>
  );
}
