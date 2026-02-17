"use server";

import { db } from "@/db";
import { locations } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createLocation(formData: FormData) {
  await db.insert(locations).values({
    id: formData.get("id") as string,
    city: formData.get("city") as string,
    address: formData.get("address") as string,
    zip: formData.get("zip") as string,
    transport: (formData.get("transport") as string) || null,
    isMain: formData.get("isMain") === "on",
    sortOrder: Number(formData.get("sortOrder") || 0),
  });

  revalidatePath("/", "layout");
  redirect("/admin/lokace");
}

export async function updateLocation(id: string, formData: FormData) {
  await db
    .update(locations)
    .set({
      city: formData.get("city") as string,
      address: formData.get("address") as string,
      zip: formData.get("zip") as string,
      transport: (formData.get("transport") as string) || null,
      isMain: formData.get("isMain") === "on",
      sortOrder: Number(formData.get("sortOrder") || 0),
    })
    .where(eq(locations.id, id));

  revalidatePath("/", "layout");
  redirect("/admin/lokace");
}

export async function deleteLocation(id: string) {
  await db.delete(locations).where(eq(locations.id, id));
  revalidatePath("/", "layout");
  redirect("/admin/lokace");
}
