"use client";

import { Avatar, IconButton, Tooltip } from "@mui/material";
import AccountSetting from "../menus/accountSetting";
import { useState } from "react";

function AccountSettingsSample() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const accountSettingMenuOpen = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleOpen}
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
    </>
  );
}

export default AccountSettingsSample;
