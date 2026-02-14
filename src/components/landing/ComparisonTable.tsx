import { Check, X } from "lucide-react";
import type { ComparisonRow } from "@/types";

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-accent" />
    ) : (
      <X className="mx-auto h-5 w-5 text-gray-light" />
    );
  }
  return <span className="text-sm text-gray">{value}</span>;
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-4 pr-4 text-left text-sm font-medium text-gray" />
            <th className="px-4 py-4 text-center text-sm font-bold text-accent">
              AK Academy
            </th>
            <th className="px-4 py-4 text-center text-sm font-medium text-gray">
              Ostatní
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-border">
              <td className="py-4 pr-4 text-sm font-medium text-white">
                {row.feature}
              </td>
              <td className="px-4 py-4 text-center">
                <CellValue value={row.us} />
              </td>
              <td className="px-4 py-4 text-center">
                <CellValue value={row.others} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
