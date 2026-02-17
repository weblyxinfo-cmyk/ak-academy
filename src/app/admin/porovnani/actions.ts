"use server";

import { db } from "@/db";
import { comparisonRows } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createComparisonRow(formData: FormData) {
  await db.insert(comparisonRows).values({
    feature: formData.get("feature") as string,
    us: formData.get("us") as string,
    others: formData.get("others") as string,
    sortOrder: Number(formData.get("sortOrder") || 0),
  });
  revalidatePath("/", "layout");
}

export async function updateComparisonRow(id: number, formData: FormData) {
  await db
    .update(comparisonRows)
    .set({
      feature: formData.get("feature") as string,
      us: formData.get("us") as string,
      others: formData.get("others") as string,
      sortOrder: Number(formData.get("sortOrder") || 0),
    })
    .where(eq(comparisonRows.id, id));
  revalidatePath("/", "layout");
}

export async function deleteComparisonRow(id: number) {
  await db.delete(comparisonRows).where(eq(comparisonRows.id, id));
  revalidatePath("/", "layout");
}
