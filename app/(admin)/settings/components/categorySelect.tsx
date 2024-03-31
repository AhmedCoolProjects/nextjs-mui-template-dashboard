"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPTIONS } from "../data/businesscCategory";

function CategorySelect() {
  return (
    <Select defaultValue={OPTIONS[1].value}>
      <SelectTrigger>
        <SelectValue placeholder="Select a verified email to display" />
      </SelectTrigger>
      <SelectContent>
        {OPTIONS.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CategorySelect;
