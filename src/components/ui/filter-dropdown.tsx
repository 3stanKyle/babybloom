import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const filters = [
  { value: "all", label: "All Items" },
  { value: "new", label: "New Items" },
  { value: "used", label: "Used Items" },
  { value: "free", label: "Free Items" },
  { value: "wishlist", label: "Wishlist" },
] as const;

export function FilterDropdown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("all");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-white"
        >
          {value
            ? filters.find((filter) => filter.value === value)?.label
            : "Select filter..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search filter..." />
          <CommandEmpty>No filter found.</CommandEmpty>
          <CommandGroup>
            {filters.map((filter) => (
              <CommandItem
                key={filter.value}
                value={filter.value}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === filter.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {filter.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}