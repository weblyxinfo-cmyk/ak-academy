"use server";

import { db } from "@/db";
import { cities } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCity(formData: FormData) {
  await db.insert(cities).values({
    slug: formData.get("slug") as string,
    name: formData.get("name") as string,
    nameLocativ: formData.get("nameLocativ") as string,
    locationIds: JSON.parse((formData.get("locationIds") as string) || "[]"),
    seoTitle: formData.get("seoTitle") as string,
    seoDescription: formData.get("seoDescription") as string,
    heroTitle: formData.get("heroTitle") as string,
    heroSubtitle: formData.get("heroSubtitle") as string,
    whyText: formData.get("whyText") as string,
    sortOrder: Number(formData.get("sortOrder") || 0),
  });

  revalidatePath("/", "layout");
  redirect("/admin/mesta");
}

export async function updateCity(slug: string, formData: FormData) {
  await db
    .update(cities)
    .set({
      name: formData.get("name") as string,
      nameLocativ: formData.get("nameLocativ") as string,
      locationIds: JSON.parse((formData.get("locationIds") as string) || "[]"),
      seoTitle: formData.get("seoTitle") as string,
      seoDescription: formData.get("seoDescription") as string,
      heroTitle: formData.get("heroTitle") as string,
      heroSubtitle: formData.get("heroSubtitle") as string,
      whyText: formData.get("whyText") as string,
      sortOrder: Number(formData.get("sortOrder") || 0),
    })
    .where(eq(cities.slug, slug));

  revalidatePath("/", "layout");
  redirect("/admin/mesta");
}

export async function deleteCity(slug: string) {
  await db.delete(cities).where(eq(cities.slug, slug));
  revalidatePath("/", "layout");
  redirect("/admin/mesta");
}
