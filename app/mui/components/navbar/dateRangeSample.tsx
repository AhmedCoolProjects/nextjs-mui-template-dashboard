"use client";

import { cn } from "@/lib/utils";
import { Button } from "@mui/material";
import { addDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { LuCalendarSearch } from "react-icons/lu";
import DatePickerWithRange from "../dialogs/datetime";

function DateRangeSample() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
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
        onClick={handleOpen}
      >
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
            </>
          ) : (
            format(date.from, "LLL dd, y")
          )
        ) : (
          <span>Pick a date</span>
        )}
      </Button>

      <DatePickerWithRange
        className="w-96"
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
}

export default DateRangeSample;
