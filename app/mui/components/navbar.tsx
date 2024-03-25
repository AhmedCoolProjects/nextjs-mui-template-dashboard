"use client";

import { IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import FilterSetSample from "./navbar/filterSetSample";
import ClustersSample from "./navbar/clustersSample";
import DateRangeSample from "./navbar/dateRangeSample";
import AccountSettingsSample from "./navbar/accountSettingsSample";
import UploadFileSample from "./navbar/uploadFileSample";
import SearchSample from "./navbar/searchSample";
import MobileSample from "./navbar/mobileSample";

const drawerWidth = 240;

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
        <h6 className="whitespace-nowrap text-xl font-medium">Jina Pro</h6>
        <SearchSample />
        <div className="md:flex hidden flex-row items-center flex-1 space-x-4 justify-end">
          <UploadFileSample />
          <DateRangeSample />
          <FilterSetSample />
          <ClustersSample />
          <AccountSettingsSample />
        </div>
        <div className="flex md:hidden flex-row flex-1 justify-end space-x-2 items-center">
          <AccountSettingsSample />
          <MobileSample>
            <div className="flex flex-col space-y-6 p-6">
              <UploadFileSample />
              <DateRangeSample />
              <div className="flex flex-row items-center space-x-6">
                <FilterSetSample />
                <ClustersSample />
              </div>
              <SearchSample className="flex" />
            </div>
          </MobileSample>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavbar;
