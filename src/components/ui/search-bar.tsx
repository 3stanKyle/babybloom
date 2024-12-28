import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <Input
        type="search"
        placeholder="Search for baby products..."
        className="pl-10 pr-4 h-12 rounded-full border-2 border-gray-200 focus:border-primary"
      />
    </div>
  );
}