"use client";

import {
  Avatar,
  Badge,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { IoSearch } from "react-icons/io5";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import AccountSetting from "./menus/accountSetting";
import { useState } from "react";
import ClustersDialog from "./dialogs/clusters";
import { MdOutlineCloudUpload } from "react-icons/md";
import { TbFilterPlus } from "react-icons/tb";
import { AiOutlineCluster } from "react-icons/ai";
import FilterSetsDialog from "./dialogs/filterSets";
import { cn } from "@/lib/utils";
import { LuCalendarSearch } from "react-icons/lu";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import DatePickerWithRange from "./dialogs/datetime";

const drawerWidth = 240;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
    right: 6,
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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

function MuiNavbar({
  open,
  handleDrawerOpen,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [clustersDialogOpen, setClustersDialogOpen] = useState(false);
  const [filterSetsDialogOpen, setFilterSetsDialogOpen] = useState(false);
  const accountSettingMenuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpenClustersDialog = () => {
    setClustersDialogOpen(true);
  };
  const handleCloseClustersDialog = () => {
    setClustersDialogOpen(false);
  };
  const handleClickOpenFilterSetsDialog = () => {
    setFilterSetsDialogOpen(true);
  };
  const handleCloseFilterSetsDialog = () => {
    setFilterSetsDialogOpen(false);
  };

  const [openDateTimeDialog, setOpenDateTimeDialog] = useState(false);
  const [anchorElTimeDate, setAnchorElTimeDate] = useState<null | HTMLElement>(
    null
  );
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const handleClickDateTime = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTimeDate(event.currentTarget);
    setOpenDateTimeDialog(true);
  };
  const handleCloseDateTime = () => {
    setAnchorElTimeDate(null);
    setOpenDateTimeDialog(false);
  };

  return (
    <AppBar color="info" position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <AiOutlineMenuUnfold />
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
        <div className="flex flex-row items-center flex-1 space-x-4 justify-end">
          <Tooltip title="Upload new file">
            <Button
              component="label"
              className="capitalize border-none rounded-full"
              sx={{
                height: 32,
              }}
              role={undefined}
              size="small"
              color="inherit"
              variant="outlined"
              tabIndex={-1}
              startIcon={<MdOutlineCloudUpload />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Tooltip>
          <Button
            id="date"
            className={cn(
              " justify-start capitalize text-left rounded-full font-normal",
              !date && "text-muted-foreground"
            )}
            sx={{
              height: 32,
            }}
            variant="outlined"
            size="small"
            color="inherit"
            startIcon={<LuCalendarSearch />}
            onClick={handleClickDateTime}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
          <Tooltip title="Select filter sets">
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  right: 2,
                },
              }}
              badgeContent={4}
              color="primary"
            >
              <Button
                className="capitalize rounded-full"
                sx={{
                  height: 32,
                }}
                variant="outlined"
                size="small"
                color="inherit"
                startIcon={<TbFilterPlus />}
                onClick={handleClickOpenFilterSetsDialog}
              >
                Filter Sets
              </Button>
            </Badge>
          </Tooltip>
          <Tooltip title="2 Clusters, 7 Sensors">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Button
                className="capitalize rounded-full"
                sx={{
                  height: 32,
                }}
                variant="outlined"
                size="small"
                color="inherit"
                onClick={handleClickOpenClustersDialog}
                startIcon={<AiOutlineCluster />}
              >
                Clusters
              </Button>
            </StyledBadge>
          </Tooltip>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
          <AccountSetting
            anchorEl={anchorEl}
            open={accountSettingMenuOpen}
            handleClose={handleClose}
          />
          <ClustersDialog
            open={clustersDialogOpen}
            handleClose={handleCloseClustersDialog}
          />
          <FilterSetsDialog
            open={filterSetsDialogOpen}
            handleClose={handleCloseFilterSetsDialog}
          />
          <DatePickerWithRange
            className="w-96"
            open={openDateTimeDialog}
            anchorEl={anchorElTimeDate}
            handleClose={handleCloseDateTime}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavbar;
