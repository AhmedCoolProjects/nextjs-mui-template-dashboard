"use client";

import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";

function MobileSample({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer} size="large">
        <RxDropdownMenu color="#fff" />
      </IconButton>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "info.main",
            color: "white",
          },
        }}
        anchor="top"
        open={open}
        onClose={toggleDrawer}
      >
        {children}
      </Drawer>
    </>
  );
}

export default MobileSample;
