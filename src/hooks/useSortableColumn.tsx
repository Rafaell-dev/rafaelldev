import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { type Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface UseSortableColumnProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function useSortableColumn<TData, TValue>({
  column,
  title,
}: UseSortableColumnProps<TData, TValue>) {
  const getSortIcon = () => {
    const sorted = column.getIsSorted();
    if (sorted === "asc") return <ArrowUp className="ml-2 h-4 w-4" />;
    if (sorted === "desc") return <ArrowDown className="ml-2 h-4 w-4" />;
    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  const SortableHeader = () => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="h-auto p-0 font-medium text-left"
    >
      {title}
      {getSortIcon()}
    </Button>
  );

  return { SortableHeader };
}
