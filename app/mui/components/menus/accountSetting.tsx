import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function AccountSetting({
  anchorEl,
  open,
  handleClose,
}: {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem className="text-sm" onClick={handleClose}>
        <ListItemIcon>
          <IoPersonAddOutline fontSize="18px" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem className="text-sm" onClick={handleClose}>
        <ListItemIcon>
          <IoSettingsOutline fontSize="18px" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem className="text-sm" onClick={handleClose}>
        <ListItemIcon>
          <IoIosLogOut fontSize="18px" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default AccountSetting;
