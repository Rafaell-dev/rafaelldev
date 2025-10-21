// components/ui/data-table-responsive.tsx
"use client";

import * as React from "react";
import { DataTable } from "./data-table";
import { type DataTableProps } from "@/types/table";

interface ResponsiveDataTableProps<TData, TValue> 
  extends Omit<DataTableProps<TData, TValue>, 'height'> {
  minHeight?: string;
  maxHeight?: string;
  fullHeight?: boolean;
}

export function ResponsiveDataTable<TData, TValue>({
  minHeight = "400px",
  maxHeight = "calc(100vh - 200px)",
  fullHeight = false,
  ...props
}: ResponsiveDataTableProps<TData, TValue>) {
  const [containerHeight, setContainerHeight] = React.useState<string>(minHeight);

  React.useEffect(() => {
    if (fullHeight) {
      const updateHeight = () => {
        const availableHeight = window.innerHeight - 200;
        setContainerHeight(`${availableHeight}px`);
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [fullHeight]);

  const height = fullHeight ? containerHeight : `clamp(${minHeight}, ${maxHeight}, ${maxHeight})`;

  return <DataTable {...props} height={height} />;
}
