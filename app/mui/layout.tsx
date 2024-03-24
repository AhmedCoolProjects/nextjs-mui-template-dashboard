"use client";

import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMenuUnfold as MenuIcon } from "react-icons/ai";
import { AiOutlineMenuFold as ChevronLeftIcon } from "react-icons/ai";
import { AiOutlineMenuFold as ChevronRightIcon } from "react-icons/ai";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InputBase } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";
import SidebarItem from "./components/sidebarItem";
import { GoCommentDiscussion } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiBarChartSquare } from "react-icons/bi";
import SidebarCollapseItem from "./components/sidebarCollapseItem";
import { IoBarChartSharp } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";
import { LuAreaChart } from "react-icons/lu";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open &&
      isDesktop && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
  };
});

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
      <AppBar color="info" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Jina Pro
          </Typography>
          <Search>
            <SearchIconWrapper>
              <IoSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
