"use client";

import { Badge, Button, Tooltip } from "@mui/material";
import { useState } from "react";
import { TbFilterPlus } from "react-icons/tb";
import FilterSetsDialog from "../dialogs/filterSets";

function FilterSetSample() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
            onClick={handleOpen}
          >
            Filter Sets
          </Button>
        </Badge>
      </Tooltip>
      <FilterSetsDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default FilterSetSample;
