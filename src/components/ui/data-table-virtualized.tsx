"use client";

import * as React from "react";
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { DataTableProps } from "@/types/table";
import { DataTableToolbar } from "./data-table-toolbar";
import { cn } from "@/lib/utils";

interface VirtualizedDataTableProps<TData, TValue> 
  extends Omit<DataTableProps<TData, TValue>, 'showPagination' | 'pageSize'> {
  height?: string;
  rowHeight?: number;
}

export function VirtualizedDataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Buscar...",
  showSearch = true,
  showColumnToggle = true,
  height = "600px",
  rowHeight = 50,
  className,
}: VirtualizedDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => rowHeight,
    overscan: 10,
  });

  return (
    <div className={cn("flex flex-col", className)} style={{ height }}>
      {(showSearch || showColumnToggle) && (
        <div className="flex-shrink-0 mb-4">
          <DataTableToolbar
            table={table}
            searchKey={searchKey}
            searchPlaceholder={searchPlaceholder}
            showSearch={showSearch}
            showColumnToggle={showColumnToggle}
          />
        </div>
      )}
      
      <div className="flex-1 rounded-md border overflow-hidden flex flex-col">
        <div className="flex-shrink-0 bg-muted/50 border-b">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
          </Table>
        </div>
        
        <div
          ref={tableContainerRef}
          className="flex-1 overflow-auto"
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index];
              return (
                <div
                  key={row.id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <Table>
                    <TableBody>
                      <TableRow data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id} className="py-3">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
