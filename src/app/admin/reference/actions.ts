"use server";

import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTestimonial(formData: FormData) {
  await db.insert(testimonials).values({
    name: formData.get("name") as string,
    course: formData.get("course") as string,
    rating: Number(formData.get("rating")),
    text: formData.get("text") as string,
    city: (formData.get("city") as string) || null,
    isVisible: formData.get("isVisible") === "on",
    sortOrder: Number(formData.get("sortOrder") || 0),
  });

  revalidatePath("/", "layout");
  redirect("/admin/reference");
}

export async function updateTestimonial(id: number, formData: FormData) {
  await db
    .update(testimonials)
    .set({
      name: formData.get("name") as string,
      course: formData.get("course") as string,
      rating: Number(formData.get("rating")),
      text: formData.get("text") as string,
      city: (formData.get("city") as string) || null,
      isVisible: formData.get("isVisible") === "on",
      sortOrder: Number(formData.get("sortOrder") || 0),
    })
    .where(eq(testimonials.id, id));

  revalidatePath("/", "layout");
  redirect("/admin/reference");
}

export async function deleteTestimonial(id: number) {
  await db.delete(testimonials).where(eq(testimonials.id, id));
  revalidatePath("/", "layout");
  redirect("/admin/reference");
}
