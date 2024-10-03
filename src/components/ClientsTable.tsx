import * as React from "react";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // O la ruta donde tengas estos componentes

// Nueva estructura de datos
const data: ClientPayment[] = [
  {
    clientName: "Raymundo Sanchez",
    folioDate: "2024-10-01",
    folioId: "m5gr84i9",
    registered: "success",
  },
  {
    clientName: "Abe Gonzales",
    folioDate: "2024-10-02",
    folioId: "3u1reuv4",
    registered: "success",
  },
  {
    clientName: "Monserrat Ruiz",
    folioDate: "2024-10-03",
    folioId: "derv1ws0",
    registered: "processing",
  },
  {
    clientName: "Silas Martinez",
    folioDate: "2024-10-04",
    folioId: "5kma53ae",
    registered: "success",
  },
  {
    clientName: "Carmella Lopez",
    folioDate: "2024-10-05",
    folioId: "bhqecj4p",
    registered: "failed",
  },
];

export type ClientPayment = {
  clientName: string;
  folioDate: string; // Formato YYYY-MM-DD
  folioId: string;
  registered: "pending" | "processing" | "success" | "failed";
};

const columns: ColumnDef<ClientPayment>[] = [
  {
    accessorKey: "clientName",
    header: "Nombre de Cliente",
    cell: ({ row }) => <div>{row.getValue("clientName")}</div>,
  },
  {
    accessorKey: "folioDate",
    header: "Fecha de Folio",
    cell: ({ row }) => <div>{row.getValue("folioDate")}</div>,
  },
  {
    accessorKey: "folioId",
    header: "Folio SAC",
    cell: ({ row }) => <div>{row.getValue("folioId")}</div>,
  },
  {
    accessorKey: "registered",
    header: "Registrado",
    cell: ({ row }) => <div>{row.getValue("registered")}</div>,
  },
  {
    id: "options",
    header: "Options",
    cell: () => <button className="text-blue-500">Options</button>,
  },
  {
    id: "details",
    header: "Details",
    cell: () => <button className="text-blue-500">Details</button>,
  },
];

export default function ClientsTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.columnDef.cell?.(cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
