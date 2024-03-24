"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover } from "@mui/material";

export default function DatePickerWithRange({
  className,
  open,
  anchorEl,
  handleClose,
}: {
  className?: string;
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <Popover
      id="id-date"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    </Popover>
  );
}
