import { db } from "@/db";
import { comparisonRows } from "@/db/schema";
import { asc } from "drizzle-orm";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ComparisonEditor } from "@/components/admin/ComparisonEditor";
import {
  createComparisonRow,
  updateComparisonRow,
  deleteComparisonRow,
} from "./actions";

export default async function ComparisonPage() {
  const rows = await db
    .select()
    .from(comparisonRows)
    .orderBy(asc(comparisonRows.sortOrder));

  return (
    <div>
      <AdminPageHeader title="Porovnání" />
      <ComparisonEditor
        rows={rows}
        onUpdate={updateComparisonRow}
        onDelete={deleteComparisonRow}
        onCreate={createComparisonRow}
      />
    </div>
  );
}
