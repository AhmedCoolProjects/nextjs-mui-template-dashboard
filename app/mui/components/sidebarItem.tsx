"use client";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarItem({
  href,
  Icon,
  title,
  sx,
}: {
  href: string;
  Icon: any;
  title: string;
  sx?: any;
}) {
  const pathname = usePathname();
  return (
    <Link href={href} passHref>
      <ListItem
        sx={{
          bgcolor: pathname === href ? "grey.100" : "inherit",
        }}
        disablePadding
      >
        <ListItemButton sx={sx}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default SidebarItem;
