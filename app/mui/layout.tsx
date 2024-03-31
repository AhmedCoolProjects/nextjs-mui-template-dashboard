"use client";

import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMenuFold as ChevronLeftIcon } from "react-icons/ai";
import { AiOutlineMenuFold as ChevronRightIcon } from "react-icons/ai";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";

import { usePathname } from "next/navigation";
import SidebarItem from "./components/sidebarItem";
import { GoCommentDiscussion } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiBarChartSquare } from "react-icons/bi";
import SidebarCollapseItem from "./components/sidebarCollapseItem";
import { IoBarChartSharp } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";
import MuiNavbar from "./components/navbar";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: isDesktop ? `-${drawerWidth}px` : 0,
    ...(open &&
      isDesktop && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
  };
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MuiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const pathname = usePathname();

  const handleClick = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiNavbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isDesktop ? "persistent" : "temporary"}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <h2 className="mb-2 mt-1 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <SidebarItem href="/mui" Icon={RxDashboard} title="Dashboard" />
          <SidebarItem
            href="/mui/chat"
            Icon={GoCommentDiscussion}
            title="Chat"
          />
          <SidebarCollapseItem
            title="Charts"
            Icon={BiBarChartSquare}
            items={[
              {
                title: "Bar Chart",
                href: "/mui/charts/bar",
                Icon: IoBarChartSharp,
              },
              {
                title: "Line Chart",
                href: "/mui/charts/line",
                Icon: FaChartLine,
              },
              {
                title: "Other Charts",
                href: "/mui/charts/others",
                Icon: FiPieChart,
              },
              // {
              //   title: "Area Chart",
              //   href: "/mui/charts/area",
              //   Icon: LuAreaChart,
              // },
              // {
              //   title: "Scatter Chart",
              //   href: "/mui/charts/scatter",
              //   Icon: FiPieChart,
              // },
              // {
              //   title: "Radar Chart",
              //   href: "/mui/charts/radar",
              //   Icon: FiPieChart,
              // },
              // {
              //   title: "Polar Area Chart",
              //   href: "/mui/charts/polar-area",
              //   Icon: FiPieChart,
              // },
              // {
              //   title: "Doughnut Chart",
              //   href: "/mui/charts/doughnut",
              //   Icon: FiPieChart,
              // },
            ]}
          />
        </List>
        <Divider />
        <List>
          <h2 className="mb-2 mt-1 px-4 text-lg font-semibold tracking-tight">
            Discover 2
          </h2>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Link className="mt-auto mb-4" href="/settings" passHref>
          <ListItem
            className=" border overflow-hidden border-gray-200 w-11/12 mx-auto rounded-full"
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Link>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
